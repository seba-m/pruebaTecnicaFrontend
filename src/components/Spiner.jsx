import { Row, Spinner } from 'react-bootstrap';

export function Spiner() {
  return (
      <Row className="d-flex justify-content-center align-middle h-100 overflow-hidden">
          <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
          </Spinner>
      </Row>
  )
}
