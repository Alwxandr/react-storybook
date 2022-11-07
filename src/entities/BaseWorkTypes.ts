import { WorkShort, WorkShortRaw } from './WorkShort';

export interface BaseWork<T> {
  /**
   * Id активности
   */
  id: string;

  /**
   * Статус активности
   */
  active: boolean;

  /**
   * Дата закрытия
   */
  closed: string;

  /**
   *  Id Родительского элемента
   * */
  parentId?: string;
  /**
   * Статья списания
   */
  workType?: string;
  /**
   * Номер заявки
   */
  taskId: string;
  /**
   * Название заявки
   */
  taskDescription: string;

  /**
   * Код контракта
   */
  contract?: string;

  /**
   * Название проекта
   */
  project?: string;
  /**
   * ЦПР шифр
   */
  cipher?: string;
  /**
   * Менеджер заказчика (ФИО)
   */
  customerManager?: string;

  /**
   * Менеджер заказчика (Короткая запись ФИО)
   */
  customerManagerShort?: string;

  /**
   * Менеджер проекта (ФИО)
   */
  projectManager?: string;

  /**
   * Менеджер проекта (Короткая запись ФИО)
   */
  projectManagerShort?: string;

  /**
   * Id похожих элементов
   */
  similarId?: string;

  /**
   * Статус активности
   */
  status: string;

  /**
   * Название заказчика
   */
  supplierName?: string;

  /**
   * В избранном
   */
  favourite?: boolean;

  /**
   * Суммарные трудозатраты
   */
  trudSum: number;

  /**
   * Возможность списания на будущий период
   */
  futureAvailable: boolean;

  projectDescription: string;
  contractDescription: string;
  workTypeDescription: string;
  cipherDescription: string;

  /**
   * Трудозатраты по датам
   */
  works: T;

  children?: BaseWork<{ [key: string]: WorkShort }>[];
}

export type Work = BaseWork<{ [key: string]: WorkShort }>;

export type WorkRaw = BaseWork<WorkShortRaw[]>;
