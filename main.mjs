import { fetchData } from './fetchdata.mjs';
import { appendData } from './appeddata.mjs';
var btn = document.querySelector('.btn')

btn.addEventListener('click',async()=>{
    const data = await fetchData()
    appendData(data)
})

console.log(await fetchData())