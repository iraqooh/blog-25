import React, { useState, useEffect } from 'react';
import { Tab, Tabs, Container, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { databases } from '../config';
import Spinner from './Spinner';
import Swal from 'sweetalert2';

function Tasks() {
  const [key, setKey] = useState('ongoing');
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const init = async () => {
    try {
      const response = await databases.listDocuments(
        "blog25",
        "66c6cd7100358bd4dd5a"
      );
      setLoading(false);
      setTasks(response.documents);
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
      console.error('Failed to fetch tasks: ', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    init();
  }, [key]);

  const filterTasks = (status) => {
    return tasks.filter(task => task.status === status);
  };

  const renderTasks = (filteredTasks) => {
    return filteredTasks.length > 0 ? (
      filteredTasks.map(task => (
        <Card key={task.$id} className="mb-3">
          <Card.Body>
            <Card.Title>
            <Link to={`/task/${task.$id}`} state={{ task }}>{task.name}</Link>
            </Card.Title>
            <Card.Text>{task.description}</Card.Text>
            <Card.Text>Date Created: {new Date(task.createdAt).toLocaleDateString()}</Card.Text>
          </Card.Body>
        </Card>
      ))
    ) : (
      <p>No tasks found.</p>
    );
  };

  return (
    <Container className='mt-5 page'>
      <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="mb-3">
        <Tab eventKey="ongoing" title="In Progress">
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
            renderTasks(filterTasks('Ongoing'))
          )}
        </Tab>
        <Tab eventKey="upcoming" title="Upcoming">
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
            renderTasks(filterTasks('Upcoming'))
          )}
        </Tab>
        <Tab eventKey="completed" title="Completed">
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
            renderTasks(filterTasks('Completed'))
          )}
        </Tab>
      </Tabs>
    </Container>
  );
}

export default Tasks;
