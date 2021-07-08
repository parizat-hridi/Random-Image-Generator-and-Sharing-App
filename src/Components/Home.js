import React from 'react';
import { Carousel, CardGroup, Card } from 'react-bootstrap';

export const Home = () => {
  return (
    <div>
      <div>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block "
              src="https://source.unsplash.com/user/erondu/1500x500"
              alt="First slide"
            />
            <Carousel.Caption>
              <h3 style={{ backgroundColor: 'black', color: 'white' }}>First Random Image Slide</h3>
              <p style={{ backgroundColor: 'black', color: 'white' }}>This is the first random image slide label.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block "
              src="https://source.unsplash.com/collection/190727/1500x500"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3 style={{ backgroundColor: 'black', color: 'white' }}>Second Random Image Slide</h3>
              <p style={{ backgroundColor: 'black', color: 'white' }}>This is the second random image slide label.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block "
              src="https://source.unsplash.com/WLUHO9A_xik/1500x500"
              alt="Third slide"
            />

            <Carousel.Caption>
              <h3 style={{ backgroundColor: 'black', color: 'white' }}>Third Random Image Slide</h3>
              <p style={{ backgroundColor: 'black', color: 'white' }}>This is the third random image slide label.</p>
            </Carousel.Caption>

          </Carousel.Item>
        </Carousel>


      </div>
      <h1 className="fw-bold" style={{ textAlign: "center", paddingTop: "15px" }}> Important Features!</h1>

      <CardGroup style={{ padding: '30px' }}>
        <Card>
          <Card.Img variant="top" src="https://source.unsplash.com/WLUHO9A_xik/1500x500" />
          <Card.Body>
            <Card.Title>Random Image</Card.Title>
            <Card.Text>
              Every time you reload or land on the page, you will see a new image. There's a button also to change the image.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 5 mins ago</small>
          </Card.Footer>
        </Card>&ensp;&ensp;
        <Card>
          <Card.Img variant="top" src="https://source.unsplash.com/collection/190727/1500x500" />
          <Card.Body>
            <Card.Title>Tweet Image</Card.Title>
            <Card.Text>
              There's a button to tweet the image. You can tweet image directly by using our website.{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 5 mins ago</small>
          </Card.Footer>
        </Card>&ensp;&ensp;
        <Card>
          <Card.Img variant="top" src="https://source.unsplash.com/user/erondu/1500x500" />
          <Card.Body>
            <Card.Title>Download Image</Card.Title>
            <Card.Text>
              Our website gives you the advantage of downloading the image.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Last updated 5 mins ago</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    </div>


  )
}
