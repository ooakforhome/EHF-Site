FROM node:8

# Create app directory
WORKDIR /client/public/index

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

EXPOSE 8080
CMD [ "npm", "start" ]

# https://nodejs.org/en/docs/guides/nodejs-docker-webapp/

# $ docker build -t <your username>/node-web-app .
# $ docker run -p 49160:8080 -d <your username>/node-web-app


# FROM, CMD, ENTRYPOINT, VOLUME, ENV
# If not specified, the default escape character is \
#CMD ["executable", "param1", "param2"]
# $ docker run -it {image name} /bin/shFROM ubuntu

# //========build dockerfile=================
#  MAINTAINER Romin Irani (email@domain.com)
#  RUN apt-get update
#  RUN apt-get install -y nginx
#  ENTRYPOINT [“/usr/sbin/nginx”,”-g”,”daemon off;”]
#  EXPOSE 80

# //===========run docker====================
# docker run -d -p 8080:8080 --name webserver {image name}

# //==========comment======================
FROM ubuntu:15.04 # creates a layer from the ubuntu:15.04 Docker image.
COPY . /app # adds files from your Docker client’s current directory.
RUN make /app # builds your application with make.
CMD node /app/app.js # specifies what command to run within the container.
