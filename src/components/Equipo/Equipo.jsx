import './Equipo.css'

const miembros = [
    {
        nombre: 'Nombre Apellido',
        rol: 'Pastor Principal',
        foto: null,
    },
    {
        nombre: 'Nombre Apellido',
        rol: 'Pastor de Jóvenes',
        foto: null,
    },
]

const Equipo = () => {
    return (
        <section className="equipo">
            <div className="container">
                <h2 className="equipo-title">Equipo de Buenos Aires</h2>
                <div className="equipo-grid">
                    {miembros.map((miembro, index) => (
                        <div key={index} className="equipo-card">
                            <div className="equipo-foto">
                                {miembro.foto
                                    ? <img src={miembro.foto} alt={miembro.nombre} />
                                    : <div className="equipo-foto-placeholder" />
                                }
                            </div>
                            <h3 className="equipo-nombre">{miembro.nombre}</h3>
                            <p className="equipo-rol">{miembro.rol}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Equipo