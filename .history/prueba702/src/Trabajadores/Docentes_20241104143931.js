import React, { useEffect, useState } from 'react';
import '../App.css';

const ListaDocentes = () => {
    const [docentes, setDocentes] = useState([]);

    useEffect(() => {
        const datos = async () => {
            const response = await fetch('http://localhost/apiprueba/api.php');
            const data = await response.json();
            setDocentes(data);
        };
        datos();
    }, []);

    return (
        <div>
            <h1 className="App App-link">DOCENTES INGENIERÍA INFORMÁTICA TESSFP</h1>
            <div>
                {docentes.map((docente) => (
                    <div key={docente.issemyn}>
                        <div>
                            Clave ISSEMYN: <strong>{docente.issemyn}</strong>
                        </div>
                        <div>
                            <p>Nombre: <strong>{docente.nombre}</strong></p>
                        </div>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ListaDocentes;
