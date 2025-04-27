const express = require('express');
const mysql = require('mysql');

const app = express();
const PORT = 3306;

const DB = mysql.createConnection({
    host: 'localhost',
    user:'root',
    password:'unicornio',
    dababase:'Restaurante'
});

DB.connect(err => {
    if (err) {
      console.error('❌ Error conectando a MySQL:', err.message);
      process.exit(1);
    }
    console.log('✅ Conexión a MySQL exitosa.');
  });
  
  app.listen(PORT, () => {
    console.log(`🚀 API corriendo en http://localhost:${PORT}`);
  });


