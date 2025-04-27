// testDao.js
// testDao.js (en la raíz del proyecto)
import UsuarioDAO  from './Backend/src/dao/UsuarioDAO.js';
import MesaDAO     from './Backend/src/dao/MesaDAO.js';
import HorarioDAO  from './Backend/src/dao/HorarioDAO.js';
import ReservaDAO  from './Backend/src/dao/ReservaDAO.js';


async function runTests() {
  try {
    console.log('--- TEST UsuarioDAO ---');
    const userId = await UsuarioDAO.crearUsuario({
      Nombre: 'Test User',
      Usuario: 'testuser@correo.com',
      Contrasena: 'Password123!',
      Rol: 'cliente'
    });
    console.log('Usuario creado con ID:', userId);

    const fetchedUser = await UsuarioDAO.obtenerUsuario('testuser@correo.com');
    console.log('Usuario recuperado:', fetchedUser);

    console.log('\n--- TEST MesaDAO ---');
    const mesaId = await MesaDAO.crearMesa({ NumeroMesa: 99, Capacidad: 4 });
    console.log('Mesa creada con ID:', mesaId);
    console.log('Todas las mesas:', await MesaDAO.listarMesas());

    console.log('\n--- TEST HorarioDAO ---');
    const horaId = await HorarioDAO.crearHora({ HoraInicio: '10:00:00', HoraFin: '12:00:00' });
    console.log('Horario creado con ID:', horaId);
    console.log('Todos los horarios:', await HorarioDAO.listarHoras());

    console.log('\n--- TEST ReservaDAO ---');
    const reservaId = await ReservaDAO.crearReserva({
      Usuarios_IdUsuario: userId,
      Mesa_IdMesa: mesaId,
      Hora_IdHora: horaId,
      Fecha: '2025-06-01',
      NumeroPersonas: 2
    });
    console.log('Reserva creada con ID:', reservaId);

    console.log('Reservas de usuario:', await ReservaDAO.listarReservasPorUsuario(userId));
    console.log('Todas las reservas:', await ReservaDAO.listarTodasReservas());

  } catch (err) {
    console.error('🛑 Error en tests:', err);
  } finally {
    process.exit(0);
  }
}

runTests();
