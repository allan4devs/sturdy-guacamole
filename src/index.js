// ./src/index.js

// ... leave the other require statements untouched ...
const {startDatabase} = require('./src/database/mongo.js');
const {insertAd, getAds} = require('./src/database/ads.js');

// ... leave the app definition and the middleware config untouched ...

// replace the endpoint responsible for the GET requests
app.get('/', async (req, res) => {
    res.send(await getAds());
});

// start the in-memory MongoDB instance
startDatabase().then(async () => {
    await insertAd({title: 'Hello, now from the in-memory database!'});

    // start the server
    app.listen(3001, async () => {
        console.log('listening on port 3001');
    });
});
