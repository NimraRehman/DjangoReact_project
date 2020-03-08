import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import TaskList from "./TaskList";
import NewTaskModal from "./NewTaskModal";

import axios from "axios";

import { API_URL } from "../constants";

class Home extends Component {
  state = {
    tasks: []
  };

  componentDidMount() {
    this.resetState();
  }

  getStudents = () => {
    axios.get(API_URL).then(res => this.setState({ tasks: res.data }));
  };

  resetState = () => {
    this.tasks();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
        <Row>
          <Col>
            <TaskList
              tasks={this.state.tasks}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewTaskModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;