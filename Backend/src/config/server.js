// backend/src/config/db.js
import mysql from 'mysql2/promise';

// Pool de conexiones compartido
const DB = mysql.createPool({
  host             : 'localhost',
  user             : 'root',
  password         : 'unicornio',
  database         : 'Restaurante',
  waitForConnections: true,
  connectionLimit  : 10,
  queueLimit       : 0,
  port             : 3306
});

// Test de conexión (opcional)
(async () => {
  try {
    await DB.getConnection();
    console.log('✅ Conexión a MySQL exitosa.');
  } catch (err) {
    console.error('❌ Error conectando a MySQL:', err.message);
    process.exit(1);
  }
})();

export default DB;
