'use client';
import { useRouter } from 'next/navigation';
import ReminderForm from '../../components/ReminderForm';
import { useReminderStore } from '../../stores/reminderStore';

export default function AddReminderPage() {
  const router = useRouter();
  const { addReminder } = useReminderStore();

  const handleSubmit = (data) => {
    addReminder(data);
    router.push('/');
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="p-4 flex justify-between items-center border-b bg-white">
        <button onClick={() => router.back()} className="p-2">
          <span role="img" aria-label="Back">⬅️</span>
        </button>
        <h1 className="text-lg font-medium">Add Reminder</h1>
        <button form="reminder-form" type="submit" className="text-green-500 font-medium">
          Save
        </button>
      </div>
      <ReminderForm onSubmit={handleSubmit} />
    </div>
  );
}
