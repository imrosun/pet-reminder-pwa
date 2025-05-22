import { format, startOfWeek, addDays } from 'date-fns';

export default function CalendarStrip() {
  const today = new Date();
  const weekStart = startOfWeek(today, { weekStartsOn: 1 }); // Monday

  return (
    <div className="bg-[#02C878] rounded-xl p-4 text-black font-bold">
      <div className="text-sm mb-2 text-center lowercase">{format(today, 'MMMM yyyy')}</div>
      <div className="flex justify-between text-xs">
        {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', '.'].map(day => (
          <div key={day} className="w-8 text-center">{day}</div>
        ))}
      </div>
      <div className="flex justify-between mt-2 text-white ">
        {[0,1,2,3,4,5,6].map(offset => {
          const date = addDays(weekStart, offset);
          const isToday = format(date, 'yyyy-MM-dd') === format(today, 'yyyy-MM-dd');
          return (
            <div
              key={offset}
              className={`w-8 h-8 rounded-full flex items-center justify-center
                ${isToday ? 'bg-[#b9ff7d] text-black' : 'bg-green-400 line-through'}`}
            >
              {format(date, 'd')}
            </div>
          );
        })}
      </div>
    </div>
  );
}
