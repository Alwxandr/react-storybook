export interface TableColumn {
  key: string;
  dataKey: string;
  title: string;
  width: number;
  selected: boolean;
  resizable?: boolean;
  sortable?: boolean;
  order?: 'asc' | 'desc';
  filterable?: boolean;
  cellRenderer?: any;
  filterComponent?: React.FC<any>;
}
