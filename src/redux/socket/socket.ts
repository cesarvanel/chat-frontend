import { Socket, io } from "socket.io-client";
import { key_App, SOCKET_CONNECT } from "../../types/constans/constant";
import { EVENTS } from "./actionsTypes";

export const socketListener = (): void => {
  const socket = trySocketConnect();
  if (!socket) {
    return;
  }
  socket.on(EVENTS.connection, () => {
    console.log(socket.id);
  });

  socket.emit(EVENTS.ADD_USER,)
};

export const trySocketConnect = () => {
  let socket: Socket;
  const items: string | null = localStorage.getItem(key_App);
  if (!items) {
    return;
  }

  const { accessToken } = JSON.parse(items);

  socket = io(SOCKET_CONNECT, {
    auth: { token: accessToken },
    autoConnect: true,
    reconnectionDelay: 1000,
    reconnectionAttempts: 5,
  });

  return socket;
};
