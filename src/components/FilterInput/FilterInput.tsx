import React from 'react';
import { Input } from '@/components/ui/input';
import { Table as ReactTable } from '@tanstack/react-table';

interface FilterInputProps<TData> {
  columnId: string;
  placeholder: string;
  table: ReactTable<TData>;
  handleFilterChange: (
    columnId: string
  ) => (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FilterInput = <TData,>({
  columnId,
  placeholder,
  table,
  handleFilterChange,
}: FilterInputProps<TData>) => (
  <Input
    placeholder={placeholder}
    value={(table.getColumn(columnId)?.getFilterValue() as string) ?? ''}
    onChange={handleFilterChange(columnId)}
    className='max-w-sm'
  />
);

export default React.memo(FilterInput);
