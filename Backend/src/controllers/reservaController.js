/*Backend\controllers\reservaController.js

/**
 * @file Controlador para la gestión de reservas.
 * Este archivo contiene las funciones que manejan las solicitudes
 * relacionadas con la creación y potencialmente otras operaciones (ver, cancelar) de reservas.
 */

// Importamos el servicio de reservas que contiene la lógica de negocio para las reservas.
// El controlador delega la lógica compleja al servicio.
const { ReservaService } = require('../services/reservaService');

/**
 * Maneja la solicitud para crear una nueva reserva.
 * Extrae los datos de la solicitud, valida la información y llama al servicio de reservas para procesarla.
 *
 * @param {Object} req - El objeto de solicitud de Express. Se espera que contenga 'fecha', 'hora', 'usuarioId', 'mesaId' y 'numPersonas' en el cuerpo (req.body).
 * @param {Object} res - El objeto de respuesta de Express.
 * @returns {void} Envía una respuesta JSON con el resultado de la creación de la reserva.
 */
const crearReserva = (req, res) => {
    // Extraemos los datos necesarios del cuerpo de la solicitud.
    const { fecha, hora, usuarioId, mesaId, numPersonas } = req.body;

    // --- VALIDACIÓN BÁSICA ---
    // Verificamos que todos los campos requeridos para crear una reserva estén presentes en la solicitud.
    // En una aplicación real, la validación podría ser más exhaustiva (ej: formato de fecha/hora, IDs válidos, etc.).
    if (!fecha || !hora || !usuarioId || !mesaId || !numPersonas) {
        // Si falta algún campo, respondemos con un estado 400 (Bad Request) y un mensaje de error.
        return res.status(400).json({ mensaje: 'Todos los campos son requeridos' });
    }
    // --- FIN VALIDACIÓN BÁSICA ---

    // --- LÓGICA DE NEGOCIO ---
    // Llamamos al método 'crearReserva' del servicio de reservas.
    // El servicio contiene la lógica para interactuar con la base de datos (DAO)
    // y cualquier otra regla de negocio (ej: verificar disponibilidad).
    const nuevaReserva = ReservaService.crearReserva(fecha, hora, usuarioId, mesaId, numPersonas);
    // --- FIN LÓGICA DE NEGOCIO ---


    // --- RESPUESTA ---
    // Verificamos si la reserva fue creada exitosamente por el servicio.
    // (Nota: El servicio debería retornar un objeto reserva si tiene éxito, o null/false/error si falla)
    if (nuevaReserva) {
        // Si el servicio retornó una nueva reserva, respondemos con estado 201 (Created) y los datos de la reserva.
        res.status(201).json({ mensaje: 'Reserva creada exitosamente', reserva: nuevaReserva });
    } else {
        // Si el servicio indicó un fallo (por ejemplo, retornando null o false),
        // respondemos con estado 400 (Bad Request) y un mensaje genérico de error.
        // En un caso real, el servicio podría proporcionar un error más específico.
        res.status(400).json({ mensaje: 'Error al crear la reserva' });
    }
    // --- FIN RESPUESTA ---
};

// Exportamos las funciones del controlador para que puedan ser usadas por las rutas.
module.exports = { crearReserva };