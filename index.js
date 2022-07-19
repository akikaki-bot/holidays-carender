
window.onload = () => {
  const mainbody = document.getElementById('holidays')

  //If you want to enabled the debug mode, you add the divtag : <div id="infomations">
  //const debugs = document.getElementById('infomations')

  fetch("https://holidays-jp.github.io/api/v1/date.json")
  .then((response) => { return response.text() })
  .catch(e => { throw new Error(e)})
  .then(d => {
    const text = JSON.parse(d)  

    Object.keys(text).forEach(key => {
        console.log("Now Year : "+Number(new Date().getFullYear()))
        console.log("Now Date :"+Number(new Date().getMonth()) + 1)
        console.log("Now Date :"+Number(new Date().getDay()) + 1)
        console.log("Year :"+Number(key.substring(0,4)))
        console.log("Month : " +Number(key.substring(5,7)))
        console.log("Day : "+Number(key.substring(8,10)))
        console.log("Holiday Math "+(Number(key.substring(8,10) - new Date().getDay())))
        console.log("=================================================")
        if(!(new Date().getFullYear() === Number(key.substring(0,4)))) return;
        if(new Date().getMonth() + 1 > Number(key.substring(5,7))) return;
        if(new Date().getMonth() + 1 >= Number(key.substring(5,7)) && Number(new Date().getDate().toString().slice(-2)) > Number(key.substring(8,10))) return;

        const backgroundcolor = (() => {
          if(new Date().getMonth() + 1 === Number(key.substring(5,7)) && Number(new Date().getDate().toString().slice(-2)) <= Number(key.substring(8,10)) && (Number(new Date().getDate().toString().slice(-2)) + 1 - Number(key.substring(8,10))) <= 2){
            return "#FFD400"
          } else {
            return "#FFFFFF"
          }
        })

       //If you want to enabled the debug mode, you add the divtag : <div id="infomations">
       /*
        debugs.innerHTML += `</br>
        Now : ${new Date().getFullYear()} / ${new Date().getMonth()+1} ${ new Date().getDate().toString().slice(-2)}
        GetData : ${Number(key.substring(5,7))} / ${Number(key.substring(8,10))}
        `*/


        mainbody.innerHTML += `
        <div class="box" style="background-color : ${backgroundcolor()}">
          <h1 class="title is-3 has-text-centered"> ${key} </h1>
            <h1 class="title is-4 has-text-centered"> ${text[key]} </h1>
        </div>
        `;
    })

  })

}