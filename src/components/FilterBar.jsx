'use client';
import { useState } from 'react';

export default function FilterBar() {
  const [filters, setFilters] = useState({
    pet: 'all',
    category: 'all',
    status: 'pending'
  });

  return (
    <div className="flex gap-2 mb-4 overflow-x-auto p-2">
      <Select
        options={['all', 'browny', 'max', 'luna']}
        value={filters.pet}
        onChange={e => setFilters({ ...filters, pet: e.target.value })}
      />
      <Select
        options={['all', 'general', 'health', 'lifestyle']}
        value={filters.category}
        onChange={e => setFilters({ ...filters, category: e.target.value })}
      />
      <Select
        options={['pending', 'completed']}
        value={filters.status}
        onChange={e => setFilters({ ...filters, status: e.target.value })}
      />
    </div>
  );
}

function Select({ options, value, onChange }) {
  return (
    <select
      className="px-3 py-1 border rounded-full bg-white text-sm"
      value={value}
      onChange={onChange}
    >
      {options.map(option => (
        <option key={option} value={option}>
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </option>
      ))}
    </select>
  );
}
