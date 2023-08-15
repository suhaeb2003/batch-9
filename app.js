
const title=document.querySelector('#title');
const author=document.querySelector('#author');
const year=document.querySelector('#year');
const books=document.querySelector('.books');
const button=document.querySelector('#button');

button.addEventListener("click", function (e) {
   e.preventDefault();
    if (title.value=='' && author.value=='' && year.value=='') {
     alert('Wriite Something');
   } else {
      
       const newTable=document.createElement('tr');
        //create new table
       const newTitle=document.createElement('th');
     newTitle.innerHTML=title.value;
     newTable.appendChild(newTitle);
     //create new table
     const newAuthor=document.createElement('th');
     newAuthor.innerHTML=author.value;
     newTable.appendChild(newAuthor);
      //create new table
      const newYear=document.createElement('th');
      newYear.innerHTML=year.value;
      newTable.appendChild(newYear);


      books.appendChild(newTable);
      
   }
  
 
});

          