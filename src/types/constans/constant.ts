export const API_URL = process.env.REACT_APP_API_URL
const USERS = API_URL + '/users'
const MESSAGE = API_URL + '/msg'

export const REGISTER = USERS + '/register';
export const LOGIN = USERS + '/login';
export const GET_ALL_USERS = USERS + '/all_users';
export const GET_ALL_MESSAGE = MESSAGE + '/getMessage'
export const NEW_MESSAGE = MESSAGE + '/addMessage'

export const key_App = 'chat-app'


