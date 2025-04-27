// backend/src/dao/horarioDAO.js
import DB from '../config/server.js';

class HorarioDAO {
  constructor() {
    this.db = DB;
  }

  async crearHora({ HoraInicio, HoraFin }) {
    const [result] = await this.db.execute(
      `INSERT INTO Hora (HoraInicio, HoraFin) VALUES (?, ?)`,
      [HoraInicio, HoraFin]
    );
    return result.insertId;
  }

  async listarHoras() {
    const [rows] = await this.db.execute(`SELECT * FROM Hora`);
    return rows;
  }

  async obtenerHorarioPorId(IdHorario) {
    const [rows] = await this.db.execute(
      `SELECT * FROM Hora WHERE IdHora = ?`,
      [IdHorario]
    );
    return rows[0] || null;
  }

  async actualizarHorario(IdHorario, { HoraInicio, HoraFin }) {
    await this.db.execute(
      `UPDATE Hora SET HoraInicio = ?, HoraFin = ? WHERE IdHorario = ?`,
      [HoraInicio, HoraFin, IdHorario]
    );
  }

  async eliminarHorario(IdHorario) {
    await this.db.execute(`DELETE FROM Hora WHERE IdHora = ?`, [IdHorario]);
  }
}

export default new HorarioDAO();
