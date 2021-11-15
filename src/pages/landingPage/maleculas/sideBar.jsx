import React, { Component } from "react";
import { Card, CardBody, Row, Col } from "reactstrap";
import "./navSecStar.css";
class Sidebar extends Component {
  render() {
    return (
      <Card className='shadow-lg' id="sideBarId">
        <CardBody>
          <Row className="input-group mt-4 ">
            <Col sm='3' className="input-group-text" id="inputGroup-sizing-default">
              Main
            </Col>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </Row>
          <Row className="input-group mb-3 mt-5">
            <Col sm='3' className="input-group-text" id="inputGroup-sizing-default">
              Salad
            </Col>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-default"
            />
          </Row>

          <Row className="input-group input-group-sm mb-3 mt-5">
            <Col sm='3' className="input-group-text" id="inputGroup-sizing-sm">
              Dessert
            </Col>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
          </Row>
          <Row className="input-group input-group-sm mb-3 mt-5">
            <Col sm='3' className="input-group-text" id="inputGroup-sizing-sm">
              Drink
            </Col>
            <input
              type="text"
              className="form-control"
              aria-label="Sizing example input"
              aria-describedby="inputGroup-sizing-sm"
            />
          </Row>
          <Row sm='1' className="d-flex flex-column justify-content-around">
            <p className="mt-3">Do you want to Buy?</p>
            <div className="d-flex flex-row justify-content-around">
              <button className="btn btn-danger">No</button>
              <button className="btn btn-success">Yes</button>
            </div>
          </Row>
        </CardBody>
      </Card>
    );
  }
}

export default Sidebar;
