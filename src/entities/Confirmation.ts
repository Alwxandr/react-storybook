import { TableColumn } from './TableColumn';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface Confirmation {
  id: string;
  finalTrud: number;
  accountingGroup: string;
  assignee: string;
  assigneeShort: string;
  complexProjectManager: string;
  complexProjectManagerFlag: true;
  complexProjectManagerShort: string;
  detailsUrl: string;
  contract: string;
  contractDescription: string;
  customer: string;
  customerManager: string;
  customerManagerFlag: true;
  customerManagerShort: string;
  masterFlag: true;
  parentTaskId: string;
  parentTaskDescription: string;
  period: string;
  project: string;
  projectDescription: string;
  projectManager: string;
  projectManagerFlag: true;
  projectManagerShort: string;
  skill: string;
  stage: string;
  status: string;
  summary: string;
  taskId: string;
  taskSummary: string;
  workType: string;
  works: [
    {
      id: string;
      updated: string;
      summary: string;
      trud: number;
      dayNum: string;
      modified: true;
      status: string;
      error: string;
      work: {
        id: string;
        contractId: string;
        contract: string;
        projectUid: string;
        project: string;
        taskId: string;
        cipher: string;
        supplierName: string;
        customerManager: string;
        customerManagerShort: string;
        projectManager: string;
        projectManagerShort: string;
        workTypeId: string;
        workType: string;
        cipherDescription: string;
        taskDescription: string;
        projectDescription: string;
        contractDescription: string;
        workTypeDescription: string;
        favourite: true;
        futureAvailable: true;
        parentId: string;
        works: [string];
      };
    }
  ];
}

export type ConfirmationKey = keyof Confirmation;

export interface ConfirmationSort {
  column: TableColumn;
  key: ConfirmationKey;
  order: 'asc' | 'desc';
}
