import CustomCard from '@/components/CustomCard';
import { useState, useEffect } from 'react'

import { Spinner, Container, Row, Col, Card } from 'react-bootstrap';

import GeneralService from '@/Services/General.service';
import Error from './_error';
import { Spiner } from '@/components/Spiner';

export default function Home() {

  const [venta, setVenta] = useState(null);
  const [compra, setCompra] = useState(null);

  const [message, setMessage] = useState(null);

  useEffect(() => {
    const fetchData = () => {

      GeneralService.getVenta().then((data) => {
        setVenta(data);
      }).catch((error) => {
        setMessage(error.message);
      });

      GeneralService.getCompra().then((data) => {
        setCompra(data);
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

  if ((!venta || !compra) && !message) {
    return (
      <Spiner />
    );
  }

  if (message) {
    return (
      <Error statusCode={404} title={message}/>
    );
  }

  const compraData = {
    valor: compra.precio.compra.valor,
    moneda: compra.precio.compra.moneda,
    variacion: compra.precio.compra.variacion,
  };

  const ventaData = {
    valor: venta.precio.venta.valor,
    moneda: venta.precio.venta.moneda,
    variacion: venta.precio.venta.variacion,
  };

  return (
    <>      
      <Container>
        <h1>Inicio</h1>
        <h2 className="text-center">{compra.nombreCompleto} ({compra.tipo})</h2>
        <Row className="justify-content-md-center pt-3">
          <Col xs lg="4">
            <CustomCard data={compraData} tipo={"Compra"}/>
          </Col>
          <Col xs lg="4">
            <CustomCard data={ventaData} tipo={"Venta"} />
          </Col>
        </Row>
      </Container>
    </>
  )
}
