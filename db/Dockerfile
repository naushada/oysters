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
    
RUN apt-get update
RUN apt-get -y upgrade
RUN apt-get -y install libboost-all-dev
RUN apt-get -y install libbson-dev
RUN apt-get -y install libzstd-dev
RUN apt-get -y install git
RUN apt-get -y install vim
RUN apt-get -y install dirmngr gnupg apt-transport-https ca-certificates software-properties-common


RUN wget -qO - https://www.mongodb.org/static/pgp/server-6.0.asc | apt-key add -
RUN echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/6.0 multiverse" | tee /etc/apt/sources.list.d/mongodb-org-6.0.list

RUN apt-get update
RUN apt-get -y install mongodb-org


# Define mountable directories.
VOLUME ["/data/db"]

# Expose ports.
#   - 27017: process
#   - 28017: http
EXPOSE 27017
EXPOSE 28017
# Define working directory.
WORKDIR /data

# Define default command.
CMD ["mongod", "--bind_ip", "127.0.0.1"]