console.log("hi")
const btns=document.querySelectorAll(".btn");
// console.log(btn.innerHTML);
const inp=document.querySelector('.inpBox');
let str="";
console.log(btns)
btns.forEach(btn=>{
    btn.addEventListener('click',()=>{

        const val=btn.innerText;
        if(val=='C')
        {
            str=""
        }
        else if(val=='DE')
        {
            str=str.slice(0,-1);
        }
        else if(val=='=')
        {
            try{
            str=eval(str).toString();
            }
            catch{
                alert("Enter a valid Expression");
            }
        }
        else if(val=='X')
        {
            str+='*';
        }
        else
        {
            str=str+btn.innerText;
        }

        console.log(str);
        inp.value=str
        
    })
})
