// console.log("I love Git.");

// let getHeader=document.getElementById('main-header');
// getHeader.style.borderBottom=("solid 3px black");

// let getItem =document.getElementsByClassName("title")[0];
// getItem.style.fontWeight=("bold");
// getItem.style.color=("green");

// let item = document.getElementsByClassName("list-group-item");
// console.log(item);
// item[1].textContent="Hello 2";
// item[1].style.fontWeight='bold';
// item[1].style.backgroundColor="yellow";
// for(let i=0;i<item.length;i++){
//     item[i].style.color='blue';
// }

// let itemByTagName = document.getElementsByTagName('li');
// console.log(itemByTagName);
// itemByTagName[3].textContent="Hello 4";
// itemByTagName[3].style.fontWeight='bold';
// itemByTagName[3].style.backgroundColor="yellow";
// for(let i=0;i<itemByTagName.length;i++){
//     itemByTagName[i].style.color='blue';
// }

//QUERY SELECTOR
// let itemByQuerySelector = document.querySelector('.list-group-item:nth-child(2)');
// itemByQuerySelector.style.backgroundColor='green';

// let itemByQuerySelector1 = document.querySelector('.list-group-item:nth-child(3)');
// itemByQuerySelector1.style.visibility='hidden';

//QUERY SELECTOR ALL
// let itemByQuerySelectorAll = document.querySelectorAll('.list-group-item');
// itemByQuerySelectorAll[1].style.color='green';

// for(let i=0;i<itemByQuerySelectorAll.length;i+=2){
//     itemByQuerySelectorAll[i].style.backgroundColor='green';
// }

//Traversing the DOM
//parentNode:
// let itemList = document.querySelector('#items');
// console.log(itemList.parentNode);

// //firstChild and firstElementChild:
// console.log(itemList.firstChild);
// itemList.firstElementChild.textContent='hello 1';

// //lastChild and lastElementChild:
// console.log(itemList.lastChild);
// itemList.lastElementChild.textContent='hello 4';

// //nextSibling and nextElementSibling:
// console.log(itemList.nextSibling);
// itemList.nextElementSibling.style.color='red';

// //previousSibling and previousElementSibling:
// console.log(itemList.previousSibling);
// itemList.previousElementSibling.style.color='green';

// //Create Element:
// let newDiv=document.createElement('div');
// newDiv.className='hello';
// newDiv.id='hello1';
// newDiv.setAttribute('title','hello div');

// //Append Text
// let newDivText=document.createTextNode('Hello new div');
// newDiv.append(newDivText);
 
// //Add new Element at specific position 
// let container =document.querySelector('header.container');
// let h1=document.querySelector('header h1');
// container.insertBefore(newDiv,h1);

// //task 1:Now go head and add HEllo word before Item Lister
// let createItem =document.createElement('h1');
// let getItem=document.querySelector('.col-md-6');
// createItem = '<h1>Hello word</h1>';
// getItem.innerHTML= createItem + getItem.innerHTML;

// // task 2: Now go head and add HEllo word before Item 1
// let item=document.getElementById('items');
// let li =document.createElement('li');
// li='<li>Hello word</li>';
// item.innerHTML = li + item.innerHTML;

//..................................................
//Question 8:
let form=document.getElementById('addForm');
let itemList=document.getElementById('items');
form.addEventListener('submit',addItem);
itemList.addEventListener('click' ,removeItem);


//create addItem function
function addItem(e){
    e.preventDefault();
     //get input value from input box
     let newItem = document.getElementById('item').value;
     //get description value from input box
     let descr = document.getElementById('description').value;

     //create li element
     let li = document.createElement('li');
     li.className='list-group-item';
     li.appendChild(document.createTextNode(newItem+' '));
     li.appendChild(document.createTextNode(descr));

     //create edit button 
     let editBtn = document.createElement('button');
     editBtn.className='btn btn-primary btn-sm float-right edit';
     editBtn.appendChild(document.createTextNode('Edit'));
     li.appendChild(editBtn);

     //create delete button
     let delBtn=document.createElement('button');
     delBtn.className='btn btn-danger btn-sm float-right delete';
     delBtn.appendChild(document.createTextNode('X'));
     //append button to new li
     li.appendChild(delBtn);    
    
     //append new li element to itemList
     itemList.appendChild(li);

     //Add item information in local storage.
     let item = document.getElementsByClassName("list-group-item");
     localStorage.setItem('item '+item.length,newItem+' '+descr);
}

//create function to remove item from the list
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure to delete the item?')){
            let li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}
//........................................................

//question 9:filter

let filter=document.getElementById('filter');
//add filter event
filter.addEventListener('keyup',filterItem);

// Add filter 
 function filterItem(e){
    
    let txt=e.target.value.toLowerCase();
    let items=itemList.getElementsByTagName('li');
    let itemArr =[];
    
    Array.from(items).forEach(function(item){
        let itemName=item.textContent;
        if(itemName.toLocaleLowerCase().indexOf(txt)!=-1){
            item.style.display='block';
        }else{
            item.style.display='none';
        }
    });
 }
 //.........................................................
