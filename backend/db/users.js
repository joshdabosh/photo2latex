const { getDatabase } = require('./mongo')

const collectionName = 'users'

const insertUser = async (user) => {
    const db = await getDatabase()
    const { insertedId } = await db.collection('accounts').insertOne(user)
    return insertedId
}

const getUser = async (username, password) => {
    const db = await getDatabase()
    return await db
        .collection('accounts')
        .find({
            name: {
                $eq: username,
            }
        })
        .toArray()
}

const checkUsernameAvailable = async (username) => {
    const db = await getDatabase()

    return (
        (
            await db
                .collection('accounts')
                .find({ name: { $eq: username } })
                .toArray()
        ).length == 0
    )
}

const getAllUsers = async (username) => {
    const db = await getDatabase()
    return await db.collection('accounts').find({}).toArray()
}

module.exports = {
    insertUser,
    getUser,
    getAllUsers,
    checkUsernameAvailable,
}
