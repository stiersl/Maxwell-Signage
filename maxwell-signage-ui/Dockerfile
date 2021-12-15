## start with the bullseeye inage to build the app.
FROM node:lts-bullseye as build
# create a directory to hold the app
RUN mkdir -p /app
WORKDIR /app
# copy the package.json and package-lock.json files for building depenancies
COPY package*.json /app/
# install all the dependancies to node_modules
RUN npm install
# copy all the contents from the root directory images app directory
COPY . /app
# Build the application -- puts this in /app/dist/pg-nextactivites-app
RUN npm run build
# Create the deployed Image to hold the build.- Ngix - web server
FROM nginx:1.17.1-alpine as prod
COPY /certs /usr/local/nginx/conf
COPY nginx.conf /etc/nginx/nginx.conf
# move the app
COPY --from=build /app/dist/maxwell-signage /usr/share/nginx/html