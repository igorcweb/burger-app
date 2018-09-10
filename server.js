import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;
import exphbs from 'express-handlebars';
import routes from './controllers/burgersController';
import apiRoutes from './controllers/apiBurgersController';

app.use(express.static('public'));

//Express native body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine(
  'handlebars',
  exphbs({
    defaultLayout: 'main',
    helpers: {
      math: function(lvalue, operator, rvalue) {
        lvalue = parseFloat(lvalue);
        rvalue = parseFloat(rvalue);
        return {
          '+': lvalue + rvalue
        }[operator];
      }
    }
  })
);

app.set('view engine', 'handlebars');

app.use(routes);
app.use('/api/burgers', apiRoutes);

app.listen(PORT, () => {
  console.log('burger app is listening on port', PORT);
});
