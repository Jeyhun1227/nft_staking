import Parse from 'parse';

export const initializeParse = () => {
    if (typeof window !== 'undefined') {
        Parse.initialize(process.env.NEXT_PUBLIC_PARSE_ID || '' , process.env.NEXT_PUBLIC_PARSE_JAVASCRIPT_KEY);
        Parse.serverURL = process.env.NEXT_PUBLIC_PARSE_SERVER_URL || '';
      }
}