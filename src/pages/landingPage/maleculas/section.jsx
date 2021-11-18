import React, { Component } from 'react';
import './navSecStar.css';
import { getHouses } from '../../../fakeGenreService';
import { CardBody, Card } from 'reactstrap';
import { Carousel } from 'react-bootstrap';
import backgroundImg from '../../../concepts/body-background-video.mp4';
class Section extends Component {
  state = {
    food: [],
  };
  componentDidMount() {
    const food = getHouses();
    this.setState({ food });
  }

  render() {
    return (
      <Card className="conatainer shadow-sm" id="section">
        <CardBody>
          <video id="myVideo" autoplay="true" loop="loop" muted>
            <source src={backgroundImg} type="video/mp4" />
          </video>
          <div className="w-100 d-flex flex-column align-items-center text-light  mt-2">
            <h1 className="fst-italic text-light">CARAVAN</h1>
          </div>
          <Carousel controls={false} className="Carusel">
            {this.state.food.map((food) => (
              <Carousel.Item interval={2000} className="corusel-meal-section">
                <div className="mt-2">
                  <h3 style={{ textAlign: 'center', color: '#fff' }}>{food.title}</h3>
                </div>
                <div className="imgItem d-flex justify-content-center">
                  <img
                    id="corusel-img"
                    alt={food.title}
                    src={food.img}
                    onClick={() => this.props.history.push(food.title)}
                  />
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </CardBody>
      </Card>
    );
  }
}

export default Section;
