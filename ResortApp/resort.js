let form=document.getElementById('addForm');
form.addEventListener('submit',addTable);
let url='https://crudcrud.com/api/9f1a7451dac4481d8ce15d279095fcf4/info';

let table1List=document.getElementById('table1List');
let table2List=document.getElementById('table2List');
let table3List=document.getElementById('table3List');

function addTable(e){
    e.preventDefault();
    const table={
        price:document.getElementById('price').value,
        dish:document.getElementById('dish').value,
        tableNo:document.getElementById('select').value
    }

    axios.post(url,table)
         .then(res=>{
            console.log(res);
            location.reload();
         })
         .catch(err=>console.log(err));
}

window.addEventListener("DOMContentLoaded",()=>{
    axios.get(url)
         .then(res=>{
            //console.log(res);
            for(let i=0;i<res.data.length;i++){
                console.log(res.data[i]);
                if(res.data[i].tableNo=='table1'){
                    showTable1(res.data[i]);
                }
                if(res.data[i].tableNo=='table2'){
                    showTable2(res.data[i]);
                }
                if(res.data[i].tableNo=='table3'){
                    showTable3(res.data[i]);
                }
            }
         })
         .catch(err=>console.log(err));
})

function showTable1(data){
    let li = document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(`${data.dish} ${data.price}`));
    table1List.appendChild(li);  

    //create delete button.
    let delBtn = document.createElement('button');
    delBtn.className='btn btn-primary btn-sm float-right delete';
    delBtn.appendChild(document.createTextNode('Cancel order'));
    //Remove user from local storage
    delBtn.onclick = () =>{
        axios.delete(`${url}/${data._id}`)
             .then(res=>{
                console.log(res);
                location.reload();
             })
             .catch(err=>console.log(err));
        table1List.removeChild(li);
    }
    li.appendChild(delBtn);
    table1List.appendChild(li);
}

function showTable2(data){
    let li = document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(`${data.dish} ${data.price}`));
    table2List.appendChild(li);  

    //create delete button.
    let delBtn = document.createElement('button');
    delBtn.className='btn btn-primary btn-sm float-right delete';
    delBtn.appendChild(document.createTextNode('Cancel order'));
    //Remove user from local storage
    delBtn.onclick = () =>{
        axios.delete(`${url}/${data._id}`)
             .then(res=>{
                console.log(res);
                location.reload();
             })
             .catch(err=>console.log(err));
        table2List.removeChild(li);
    }
    li.appendChild(delBtn);
    table2List.appendChild(li);
}

function showTable3(data){
    let li = document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(`${data.dish} ${data.price}`));
    table3List.appendChild(li);  

    //create delete button.
    let delBtn = document.createElement('button');
    delBtn.className='btn btn-primary btn-sm float-right delete';
    delBtn.appendChild(document.createTextNode('Cancel order'));
    //Remove user from local storage
    delBtn.onclick = () =>{
        axios.delete(`${url}/${data._id}`)
             .then(res=>{
                console.log(res);
                location.reload();
             })
             .catch(err=>console.log(err));
        table3List.removeChild(li);
    }
    li.appendChild(delBtn);
    table3List.appendChild(li);
}