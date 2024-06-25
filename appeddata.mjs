import { fetchData } from "./fetchdata.mjs"

export function appendData(data) {
    var container = document.getElementById('container')
    var elements = [
        { tag: 'h1', content: data.activity },
        { tag: 'p', content: `Type: ${data.type}` },
        { tag: 'p', content: `Participants: ${data.participants}` },
        { tag: 'p', content: `Price: ${data.price}`},
        {tag:'p', content:`Accessibility: ${data.accessibility}`},
        {tag:'p', content:`Link: ${data.link}`}
    ]

elements.map((el)=>{
    var element = document.createElement(el.tag)
    element.textContent=el.content
    container.appendChild(element)
})

var newbtn = document.createElement('button')
newbtn.textContent='Random Activity'
newbtn.setAttribute('class','btn')
newbtn.addEventListener('click',async()=>{
    let data = await fetchData()
    appendData(data)

})
container.appendChild(newbtn)
}


