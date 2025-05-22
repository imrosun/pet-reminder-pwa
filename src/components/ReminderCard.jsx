import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ReminderCard({ reminder, onComplete, onDelete }) {
  return (
    <motion.div
      className={`bg-white rounded-lg p-4 mb-3 shadow-md ${reminder.completed ? 'bg-gray-400' : ''}`}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
    >
      <div className="flex justify-between items-center">
        <h3 className={`font-bold ${reminder.completed ? 'line-through text-gray-500' : ''}`}>
          {reminder.title}
        </h3>
        <Image src="/assets/enlarge.svg" alt="zoom" width="15" height="15" />
          
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-4 text-sm text-gray-500 mt-1 font-semibold">
          <span className='flex text-nowrap gap-2'><Image src="/assets/Detail Icon.svg" width="15" height="15" alt="zoom"/> For {reminder.petName}</span>
          <span className='flex text-nowrap gap-2'><Image src="/assets/card_clock.svg" width="15" height="15" alt="zoom"/> At {reminder.time}</span>
          <span className='flex text-nowrap gap-2'> <Image src="/assets/repeat-02.svg" width="15" height="15" alt="zoom"/> {reminder.frequency}</span>
        </div>
        <div className="flex gap-2">
          {!reminder.completed && (
            <button
              onClick={() => onComplete(reminder.id)}
              className="text-green-500"
              aria-label="Mark as done"
            >✔️</button>
          )}
          <button
            onClick={() => onDelete(reminder.id)}
            className="text-red-500"
            aria-label="Delete"
          >🗑️</button>
        </div>

      </div>
    </motion.div>
  );
}
