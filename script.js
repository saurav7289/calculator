const buttons = document.querySelectorAll('button');
const numberDiv = document.querySelector('#number');
const inputText = document.querySelector('input');

document.addEventListener('keydown',(e)=>{
    
       
        console.log("you pressed " + e.key);
    });

    console.log("loading start");

    buttons.forEach((button)=>{

        document.addEventListener('keydown',(e)=>{
            if(e.key == button.value){
                inputText.value += e.key; 
                console.log("you pressed " + e.key); 
            }
         });


       //add number in the field
        button.addEventListener('click',(event)=>{
            inputText.value += event.target.value;
            
        });

        //calculate answer
        const equal = document.querySelector('#Enter');
        equal.addEventListener('click',()=>{
            if(inputText.value){
                inputText.value = eval(inputText.value);
            }
        });
    });

    

    // clear the field
    const clear = document.querySelector('#clear');
    clear.addEventListener('click',()=>{
        inputText.value = '';
    });

 //back digit
    const back = document.querySelector('#back');
    back.addEventListener('click',()=>{
        if(inputText.value){
            inputText.value = +(String(inputText.value).slice(0,-1));
        } 
    });

    //keyboard keydown
    document.addEventListener('keydown',(e)=>{

        if(e.key == 'Backspace'){
            inputText.value = +(String(inputText.value).slice(0,-1));
            console.log(inputText.value);
        }

        if(e.key == 'Enter'){
            inputText.value = eval(inputText.value);
        }
    });
