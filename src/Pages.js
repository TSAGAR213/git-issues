import { useEffect, useState } from "react"
function Api(url)
{  console.log(url)
    return fetch(url)
    .then(data=>{
        return data.json()
    })
    .catch(e=>{
        alert(e.message)
    })
}
function Pages()
{  let [apidata,setApidata]=useState([]);
   let [page,setPage]=useState(1)
    useEffect(()=>{
        Api(`https://api.github.com/repositories/1296269/issues?page=$%7B${page}%7D&per_page=5`)
        .then(data=>{
            console.log(data)
            setApidata(data)
        })
        .catch(e=>{
            alert(e.message)
        })
    },[page])
    return <div>
    <h1>Page no {page}</h1>
    <ul>
        {
            apidata.map((data,i)=>{
                return <li key={i}>
                    <h4>
                        {data['title']}
                    </h4>
                </li>
            })
        }
    </ul>
    <button
    onClick={()=>{
        setPage(old=>{
            if(old===1)
            {
                return 1
            }
            else
            {
                return old-1
            }
        })
    }}
    >previous page </button>
    <button
      onClick={()=>{
        setPage(old=>old+1)
    }}
    >next page </button>
    </div>
}

export default Pages;