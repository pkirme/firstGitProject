let form=document.getElementById('addForm');
form.addEventListener('submit',addTable);
const url='https://crudcrud.com/api/db50a02b40284e128730898ee34ac301/info';

async function addTable(e){
    e.preventDefault();
    const table={
        price:document.getElementById('price').value,
        dish:document.getElementById('dish').value,
        tableNo:document.getElementById('select').value
    }

    const response = await axios.post(url, table);
    const data = response.data;
    console.log(data);
    showData(data);
   
    //reset all field
    form.reset()
}

window.addEventListener("DOMContentLoaded",async()=>{
    const response=await axios.get(url);
    const data=response.data;
    console.log(data);
    for(let i=0;i<data.length;i++){
         showData(data[i]);
     }
})

function showData(data){
    const table = `${data.tableNo}List`;
    const tableList=document.getElementById(table);
    console.log(tableList);
    const li = document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(`${data.dish} : ${data.price}`));
   

    //create delete button.
    const delBtn = document.createElement('button');
    delBtn.className='btn btn-danger btn-sm float-right delete';
    delBtn.appendChild(document.createTextNode('Cancel order'));
    //Remove data from server
    delBtn.onclick = async() =>{
        const response=await axios.delete(`${url}/${data._id}`);
        console.log(response.data);
        tableList.removeChild(li);
    }
    li.appendChild(delBtn);
    tableList.appendChild(li);
}