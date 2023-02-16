import { useState, useEffect } from 'react'

import { CustomCard } from '@/components/CustomCard';
import { Spiner } from '@/components/Spiner';

import { Container, Row, Col } from 'react-bootstrap';

import GeneralService from '@/Services/General.service';
import Error from './_error';

export default function Home() {

  const [data, setData] = useState(null);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    const fetchData = () => {

      GeneralService.getPrecio().then((data) => {
        setData(data);
      }).catch((error) => {
        setMessage(error.message);
      });

    };

    const intervalId = setInterval(() => {

      fetchData();

    }, 10000);

    fetchData();
    return () => clearInterval(intervalId);
  }, []);

  if (!data && !message) {
    return (
      <Spiner />
    );
  }

  if (message) {
    return (
      <Error statusCode={404} title={message}/>
    );
  }

  return (
    <>      
      <Container>
        <h1>Inicio</h1>
        {
          data.map((item, index) => {
            return (
              <Row className="justify-content-md-center pt-3" key={item}>
                <h2 className="text-center">{item.nombreCompleto} ({item.tipo})</h2>
                <Col xs lg="4">
                  <CustomCard data={item} tipo={"Precio"} />
                </Col>
              </Row>
            )
          }
          )
        }
      </Container>
    </>
  )
}
