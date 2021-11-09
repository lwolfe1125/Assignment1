
# Choosing a base image
FROM node:latest

# copy your application files
# to the /usr/app directory inside the container
WORKDIR /.
COPY . .
COPY package*.json ./

# build your project
ENV NODE_ENV production
RUN npm run build

# here we go
CMD [ "npm", "start" ]