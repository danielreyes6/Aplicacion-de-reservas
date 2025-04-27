// backend/src/dao/usuarioDAO.js
import DB from '../config/server.js';
import bcrypt from 'bcryptjs';

class UsuarioDAO {
  constructor() {
    this.db = DB;
  }

  async crearUsuario({ Nombre, Usuario, Contrasena, Rol }) {
    const hash = await bcrypt.hash(Contrasena, 12);
    const [result] = await this.db.execute(
      `INSERT INTO Usuarios (Nombre, Usuario, Contrasena, Rol) VALUES (?, ?, ?, ?)`,
      [Nombre, Usuario, hash, Rol]
    );
    return result.insertId;
  }

  async obtenerUsuario(Usuario) {
    const [rows] = await this.db.execute(
      `SELECT * FROM Usuarios WHERE Usuario = ?`,
      [Usuario]
    );
    return rows[0] || null;
  }

  async obtenerUsuarioPorId(IdUsuario) {
    const [rows] = await this.db.execute(
      `SELECT IdUsuario, Nombre, Usuario, Rol FROM Usuario WHERE IdUsuario = ?`,
      [IdUsuario]
    );
    return rows[0] || null;
  }
}

export default new UsuarioDAO();