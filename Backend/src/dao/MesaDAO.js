// backend/dao/mesaDAO.js
import DB from '../config/server.js';

class MesaDAO {
  constructor() {
    this.db = DB.getInstance();
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

  async obtenerMesaPorId(id) {
    const [rows] = await this.db.execute(
      `SELECT * FROM Mesa WHERE IdMesa = ?`,
      [id]
    );
    return rows[0] || null;
  }

  async actualizarMesa(id, { NumeroMesa, Capacidad }) {
    await this.db.execute(
      `UPDATE Mesa SET NumeroMesa = ?, Capacidad = ? WHERE IdMesa = ?`,
      [NumeroMesa, Capacidad, id]
    );
  }

  async eliminarMesa(id) {
    await this.db.execute(`DELETE FROM Mesa WHERE IdMesa = ?`, [id]);
  }
}

export default new MesaDAO();