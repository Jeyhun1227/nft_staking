import { TextCounterItemType } from "@/components/typography/counter";

const zeroPadding = (number: number) => {
  return (number < 10 ? '0' : '') + number;
};


const convertTZ = (date?: string, tz?: string) => {
  return new Date(new Date(date || 0).toLocaleString("en-US", {timeZone: tz})); 
};

export const convertFromISODate = (date?: string): TextCounterItemType[] => {
  const convertedDate = convertTZ(date, "Europe/Paris");
  const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];

  const dateField = { value: `${convertedDate.getDate()}`, unit: months[convertedDate.getMonth()] || "JAN"};
  const timeField = { value: `AT ${zeroPadding(convertedDate.getHours())}:${zeroPadding(convertedDate.getMinutes())}`, unit: "GMT +1"};
  return [dateField, timeField];
};

export const truncate = function (str:string) {
  if (str.length > 35) {
    return str.substr(0, 15) + '...' + str.substr(str.length-10, str.length);
  }
  return str;
};