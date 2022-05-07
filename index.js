
$(document).ready(function(){
  let text= document.getElementById('input');
let op1=null;
let x=null;
    let calc=new    calculator;
$(".num").click((e)=>{
    
        text.value=text.value+e.target.innerHTML;

})

$(".opt").click((e)=>{
 calc.opd = e.target.innerHTML;
 console.log(calc.opd)
 calc.a=parseInt(text.value);
    text.value="";
})
$("#eql").click((e)=>{
    
    calc.b=parseInt(text.value);
    text.value=(calc.calculate())
})

$(".clr").click((e)=>{
        
        calc.b=null;
        
        text.value="";
})

})

class calculator {
     
    constructor (){
        this.a=null;
        this.b=null;
        this.opd="";

    }
     calculate() {
        console.log(this.opd);
        
        if (this.opd == '+') {
            this.a = this.a + this.b;
        } else if (this.opd == '*') {
          this.a = this.a * this.b;
        } else if (this.opd == '/') {
          this.a = this.a / this.b;
        } else if (this.opd == '-') {
          this.a = this.a - this.b;
        }
        this.opd = "";
        this.b = null;
        return this.a;
    }
}