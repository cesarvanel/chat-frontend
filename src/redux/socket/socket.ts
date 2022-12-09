import { useEffect } from "react";
import { Socket, io } from "socket.io-client";
import { key_App, SOCKET_CONNECT } from "../../types/constans/constant";
import { EVENTS } from "./actionsTypes";

export const socketListener = ():void => {
    const socket = trySocketConnect();

    socket.on("connect", () => {
        console.log(socket.id); // ojIckSD2jqNzOqIrAGzL
      });

    console.log(socket)

};

export const trySocketConnect = () => {
    
  const socket = io(SOCKET_CONNECT, {
    auth: {},
    autoConnect: true,
    reconnectionDelay: 1000,
    reconnectionAttempts: 5,
  });

  return socket;
};
