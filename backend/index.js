const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { json, Router } = require('express');
const { authApiRouter } = require('./api/auth');
const { MongoDB } = require('./database');
require('dotenv').config();

const PORT = 8000;

const api = (db) => {
    const router = Router();
    router.use('/auth', authApiRouter(db))
    return router;
}

const main = async () => {
    const app = express();
    app.use(cors());
    app.use(json());
    app.use(cookieParser());
    const db = new MongoDB('mongodb://localhost:27017');
    await db.connect();
    app.use('/api', api(db));
    app.listen(PORT, console.log('Backend on port', PORT));
}

main().catch(e => console.error(e));
