import { Card } from 'react-bootstrap';

import { trunc } from '@/utils/utils';

export function CustomCard({ data, tipo }) {
    const { precio, precioAnterior } = data;

    const variacion = ((precioAnterior - precio) / precio) * 100;

    let colorClass = "text-muted"; // gris por defecto
    if (variacion > 0) {
        colorClass = "text-success"; // verde
    } else if (variacion < 0) {
        colorClass = "text-danger"; // rojo
    }


    return (
        <Card>
            <Card.Header>{tipo}</Card.Header>
            <Card.Body>
                <Card.Title>{trunc(precio)} USD</Card.Title>
                <Card.Text>
                    Variación: <span className={colorClass}>{variacion.toFixed(8)}%</span>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
