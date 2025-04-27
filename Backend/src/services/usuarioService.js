// Backend\services\usuarioService.js

/**
 * @file Servicio para la gestión de la lógica de negocio de Usuarios.
 * Este archivo contiene las funciones que orquestan las operaciones
 * relacionadas con los usuarios, como registro, login, obtención de datos, etc.
 * Actúa como intermediario entre los controladores y la capa de acceso a datos (DAO).
 */

// Importamos la definición de la clase base Usuario desde el modelo.
// Nota: Aunque importamos Usuario, este servicio debería interactuar principalmente con el UsuarioDAO.
const { Usuario } = require('../models/usuario');

// Nota: Aquí deberías importar el DAO de Usuario (UsuarioDAO) una vez que lo implementes.
// const { UsuarioDAO } = require('../dao/usuarioDAO');
// Nota: Si el servicio necesita crear instancias de Usuario en ciertos flujos
// después de obtener datos de la DB, podría usar la UserFactory.
// const { UsuarioFactory } = require('../patterns/userFactory');


/**
 * Clase UsuarioService que encapsula la lógica de negocio para los usuarios.
 * Sus métodos son llamados por los controladores.
 * Esta es la capa donde se manejarían validaciones, hashing de contraseñas,
 * autenticación, autorización y la interacción con el DAO de Usuario.
 */
class UsuarioService {

    /**
     * *** NOTA IMPORTANTE: ***
     * Este método 'crearUsuario' en el Servicio actualmente es muy básico
     * y simplemente crea una instancia del modelo `Usuario` en memoria.
     *
     * En una aplicación real y siguiendo la arquitectura en capas,
     * un método de servicio para "crear" o "registrar" un usuario
     * debería manejar lógica más compleja, como:
     * 1. Validar los datos de entrada (email único, password segura, etc.).
     * 2. Hashear la contraseña antes de almacenarla.
     * 3. Llamar al **UsuarioDAO** para persistir el usuario en la base de datos.
     * 4. Retornar la instancia del usuario creado (posiblemente con un ID asignado por la DB)
     * o lanzar una excepción si falla (ej. email duplicado, error de DB).
     *
     * El controlador `authController.js` ya utiliza la `UsuarioFactory` para
     * crear instancias de usuario en la simulación de login. La `UsuarioFactory`
     * es más apropiada para la *instanciación* de objetos Usuario (posiblemente de
     * diferentes tipos/roles) después de que los datos han sido validados y/o
     * recuperados del DAO.
     *
     * Considera si este método 'crearUsuario' es necesario en el Servicio
     * o si la lógica de registro/creación debería residir en un método
     * de registro más completo (ej. `registrarUsuario(datosRegistro)`)
     * que interactúe con el DAO y la Factory según sea necesario.
     */
    static crearUsuario(role, id, nombre, email) {
         console.log(`Servicio de Usuario: Creando instancia de usuario en memoria con rol: ${role}...`);
        // Actualmente, solo retorna una nueva instancia del modelo Usuario.
        // No realiza persistencia en la base de datos ni validaciones de negocio.
        return new Usuario(role, id, nombre, email);
    }

    // Aquí irían otros métodos del servicio de usuarios, que interactuarían con el UsuarioDAO:
    // static registrarUsuario(datosRegistro) { ... } // Lógica de registro completa
    // static iniciarSesion(email, password) { ... } // Lógica de autenticación
    // static obtenerUsuarioPorId(id) { ... } // Obtener usuario de la DB
    // static actualizarPerfil(id, datos) { ... } // Actualizar datos de usuario
}

// Exportamos la clase UsuarioService para que pueda ser utilizada por los controladores.
module.exports = { UsuarioService };