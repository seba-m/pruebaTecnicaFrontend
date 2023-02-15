import React, { useState, useEffect } from "react";

import { Container } from "react-bootstrap";
import { Table } from "@/components/table";

import GeneralService from "@/Services/General.service";
import Error from "@/pages/_error";

import { trunc } from '@/utils/utils';

export default function History() {
    const [isLoading, setIsLoading] = useState(true);
    const [data, setData] = useState([]);
    const [message, setMessage] = useState(null);

    useEffect(() => {
        GeneralService.getHistorico().then((data) => {
            setData(data);
            setIsLoading(false);
        }).catch((error) => {
            setMessage(error.message);
        });
    }, []);

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
            name: "Compra",
            selector: row => trunc(row.compra),
            sortable: true,
        },
        {
            name: "Venta",
            selector: row => trunc(row.venta),
            sortable: true,
        },
    ];


    return (
        <Container>
            <h1 className="pb-2">Historico</h1>

            <Table columns={columns} data={data} isLoading={isLoading} />
        </Container>
    )
}
