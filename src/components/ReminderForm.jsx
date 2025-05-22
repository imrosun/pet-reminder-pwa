'use client';
import { useState } from 'react';

export default function ReminderForm({ onSubmit, initialData }) {
  const [form, setForm] = useState(initialData || {
    title: '',
    notes: '',
    time: '08:00',
    frequency: 'Everyday',
    petName: 'Browny',
    category: 'General',
    timeSlot: 'Morning',
    completed: false,
    id: Date.now()
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form id="reminder-form" onSubmit={handleSubmit} className="p-4">
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Pet</label>
        <select name="petName" value={form.petName} onChange={handleChange} className="w-full border p-2 rounded">
          <option>Browny</option>
          <option>Max</option>
          <option>Luna</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Category</label>
        <select name="category" value={form.category} onChange={handleChange} className="w-full border p-2 rounded">
          <option>General</option>
          <option>Lifestyle</option>
          <option>Health</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Reminder Title</label>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          className="w-full border p-2 rounded"
          maxLength={100}
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Notes (optional)</label>
        <textarea
          name="notes"
          value={form.notes}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
      </div>
      <div className="mb-4 flex gap-2">
        <div className="flex-1">
          <label className="block text-gray-700 mb-1">Time</label>
          <input
            name="time"
            type="time"
            value={form.time}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />
        </div>
        <div className="flex-1">
          <label className="block text-gray-700 mb-1">Frequency</label>
          <select
            name="frequency"
            value={form.frequency}
            onChange={handleChange}
            className="w-full border p-2 rounded"
          >
            <option>Everyday</option>
            <option>Weekdays</option>
            <option>Weekends</option>
          </select>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-1">Time Slot</label>
        <select
          name="timeSlot"
          value={form.timeSlot}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        >
          <option>Morning</option>
          <option>Afternoon</option>
          <option>Evening</option>
        </select>
      </div>
    </form>
  );
}
