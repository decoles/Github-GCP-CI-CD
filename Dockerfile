# Use the latest LTS version of Node.js
FROM node:18 

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install
RUN git config --system credential.helper gcloud.sh
# Bundle app source
COPY . .

EXPOSE 80

CMD [ "node", "jsonrun.js" ]
