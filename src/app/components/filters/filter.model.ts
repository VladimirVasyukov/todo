export interface Filter {
  name: string;
  value: FilterValue;
}

export type FilterValue = 'SHOW_ALL' | 'SHOW_COMPLETED' | 'SHOW_ACTIVE';

export const initialFilters: Filter[] = [
  { name: 'Все заметки', value: 'SHOW_ALL' },
  { name: 'Активные', value: 'SHOW_ACTIVE' },
  { name: 'Завершенные', value: 'SHOW_COMPLETED' },
];
