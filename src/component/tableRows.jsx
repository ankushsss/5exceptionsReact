function TableRows({rowsData,addTableRows, deleteTableRows, handleChange, handleChangeImg}) {
    return(
        
        rowsData.map((data, index)=>{
            console.log(rowsData)
            const {title,description,qty,price,date,img}= data;
            return(
                <tr key={index}>
                    <td><input type="file" name="img" onChange={(evnt)=>(handleChangeImg(index, evnt))} /></td>
                    <td><input type="text" value={title} name="title" placeholder="title" onChange={(evnt)=>(handleChange(index, evnt))}/></td>
                    <td><textarea rows="" maxlength="250" value={description} name="description"onChange={(evnt)=>(handleChange(index, evnt))}></textarea></td>
                    <td><input type="number" value={qty} name="qty" placeholder="qty" onChange={(evnt)=>(handleChange(index, evnt))}/></td>
                    <td><input type="text" value={price} name="price" placeholder="price" onChange={(evnt)=>(handleChange(index, evnt))}/></td>
                    <td><input type="date" value={date}name="date" placeholder="date" onChange={(evnt)=>(handleChange(index, evnt))}/> </td>
                    <td>{index == 0 ?<button className="btn btn-outline-success" onClick={addTableRows} >+</button>:<button className="btn btn-outline-danger" onClick={()=>(deleteTableRows(index))}>x</button>}</td>
                </tr>
            )
        })
   
    )
    
}
export default TableRows;