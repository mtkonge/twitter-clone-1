const mongodb = require('mongodb');

class Database {

}

class MongoDB {
    constructor (uri = undefined) {
        this.uri = uri;
        this.db = undefined;
    }

    async connect(uri = this.uri) {
        const client = new mongodb.MongoClient(uri);
        await client.connect();
        this.db = client.db('twitter-clone-1');
        return this;
    }
}


module.exports = {
    Database,
    MongoDB,
};
