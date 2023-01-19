import React from 'react';
import { ListContext } from '../App';

type Props = {
   tRef: React.RefObject<HTMLHeadingElement>;
   setArrowPos: React.Dispatch<React.SetStateAction<number>>;
   IdData: string[];
   arrPos: number[];
};

const searchName = ({ tRef, setArrowPos, IdData, arrPos }: Props) => {
   const { data, setData } = React.useContext(ListContext);
};

export default searchName;
