let url='http://universities.hipolabs.com/search?name='
let btn=document.querySelector('button');
btn.addEventListener('click',async()=>{
    let country=document.querySelector('input').value;
 let college= await getCollege(country);
show(college)

})
function show(college){
    for(clz of college){
     let li=document.createElement('li');
     li.innerText=clz.name;
     document.querySelector('#list').appendChild(li)
    }
}
async function getCollege(country){
    try{
        let res=await axios.get(url+country);
        return (res.data);
   }
   catch(e){
    return "Not found"
   }
    }
     
