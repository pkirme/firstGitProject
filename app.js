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
let itemByQuerySelector = document.querySelector('.list-group-item:nth-child(2)');
itemByQuerySelector.style.backgroundColor='green';

let itemByQuerySelector1 = document.querySelector('.list-group-item:nth-child(3)');
itemByQuerySelector1.style.visibility='hidden';

//QUERY SELECTOR ALL
let itemByQuerySelectorAll = document.querySelectorAll('.list-group-item');
itemByQuerySelectorAll[1].style.color='green';

for(let i=0;i<itemByQuerySelectorAll.length;i+=2){
    itemByQuerySelectorAll[i].style.backgroundColor='green';
}