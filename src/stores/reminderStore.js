import { create } from 'zustand';

export const useReminderStore = create((set) => ({
  reminders: [
    // Example initial data
    {
      id: 1,
      title: 'Morning Walk',
      notes: '',
      time: '07:00',
      frequency: 'Everyday',
      petName: 'Browny',
      category: 'General',
      timeSlot: 'Morning',
      completed: false,
    },
    {
      id: 2,
      title: 'Lunch',
      notes: '',
      time: '13:00',
      frequency: 'Everyday',
      petName: 'Max',
      category: 'Lifestyle',
      timeSlot: 'Afternoon',
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
