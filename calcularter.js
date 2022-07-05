let string= "";
let buttons = document.querySelectorAll('.button');
let item='';
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        buttonText=e.target.innerHTML;
        if(e.target.innerHTML=='=')
        {
            string=eval(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='π')
        {  
            PI=3.14159265359;
            buttonText=string*PI;
            string=buttonText;
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='e')
        {  
            e=2.71828182846;
            buttonText=string*e;
            string=buttonText;
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='sin')
        {  
            string=Math.sin(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='tan')
        {  
            string=Math.tan(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='ln')
        {  
            string=Math.log(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='nl')
        {  
            n=string;
            string=1;
            while(n>1)
            {
                string*=n;
                n-+1;
            }
            
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='log10')
        {  
            string=Math.log10(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='hex')
        {  
            string=Math.hex(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='cos')
        {  
            string=Math.cos(string);
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='X<sup>2</sup>')
        {  
            string=string*string;
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='X<sup>3</sup>')
        {  
            string=string*string*string;
            document.querySelector('input').value=string;
        }
        else if(e.target.innerHTML=='C')
        {
            string="";
            document.querySelector('input').value=string;
        }
        else if(buttonText=='X')
        {
            buttonText='*';
            string+=buttonText;
            document.querySelector('input').value=string;
        }
        else if(buttonText=='M+')
        {
            buttonText='+';
            string+=buttonText;
            document.querySelector('input').value=string;
        }
        else if(buttonText=='M-')
        {
            buttonText='-';
            string+=buttonText;
            document.querySelector('input').value=string;
        }
        else{
        console.log(e.target)
        string = string + e.target.innerHTML;
        document.querySelector('input').value=string;
        }
    })
})