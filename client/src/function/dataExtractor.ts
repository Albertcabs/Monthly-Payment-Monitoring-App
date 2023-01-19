function dataExtractor(resBody: any[][], TRowHeight: number) {
   const getDay = new Date().getDate();
   const names: any[] = [];
   const dueDate: boolean[] = [];
   const arrPos: number[] = [];
   const IdData: string[] = [];
   let arrtmp = TRowHeight;
   //this 22 is set as number of row display in table at useWinsize
   let numRowSet = 22;
   // check if empty data
   if (resBody.length !== 0) {
      resBody.forEach((val, i) => {
         // check if newly create Customer

         // get all Names
         names.push(val[1]);
         if (i <= numRowSet) {
            arrPos.push(arrtmp * (i + 1));
         }

         IdData.push(val[0]);

         // get due date  for monitoring
         dueDate.push(Number(val[3].slice(3, 6) < getDay) ? false : true);
      });
   }

   return { names, dueDate, arrPos, IdData };
}

export default dataExtractor;
