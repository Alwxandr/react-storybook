export enum Role {
  ASSIGNEE = 'ASSIGNEE', // Исполнитель
  CM = 'CM', // Менеджер заказчика
  CPM = 'CPM', // Менеджер комплексного проекта
  OI = 'OI', // Ответственный исполнитель
  PM = 'PM', // Менеджер проекта
  MASTER = 'MASTER', // Руководитель
  ADMIN_CFU = 'ADMIN_CFU', // Администратор ЦФУ
  ADMIN_CPR = 'ADMIN_CPR', // Администратор ЦПР
}

export const WriteOffRoles = [
  Role.ASSIGNEE,
  Role.MASTER,
  Role.PM,
  Role.CPM,
  Role.ADMIN_CFU,
  Role.ADMIN_CPR,
];

export const CorrectionRoles = [Role.MASTER, Role.ADMIN_CFU, Role.ADMIN_CPR];

export const ConfirmationRoles = [
  Role.MASTER,
  Role.CM,
  Role.PM,
  Role.CPM,
  Role.OI,
];

export const RolesDict: { [key: string]: string } = {
  [Role.ASSIGNEE]: 'Исполнитель',
  [Role.CM]: 'Менеджер заказчика',
  [Role.CPM]: 'Менеджер комплексного проекта',
  [Role.OI]: 'Ответственный исполнитель',
  [Role.PM]: 'Менеджер проекта',
  [Role.MASTER]: 'Руководитель',
  [Role.ADMIN_CFU]: 'Администратор ЦФУ',
  [Role.ADMIN_CPR]: 'Администратор ЦПР',
};

export const WriteOffStartPage = [
  Role.ASSIGNEE,
  Role.CPM,
  Role.PM,
  Role.MASTER,
  Role.ADMIN_CFU,
  Role.ADMIN_CPR,
];

export const ConfirmationStartPage = [Role.OI, Role.CM];
