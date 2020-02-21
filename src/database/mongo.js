// ./src/database/mongo.js
const {MongoMemoryServer} = require('mongodb-memory-server');
const {MongoClient} = require('mongodb');
import { MongoMemoryServer } from 'mongodb-memory-server';
const mongod = new MongoMemoryServer();

let database = null;

async function startDatabase() {

    const uri = await mongod.getUri();
    const port = await mongod.getPort();
    const dbPath = await mongod.getDbPath();
    const dbName = await mongod.getDbName();

    mongod.getInstanceInfo();
    await mongod.stop();
    mongod.getInstanceInfo();
    database = connection.db();
}

async function getDatabase() {
    if (!database) await startDatabase();
    return database;
}

module.exports = {
    getDatabase,
    startDatabase,
};



