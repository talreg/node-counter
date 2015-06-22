FROM ubuntu:14.04
RUN sudo apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup | sudo bash
RUN sudo apt-get install -y nodejs
COPY . /src
RUN cd /src; npm install
WORKDIR /src
EXPOSE 3000
CMD ["npm","start"]
