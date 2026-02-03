export default function AdminPage() {
  return (
    <main>
      <span className="tag">Panel Admin</span>
      <section className="hero">
        <h1>Centro de control White Rabbit Coffee</h1>
        <p>
          Acceso restringido solo para staff y administradores. Desde aquí se
          gestiona el menú dinámico, los pedidos, los puntos y los beneficios de
          cada nivel.
        </p>
      </section>

      <section className="grid grid-3" style={{ marginTop: "32px" }}>
        <div className="card">
          <h3>Usuarios & roles</h3>
          <p>
            Alta y baja de miembros, asignación de roles, bloqueo de cuentas y
            auditoría de sesiones.
          </p>
        </div>
        <div className="card">
          <h3>Productos & categorías</h3>
          <p>
            Crear, editar, activar y programar productos con precios en COP,
            puntos y visibilidad por nivel.
          </p>
        </div>
        <div className="card">
          <h3>Pedidos & puntos</h3>
          <p>
            Confirmación de pagos, estado de pedidos, asignación manual de
            puntos y prevención de duplicación.
          </p>
        </div>
      </section>
    </main>
  );
}
