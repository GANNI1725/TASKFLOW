export const mockTasks = [
  {
    id: '1',
    title: 'Design TaskFlow Landing Page',
    description: 'Create a modern landing page with hero section and features.',
    status: 'In Progress',
    priority: 'High',
    dueDate: '2024-05-15',
    category: 'Design',
  },
  {
    id: '2',
    title: 'Implement Auth System',
    description: 'Setup JWT authentication and login/signup flows.',
    status: 'Todo',
    priority: 'Critical',
    dueDate: '2024-05-20',
    category: 'Backend',
  },
  {
    id: '3',
    title: 'Responsive Dashboard UI',
    description: 'Develop the main dashboard layout with sidebar and widgets.',
    status: 'Completed',
    priority: 'Medium',
    dueDate: '2024-05-10',
    category: 'Frontend',
  },
  {
    id: '4',
    title: 'Database Schema Design',
    description: 'Define models for users, tasks, and teams.',
    status: 'Todo',
    priority: 'High',
    dueDate: '2024-05-18',
    category: 'Backend',
  },
];

export const mockActivities = [
  { id: 1, user: 'John Doe', action: 'completed', target: 'Responsive Dashboard UI', time: '2 hours ago' },
  { id: 2, user: 'Jane Smith', action: 'commented on', target: 'Design TaskFlow Landing Page', time: '5 hours ago' },
  { id: 3, user: 'Mike Ross', action: 'assigned', target: 'Implement Auth System', time: 'Yesterday' },
];

export const mockStats = [
  { label: 'Total Tasks', value: '24', change: '+12%', icon: 'ClipboardList' },
  { label: 'Completed', value: '18', change: '+5%', icon: 'CheckCircle' },
  { label: 'In Progress', value: '4', change: '-2%', icon: 'Clock' },
  { label: 'Pending', value: '2', change: '0%', icon: 'AlertCircle' },
];
