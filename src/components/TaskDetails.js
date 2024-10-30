import React from 'react';
import { Container, ListGroup } from 'react-bootstrap';
import { useLocation, Navigate } from 'react-router-dom';
import Spinner from './Spinner';

function TaskDetails() {
  const location = useLocation();
  const { task } = location.state || {};

  if (!task) return <div><Spinner /> Loading task details...</div>;

  if (!task) {
    return <Navigate to="/tasks" />;
  }

  return (
    <Container className='my-5'>
      <h1>{task.name}</h1>
      <ListGroup className='mt-5'>
        {/* <ListGroup.Item>ID: {task.$id}</ListGroup.Item> */}
        <ListGroup.Item>Description: {task.description}</ListGroup.Item>
        <ListGroup.Item>Start Date: {task.startDate.split('T')[0]}</ListGroup.Item>
        <ListGroup.Item>Due Date: {task.dueDate.split('T')[0]}</ListGroup.Item>
        <ListGroup.Item>Priority: {task.priority}</ListGroup.Item>
        <ListGroup.Item>Status: {task.status}</ListGroup.Item>
        <ListGroup.Item>Assignees: {task.assignees.join(', ')}</ListGroup.Item>
        <ListGroup.Item>Dependencies: {task.dependencies.join(', ')}</ListGroup.Item>
        <ListGroup.Item>Resources: {task.resources.join(', ')}</ListGroup.Item>
        <ListGroup.Item>Estimate: {task.estimate}</ListGroup.Item>
        <ListGroup.Item>Risk: {task.risk}</ListGroup.Item>
        <ListGroup.Item>Constraints: {task.constraints}</ListGroup.Item>
        <ListGroup.Item>Deliverables: {task.deliverables}</ListGroup.Item>
        <ListGroup.Item>Task Type: {task.taskType}</ListGroup.Item>
        <ListGroup.Item>Predecessors: {task.predecessors.join(', ')}</ListGroup.Item>
        <ListGroup.Item>Successors: {task.successors.join(', ')}</ListGroup.Item>
        <ListGroup.Item>Notes: {task.notes}</ListGroup.Item>
      </ListGroup>
    </Container>
  );
}

export default TaskDetails;
