const getDueDate = (dta: number[]) => {
   const today = new Date();
   const m = today.getMonth();
   const d = dta[1];
   const y = today.getFullYear();
   let dueDate = [0, 0, 0];
   if (m === 11) {
      dueDate = [0, d, y + 1];
   } else {
      dueDate = [m + 1, d, y];
   }
   return dueDate;
};

export default getDueDate;
