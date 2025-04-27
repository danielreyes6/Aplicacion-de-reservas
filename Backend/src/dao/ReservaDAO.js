// backend/dao/reservaDAO.js
import DB from '../config/server.js';

class ReservaDAO {
  constructor() {
    this.db = DB;
  }

  async crearReserva({ Usuarios_IdUsuario, Mesa_IdMesa, Hora_IdHora, Fecha, NumeroPersonas }) {
    const [result] = await this.db.execute(
      `INSERT INTO Reserva (Usuarios_IdUsuarios, Mesa_IdMesa, Hora_IdHora, Fecha, NumeroPersonas) VALUES (?, ?, ?, ?, ?)`,
      [Usuarios_IdUsuario, Mesa_IdMesa, Hora_IdHora, Fecha, NumeroPersonas]
    );
    return result.insertId;
  }

  async listarReservasPorUsuario(Usuarios_IdUsuario) {
    const [rows] = await this.db.execute(
      `SELECT r.IdReserva, r.Fecha, r.NumeroPersonas,
              m.NumeroMesa, h.HoraInicio, h.HoraFin
       FROM Reserva r
       JOIN Mesa m ON r.Mesa_IdMesa = m.IdMesa
       JOIN Hora h ON r.Hora_IdHora = h.IdHora
       WHERE r.Usuarios_IdUsuarios = ?`,
      [Usuarios_IdUsuario]
    );
    return rows;
  }

  async listarTodasReservas() {
    const [rows] = await this.db.execute(
      `SELECT r.IdReserva, u.Nombre AS Cliente, m.NumeroMesa,
              h.HoraInicio, h.HoraFin, r.Fecha, r.NumeroPersonas
       FROM Reserva r
       JOIN Usuarios u ON r.Usuarios_IdUsuarios = u.IdUsuarios
       JOIN Mesa m ON r.Mesa_IdMesa = m.IdMesa
       JOIN Hora h ON r.Hora_IdHora = h.IdHora`
    );
    return rows;
  }

  async eliminarReserva(IdReserva) {
    await this.db.execute(
      `DELETE FROM Reserva WHERE IdReserva = ?`,
      [IdReserva]
    );
  }
}

export default new ReservaDAO();