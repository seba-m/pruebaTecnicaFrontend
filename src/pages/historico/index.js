import React, { useState, useEffect } from "react";

import { Container, Row } from "react-bootstrap";
import { Table } from "@/components/Table";
import { Charts } from "@/components/Charts";
import { Spiner } from '@/components/Spiner';

import GeneralService from "@/Services/General.service";
import Error from "@/pages/_error";

import { trunc } from '@/utils/utils';

export default function History() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [message, setMessage] = useState(null);

    useEffect(() => {
        const fetchData = () => {

            GeneralService.getHistorial().then((data) => {
                setData(data);
                setIsLoading(false);
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

    if (isLoading) {
        return (
            <Spiner />
        );
    }

    if (message) {
        return (
            <Error statusCode={404} title={message} />
        );
    }

    const columns = [
        {
            name: 'Fecha',
            selector: row => row.fecha,
            sortable: true,
        },
        {
            name: "Precio",
            selector: row => trunc(row.precio),
            sortable: true,
        }
    ];


    return (
        <Container>
            <h1 className="pb-2">Historial</h1>
            
            <Row className="pb-4">
                <Charts data={data}/>
            </Row>
            <Row className="pb-5">
                <Table columns={columns} data={data} isLoading={isLoading} />
            </Row>
        </Container>
    )
}
