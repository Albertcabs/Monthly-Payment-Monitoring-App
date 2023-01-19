import { monthMap } from '../types/Customer.type';
const dateFormat = (date: number[]) => {
   let dayNum = '0';
   if (date[1] < 10) {
      dayNum = '0' + date[1];
   } else {
      dayNum = String(date[1]);
   }
   return `${monthMap[date[0]]} ${dayNum} ${date[2]}`;
};

export default dateFormat;
