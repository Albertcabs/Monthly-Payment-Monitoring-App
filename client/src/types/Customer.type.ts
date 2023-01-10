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
      'basis-20',
      'basis-60',
      'basis-36',
      'basis-36',
      'basis-24',
      'basis-20',
];

export type dValType = {
      IDNum: string;
      customerName: string;
      startDate: string;
      dueDate: string;
      payment: string;
      price: string;
};

export const dValue = {
      IDNum: '',
      customerName: '',
      startDate: '',
      dueDate: '',
      payment: '',
      price: '',
}