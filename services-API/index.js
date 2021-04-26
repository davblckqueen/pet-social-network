'use strict';

const path = require('path');
const http = require('http');

const oas3Tools = require('oas3-tools');
const serverPort = process.env.PORT || 8080;

// Dependencies
const cors = require('cors');
const mongoose = require('mongoose');

// swaggerRouter configuration
const options = {
    routing: {
        controllers: path.join(__dirname, './controllers')
    },
};

const expressAppConfig = oas3Tools.expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);
const app = expressAppConfig.getApp();

// Initialize the Swagger middleware
http.createServer(app).listen(serverPort, async () => {
    await mongoose.connect(process.env.MONGO_URL+"?ssl=true&replicaSet=globaldb", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        retryWrites: false
    })
        .then(() => console.log('Connection to MongoAtlas successful'))
        .catch((err) => console.error(err));
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
});

