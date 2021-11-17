import Select from 'react-select';
import React, { Component } from 'react';
import { Card, CardBody, Row, Col } from 'reactstrap';
import {
  getMainCoursesSelectContent,
  getSaladSelectContent,
  getDesertSelectContent,
  getDrinkSelectContent,
} from '../../../fakeGenreService';
import './navSecStar.css';
//////Select data from fakeGenreService
const main = getMainCoursesSelectContent();
const salad = getSaladSelectContent();
const desert = getDesertSelectContent();
const drink = getDrinkSelectContent();

class Sidebar extends Component {
  render() {
    return (
      <Card className="shadow-lg" id="sideBarId">
        <CardBody>
          <Row className="input-group">
            <Col>
              <label for="select-main" className="text-light">
                Main Course
              </label>
              <Select
                id="select-main"
                isClearable={false}
                isMulti
                name="colors"
                options={main}
                className="react-select"
                classNamePrefix="select"
              />
            </Col>
          </Row>
          <Row className="input-group mb-3 mt-5">
            <Col>
              <label for="select-salad" className="text-light">
                Salad
              </label>
              <Select
                id="select-salad"
                isClearable={false}
                isMulti
                name="colors"
                options={salad}
                className="react-select"
                classNamePrefix="select"
              />
            </Col>
          </Row>

          <Row className="input-group input-group-sm mb-3 mt-5">
            <Col>
              <label for="select-desert" className="text-light">
                Desert
              </label>
              <Select
                id="select-desert"
                isClearable={false}
                isMulti
                name="colors"
                options={desert}
                className="react-select"
                classNamePrefix="select"
              />
            </Col>
          </Row>
          <Row className="input-group input-group-sm mb-3 mt-5">
            <Col>
              <label for="select-drink" className="text-light">
                Drink
              </label>
              <Select
                id="select-drink"
                isClearable={false}
                isMulti
                name="colors"
                options={drink}
                className="react-select"
                classNamePrefix="select"
              />
            </Col>
          </Row>
          <Row sm="1" className="d-flex flex-column justify-content-around mt-2">
            <h4 className="mt-3 text-light d-flex justify-content-center">You Done?</h4>
            <div className="d-flex flex-row justify-content-around mt-3">
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
