import React from 'react';
import Select from './Select';
import { useSearchParams } from 'react-router-dom';

export default function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get('sortBy');

  function handleChange(e) {
    console.log(e.target.value);
    searchParams.set('sortBy', e.target.value) || '';
    setSearchParams(searchParams);
  }

  return (
    <Select
      options={options}
      type="white"
      onChange={handleChange}
      value={sortBy}
    />
  );
}
