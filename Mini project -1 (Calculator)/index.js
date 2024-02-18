
function hello(){
    let str="";
var val = document.querySelector(".main-text");
var btn = document.querySelectorAll("button")
var clearVal = document.querySelector(".clear")

btn.forEach(function(button){
    button.addEventListener("click",function(e){

        let final= e.target.dataset.num;

        if(val === str){
            val.textContent="";
        }
        else if(final=='=')
        {
            str = eval(str)
            val.innerHTML = str
        }
        else{
        str = str+final     
            
            val.innerHTML = str
            console.log(final)  
        }
    })

})
clearVal.addEventListener("click",function(){
    val.textContent="";
})

}
hello()
















// for (const button of btn){
//     button.addEventListener("click",function(){
//         let value = button.target.dataset.num;
//         val.value+=value;
//     })
//     }