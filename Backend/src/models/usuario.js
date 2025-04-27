// Backend\models\usuario.js

/**
 * @file Modelo que representa un Usuario.
 * Este archivo define la estructura de datos para un usuario del sistema (cliente o administrador).
 */

/**
 * Clase que representa un Usuario en el sistema.
 * Actúa como un simple contenedor de datos (POJO - Plain Old JavaScript Object).
 * Esta clase es la base utilizada por la UserFactory para crear instancias de usuario.
 */
class Usuario {
    /**
     * Constructor para crear una instancia de Usuario.
     *
     * @param {string} role - El rol del usuario ('Cliente' o 'Administrador').
     * @param {number} id - El ID único del usuario.
     * @param {string} nombre - El nombre completo del usuario.
     * @param {string} email - El correo electrónico del usuario (usado para login).
     * En un caso real, también podrías tener una propiedad 'password' (hasheada).
     */
    constructor(role, id, nombre, email) {
        // Asignamos las propiedades a la instancia del usuario.
        this.role = role;
        this.id = id;
        this.nombre = nombre;
        this.email = email;
        // En un caso real, aquí también tendrías la contraseña hasheada del usuario.
        // this.passwordHash = passwordHash;
    }

    // Podrías añadir métodos aquí si la lógica de negocio relacionada con el Usuario
    // fuera compleja y aplicable a la instancia misma (ej: usuario.tienePermiso('crearReserva')).
}

// Exportamos la clase Usuario para que pueda ser utilizada en otras partes de la aplicación (ej. DAOs, Services, Factory).
module.exports = { Usuario };