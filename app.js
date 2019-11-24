const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const pageNotFoundController = require('./controllers/404');

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

7app.use(pageNotFoundController.getPageNotFound);

app.listen(3000);
