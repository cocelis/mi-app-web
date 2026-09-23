<<<<<<< HEAD
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('¡Hola Morro! Tu contenedor de Docker está funcionando perfectamente. 🐳');
});

app.listen(port, () => {
  console.log(`La aplicación está escuchando en el puerto ${port}`);
});
=======
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('¡Hola! Tu contenedor de Docker está funcionando perfectamente. 🐳');
});

app.listen(port, () => {
  console.log(`La aplicación está escuchando en el puerto ${port}`);
});
>>>>>>> 615fb298a7c1528ed39f476bd0ee2d269485e1fe
