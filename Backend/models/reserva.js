// Backend\models\reserva.js

/**
 * @file Modelo que representa una Reserva.
 * Este archivo define la estructura de datos para una reserva de restaurante.
 */

/**
 * Clase que representa una Reserva en el sistema.
 * Actúa como un simple contenedor de datos (POJO - Plain Old JavaScript Object).
 */
class Reserva {
    /**
     * Constructor para crear una instancia de Reserva.
     *
     * @param {string} fecha - La fecha de la reserva.
     * @param {string} hora - La hora de la reserva.
     * @param {number} usuarioId - El ID del usuario que realiza la reserva.
     * @param {number} mesaId - El ID de la mesa reservada.
     * @param {number} numPersonas - El número de personas para la reserva (añadido según tu controlador).
     * @param {string} [estado='pendiente'] - El estado actual de la reserva (por defecto 'pendiente').
     * Este campo no estaba en tu constructor original, pero es común. Lo añado como ejemplo.
     */
    constructor(fecha, hora, usuarioId, mesaId, numPersonas, estado = 'pendiente') {
        // Asignamos las propiedades a la instancia de la reserva.
        this.fecha = fecha;
        this.hora = hora;
        this.usuarioId = usuarioId;
        this.mesaId = mesaId;
        this.numPersonas = numPersonas; // Propiedad para el número de personas.
        this.estado = estado; // Propiedad para el estado de la reserva.
        // En un caso real, probablemente también tendrías un `id` único para la reserva,
        // que sería asignado por la base de datos.
    }

    // Podrías añadir métodos aquí si la lógica de negocio relacionada con la Reserva
    // fuera compleja y aplicable a la instancia misma (ej: reserva.cancelar()).
}

// Exportamos la clase Reserva para que pueda ser utilizada en otras partes de la aplicación (ej. DAOs, Services).
module.exports = { Reserva };