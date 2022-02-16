const express = require('express');
const { engine } = require('express-handlebars');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();

app.set('view engine', 'hbs');

app.engine('hbs', engine({
  defaultLayout: 'main',
  extname: '.hbs',
  partialsDir: path.join(__dirname, 'views/partials'),
  layoutsDir: path.join(__dirname, 'views/layouts')
}));

//app.engine('handlebars', engine())
//app.set('view engine', 'handlebars')

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => {
  console.log(`server started on port: ${port}`);
});

app.get('/', (req, res) => {
  res.render('home');
});
