export interface User extends Document {
  [x: string]: any;
  userName: string;
  userEmail: string;
  userPwd: string;
  isAdmin: boolean;
  userAvatar?: string;
  userToken?: string;

  isValidPassword(password: string): Promise<Error | Boolean>;
}

export type chatState = {
  contact: [];
  message: [];
  room: [];
};

export type userState = {
  sesUser: any,
  contact: User[];
  loading: boolean;
  error:any
};

export type ReduxAction = {
  payload: any;
  type: any;
};
