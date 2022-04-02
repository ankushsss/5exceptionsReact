import React, { useEffect, useState } from 'react'
import axios from 'axios'
export const InfoList = () => {
    const [info,setInfo] = useState([])
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(0)
    const [pages, setPages] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    useEffect(()=>{
        axios.post("http://localhost:7100/userList", {name:search,page:currentPage}).then((res) => {
            console.log(res)
            setInfo(res.data.result)
            console.log(parseInt(res.data.records)/10)
            let floor = parseInt(res.data.records)/10
            let pagesFloor = Math.ceil(floor)
            setPage(pagesFloor)
            setPageNo()
            // navigate(`/manageDocument/`)
        }).catch((err) => {
            console.log(err)
        });
       
    },[search,page,currentPage])
    const setPageNo = ()=>{
        let arrayData = []
    
            for(let pageLength=0;pageLength<page;pageLength++)
            {
                arrayData.push(pageLength+1)
            }
          
       setPages(arrayData)
    }
    return (
    <div>
        <table >
            <caption>
                <input className="searchBar" placeholder="Search title ....." type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
            </caption>
            {
                info.map((data)=>{
                    let img = `http://localhost:7100/upload/${data.path}`
                        return(<>
                                    <tr className="tableRowCard">
                                        <td rowSpan="2" style={{background:"#c0c0c057"}}>
                                            <img width="80px" height="80px" src={img}/>
                                        </td>
                                        <td className="title">{data.title}</td>
                                    </tr>
                                    <tr>
                                         <td><p style={{fontSize:"13px"}}>{data.description}</p></td>
                                    </tr>
                                    </>
                                    )
                })
            }
            {
                pages.map((data)=>{
                    return(
                        <>
                            <button onClick={()=>setCurrentPage(data)}>{data}</button>
                        </>
                    )
                })
            }
        </table>
    </div>
  )
}
