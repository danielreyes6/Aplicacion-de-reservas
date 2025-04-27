// Backend\dao\dbConnectionSingleton.js

/**
 *  @file 

 * Clase que representa la conexión a la base de datos e implementa el patrón Singleton.
 * La primera vez que se instancia, crea la conexión; las llamadas subsiguientes
 * retornan la misma instancia existente.
 */
class DBConnection {
    /**
     * Constructor de la clase DBConnection.
     * Verifica si ya existe una instancia; si no, crea la conexión y la almacena.
     * Si ya existe, simplemente retorna la instancia existente.
     */
    constructor() {
        // Verifica si ya existe una instancia estática de DBConnection.
        if (!DBConnection.instance) {
            // Si no existe, llama al método conectar para establecer la conexión.
            this.connection = this.conectar();
            // Almacena la instancia actual como la instancia única.
            DBConnection.instance = this;
        }

        // Retorna la instancia única (la recién creada o la existente).
        return DBConnection.instance;
    }

    /**
     * Establece la conexión con la base de datos.
     * Actualmente es una simulación. En una aplicación real, aquí iría
     * la lógica para conectar a la DB (ej. usando una librería como 'pg' o 'mysql2').
     *
     * @returns {Object} Un objeto que simula la conexión a la base de datos.
     */
    conectar() {
        console.log('Conectando a la base de datos...');
        // --- SIMULACIÓN TEMPORAL DE CONEXIÓN ---
        // Aquí deberías usar una librería de base de datos (como 'pg', 'mysql2', etc.)
        // para establecer la conexión real, posiblemente usando credenciales del .env.
        // Por ejemplo:
        // const { Client } = require('pg');
        // const client = new Client({ connectionString: process.env.DATABASE_URL });
        // client.connect();
        // return client;
        // --- FIN SIMULACIÓN ---
        return { connected: true, message: 'Simulación de conexión exitosa' }; // Simulación de la conexión exitosa
    }

    /**
     * Obtiene la instancia de la conexión a la base de datos.
     *
     * @returns {Object} La instancia de la conexión a la base de datos.
     */
    getConnection() {
        return this.connection;
    }
}

// Creamos la única instancia de la conexión a la base de datos utilizando el Singleton.
const dbConnection = new DBConnection();

// Congelamos el objeto para asegurar que no se puedan añadir o modificar propiedades,
// reforzando el patrón Singleton.
Object.freeze(dbConnection);

// Exportamos la única instancia de la conexión para que pueda ser importada
// y utilizada por los Data Access Objects (DAOs).
module.exports = dbConnection;