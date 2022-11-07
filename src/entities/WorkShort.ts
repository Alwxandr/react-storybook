import { WorkStatus } from './WorkStatus';

export interface WorkShortBase<T> {
  /**
   * Id записи
   */
  id: string | null;
  /**
   * Трудозатраты
   */
  trud?: number | null;
  /**
   * Комментарий к трз
   */
  summary?: string | null;
  /**
   * Дата трз
   */
  dayNum: T;
  /**
   * Флаг, отправлен отчет о трудозатратах или нет
   */
  modified: boolean;
  /**
   * Дата обновления трз
   */
  updated?: Date;
  status?: WorkStatus;
}

export type WorkShort = WorkShortBase<Date>;
export type WorkShortRaw = WorkShortBase<string>;
