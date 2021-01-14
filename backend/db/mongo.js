const {
    MongoMemoryServer,
    MongoMemoryReplSet,
} = require('mongodb-memory-server')
const { MongoClient } = require('mongodb')

let db = null

const startDatabase = async () => {
    const mongo = new MongoMemoryServer()
    const mongoDBURL = await mongo.getUri()
    const connection = await MongoClient.connect(mongoDBURL, {
        useNewUrlParser: true,
    })

    db = connection.db()
}

const getDatabase = async () => {
    if (!db) await startDatabase()
    return db
}

module.exports = {
    getDatabase,
    startDatabase,
}
