# Set node version, maintainer and NODE_ENV.
FROM node:19.0.0
ENV NODE_ENV=production
LABEL maintainer="Finn LR"

# Set working directory.
WORKDIR /app

# Copy package to the /app directory.
COPY ["package.json", "package-lock.json*", "./"]

# Run install
RUN npm install --production

# Copy the rest of the files.
COPY . .
# Run command.
CMD [ "node", "proof.js" ]