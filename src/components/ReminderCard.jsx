import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ReminderCard({ reminder, onComplete, completedView = false }) {
  if (completedView) {
    // Completed Card: only title and icon
    return (
      <motion.div
        className="bg-[#d9d9d9] rounded-xl p-4 mb-3 flex items-center justify-between"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
      >
        <span className="font-semibold text-gray-600 line-through">{reminder.title}</span>
        <Image src="/assets/Completed_Icon.svg" alt="tick" width="20" height="20" />
      </motion.div>
    );
  }

  // Pending Card: details and one checkmark button
  return (
    <motion.div
      className="bg-white rounded-lg p-4 mb-3 shadow-md"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
    >
      <div className="flex justify-between items-center">
        <h3 className="font-bold">{reminder.title}</h3>
        <Image src="/assets/enlarge.svg" alt="zoom" width="15" height="15" />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-4 text-sm text-gray-500 mt-1 font-semibold">
          <span className='flex text-nowrap gap-2'>
            <Image src="/assets/Detail Icon.svg" width="15" height="15" alt="zoom" /> For {reminder.petName}
          </span>
          <span className='flex text-nowrap gap-2'>
            <Image src="/assets/card_clock.svg" width="15" height="15" alt="zoom" /> At {reminder.time}
          </span>
          <span className='flex text-nowrap gap-2'>
            <Image src="/assets/repeat-02.svg" width="15" height="15" alt="zoom" /> {reminder.frequency}
          </span>
        </div>
        <button
          onClick={() => onComplete(reminder.id)}
          aria-label="Mark as completed"
          className="text-green-600 hover:text-green-800 transition ml-4"
        >
          {/* Checkmark icon */}
          <svg width={24} height={24} fill="none" viewBox="0 0 24 24">
            <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}
