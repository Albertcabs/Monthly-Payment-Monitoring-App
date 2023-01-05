import React from 'react'
export interface ActType {
      key: {};
      showComp: string;
      reload: boolean;
      head: string[];
}

export const initState = {
      key: {},
      showComp: 'none',
      reload: false,
      head: [''],
};

export const ListContext = React.createContext<{
      data: ActType;
      setData: React.Dispatch<React.SetStateAction<ActType>>;
}>({ data: initState, setData: () => undefined });