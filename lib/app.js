const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

// Built in middleware
app.use(express.json());
app.use(cookieParser());

// App routes
app.use('/api/v1/users', require('./controllers/users'));
app.use('/api/v1/achievements', require('./controllers/achievements'));
app.use('/api/v1/magicA', require('./controllers/magicTables/magicA'));
app.use('/api/v1/magicB', require('./controllers/magicTables/magicB'));
app.use('/api/v1/magicC', require('./controllers/magicTables/magicC'));
app.use('/api/v1/magicD', require('./controllers/magicTables/magicD'));
app.use('/api/v1/magicE', require('./controllers/magicTables/magicE'));
app.use('/api/v1/magicF', require('./controllers/magicTables/magicF'));
app.use('/api/v1/magicG', require('./controllers/magicTables/magicG'));
app.use('/api/v1/magicH', require('./controllers/magicTables/magicH'));
app.use('/api/v1/magicI', require('./controllers/magicTables/magicI'));
// app.use('/api/v1/magica', require('./controllers/magicTables/magicAs'));
// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
