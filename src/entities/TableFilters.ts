export interface TableFilters {
  open: boolean;
  key: string;
  values: Array<any>;
  operand: {
    value: string;
    label: string;
  };
  active: boolean;
}
