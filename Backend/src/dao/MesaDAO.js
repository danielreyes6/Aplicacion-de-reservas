// backend/src/dao/mesaDAO.js
import DB from '../config/server.js';

class MesaDAO {
  constructor() {
    this.db = DB;
  }

  async crearMesa({ NumeroMesa, Capacidad }) {
    const [result] = await this.db.execute(
      `INSERT INTO Mesa (NumeroMesa, Capacidad) VALUES (?, ?)`,
      [NumeroMesa, Capacidad]
    );
    return result.insertId;
  }

  async listarMesas() {
    const [rows] = await this.db.execute(`SELECT * FROM Mesa`);
    return rows;
  }

  async obtenerMesaPorId(IdMesa) {
    const [rows] = await this.db.execute(
      `SELECT * FROM Mesa WHERE IdMesa = ?`,
      [IdMesa]
    );
    return rows[0] || null;
  }

  async actualizarMesa(IdMesa, { NumeroMesa, Capacidad }) {
    await this.db.execute(
      `UPDATE Mesa SET NumeroMesa = ?, Capacidad = ? WHERE IdMesa = ?`,
      [NumeroMesa, Capacidad, IdMesa]
    );
  }

  async eliminarMesa(IdMesa) {
    await this.db.execute(`DELETE FROM Mesa WHERE IdMesa = ?`, [IdMesa]);
  }
}

export default new MesaDAO();