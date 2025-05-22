import { useState } from "react";
import ReminderCard from "./ReminderCard";
import Image from "next/image"

const TIME_SLOTS = [
  { label: "Morning", icon: <Image src="/assets/Sun.svg" width="15" height="15" alt="sun"/>},
  { label: "Afternoon", icon: <Image src="/assets/Sun.svg" width="15" height="15" alt="sun"/> || "🌞" },
  { label: "Evening", icon: <Image src="/assets/Sun.svg" width="15" height="15" alt="sun"/> || "🌙" },
];

export default function RemindersByTimeSlot({ grouped, markAsCompleted, deleteReminder }) {
  const [currentSlotIdx, setCurrentSlotIdx] = useState(0);

  const handleToggle = () => {
    setCurrentSlotIdx((prev) => (prev + 1) % TIME_SLOTS.length);
  };

  const { label, icon } = TIME_SLOTS[currentSlotIdx];
  const reminders = grouped[label] || [];

  return (
    <div>
      {/* Header with icon, label, and toggle */}
      <div className="flex items-center justify-between my-4">
        <div className="flex items-center gap-2">
          <span className="text-xl ml-2">{icon}</span>
          <span className="text-gray-500 font-semibold">{label.toLowerCase()}</span>
        </div>
        <button
          onClick={handleToggle}
          aria-label="Toggle time slot"
          className="p-2 rounded-full hover:bg-green-100 transition"
        >
          {/* You can use a real icon here */}
          <Image src="/assets/ArrowsLeftRight.svg" width="20" height="20" alt="arrow"/>
          {/* <span role="img" aria-label="Toggle">🔄</span> */}
        </button>
      </div>

      {/* Reminders for current slot */}
      {reminders.length === 0 ? (
        <div className="text-gray-400 text-sm">No reminders.</div>
      ) : (
        reminders.map((reminder) => (
          <ReminderCard
            key={reminder.id}
            reminder={reminder}
            onComplete={markAsCompleted}
            onDelete={deleteReminder}
          />
        ))
      )}
    </div>
  );
}
