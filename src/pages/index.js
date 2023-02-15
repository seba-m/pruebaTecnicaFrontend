import CustomCard from '@/components/CustomCard';
import { useState, useEffect } from 'react'

import { Spinner, Container, Row, Col, Card } from 'react-bootstrap';

import GeneralService from '@/Services/General.service';
import Error from './_error';
import { Spiner } from '@/components/Spiner';

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
        <h2 className="text-center">{data.nombreCompleto} ({data.tipo})</h2>
        <Row className="justify-content-md-center pt-3">
          <Col xs lg="4">
            <CustomCard data={data.precio.compra} tipo={"Compra"}/>
          </Col>
          <Col xs lg="4">
            <CustomCard data={data.precio.venta} tipo={"Venta"} />
          </Col>
        </Row>
      </Container>
    </>
  )
}
