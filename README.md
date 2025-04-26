# Aplicacion-de-reservas
Estructura de la pagina es:
/frontend
 ├── public/
 └── src/
     ├── components/    # UI (Form, Table, SeatMap)
     ├── pages/         # Login, Dashboard, ReservationForm
     ├── services/      # API wrappers (axios)
     ├── routes/        # React Router setup
     └── utils/         # hooks, helpers

/backend
 ├── src/
 │   ├── controllers/  # Express routes handlers
 │   ├── services/     # Lógica de negocio
 │   ├── dao/          # Clases DAO + DAOFactory
 │   ├── models/       # Interfaces/POJOs
 │   ├── strategies/   # CancellationStrategy, etc.
 │   ├── utils/        # DbConnection (Singleton)
 │   └── app.js        # Express setup, middleware, CORS, JWT
 └── config/
     └── db.config.js  # credenciales MySQL

/tests                 # Jest/React Testing Library

/docs                  # UML (PlantUML), capturas, APA
