# Use the official image as a parent image.
FROM mcr.microsoft.com/devcontainers/base:ubuntu

# Set the Node.js version to install
ARG NODE_VERSION=20
ENV NVM_DIR=/usr/local/nvm

# Install Node.js
RUN apt-get update \
  && apt-get install -y curl gnupg \
  && curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash \
  && source $NVM_DIR/nvm.sh \
  && nvm install $NODE_VERSION \
  && nvm alias default $NODE_VERSION \
  && nvm use default \
  && npm install -g npm

# Install dependencies
COPY app/package*.json /app/

# Set working directory
WORKDIR /app

# Expose the port that the app runs in
EXPOSE 3000

# Start the app
CMD ["npm", "run", "dev"]
