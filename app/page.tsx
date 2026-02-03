export default function Home() {
  return (
    <div>
      <nav className="nav">
        <div className="logo">
          <span>▣</span> White Rabbit Coffee
        </div>
        <div className="badge">Solo miembros</div>
      </nav>

      <main>
        <span className="tag">Acceso privado</span>
        <section className="hero">
          <h1>Solo los miembros siguen al conejo.</h1>
          <p>
            White Rabbit Coffee es una experiencia PWA premium enfocada en café
            artesanal, puntos y beneficios exclusivos. Ningún menú ni funciones
            están disponibles hasta iniciar sesión.
          </p>
          <div className="grid grid-2">
            <div className="card stack">
              <h3>Registro de miembros</h3>
              <label className="label" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                className="input"
                placeholder="tu@email.com"
                type="email"
              />
              <label className="label" htmlFor="name">
                Nombre completo
              </label>
              <input
                id="name"
                className="input"
                placeholder="Nombre y apellido"
              />
              <button className="button">Crear cuenta</button>
              <p>
                Al registrarte aceptas la membresía privada y el acceso
                condicionado a niveles.
              </p>
            </div>
            <div className="card stack">
              <h3>Inicio de sesión</h3>
              <label className="label" htmlFor="login-email">
                Email
              </label>
              <input
                id="login-email"
                className="input"
                placeholder="miembro@white.rabbit"
                type="email"
              />
              <label className="label" htmlFor="password">
                Contraseña
              </label>
              <input
                id="password"
                className="input"
                placeholder="••••••••"
                type="password"
              />
              <div className="grid">
                <button className="button">Ingresar</button>
                <button className="button secondary">Login por código</button>
              </div>
              <p>
                Código vía email o WhatsApp. Sesión persistente, cifrada y con
                roles.
              </p>
            </div>
          </div>
        </section>

        <section className="grid grid-3" style={{ marginTop: "32px" }}>
          <div className="card">
            <h3>Menú dinámico</h3>
            <p>
              Productos y categorías se gestionan desde el panel admin. El menú
              inicia vacío y solo se muestran productos activos, con horarios y
              niveles configurables.
            </p>
          </div>
          <div className="card">
            <h3>Sistema de pedidos</h3>
            <p>
              Carrito en COP, estados pendientes/confirmados/entregados y puntos
              asignados únicamente al confirmar pagos por staff o admin.
            </p>
          </div>
          <div className="card">
            <h3>Rabbit Beans</h3>
            <p>
              Regla base: $1.000 COP = 1 punto. Historial antifraude y niveles
              automáticos: Bean Starter, White Rabbit, Mad Brewer, Coffee King.
            </p>
          </div>
        </section>

        <section className="grid grid-2" style={{ marginTop: "32px" }}>
          <div className="card">
            <h3>Ruleta de premios</h3>
            <p>
              Se desbloquea en pedidos confirmados ≥ $30.000 COP. Un giro por
              pedido con premios configurables desde admin, expiración y guardado
              en perfil.
            </p>
            <div className="panel-list">
              <div className="badge">Descuentos</div>
              <div className="badge">Bebidas gratis</div>
              <div className="badge">Doble puntos</div>
              <div className="badge">Upgrade de nivel</div>
            </div>
          </div>
          <div className="card">
            <h3>Perfil del miembro</h3>
            <p>
              Nombre, nivel, puntos actuales, historial de compras, premios
              activos y cupones disponibles. Todo protegido por roles.
            </p>
            <p>
              “Tu nivel define tu acceso” — el panel y las promociones se
              adaptan automáticamente.
            </p>
          </div>
        </section>

        <section className="card" style={{ marginTop: "32px" }}>
          <h3 className="section-title">Panel admin (protegido)</h3>
          <div className="grid grid-3">
            <div>
              <p>
                Gestión de usuarios, productos, pedidos, confirmaciones de pago
                y asignación manual de puntos.
              </p>
            </div>
            <div>
              <p>
                Configuración de ruleta, niveles, beneficios, promociones y
                notificaciones push.
              </p>
            </div>
            <div>
              <p>
                Estadísticas, logs de acciones y reglas antifraude para evitar
                duplicación de puntos.
              </p>
            </div>
          </div>
        </section>

        <section className="card" style={{ marginTop: "32px" }}>
          <h3 className="section-title">Arquitectura propuesta</h3>
          <div className="grid grid-3">
            <div>
              <p>
                Next.js PWA con manifest, service worker y rutas protegidas.
                Deploy recomendado en Vercel con dominio personalizado.
              </p>
            </div>
            <div>
              <p>
                Backend en Firebase o Supabase: auth con roles, base de datos
                escalable y reglas de seguridad.
              </p>
            </div>
            <div>
              <p>
                Notificaciones push para pedidos confirmados, pedidos listos,
                ruleta disponible y novedades del café.
              </p>
            </div>
          </div>
        </section>

        <p className="footer">
          White Rabbit Coffee · PWA exclusiva · Diseño oscuro minimalista.
        </p>
      </main>
    </div>
  );
}
