import { monthMap } from '../types/Customer.type';
const dateFormat = (date: number[]) => {
   return `${monthMap[date[0]]} ${date[1]} ${date[2]}`;
};

export default dateFormat;
