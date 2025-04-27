// backend/dao/horarioDAO.js
import DB from '../config/server.js';

class HorarioDAO {
  constructor() {
    this.db = DB.getInstance();
  }

  async crearHora({ HoraInicio, HoraFin }) {
    const [result] = await this.db.execute(
      `INSERT INTO Hora (HoraInicio, HoraFin) VALUES (?, ?)`,
      [HoraInicio, HoraFin]
    );
    return result.insertId;
  }

  async listarHora() {
    const [rows] = await this.db.execute(`SELECT * FROM Hora`);
    return rows;
  }

  async obtenerHoraPorId(id) {
    const [rows] = await this.db.execute(
      `SELECT * FROM Hora WHERE IdHora = ?`,
      [id]
    );
    return rows[0] || null;
  }

  async actualizarHorario(id, { HoraInicio, HoraFin }) {
    await this.db.execute(
      `UPDATE Horario SET HoraInicio = ?, HoraFin = ? WHERE IdHora = ?`,
      [HoraInicio, HoraFin]
    );
  }

  async eliminarHorario(id) {
    await this.db.execute(`DELETE FROM Horario WHERE IdHora = ?`, [id]);
  }
}

export default new HorarioDAO();
