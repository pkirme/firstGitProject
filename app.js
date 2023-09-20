console.log("I love Git.");

let getHeader=document.getElementById('main-header');
getHeader.style.borderBottom=("solid 3px black");

let getItem =document.getElementsByClassName("title")[0];
getItem.style.fontWeight=("bold");
getItem.style.color=("green");

let item = document.getElementsByClassName("list-group-item");
console.log(item);
item[1].textContent="Hello 2";
item[1].style.fontWeight='bold';
item[1].style.backgroundColor="yellow";
for(let i=0;i<item.length;i++){
    item[i].style.color='blue';
}

let itemByTagName = document.getElementsByTagName('li');
console.log(itemByTagName);
itemByTagName[3].textContent="Hello 4";
itemByTagName[3].style.fontWeight='bold';
itemByTagName[3].style.backgroundColor="yellow";
for(let i=0;i<itemByTagName.length;i++){
    itemByTagName[i].style.color='blue';
}