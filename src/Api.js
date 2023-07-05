function Api()
{
    return fetch(`https://api.github.com/repositories/1296269/issues?page=$%7BpageNumberHere%7D&per_page=5`)
    .then(data=>{
        return data.json()
    })
    .catch(e=>{
        alert(e.message)
    })
}
export {Api}