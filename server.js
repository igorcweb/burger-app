import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;
import exphbs from 'express-handlebars';
import routes from './controllers/burgersController';
import apiRoutes from './controllers/apiBurgersController';

app.use(express.static('public'));

app.use(express.json());
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));

app.set('view engine', 'handlebars');

app.use(routes);
app.use(apiRoutes);

app.listen(PORT, () => {
  console.log('burger app is listening on port', PORT);
});
