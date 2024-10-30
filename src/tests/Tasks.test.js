import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Tasks from '../components/Tasks';
import { databases } from '../config';

jest.mock('../config', () => ({
  databases: {
    listDocuments: jest.fn(),
  },
}));

describe('Tasks Component', () => {
  const mockTasks = [
    {
      $id: '1',
      name: 'Ongoing Task',
      description: 'Description for ongoing task',
      createdAt: new Date().toISOString(),
      status: 'Ongoing',
    },
    {
      $id: '2',
      name: 'Upcoming Task',
      description: 'Description for upcoming task',
      createdAt: new Date().toISOString(),
      status: 'Upcoming',
    },
    {
      $id: '3',
      name: 'Completed Task',
      description: 'Description for completed task',
      createdAt: new Date().toISOString(),
      status: 'Completed',
    },
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
        <Tasks />
      </MemoryRouter>
    );

    expect(await screen.findByText(/In Progress/i)).toBeInTheDocument();
  });

  test('renders tasks in tabs correctly', async () => {
    render(
      <MemoryRouter>
        <Tasks />
      </MemoryRouter>
    );

    const ongoingTasks = await screen.findAllByText(/ongoing task/i);
    const upcomingTasks = await screen.findAllByText(/upcoming task/i);
    const completedTasks = await screen.findAllByText(/completed task/i);

    ongoingTasks.forEach(task => expect(task).toBeInTheDocument());
    upcomingTasks.forEach(task => expect(task).toBeInTheDocument());
    completedTasks.forEach(task => expect(task).toBeInTheDocument());
  });

  // test('displays no tasks found message for empty categories', async () => {
  //   databases.listDocuments.mockResolvedValueOnce({ documents: [] });

  //   render(
  //     <MemoryRouter>
  //       <Tasks />
  //     </MemoryRouter>
  //   );

  //   await waitFor(() => {
  //     expect(screen.getByText(/no tasks found/i)).toBeInTheDocument();
  //   });
  // });

//   test('handles errors gracefully', async () => {
//     databases.listDocuments.mockRejectedValueOnce(new Error('Fetch error'));

//     render(
//       <MemoryRouter>
//         <Tasks />
//       </MemoryRouter>
//     );

//     await waitFor(() => {
//       expect(screen.getByText(/oops.../i)).toBeInTheDocument();
//     });
//   });
});
