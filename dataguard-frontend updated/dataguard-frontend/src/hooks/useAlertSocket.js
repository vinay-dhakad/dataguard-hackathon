import { useEffect, useState } from 'react';
export default function useAlertSocket(onAlert) {
  const [connected, setConnected] = useState(false);
  useEffect(() => {
    const url = import.meta.env.VITE_WS_URL || 'ws://127.0.0.1:8000/ws/alerts';
    let socket; let retry; let stopped = false;
    const connect = () => {
      if (stopped) return;
      try {
        socket = new WebSocket(url);
        socket.onopen = () => setConnected(true);
        socket.onmessage = event => { try { const data = JSON.parse(event.data); if (data.type === 'NEW_ALERT') onAlert?.(data); } catch {} };
        socket.onclose = () => { setConnected(false); if (!stopped) retry = setTimeout(connect, 2500); };
        socket.onerror = () => socket?.close();
      } catch { setConnected(false); retry = setTimeout(connect, 2500); }
    };
    connect();
    return () => { stopped = true; clearTimeout(retry); socket?.close(); };
  }, [onAlert]);
  return connected;
}
