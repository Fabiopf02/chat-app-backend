import 'http';

declare module 'http' {
  interface IncomingHttpHeaders {
    userid?: string;
    roomid?: string;
  }
}
