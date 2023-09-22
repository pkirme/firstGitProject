let form=document.getElementById('addForm');
let userList=document.getElementById('users');
form.addEventListener('submit',addUser);
function addUser(e){
    e.preventDefault();

    let userObj={
        userName:document.getElementById('userName').value,
        emailId:document.getElementById('emailId').value,
        phone:document.getElementById('phNo').value
    }

    let userObjSer = JSON.stringify(userObj);
    localStorage.setItem(userObj.emailId,userObjSer);

    let li = document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(userObj.userName +' '+userObj.emailId+' '+userObj.phone));
    userList.appendChild(li);  

}