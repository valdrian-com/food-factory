export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  imgUrl?: string;
  meta?: {};
  createdAt: Date;
  updatedAt: Date;
  isActive?: boolean;
}

export interface RegisterForm {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

export interface LoginForm {
  email: string;
  password: string;
}
