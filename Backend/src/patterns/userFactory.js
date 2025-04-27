// Backend\patterns\userFactory.js

/**
 * @file Implementación del patrón Factory Method para la creación de objetos Usuario.
 * Este archivo contiene una fábrica que centraliza la lógica para crear
 * instancias de la clase Usuario, facilitando la gestión de diferentes tipos
 * de usuarios si fuera necesario en el futuro.
 */

// Importamos la definición de la clase base Usuario desde el modelo.
const { Usuario } = require('../models/usuario');

/**
 * Clase UsuarioFactory que implementa el patrón Factory Method.
 * Provee un método estático para crear instancias de Usuario.
 * Esto desacopla el código cliente de la lógica de creación directa de objetos Usuario.
 */
class UsuarioFactory {
    /**
     * Crea y devuelve una nueva instancia de Usuario.
     * Aunque actualmente solo crea la clase base Usuario, este método
     * es el punto de extensión para crear diferentes subclases de Usuario
     * (ej. Cliente, Administrador) basándose en el parámetro 'role'.
     *
     * @param {string} role - El rol del usuario ('Cliente', 'Administrador', etc.).
     * @param {number} id - El ID único del usuario.
     * @param {string} nombre - El nombre del usuario.
     * @param {string} email - El correo electrónico del usuario.
     * @returns {Usuario} Una nueva instancia de la clase Usuario (o una subclase en el futuro).
     */
    static crearUsuario(role, id, nombre, email) {
        // --- IMPLEMENTACIÓN DEL FACTORY METHOD ---
        // Aquí se podría añadir lógica condicional si tuvieras subclases de Usuario:
        // if (role === 'Cliente') {
        //     return new Cliente(id, nombre, email); // Suponiendo una clase Cliente que extiende Usuario
        // } else if (role === 'Administrador') {
        //     return new Administrador(id, nombre, email); // Suponiendo una clase Administrador
        // } else {
        //     // Podrías lanzar un error o retornar una instancia por defecto
        //     return new Usuario(role, id, nombre, email); // Retorna la base si el rol no coincide con subclases específicas
        // }
        // Actualmente, simplemente devuelve una nueva instancia de la clase base Usuario
        // con el rol especificado, ya que no hay subclases definidas.
        return new Usuario(role, id, nombre, email);
        // --- FIN IMPLEMENTACIÓN ---
    }
}

// Exportamos la clase UsuarioFactory para que pueda ser utilizada por los controladores u otros componentes
// que necesiten crear instancias de Usuario sin conocer los detalles de su construcción.
module.exports = { UsuarioFactory };