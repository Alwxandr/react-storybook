import { PeriodType } from './PeriodType';
import { Weekday } from './Weekday';
import { WorkCalendar } from './WorkCalendar';

export interface WorksPeriod {
  'writeoff': PeriodType;
  'correction': PeriodType;
}

export interface WorksPage {
  calendar: WorkCalendar;
  period: WorksPeriod;
  hasWeekends: boolean;
  daysEdited: string[];
  selectedItems: string[];
  weekdays: Weekday[];
  hasActiveDays: boolean;
}
