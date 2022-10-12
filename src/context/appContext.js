import { io } from 'socket.io-client';
import { createContext } from 'react';

const SOCKET_URL = import.meta.env.VITE_APP_BASE_URL;
export const socket = io(SOCKET_URL, {
  transports: ['websocket'],
});

export const AppContext = createContext();
