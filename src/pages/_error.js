import { Container, Row } from "react-bootstrap";

const statusCodes = {
    400: 'Bad Request!',
    404: 'This page could not be found!',
    405: 'Method Not Allowed!',
    500: 'Internal Server Error!'
};

function Error({ statusCode, title }) {

    const message = title || statusCodes[statusCode] || 'An unexpected error has occurred!';
    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ height: "50vh" }}> 
            <Row className="text-center">
                <h2 className="display-1 fw-bold">{statusCode}</h2>
                <h3 className="">{message}</h3>
            </Row>
        </Container>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode }
}

export default Error