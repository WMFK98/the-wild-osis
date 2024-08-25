import React from 'react';
import TableOperations from '../../ui/TableOperations';
import Filter from '../../ui/Filter';
import SortBy from '../../ui/SortBy';

export default function CabinTableOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: 'all', label: 'All' },
          { value: 'no-discount', label: 'No discount' },
          { value: 'with-discount', label: 'With discount' },
        ]}
      />
      <SortBy
        options={[
          { value: 'name-asc', lable: 'Sort by name (A-Z)' },
          { value: 'name-desc', lable: 'Sort by name (Z-A)' },
          { value: 'regular_price-asc', lable: 'Sort by price (low first)' },
          { value: 'regular_price-desc', lable: 'Sort by price (high first)' },
          { value: 'max_capacity-asc', lable: 'Sort by Capacity (low first)' },
          {
            value: 'max_capacity-desc',
            lable: 'Sort by Capacity (high first)',
          },
        ]}
      />
    </TableOperations>
  );
}
