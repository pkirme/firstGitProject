let form=document.getElementById('addForm');
form.addEventListener('submit',addTable);
const url='https://crudcrud.com/api/db50a02b40284e128730898ee34ac301/info';
// let table1List=document.getElementById('table1List');
// let table2List=document.getElementById('table2List');
// let table3List=document.getElementById('table3List');

async function addTable(e){
    e.preventDefault();
    const table={
        price:document.getElementById('price').value,
        dish:document.getElementById('dish').value,
        tableNo:document.getElementById('select').value
    }

    // axios.post(url,table)
    //      .then(res=>{
    //         console.log(res);
    //         location.reload();
    //      })
    //      .catch(err=>console.log(err));
    const response = await axios.post(url, table);
    const data = response.data;
    console.log(data);
    showData(data);
   
    //reset all field
    form.reset()
}

window.addEventListener("DOMContentLoaded",async()=>{
    // axios.get(url)
    //      .then(res=>{
    //         //console.log(res);
    //         for(let i=0;i<res.data.length;i++){
    //             console.log(res.data[i]);
    //             if(res.data[i].tableNo=='table1'){
    //                 showTable1(res.data[i]);
    //             }
    //             if(res.data[i].tableNo=='table2'){
    //                 showTable2(res.data[i]);
    //             }
    //             if(res.data[i].tableNo=='table3'){
    //                 showTable3(res.data[i]);
    //             }
    //         }
    //      })
    //      .catch(err=>console.log(err));
    const response=await axios.get(url);
    const data=response.data;
    console.log(data);
    for(let i=0;i<data.length;i++){
                    // console.log(getData[i]);
                    // if(getData[i].tableNo=='table1'){
                    //     showTable1(getData[i]);
                    // }
                    // if(getData[i].tableNo=='table2'){
                    //     showTable2(getData[i]);
                    // }
                    // if(getData[i].tableNo=='table3'){
                    //     showTable3(getData[i]);
                    // }
            showData(data[i]);
     }
})

// function showTable1(data){
//     let li = document.createElement('li');
//     li.className='list-group-item';
//     li.appendChild(document.createTextNode(`${data.dish} : ${data.price}`));
//     table1List.appendChild(li);  

//     //create delete button.
//     let delBtn = document.createElement('button');
//     delBtn.className='btn btn-danger btn-sm float-right delete';
//     delBtn.appendChild(document.createTextNode('Cancel order'));
//     //Remove data
//     delBtn.onclick = async() =>{
//         // axios.delete(`${url}/${data._id}`)
//         //      .then(res=>{
//         //         console.log(res);
//         //         location.reload();
//         //      })
//         //      .catch(err=>console.log(err));
//         const response=await axios.delete(`${url}/${data._id}`);
//         console.log(response.data);
//         table1List.removeChild(li);
//     }
//     li.appendChild(delBtn);
//     table1List.appendChild(li);
// }

// function showTable2(data){
//     let li = document.createElement('li');
//     li.className='list-group-item';
//     li.appendChild(document.createTextNode(`${data.dish} : ${data.price}`));
//     table2List.appendChild(li);  

//     //create delete button.
//     let delBtn = document.createElement('button');
//     delBtn.className='btn btn-danger btn-sm float-right delete';
//     delBtn.appendChild(document.createTextNode('Cancel order'));
//     //Remove data
//     delBtn.onclick = async() =>{
//         // axios.delete(`${url}/${data._id}`)
//         //      .then(res=>{
//         //         console.log(res);
//         //         location.reload();
//         //      })
//         //      .catch(err=>console.log(err));
//         const response=await axios.delete(`${url}/${data._id}`);
//         console.log(response.data);
//         table2List.removeChild(li);
//     }
//     li.appendChild(delBtn);
//     table2List.appendChild(li);
// }

// function showTable3(data){
//     let li = document.createElement('li');
//     li.className='list-group-item';
//     li.appendChild(document.createTextNode(`${data.dish} : ${data.price}`));
//     table3List.appendChild(li);  

//     //create delete button.
//     let delBtn = document.createElement('button');
//     delBtn.className='btn btn-danger btn-sm float-right delete';
//     delBtn.appendChild(document.createTextNode('Cancel order'));
//     //Remove data
//     delBtn.onclick = async() =>{
//         // axios.delete(`${url}/${data._id}`)
//         //      .then(res=>{
//         //         console.log(res);
//         //         location.reload();
//         //      })
//         //      .catch(err=>console.log(err));
//         const response=await axios.delete(`${url}/${data._id}`);
//         console.log(response.data);
//         table3List.removeChild(li);
//     }
//     li.appendChild(delBtn);
//     table3List.appendChild(li);
// }

// //show the table on screen
// function showData(data) {
    
//                         if(data.tableNo=='table1'){
//                             showTable1(data);
//                         }
//                         if(data.tableNo=='table2'){
//                             showTable2(data);
//                         }
//                         if(data.tableNo=='table3'){
//                             showTable3(data);
//                         }
                    
// }

function showData(data){
    let table = `${data.tableNo}List`;
    let tableList=document.getElementById(table);
    console.log(tableList);
    let li = document.createElement('li');
    li.className='list-group-item';
    li.appendChild(document.createTextNode(`${data.dish} : ${data.price}`));
   

    //create delete button.
    let delBtn = document.createElement('button');
    delBtn.className='btn btn-danger btn-sm float-right delete';
    delBtn.appendChild(document.createTextNode('Cancel order'));
    //Remove data from server
    delBtn.onclick = async() =>{
        // axios.delete(`${url}/${data._id}`)
        //      .then(res=>{
        //         console.log(res);
        //         location.reload();
        //      })
        //      .catch(err=>console.log(err));
        const response=await axios.delete(`${url}/${data._id}`);
        console.log(response.data);
        tableList.removeChild(li);
    }
    li.appendChild(delBtn);
    tableList.appendChild(li);
}