import React, { Component } from "react";
// import { Dropdown } from "react-bootstrap";
import { getMainCourse } from "../fakeGenreService";
import {Col, Row} from "reactstrap";
import "./food.css";

class MainCourse extends Component {
  state = {
    mainCourse: [],
  };

  componentDidMount() {
    const mainCourse = getMainCourse();
    this.setState({ mainCourse });
  }
  handleDecrement = (id) => {
    const a = this.state.mainCourse.filter((salad) => salad.id == id);
    a[0].count = a[0].count - 1;
    this.setState((prevStat) => ({ count: a }));
  };
  handleIncrement = (id) => {
    const a = this.state.mainCourse.filter((salad) => salad.id == id);
    a[0].count = a[0].count + 1;
    this.setState((prevStat) => ({ count: a }));
  };
  render() {
    console.log(this.state.mainCourse);
    return (
      <Row className="Salads w-100 d-flex flex-row justify-content-around  row">
        <Row className='d-flex justify-content-end'>
          <Col sm='2' className='d-flex justify-content-end mt-3'>
            <button className='btn btn-info' onClick={() => console.log(this.props.history.goBack())}>Back</button>
          </Col>
        </Row>
        {this.state.mainCourse.map((salad) => (
          <Row
            className="aSaladDiv d-flex flex-column justify-content-between mt-4 col-4"
            key={salad.key}
          >
            <Row className="saladImg">
              <img src={salad.img} />
            </Row>
            <Row className="d-flex flex-row justify-content-center ">
              <Col class="numberOforders bg-light d-flex flex-row justify-content-between ">
                <button
                  className="btn badge badge-rounded btn-danger"
                  type="button"
                  onClick={() => this.handleDecrement(salad.id)}
                >
                  -
                </button>
                <div className="text-dark mt-2 badge badge-lg badge-warning">
                  {salad.count}
                </div>
                <button
                  className="btn badge badge-rounded btn-success"
                  onClick={() => this.handleIncrement(salad.id)}
                >
                  +
                </button>
              </Col>
              <Col sm='2'>
                <h4 className="text-secondary bg-light">Price:{salad.price}</h4>
              </Col>
            </Row>
          </Row>
        ))}
      </Row>
    );
  }
}

export default MainCourse;
