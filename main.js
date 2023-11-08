import { data } from "./data.js";

const listElemen = document.querySelector(".menu");
const upSort = document.querySelector(".upsort");
const downSort = document.querySelector(".downsort");

data.forEach(item => {
    const {name, ticker, value, change} = item;

    listElemen.innerHTML += `
    <table>
    <tr>
        <td>"${name}"</td>
        <td>"${ticker}"</td>
        <td>"${value}"</td>
        <td>"${change}"</td>
    </tr>
  </table>`
})              
upSort.addEventListener("click",()=>{
  data.sort((a, b)=> a.value.localeCompare(b.value))

  listElemen.innerHTML = "";
  domRender()

})
downSort.addEventListener("click",()=>{
    data.sort((a, b)=> b.value.localeCompare(a.value))
  
    listElemen.innerHTML = "";
    domRender()
  
  })


function domRender(){
    
data.forEach(item => {
    const {name, ticker, value, change} = item;

    listElemen.innerHTML += `
    <table>
    <tr>
        <td>"${name}"</td>
        <td>"${ticker}"</td>
        <td>"${value}"</td>
        <td>"${change}"</td>
    </tr>
  </table>`
})
}