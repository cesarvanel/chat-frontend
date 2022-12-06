export interface User extends Document {
  userName: string;
  userEmail: string;
  userPwd: string;
  isAdmin: boolean;
  userAvatar?: string;
  userToken?: string;

  isValidPassword(password: string): Promise<Error | Boolean>;
}

export type chatState = {

  contact: [],
  message:[],
  room:[]

}

export type userState = {

  sesUser:{}
}
