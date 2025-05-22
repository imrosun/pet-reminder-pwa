'use client';
import { useReminderStore } from '../../stores/reminderStore';
import ReminderCard from '../../components/ReminderCard';
import CalendarStrip from '../../components/CalendarStrip';
import Image from 'next/image';
import RemindersByTimeSlot from '@/components/RemindersByTimeSlot';

export default function HomePage() {
  const { reminders, markAsCompleted, deleteReminder } = useReminderStore();

  // Example grouping by timeSlot and status
  const grouped = {
    Morning: reminders.filter(r => r.timeSlot === 'Morning' && !r.completed),
    Afternoon: reminders.filter(r => r.timeSlot === 'Afternoon' && !r.completed),
    Evening: reminders.filter(r => r.timeSlot === 'Evening' && !r.completed),
    Completed: reminders.filter(r => r.completed),
  };

  return (
    <div className="p-4 pt-6 pb-20">
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

      {/* Filters */}
      {/* <FilterBar /> */}

      {/* Reminders by Time Slot */}
      {/* {['Morning', 'Afternoon', 'Evening'].map(slot => (
        <div key={slot}>
          <div className="flex items-center gap-2 my-4">
            <span className="text-xl">{slot === 'Morning' ? '🌅' : slot === 'Afternoon' ? '🌞' : '🌙'}</span>
            <span className="text-gray-500">{slot.toLowerCase()}</span>
          </div>
          {grouped[slot].length === 0 && <div className="text-gray-400 text-sm">No reminders.</div>}
          {grouped[slot].map(reminder => (
            <ReminderCard
              key={reminder.id}
              reminder={reminder}
              onComplete={markAsCompleted}
              onDelete={deleteReminder}
            />
          ))}
        </div>
      ))} */}

       <RemindersByTimeSlot
        grouped={grouped}
        markAsCompleted={markAsCompleted}
        deleteReminder={deleteReminder}
      />

      {/* Pending goals */}
      <div className="text-gray-500 font-semibold my-4">pending goals</div>
      {grouped.Completed.length === 0 && <div className="text-black font-bold bg-white p-4 rounded-xl">No pending reminders.</div>}
      {grouped.Completed.map(reminder => (
        <ReminderCard
          key={reminder.id}
          reminder={reminder}
          onDelete={deleteReminder}
        />
      ))}

      {/* Completed goals*/}
      <div className="text-gray-500 font-semibold my-4">completed goals</div>
      {grouped.Completed.length === 0 && <div className="text-gray-400 text-sm bg-[#d9d9d9] p-4 rounded-xl">No completed reminders.</div>}
      {grouped.Completed.map(reminder => (
        <ReminderCard
          key={reminder.id}
          reminder={reminder}
          onDelete={deleteReminder}
        />
      ))}
    </div>
  );
}
