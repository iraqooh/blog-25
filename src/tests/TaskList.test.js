import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import TaskList from '../components/TaskList';
import { databases } from '../config';

jest.mock('../config', () => ({
  databases: {
    listDocuments: jest.fn(),
  },
}));

describe('TaskList Component', () => {
  const mockTasks = [
    {
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
    }
  ];

  beforeEach(() => {
    databases.listDocuments.mockResolvedValueOnce({ documents: mockTasks });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders loading state', async () => {
    render(
      <MemoryRouter>
        <TaskList assignee="assignee1" title="My Task List" />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/My Task List/i)).toBeInTheDocument();
    });
  });

  // test('renders tasks correctly', async () => {
  //   render(
  //     <MemoryRouter>
  //       <TaskList assignee="assignee1" title="My Task List" />
  //     </MemoryRouter>
  //   );

  //   // Check if task name is displayed
  //   await waitFor(() => {
  //     expect(screen.getByText(/Test Task/i)).toBeInTheDocument();
  //   });

  //   // Check if task description is displayed
  //   await waitFor(() => {
  //     expect(screen.getByText(/Description for Test Task/i)).toBeInTheDocument();
  //   });
  // });

  test('displays no tasks found message', async () => {
    databases.listDocuments.mockResolvedValueOnce({ documents: [] });

    render(
      <MemoryRouter>
        <TaskList assignee="assignee3" title="My Task List" />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/no tasks found/i)).toBeInTheDocument();
    });
  });

  // test('handles errors gracefully', async () => {
  //   databases.listDocuments.mockRejectedValueOnce(new Error('Fetch error'));

  //   render(
  //     <MemoryRouter>
  //       <TaskList assignee="assignee1" title="My Task List" />
  //     </MemoryRouter>
  //   );

  //   await waitFor(() => {
  //     expect(screen.getByText(/oops.../i)).toBeInTheDocument();
  //   });
  // });
});
