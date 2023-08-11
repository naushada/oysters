FROM ubuntu:focal
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

RUN apt-get update
RUN apt-get -y upgrade 

 RUN apt-get install -y libbson-dev \
    libzstd-dev \
    git \
    vim \
    dirmngr \
    gnupg \
    apt-transport-https \
    ca-certificates \
    software-properties-common

# importing the Mongo DB Public key
RUN wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | apt-key add -
RUN echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-6.0.list
WORKDIR /tmp
RUN wget http://archive.ubuntu.com/ubuntu/pool/main/o/openssl/libssl1.1_1.1.1f-1ubuntu2_amd64.deb
RUN chmod +x libssl1.1_1.1.1f-1ubuntu2_amd64.deb

RUN apt-get update
RUN apt-get -y install mongodb-org

# Define working directory.
WORKDIR /data
# Expose ports.
#   - 27017: process
#   - 28017: http
EXPOSE 27017
EXPOSE 28017
# mongod --version --- this will give the version of mongod
# Define mountable directories.
VOLUME ["/data/db"]
 
# Define default command.
CMD ["mongod", "--bind_ip", "127.0.0.1"]