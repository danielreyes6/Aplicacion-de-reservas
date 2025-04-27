// backend/dao/reservaDAO.js
import DB from '../config/server.js';

class ReservaDAO {
  constructor() {
    this.db = DB.getInstance();
  }

  async crearReserva({ id_usuario, id_mesa, id_horario, fecha, numero_personas }) {
    const [result] = await this.db.execute(
      `INSERT INTO Reserva (Usuarios_IdUsuario, Mesa_IdMesa, Hora_IdHora, Fecha, NumeroPersonas) VALUES (?, ?, ?, ?, ?)`,
      [id_usuario, id_mesa, id_horario, fecha, numero_personas]
    );
    return result.insertId;
  }

  async listarReservasPorUsuario(id_usuario) {
    const [rows] = await this.db.execute(
      `SELECT r.*, m.numero_mesa, h.hora_inicio, h.hora_fin
       FROM Reserva r
       JOIN Mesa m ON r.id_mesa = m.id_mesa
       JOIN Horario h ON r.id_horario = h.id_horario
       WHERE r.id_usuario = ?`,
      [id_usuario]
    );
    return rows;
  }

  async listarTodasReservas() {
    const [rows] = await this.db.execute(
      `SELECT r.*, u.nombre AS cliente, m.numero_mesa, h.hora_inicio, h.hora_fin
       FROM Reserva r
       JOIN Usuario u ON r.id_usuario = u.id_usuario
       JOIN Mesa m ON r.id_mesa = m.id_mesa
       JOIN Horario h ON r.id_horario = h.id_horario`
    );
    return rows;
  }

  async eliminarReserva(id) {
    await this.db.execute(`DELETE FROM Reserva WHERE id_reserva = ?`, [id]);
  }
}

export default new ReservaDAO();