'use client';
import Image from 'next/image';
import { useState, useRef } from 'react';
import { CiCalendar } from "react-icons/ci";
import Select from 'react-select';

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
    startDate: "2025-05-23",
    endDate: "",
    id: Date.now() // Causing Hydration error and react-select
  });
  const [showNotes, setShowNotes] = useState(false);
  const [showCalendar, setShowCalendar] = useState(false);

  const [showEndDate, setShowEndDate] = useState(false);
  const endDateRef = useRef();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleDateChange = (e) => {
    setForm({ ...form, startDate: e.target.value });
    setShowCalendar(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
  };

  const petOptions = [
    { value: 'browny', label: 'Browny', image: '/assets/Trackers_dog.svg' },
    { value: 'max', label: 'Max', image: '/assets/Trackers_dog.svg' },
    { value: 'luna', label: 'Luna', image: '/assets/Trackers_dog.svg' },
  ];

  const categoryOptions = [
    { value: 'general', label: 'General', image: '/assets/Trackers_General.svg' },
    { value: 'lifestyle', label: 'Lifestyle', image: '/assets/Trackers_General.svg' },
    { value: 'health', label: 'Health', image: '/assets/Trackers_General.svg' },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      backgroundColor: 'white',
      color: 'black',
      borderColor: state.isFocused ? '#a0aec0' : '#d1d5db',
      boxShadow: 'none',
    }),
    singleValue: (provided) => ({
      ...provided,
      color: 'black',
    }),
    option: (provided, state) => ({
      ...provided,
      color: 'black',
      backgroundColor: state.isSelected ? '#f3f4f6' : 'white',
    }),
    menu: (provided) => ({
      ...provided,
      zIndex: 9999,
    }),
    indicatorSeparator: () => null,
  };

  return (
    <form id="reminder-form" onSubmit={handleSubmit} className="p-6">
      <div className="flex justify-between gap-4">
        <div className="mb-4 rounded-lg w-full">
          <label className="block text-gray-400 font-semibold mb-1">Select Pet</label>
          <Select
            styles={customStyles}
            name="petName"
            value={petOptions.find(opt => opt.value === form.petName)}
            onChange={selected => handleChange({ target: { name: 'petName', value: selected.value } })}
            options={petOptions}
            formatOptionLabel={option => (
              <div className="flex items-center">
                <img src={option.image} alt={option.label} className="w-6 h-6 rounded-full mr-2" />
                <span>{option.label}</span>
              </div>
            )}
          />
        </div>
        <div className="mb-4  w-full">
          <label className="block text-gray-400 font-semibold mb-1">Select Category</label>
          {/* <select name="category" value={form.category} onChange={handleChange} className="w-full bg-white border border-gray-300 p-2 rounded font-bold">
            <option>General</option>
            <option>Lifestyle</option>
            <option>Health</option>
          </select> */}
          <Select
            styles={customStyles}
            name="category"
            value={categoryOptions.find(opt => opt.value === form.category)}
            onChange={selected => handleChange({ target: { name: 'category', value: selected.value } })}
            options={categoryOptions}
            formatOptionLabel={option => (
              <div className="flex items-center">
                <img src={option.image} alt={option.label} className="w-6 h-6 rounded-full mr-2" />
                <span>{option.label}</span>
              </div>
            )}
          />
        </div>
      </div>

      {/* Reminder Info */}
      <div className="mb-4 relative border border-t-50 border-t-black border-gray-300 rounded-xl bg-white shadow-sm">
        {/* Floating label */}
        <label className="absolute ml-2 -top-9 bg-black px-2 font-semibold text-white" style={{ color: "#fff", background: "black" }}>
          Reminder Info
        </label>

        {/* Reminder Title */}
        <div className="p-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-black font-bold mb-2 ml-2">Set a reminder for...</span>
            <span className="text-xs text-gray-400">{form.title.length}/100</span>
          </div>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full border border-gray-300 p-2 rounded font-gray-300 font-bold bg-gray-100"
            maxLength={100}
            required
            placeholder="Type here..."
          />
        </div>

        {/* Notes (optional) with Add button */}
        <div className="mb-2 px-4 py-2 border-t border-gray-300">
          <div className="flex justify-between items-center mb-1">
            <label className="text-black font-bold">Add Notes (optional)</label>
            {!showNotes && (
              <button
                type="button"
                className="text-[#019D6B] bg-[#e6f6f1] px-2 py-1 rounded-lg hover:underline font-semibold"
                onClick={() => setShowNotes(true)}
              >
                Add
              </button>
            )}
          </div>
          {showNotes && (
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              placeholder="Add your notes here..."
            />
          )}
        </div>
      </div>

      {/* Reminder Settings */}
      <div className="mb-4 relative border border-t-50 border-t-black border-gray-300 rounded-xl bg-white shadow-sm">
        {/* Floating label */}
        <div className="flex justify-between">
          <label className="absolute ml-2 -top-9 bg-black px-2 font-semibold text-white" style={{ color: "#fff", background: "black" }}>
            Reminder Settings
          </label>
          <Image className='z-100 absolute ml-2 -top-9 right-3' src="/assets/up_arrow.svg" width="20" height="20" alt="up arrow" />
        </div>

        {/* Reminder Title */}
        <div className="p-4">
          <div className="flex justify-between items-center mb-1">
            <span className="text-black font-semibold mb-2 ml-2">Start Date</span>
          </div>

          {/* Start Date with Calendar */}
          <div className="px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 flex items-center justify-between mt-2">
            <input
              type="date"
              name="startDate"
              value={form.startDate}
              onChange={handleDateChange}
              className="bg-transparent border-none text-black font-bold mr-2"
              style={{ outline: 'none' }}
            />
            <CiCalendar className="text-black text-xl cursor-pointer" onClick={() => document.querySelector('input[name="startDate"]').focus()} />
          </div>

        </div>

        {/* + Add End Date Button */}
        <div className='px-4 py-0 mb-6'>
          {!showEndDate && (
            <div className="px-4 ml-2 mb-4">
              <button
                type="button"
                className="text-gray-400 hover:underline font-bold"
                onClick={() => setShowEndDate(true)}
              >
                + Add End Date
              </button>
            </div>
          )}

          {/* End Date Input (shown only if showEndDate is true) */}
          {showEndDate && (
            <div className="px-4 py-2 border border-gray-300 rounded-lg bg-gray-100 flex items-center justify-between mt-2">
              <input
                ref={endDateRef}
                type="date"
                name="endDate"
                value={form.endDate}
                onChange={handleDateChange}
                className="bg-transparent border-none text-black font-bold mr-2"
                style={{ outline: 'none' }}
              />
              <CiCalendar
                className="text-black text-xl cursor-pointer"
                onClick={() => endDateRef.current && endDateRef.current.focus()}
              />
            </div>
          )}
        </div>


        <div className="flex-1 px-4 py-4 mb-2 border-t border-gray-300">
          <label className="block text-black font-semibold ml-2 mb-2">Reminder Time</label>
          <input
            name="time"
            type="time"
            value={form.time}
            onChange={handleChange}
            className="w-full border p-2 border-gray-300 bg-gray-100 rounded-lg text-black font-semibold"
            required
          />
        </div>

        <div className="flex-1 px-4 py-4 mb-2 border-t border-gray-300">
          <label className="block text-black font-semibold ml-2">Reminder Frequency</label>
          <label className="block text-black ml-2 mb-2">How often should this reminder repeat?</label>
          <select
            name="frequency"
            value={form.frequency}
            onChange={handleChange}
            className="w-full p-2 border-gray-300 bg-gray-100 rounded-lg text-black font-semibold"
          >
            <option>Everyday</option>
            <option>Weekdays</option>
            <option>Weekends</option>
          </select>
        </div>

      </div>

    </form>
  );
}
