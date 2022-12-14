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
  contact: User[],
  message: any,
  loading: boolean;
  loadMsg:boolean,
  error:any
};

export type ReduxAction = {
  payload: any;
  type: any;
};



export type chatMessage ={
  message: Object;
  users: User[];
  sender: Object;
}
