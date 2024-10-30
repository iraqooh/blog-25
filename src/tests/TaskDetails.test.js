import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import TaskDetails from '../components/TaskDetails';
import * as router from 'react-router';

describe('TaskDetails Component', () => {
  const mockTask = {
    $id: '1',
    name: 'Test Task',
    description: 'Description for Test Task',
    startDate: '2023-10-01T00:00:00Z',
    dueDate: '2023-10-15T00:00:00Z',
    priority: 'High',
    status: 'Ongoing',
    assignees: ['Assignee1'],
    dependencies: [],
    resources: [],
    estimate: '3 days',
    risk: 'Low',
    constraints: 'Time',
    deliverables: 'Documentation',
    taskType: 'Development',
    predecessors: [],
    successors: [],
    notes: 'Initial notes',
  };

  beforeEach(() => {
    jest.spyOn(router, 'useLocation').mockReturnValue({
      state: { task: mockTask },
    });
  });

  test('renders task details correctly', () => {
    render(
      <MemoryRouter initialEntries={['/task/1']}>
        <Routes>
          <Route path="/task/:id" element={<TaskDetails />} />
        </Routes>
      </MemoryRouter>
    );
    screen.getAllByText(/Test Task/i).forEach(text => expect(text).toBeInTheDocument());
    screen.getAllByText(/Description for Test Task/i).forEach(text => expect(text).toBeInTheDocument());
  });
});
