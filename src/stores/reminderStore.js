import { create } from 'zustand';

export const useReminderStore = create((set) => ({
  reminders: [
     {
      id: 1,
      title: 'Morning Walk',
      notes: '',
      time: '10:00am',
      frequency: 'Everyday',
      petName: 'Browny',
      category: 'General',
      timeSlot: 'Morning',
      completed: false,
    },
    {
      id: 2,
      title: 'Breakfast Walk',
      notes: '',
      time: '07:00am',
      frequency: 'Everyday',
      petName: 'Browny',
      category: 'General',
      timeSlot: 'Morning',
      completed: false,
    },
    {
      id: 3,
      title: 'Post Breakfast Walk',
      notes: '',
      time: '09:00am',
      frequency: 'Everyday',
      petName: 'Browny',
      category: 'General',
      timeSlot: 'Morning',
      completed: false,
    },
    {
      id: 4,
      title: 'Lunch',
      notes: '',
      time: '1:00pm',
      frequency: 'Everyday',
      petName: 'Max',
      category: 'Lifestyle',
      timeSlot: 'Afternoon',
      completed: false,
    },
    {
      id: 5,
      title: 'Snacks',
      notes: '',
      time: '4:00pm',
      frequency: 'Everyday',
      petName: 'Max',
      category: 'Lifestyle',
      timeSlot: 'Evening',
      completed: false,
    },
    {
      id: 6,
      title: 'Post Snacks',
      notes: '',
      time: '6:00pm',
      frequency: 'Everyday',
      petName: 'Max',
      category: 'Lifestyle',
      timeSlot: 'Evening',
      completed: false,
    },
     {
      id: 7,
      title: 'Vet Visit',
      notes: '',
      time: '6:00pm',
      frequency: 'Everyday',
      petName: 'Max',
      category: 'Vet',
      timeSlot: 'Pending',
      completed: false,
    },
  ],
  addReminder: (reminder) =>
    set((state) => ({
      reminders: [...state.reminders, { ...reminder, id: Date.now() }],
    })),
  deleteReminder: (id) =>
    set((state) => ({
      reminders: state.reminders.filter((r) => r.id !== id),
    })),
  markAsCompleted: (id) =>
    set((state) => ({
      reminders: state.reminders.map((r) =>
        r.id === id ? { ...r, completed: true } : r
      ),
    })),
}));
