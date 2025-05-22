'use client';
import { useParams, useRouter } from 'next/navigation';
import { useReminders } from '../../../hooks/useReminders';
import ReminderForm from '../../../components/ReminderForm';
import PageHeader from '../../../components/PageHeader';

export default function EditReminderPage() {
  const router = useRouter();
  const { id } = useParams();
  const { reminders, updateReminder } = useReminders();
  
  const currentReminder = reminders.find(r => r.id === Number(id));

  const handleSubmit = async (formData) => {
    try {
      await updateReminder(Number(id), formData);
      router.push('/');
    } catch (error) {
      console.error('Failed to update reminder:', error);
    }
  };

  if (!currentReminder) return <div>Reminder not found</div>;

  return (
    <div className="bg-gray-50 min-h-screen">
      <PageHeader title="Edit Reminder" onBack={() => router.back()} />
      <ReminderForm 
        onSubmit={handleSubmit} 
        initialData={currentReminder} 
      />
    </div>
  );
}
