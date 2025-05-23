'use client';
import { useReminderStore } from '../../stores/reminderStore';
import ReminderCard from '../../components/ReminderCard';
import CalendarStrip from '../../components/CalendarStrip';
import Image from 'next/image';
import RemindersByTimeSlot from '@/components/RemindersByTimeSlot';
import Link from 'next/link';

export default function DailyRemindersPage() {
  const { reminders, markAsCompleted } = useReminderStore();

  // Group by timeSlot and completed status
  const grouped = {
    Morning: reminders.filter(r => r.timeSlot === 'Morning' && !r.completed),
    Afternoon: reminders.filter(r => r.timeSlot === 'Afternoon' && !r.completed),
    Evening: reminders.filter(r => r.timeSlot === 'Evening' && !r.completed),
    Pending: reminders.filter(r => r.category === 'Vet' && !r.completed),
    Completed: reminders.filter(r => r.completed),
  };

  return (
    <div className="p-4 pt-6 pb-20 bg-[#f3f4f6] w-full md:w-1/2">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl text-[#171717] font-bold">daily reminders</h1>
        <span className="text-gray-500 font-semibold">view all</span>
      </div>

      {/* Calendar */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2 ml-2">
          <Image src="/assets/zap_icon.svg" width="15" height="15" alt="zap" />
          <span className="text-gray-500 font-semibold">your streaks</span>
        </div>
        <CalendarStrip />
      </div>

      {/* Time slot toggle section */}
      <RemindersByTimeSlot
        grouped={grouped}
        markAsCompleted={markAsCompleted}
      />

      {/* Pending goals */}
      <div className="text-gray-500 font-semibold my-4">pending goals</div>
      {grouped.Pending.length === 0 && (
        <div className="text-black font-bold bg-white p-4 rounded-xl">
          No pending reminders.
        </div>
      )}
      {grouped.Pending.map(reminder => (
        <ReminderCard
          key={reminder.id}
          reminder={reminder}
          onComplete={markAsCompleted}
        />
      ))}

      {/* Completed goals */}
      <div className="text-gray-500 font-semibold my-4">completed goals</div>
      {grouped.Completed.length === 0 && (
        <div className="text-gray-400 text-sm bg-[#d9d9d9] p-4 rounded-xl">
          No completed reminders.
        </div>
      )}
      {grouped.Completed.map(reminder => (
        <ReminderCard
          key={reminder.id}
          reminder={reminder}
          completedView // Only show title and icon
        />
      ))}

      {/* Add reminder button */}
    

      <Link href="/add-reminder" className='flex justify-end'>
        <Image className='fixed bottom-20' src="/assets/add_button.svg" width="60" height="60" alt="zap" />
      </Link>
    </div>
  );
}
