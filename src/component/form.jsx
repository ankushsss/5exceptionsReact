import React, { useState } from 'react'
import TableRows from "./tableRows"
import axios from "axios"
export const Form = () => {
   
    const [rowsData, setRowsData] = useState([{
        img:undefined,
        title:'',
        description:'',
        qty:'',
        price:'',
        date:'',   
    } ]);
     
    const addTableRows = ()=>{
  
        const rowsInput={
            img:undefined,
            title:'',
            description:'',
            qty:'',
            price:'',
            date:'',   
        } 
        setRowsData([...rowsData, rowsInput])
      
    }
   const deleteTableRows = (index)=>{
        const rows = [...rowsData];
        rows.splice(index, 1);
        setRowsData(rows);
   }
   const handleChangeImg = (index, evnt)=>{
    
    const { name} = evnt.target;
     const  value = evnt.target.files[0]
    const rowsInput = [...rowsData];
    rowsInput[index][name] = value;
    setRowsData(rowsInput); 
}
   const handleChange = (index, evnt)=>{
    
    const { name, value } = evnt.target;
    const rowsInput = [...rowsData];
    rowsInput[index][name] = value;
    setRowsData(rowsInput);
}
const saveData = ()=>{
    rowsData.map((data)=>{
        const {title,description,qty,price,date,img}= data;
       if(title&&description&&qty&&price&&img)
       {
        let form = new FormData()
        form.append("file", img)
        form.append("title", title)
        form.append("description", description)
        form.append("qty", qty)
        form.append("price", price)
        form.append("date", date)
        axios.post("http://localhost:7100/register", form).then((res) => {
            console.log("File Uplode successfull")
            // navigate(`/manageDocument/`)
        }).catch((err) => {
            console.log("upload")
        });
    }
    else{
        console.log("filed empty")
    }

    })
}
        return(
            <div className="container">
                <div className="row">
                    <div className="col-sm-8">
                    <table style={{width:"100%"}}>                    
                          <tr>
                            <td>Image</td>
                            <td>Title</td>
                            <td>Description</td>
                            <td>Qty</td>
                            <td>Price</td>
                            <td>Date</td>
                            <th>Action</th>
                          </tr>                       
                       <TableRows rowsData={rowsData} addTableRows={addTableRows} deleteTableRows={deleteTableRows} handleChange={handleChange} handleChangeImg={handleChangeImg}/>
                       <tr><td colSpan={6} style={{textAlign:"right"}}><button onClick={saveData}>submit</button></td></tr>
                    </table>
                    </div>
                    <div className="col-sm-4">
                    </div>
                </div>
            </div>
        )
    }
  

