// app.js

/**
 * @file Punto de entrada principal de la aplicación backend.
 * Configura el servidor Express, carga las variables de entorno,
 * establece la conexión con la base de datos, define los middlewares
 * y configura las rutas de la API conectándolas a los controladores.
 */

// Carga las variables de entorno desde el archivo .env en process.env.
// Esto permite usar variables como process.env.PORT o process.env.DATABASE_URL.
require('dotenv').config();

// Importa el framework Express para construir la aplicación web.
const express = require('express');
// Crea una instancia de la aplicación Express.
const app = express();

// Importa la instancia única de la conexión a la base de datos (Singleton).
// Esto inicializa la conexión la primera vez que se importa este módulo.
const dbConnection = require('./Backend/dao/dbConnectionSingleton');

// Importa las funciones controladoras para manejar las solicitudes HTTP de autenticación.
const { login } = require('./Backend/controllers/authController');
// Importa las funciones controladoras para manejar las solicitudes HTTP de reservas.
const { crearReserva } = require('./Backend/controllers/reservaController');

// --- MIDDLEWARES ---
// Middleware integrado en Express para parsear el cuerpo de las solicitudes entrantes con payloads JSON.
// Esto hace que req.body esté disponible y contenga los datos parseados.
app.use(express.json());
// --- FIN MIDDLEWARES ---


// --- CONEXIÓN A LA BASE DE DATOS ---
// Obtiene la instancia de la conexión a la base de datos desde el Singleton
// y la imprime en la consola para verificar que la conexión se ha establecido
// (o al menos, que la simulación de conexión se ha ejecutado).
console.log('Estado de la conexión a la DB (simulación):', dbConnection.getConnection());
// En una aplicación real, aquí podrías añadir manejo de errores si la conexión falla.
// --- FIN CONEXIÓN A LA BASE DE DATOS ---


// --- RUTAS DE LA API ---
// Define una ruta POST '/login' que será manejada por la función 'login' del authController.
// Cuando se recibe una solicitud POST a '/login', se ejecuta authController.login().
app.post('/login', login);

// Define una ruta POST '/reserva' que será manejada por la función 'crearReserva' del reservaController.
// Cuando se recibe una solicitud POST a '/reserva', se ejecuta reservaController.crearReserva().
app.post('/reserva', crearReserva);

// Nota: Aquí irían otras rutas de la API para obtener reservas, cancelar, etc.
// --- FIN RUTAS DE LA API ---


// --- INICIO DEL SERVIDOR ---
// Define el puerto en el que el servidor escuchará las solicitudes.
// Intenta usar la variable de entorno PORT si está definida (común en entornos de hosting),
// de lo contrario, usa el puerto 3000 por defecto.
const PORT = process.env.PORT || 3000;

// Inicia el servidor Express para que escuche en el puerto especificado.
// La función de callback se ejecuta una vez que el servidor está escuchando.
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
    console.log('Presiona CTRL+C para detener el servidor.');
});
// --- FIN INICIO DEL SERVIDOR ---