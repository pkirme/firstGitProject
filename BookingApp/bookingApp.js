let form=document.getElementById('addForm');
form.addEventListener('submit',addUser);

let userList=document.getElementById('users');
//userList.addEventListener('click',removeUser);
let userId=undefined;
//Add user
function addUser(e){
    e.preventDefault();

    let userObj={
        userName:document.getElementById('userName').value,
        emailId:document.getElementById('emailId').value,
        phone:document.getElementById('phNo').value
    };

    //let userObjSer = JSON.stringify(userObj);
   
    //localStorage.setItem(userObj.emailId,userObjSer);
    if(userId===undefined){
        axios.post('https://crudcrud.com/api/914fc9e3b4aa4d6dab6dceafcfa0377a/Data',userObj)
         .then(res=>{
            document.getElementById('userName').value="";
            document.getElementById('emailId').value="";
            document.getElementById('phNo').value="";
             })
         .catch(err=>console.log(err));
    }else{
        //console.log(userId);
        axios.put(`https://crudcrud.com/api/914fc9e3b4aa4d6dab6dceafcfa0377a/Data/${userId}`,userObj)
             .then(res=>console.log(res))
             .catch(err=>console.log(err));
    }
      //showUser(userObj);
}

//load user data
window.addEventListener("DOMContentLoaded",()=>{
    axios.get('https://crudcrud.com/api/914fc9e3b4aa4d6dab6dceafcfa0377a/Data')
         .then(res=>{
            //console.log(res);
            for(let i=0;i<res.data.length;i++){
                console.log(res.data[i]);
                showUser(res.data[i]);
            }
         })
         .catch(err=>console.log(err));
})

function showUser(userObj){
    let li = document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(userObj.userName+' '+userObj.emailId+' '+userObj.phone));
    userList.appendChild(li);  

    //create delete button.
    let delBtn = document.createElement('button');
    delBtn.className='btn btn-primary btn-sm float-right delete';
    delBtn.appendChild(document.createTextNode('Delete'));
    //Remove user from local storage
    delBtn.onclick = () =>{
        //localStorage.removeItem(userObj.emailId);
        //console.log(userObj._id);
        axios.delete(`https://crudcrud.com/api/914fc9e3b4aa4d6dab6dceafcfa0377a/Data/${userObj._id}`)
             .then(res=>console.log(res))
             .catch(err=>console.log(err));
        userList.removeChild(li);
    }
    li.appendChild(delBtn);

    //create edit button.
    let editBtn = document.createElement('button');
    editBtn.className ='btn btn-primary btn-sm float-right edit';
    editBtn.appendChild(document.createTextNode('Edit'));
    editBtn.onclick = () => {
        document.getElementById('userName').value=userObj.userName;
        document.getElementById('emailId').value=userObj.emailId;
        document.getElementById('phNo').value=userObj.phone;
        userId=userObj._id;
        userList.removeChild(li);
        
    }
    li.appendChild(editBtn);
    
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
//function printAll(){
    // for (let i = 0; i < localStorage.length; i++) {
    //     const key = localStorage.key(i);
    //     const userObj = JSON.parse(localStorage.getItem(key));
    //     //create list            
    //      showUser(userObj);
        
    // }
    
//}