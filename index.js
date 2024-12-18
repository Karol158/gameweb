const express = require('express');
const sequelize = require('./configurar/bd');
const gameRoutes = require('./rotas/games');

const app = express();
app.use(express.json());  
    app.use('/api', gameRoutes);

 sequelize.sync()
  .then(() => console.log('Banco de dados sincronizado'))
  .catch((err) => console.error('Erro de sincronização da base de dados', err));


    const PORT = 3000;
   app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});