import { Card } from 'react-bootstrap';

import { trunc } from '@/utils/utils';

export default function CustomCard({ data, tipo }) {
    return (
        <Card>
            <Card.Header>{tipo}</Card.Header>
            <Card.Body>
                <Card.Title>{trunc(data.valor)} {data.moneda}</Card.Title>
                <Card.Text>
                    Variación: {trunc(data.variacion)}%
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
