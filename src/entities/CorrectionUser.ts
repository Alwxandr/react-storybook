export interface CorrectionUser {
  cfo: string;
  cfu: string;
  division: string;
  employeeLogin: string;
  fio: string;
  fioConcat: string;
  fioUpper: string;
  managerLogin: string;
}

export interface CorrectionUserGroup {
  division: string;
  users: CorrectionUser[];
}
