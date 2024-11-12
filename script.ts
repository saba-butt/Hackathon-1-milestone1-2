const toggleButton = document.getElementById('toggle-skills') as HTMLButtonElement;
const skillsMy = document.getElementById('skills') as HTMLElement;

toggleButton.addEventListener( "click",()=>{
    if(skillsMy.style.display === "none"){
        skillsMy.style.display = "block";

    }else {
        skillsMy.style.display = "none";

    }
    })