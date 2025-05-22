import { useReminderStore } from '../stores/reminderStore';

export function useReminders() {
  const store = useReminderStore();
  return store;
}
