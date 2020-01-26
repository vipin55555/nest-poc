export default {

    app: {
        name: 'Nest POC',
        version: '1.0.0',
        apiVersion: 'v1',
    },

    db: {
        dbName: 'nest-poc-db',
        connectionString: 'mongodb://127.0.0.1:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false'

    }
};