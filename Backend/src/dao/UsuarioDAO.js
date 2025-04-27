// backend/dao/usuarioDAO.js
import DB from '../config/server.js';
import bcrypt from 'bcrypt';

class UsuarioDAO {
  constructor() {
    this.db = DB.getInstance();
  }

  async crearUsuario({ Nombre, Usuario, Contrasena, Rol }) {
    const hash = await bcrypt.hash(password, 12);
    const [result] = await this.db.execute(
      `INSERT INTO Usuario (Nombre, Usuario, Contrasena, Rol) VALUES (?, ?, ?, ?)`,
      [Nombre, Usuario, hash, rol]
    );
    return result.insertId;
  }

  async obtenerUsuarioPorEmail(Usuario) {
    const [rows] = await this.db.execute(
      `SELECT * FROM Usuario WHERE Usuario = ?`,
      [Usuario]
    );
    return rows[0] || null;
  }

  async obtenerUsuarioPorId(id) {
    const [rows] = await this.db.execute(
      `SELECT IdUsuario, Nombre, Usuario, Rol FROM Usuario WHERE IdUsuario = ?`,
      [id]
    );
    return rows[0] || null;
  }
}

export default new UsuarioDAO();