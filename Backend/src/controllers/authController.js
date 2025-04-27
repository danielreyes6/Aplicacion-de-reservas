// Backend\controllers\authController.js

/**
 * @file Controlador para la autenticación de usuarios.
 * Este archivo contiene las funciones que manejan las solicitudes
 * relacionadas con el inicio de sesión de usuarios.
 */

// Importamos la fábrica de usuarios para crear instancias de usuarios
// según su rol (Cliente o Administrador) utilizando el patrón Factory Method.
const { UsuarioFactory } = require('../patterns/userFactory');

/**
 * Maneja la solicitud de inicio de sesión de un usuario.
 * Verifica las credenciales proporcionadas y devuelve información del usuario si son válidas.
 *
 * @param {Object} req - El objeto de solicitud de Express. Se espera que contenga 'email' y 'password' en el cuerpo (req.body).
 * @param {Object} res - El objeto de respuesta de Express.
 * @returns {void} Envía una respuesta JSON con el resultado del intento de inicio de sesión.
 */
const login = (req, res) => {
    // Extraemos el email y la password del cuerpo de la solicitud.
    const { email, password } = req.body;

    // --- SIMULACIÓN TEMPORAL DE AUTENTICACIÓN ---
    // En una aplicación real, esta lógica debería:
    // 1. Conectarse a la base de datos (a través de un DAO).
    // 2. Buscar un usuario con el email proporcionado.
    // 3. Comparar la password ingresada (hasheada) con la password almacenada (hasheada) en la DB.
    // 4. Utilizar el UsuarioFactory para crear la instancia correcta del usuario autenticado.
    // Esta simulación sirve para probar el flujo básico sin la DB implementada aún.
    if (email === 'cliente@example.com' && password === '1234') {
        // Si las credenciales coinciden con el cliente de simulación,
        // creamos una instancia de usuario 'Cliente' usando la fábrica.
        const cliente = UsuarioFactory.crearUsuario('Cliente', 1, 'Juan Cliente', email);
        // Enviamos una respuesta JSON indicando éxito y los datos del usuario.
        res.json({ mensaje: 'Login exitoso', usuario: cliente });
    } else if (email === 'admin@example.com' && password === 'admin123') {
        // Si las credenciales coinciden con el administrador de simulación,
        // creamos una instancia de usuario 'Administrador' usando la fábrica.
        const admin = UsuarioFactory.crearUsuario('Administrador', 2, 'Ana Admin', email);
        // Enviamos una respuesta JSON indicando éxito y los datos del administrador.
        res.json({ mensaje: 'Login exitoso', usuario: admin });
    } else {
        // Si las credenciales no coinciden con ningún usuario de simulación,
        // enviamos un estado 401 (Unauthorized) y un mensaje de error.
        res.status(401).json({ mensaje: 'Credenciales inválidas' });
    }
    // --- FIN DE LA SIMULACIÓN ---
};

// Exportamos las funciones del controlador para que puedan ser usadas por las rutas.
module.exports = { login };