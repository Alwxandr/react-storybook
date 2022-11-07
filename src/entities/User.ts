export interface User {
  id: string;
  name: string;
  active: boolean;
  updated: Date;
  email: string;
  roles: UserRole[];
  rolesEnum: string[];
  fullName: string;
  shortName: string;
  position: string;
  division: string;
  company: string;
  qualification: string;
  accountingGroup: string;
  tzSystem: string;
  staffChangesDate: Date;
}

export interface UserRole {
  name: string;
  description: string;
  canConfirm: boolean;
}
