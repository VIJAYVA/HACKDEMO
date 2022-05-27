var div=document.createElement("div");
div.innerHTML=`<input type="text" id="txt">
<button type="button" onclick="foo()">search</button>
<div id="active"></div>
<div id="recovered"></div>
<div id="deaths"></div>`;
div.style.textAlign="center";
document.body.append(div);



async function foo(){
    let cc=document.getElementById("txt").value;
    let res=await fetch(`https://api.covid19api.com/total/country/${cc}`);
    let res1=await res.json();
    console.log(res1);
    let index=res1.length-1;
    var result=res1[index].Active;
    console.log(result);
    document.getElementById("active").innerText=`TOTAL ACTIVE CASE: ${result}`
    
    var result1=res1[index].Recovered;
    let vj=document.getElementById("recovered").innerText=`TOTAL RECOVERED CASE: ${result1}`
    console.log(vj);

    var result2=res1[index].Deaths;
    let va=document.getElementById("deaths").innerText=`TOTAL DEATHS CASE: ${result2}`
    console.log(va);

}