import React, { useState, useEffect } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { databases } from '../config';
import Spinner from './Spinner';
import Swal from 'sweetalert2';

function TaskList({ assignee, title }) {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const init = async () => {
      try {
        const response = await databases.listDocuments(
          "blog25",
          "66c6cd7100358bd4dd5a"
        );
        setTasks(response.documents);
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
        console.error('Failed to fetch tasks: ', error);
      } finally {
        setLoading(false);
      }
    };

    init();
  }, []);

  const filterTasks = () => tasks.filter(task => task.assignees.includes(assignee));

  const renderTasks = (filteredTasks) => {
    return filteredTasks.length > 0 ? (
      filteredTasks.map(({ $id, name, description, createdAt }) => (
        <Card key={$id} className="mb-3">
          <Card.Body>
            <Card.Title>
              <Link to={`/task/${$id}`} state={{ name, description }}>
                {name}
              </Link>
            </Card.Title>
            <Card.Text>{description}</Card.Text>
            <Card.Text>Date Created: {new Date(createdAt).toLocaleDateString()}</Card.Text>
          </Card.Body>
        </Card>
      ))
    ) : (
      <p>No tasks found.</p>
    );
  };

  return (
    <Container className="mt-5 page">
      <Row>
        <Col>
          <h2>{title}</h2>
          {loading ? (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: "100vh",
              }}
            >
              <Spinner size="100" />
            </div>
          ) : (
            renderTasks(filterTasks())
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default TaskList;