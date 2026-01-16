    //importing the data
    import { history as dataStore,clearData} from "./hey.js";

    //taking the html element from history html
    let history=document.querySelector('.history')
    let arrayClear=document.querySelector('.clear');


    if (dataStore.length==0) {
         history.innerHTML=`<p class='empty-message'>no history</p`;
    }
    else{
 load();
    }
   

    //eventlistener
    arrayClear.addEventListener('click',()=>{
        clearData();
        history.innerHTML=`<p class='empty-message'>no history</p>`;
    })


    async function load(){
         function blank(){
            history.innerHTML='';
        }  

        await   blank();
        await   display();
    }


     function display(){
        dataStore.forEach(element => {
        history.innerHTML+=`<div class='history-data'>
        <p>input: ${element.data}.</p>
        <p>result: ${element.result}</p>
        </div>
        <hr>
        `
    })
    }
    //creating display function
    /*function load(){

    }






    */