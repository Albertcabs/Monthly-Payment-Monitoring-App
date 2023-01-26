export interface ICustomerData {
   customerName: string;
   startDate: string;
   dueDate: string;
   payment: string;
   price: string;
}

export const initialState = {
   customerName: '',
   startDate: '',
   dueDate: '',
   payment: '',
   price: '',
};

export const monthMap = [
   'Jan',
   'Feb',
   'Mar',
   'Apr',
   'May',
   'Jun',
   'Jul',
   'Aug',
   'Sep',
   'Oct',
   'Nov',
   'Dec',
];

export const basis = [
   'lg:basis-20 md:basis-16 sm:basis-14',
   'lg:basis-60 md:basis-44 sm:basis-40',
   'lg:basis-36 md:basis-28 sm:basis-24',
   'lg:basis-36 md:basis-28 sm:basis-24',
   'lg:basis-24 md:basis-24 sm:basis-14',
   'lg:basis-20 md:basis-16 sm:basis-12',
   'lg:basis-40 md:basis-20 sm:basis-16 ',
];

export type dValType = {
   IDNum: string;
   customerName: string;
   startDate: string;
   dueDate: number[];
   payment: string;
   price: string;
};

export const dValue = {
   IDNum: '',
   customerName: '',
   startDate: '',
   dueDate: [0, 0, 0],
   payment: '',
   price: '',
};

export const widT = ['5%', '11%', '21%', '14%', '14%', '9%', '8%', '19%'];
