export enum Role {
  Invalide = "invalide",
  Admin = "admin",
  Member = "member",
}

export interface IUser {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  role: Role;
  status: boolean;
  created_at: Date;
  updated_at?: Date;
}

export interface IUserStore {
  users: IUser[];
  currentUser: IUser | null;
  fetchUsers: () => Promise<void>;
  fetchUserById: (id: number | string) => Promise<void>;
  setCurrentUser: (u: IUser | null) => void;
}
