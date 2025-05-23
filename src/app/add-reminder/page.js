'use client';
import { useRouter } from 'next/navigation';
import ReminderForm from '../../components/ReminderForm';
import { useReminderStore } from '../../stores/reminderStore';
import Image from 'next/image';
import { useState } from 'react';

export default function AddReminderPage() {
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  const { addReminder } = useReminderStore();

  const handleSubmit = (data) => {
    addReminder(data);
    setSuccess(true);
    setTimeout(() => setSuccess(false), 3000);
    router.push('/');
  };

  return (
    <div className="bg-[#f3f4f6] min-h-screen pb-20 w-full md:w-1/2">
      <div className="p-6 flex justify-between items-center bg-white">
        <button onClick={() => router.back()} >
          <Image src="/assets/back_button.svg" width="30" height="20" alt="back" />
        </button>

        <h1 className="text-lg font-medium">Add Reminder</h1>
        <button form="reminder-form" type="submit" className="text-[#019D6B] font-medium">
          Save
        </button>
      </div>
       {success && (
        <div className="mb-4 w-full max-w-md text-center bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded">
          Reminder added successfully!
        </div>
      )}
      <ReminderForm onSubmit={handleSubmit} />
    </div>
  );
}
