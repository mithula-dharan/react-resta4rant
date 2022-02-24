import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom'
import { Row, Col, Image, Card, ListGroup } from 'react-bootstrap'

function RestaurantDetails() {

  const [data, setData] = useState([])
  const params = useParams()
  const { id } = params



  useEffect(() => {
    const fetchData = async () => {
      await fetch('/restaurants.json')
        .then((res) => res.json())
        .then((data) => setData(data.restaurants))
    }
    fetchData()
  }, [])

  const details = data.find((i) => i.id == id)
  console.log("details is", details);
  console.log("id is ", id);


  return (
    <>
      <Link className="btn bt-sm" to="/">Back</Link>
      {details ? (
        <Row className='my-3'>
          <Col md={3}>
            <Image className="img" src={details.photograph} alt={details.name} fluid />
          </Col>
          <Col md={4}>
            <ListGroup.Item style={{ width: '20rem' }}>
              <p>{details.neighborhood}</p>
            </ListGroup.Item>
            <ListGroup.Item style={{ width: '20rem' }}>
              <p>Cuisine: {details.cuisine_type}</p>
            </ListGroup.Item>
            <ListGroup.Item style={{ width: '20rem' }}>
              <p>Address: {details.address}</p>
            </ListGroup.Item>
          </Col>
          <Col md={4}>
            <ListGroup.Item style={{ width: '20rem' }}>
              <p> Monday:{details.operating_hours.Monday} </p>
              <p> Tuesday:{details.operating_hours.Tuesday} </p>
              <p> Wednesday:{details.operating_hours.Wednesday} </p>
              <p> Thursday:{details.operating_hours.Thursday} </p>
              <p> Friday:{details.operating_hours.Friday} </p>
              <p>Saturday:{details.operating_hours.Saturday} </p>
              <p> Sunday:{details.operating_hours.Sunday} </p>
            </ListGroup.Item>
          </Col>
          <Row>
            <Card style={{ width: '18rem' }}>
              <Card.Header>Featured</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item></ListGroup.Item>
                <ListGroup.Item></ListGroup.Item>
              </ListGroup>
            </Card>
          </Row>
        </Row>

      ) : null}
    </>
  );
}

export default RestaurantDetails;
