// code credit to Bro. Birch, I typed it in manually rather than copy-paste, as that sometimes
// helps me understand what the code is doing

const dotenv = require('dotenv');
dotenv.config();
const MongoClient = require('mongodb').MongoClient;

let _db;

const initDb = (callback) => {
    if (_db) {
        console.log('Db is initialized')
        return callback(null, _db);
    }
    MongoClient.connect(process.env.MONGODB_URI)
        .then((client) => {
            _db = client;
            callback(null, _db);
        })
        .catch((err) => {
            callback(err);
        });
};

const getDb = () => {
    if (!_db) {
        throw Error('Db is not initialized')
    }
    return _db;
};

module.exports = {
    initDb,
    getDb,
};