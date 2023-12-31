FROM ubuntu:jammy
ENV TZ=Asia/Calcutta
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone
RUN apt-get update && DEBIAN_FRONTEND=noninteractive apt-get -y upgrade
RUN apt-get install -y --no-install-recommends \
    ca-cacert \
    cmake \
    build-essential \
    libboost-all-dev \
    libssl-dev \
    wget \
    zlib1g-dev

RUN apt-get update && \
    apt-get -y upgrade && \
    apt-get -y install libboost-all-dev && \
    apt-get -y install libbson-dev && \
    apt-get -y install libzstd-dev && \
    apt-get -y install git

# Building openssl 3.1.1
RUN git clone -b openssl-3.1.1 https://github.com/naushada/openssl.git

RUN cd openssl && \
    gunzip openssl-3.1.1.tar.gz && \
    tar -xvf openssl-3.1.1.tar && \
    cd openssl-3.1.1 && \
    ./config --prefix=/usr/local/openssl-3.1.1 && \
    make && make install

# RUN openssl req -newkey rsa:4096  -x509  -sha512  -days 365 -nodes -out /opt/xAPP/cert/cert.pem -keyout /opt/xAPP/cert/key.pem

WORKDIR /root/mongo-c
# #RUN apt-get -y install mongodb-server-core
RUN git clone -b r1.19 https://github.com/mongodb/mongo-c-driver.git

RUN cd mongo-c-driver
WORKDIR /root/mongo-c/mongo-c-driver/build
RUN cmake .. && \
    make && make install

WORKDIR /root/mongo-cxx
RUN git clone -b releases/v3.6 https://github.com/mongodb/mongo-cxx-driver.git
RUN cd mongo-cxx-driver

WORKDIR /root/mongo-cxx/mongo-cxx-driver/build
RUN cmake .. -DBSONCXX_POLY_USE_MNMLSTC=1 -DCMAKE_BUILD_TYPE=Release -DCMAKE_INSTALL_PREFIX=/usr/local
RUN make && make install
RUN ldconfig

WORKDIR /root
RUN git clone https://github.com/google/googletest/
WORKDIR /root/googletest
RUN mkdir build && cd build && cmake .. && make install
RUN ldconfig
WORKDIR /root

RUN git clone https://github.com/naushada/oysters.git
RUN cd oysters && \
    mkdir build
WORKDIR /root/oysters/build
RUN cmake .. && make

#node installation
RUN apt-get -y update && \
    apt-get -y upgrade

########## installing dependencies node_module ######################
RUN apt-get -y install curl && \
    curl -sL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get -y install nodejs && \
    npm install -g @angular/cli && \
    npm install @clr/core @clr/icons @clr/angular @clr/ui @webcomponents/webcomponentsjs --save


#RUN mkdir webclient && cd webclient

#WORKDIR /root/webclient
#RUN git  clone https://github.com/naushada/oysters.git
#RUN cd oysters/ui
#WORKDIR /root/webclient/oysters/ui/src

# RUN npm install
#RUN npm update

##### Compile the Angular webgui #################

# WORKDIR /root/webclient/webui

WORKDIR /root/oysters/ui/Oysters
RUN npm install
RUN ng build --configuration production --aot --base-href /webui/

RUN cd /opt && \
    mkdir xAPP && \
    cd xAPP && \
    mkdir webgui && \
    cd webgui
WORKDIR /opt/xAPP/webgui
RUN cp -r /root/oysters/ui/Oysters/dist/oysters .

WORKDIR /opt/xAPP
RUN mkdir uniimage && \
    cd uniimage
WORKDIR /opt/xAPP/uniimage

# copy from previoud build stage
RUN cp /root/oysters/build/uniimage .

ENV ARGS="--role server --server-port 58989  --protocol tcp --mongodb-uri mongodb+srv://oysters:oysters123@cluster0.acpda.mongodb.net/oysters?maxPoolSize=50"
ENV PORT=58080
CMD "/opt/xAPP/uniimage/uniimage" --web-port ${PORT} ${ARGS}
