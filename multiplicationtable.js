/*
   TABLICZKA MNOŻENIA
   */
   
   const table =   document.getElementById('table');

   let text = '<table>';
   
   text += '<tr><th><p>-</p></th>';
   for(let j=1; j<= 10; j++) {
    text += '<th>(' + j + ')</th>';
   }
   text += '</tr>';


   for(let i=1; i <= 10; i++){
   text += '<tr><th>(' + i + ')</th>';
   for (let j=1; j<=10; j++){
    text += '<td>' + i*j + '</td>';
   }
   text += '</tr>';
   }
   text += '</table>';
   table.innerHTML = text;