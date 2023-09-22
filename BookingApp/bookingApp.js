let form=document.getElementById('addForm');
form.addEventListener('submit',addUser);

let userList=document.getElementById('users');
//userList.addEventListener('click',removeUser);



//Add user
function addUser(e){
    e.preventDefault();

    let userObj={
        userName:document.getElementById('userName').value,
        emailId:document.getElementById('emailId').value,
        phone:document.getElementById('phNo').value
    };

    let userObjSer = JSON.stringify(userObj);
    localStorage.setItem(userObj.emailId,userObjSer);

    showUser(userObj);
}

function showUser(userObj){
    let li = document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(userObj.userName+' '+userObj.emailId+' '+userObj.phone));
    userList.appendChild(li);  

    let delBtn = document.createElement('button');
    delBtn.className='btn btn-primary btn-sm float-right delete';
    delBtn.appendChild(document.createTextNode('Delete'));
    //Remove user from local storage
    delBtn.onclick = () =>{
        localStorage.removeItem(userObj.emailId);
        userList.removeChild(li);
    }
    li.appendChild(delBtn);
    userList.appendChild(li);
}

//Remove user from local storage
// function removeUser(e){
//     if(e.target.classList.contains('delete')){
//         if(confirm('Are you sure?')){
//             let li=e.target.parentElement;
//             userList.removeChild(li);
//         }
//     }
// }