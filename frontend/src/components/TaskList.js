import React, { Component } from "react";
import { Table } from "reactstrap";
import NewTaskModal from "./NewTaskModal";

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class TaskList extends Component {
  render() {
    const tasks = this.props.tasks;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Task Priority</th>
            <th>Task Status</th>
            <th>Deadline</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!tasks || tasks.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>Ops, no one here yet</b>
              </td>
            </tr>
          ) : (
          tasks.map(task => (
              <tr key={task.pk}>
                <td>{task.name}</td>
                <td>{task.description}</td>
                <td>{task.category}</td>
                <td>{task.task_priority}</td>
                <td>{task.task_status}</td>
                <td>{task.deadline}</td>
                <td align="center">
                  <NewTaskModal
                    create={false}
                    task={task}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={task.pk}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default TaskList;