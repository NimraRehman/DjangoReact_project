import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class NewTaskForm extends React.Component {
  state = {
    pk: 0,
    name: "",
    description: "",
    category: "",
    task_priority: "",
    task_status: "",
    deadline: ""
  };

  componentDidMount() {
    if (this.props.task) {
      const { pk, name, description, category, task_priority, task_status, deadline } = this.props.task;
      this.setState({ pk, name, description, category, task_priority, task_status, deadline });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createTask = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editTask = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.task ? this.editTask : this.createTask}>
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
            type="text"
            name="name"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.name)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="description">Description:</Label>
          <Input
            type="text"
            name="description"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.description)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="category">Category:</Label>
          <Input
            type="text"
            name="category"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.category)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="task_priority">Task Priority:</Label>
          <Input
            type= "number"
            name="task_priority"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.task_priority)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="task_status">Task Status:</Label>
          <Input
            type="boolean"
            name="task_status"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.task_status)}
          />
        </FormGroup>
          <Label for="deadline">Deadline:</Label>
          <Input
            type="date"
            name="deadline"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.deadline)}
          />
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewTaskForm;