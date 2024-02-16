// app.js
import express from 'express';
import path from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

// Indica a Express que la carpeta 'public' contendrá archivos estáticos
// app.use('/static', express.static(path.join(__dirname, 'static')));
// app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send('¡Backend funcionando correctamente!');
});





app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
