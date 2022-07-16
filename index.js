
window.onload = () => {
  const mainbody = document.getElementById('holidays')
  

  fetch("https://holidays-jp.github.io/api/v1/date.json")
  .then((response) => { return response.text() })
  .catch(e => { throw new Error(e)})
  .then(d => {
    const text = JSON.parse(d)  

    Object.keys(text).forEach(key => {
        let color = "#FFFFFF"
        console.log("Now Year : "+Number(new Date().getFullYear()))
        console.log("Now Date :"+Number(new Date().getMonth()) + 1)
        console.log("Now Date :"+Number(new Date().getDay()) + 1)
        console.log("Year :"+Number(key.substring(0,4)))
        console.log("Month : " +Number(key.substring(5,7)))
        console.log("Day : "+Number(key.substring(8,10)))
        console.log("Holiday Math "+(Number(key.substring(8,10) - new Date().getDay())))
        console.log("=================================================")
        if(!(new Date().getFullYear() === Number(key.substring(0,4)))) return;
        if(new Date().getMonth() > Number(key.substring(5,7))) return;
        if(new Date().getMonth() + 1 === Number(key.substring(5,7)) && new Date().getDay() + 1 <= Number(key.substring(8,10)) && (new Date().getDay() + 1 - Number(key.substring(8,10))) <= 2) color = "#FFD400" 

        mainbody.innerHTML += `
        <div class="box" style="background-color : ${color}">
          <h1 class="title is-3 has-text-centered"> ${key} </h1>
            <h1 class="title is-4 has-text-centered"> ${text[key]} </h1>
        </div>
        `;
    })
  })

}