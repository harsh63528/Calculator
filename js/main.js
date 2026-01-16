            //importing history
            import{history,store} from './hey.js'
            //creating the input to store input
            let input;
            let result;
            let id=0;
            //using dom manuplation for accessing the html element
            let screen=document.querySelector('.screen');
            let clearElement=document.querySelector('.clear');


            //event listener
            let equal=document.querySelector('.equal');
            equal.addEventListener('click',()=>{solve()});
            clearElement.addEventListener('click',()=>{
                clear();
            })
            screen.innerHTML='';


            //for taking the innput
            function fill(num) {
                screen.innerHTML+=`${num}`;
            }

        window.fill=fill;


        function solve(){
        new Promise((resolve)=>{
                evalulate();
                resolve();
            }).then(
                new Promise((resolve)=>{
                    storeArray();
                    resolve();
                }).then(
                    screen.innerHTML=`${result}`
                )
            )

        }


            //for evaluating

            function evalulate(){
                input=screen.innerHTML
                let no=screen.innerHTML;
                result=eval(no);
            }



            //for clearing

            function clear(){
                screen.innerHTML='';
            }


            //storing the value in array at hey.js

            function storeArray(){
                new Promise((resolve)=>{
                    resolve();
                }).then(
                    new Promise((resolve)=>{
                        let data={
                    data:input,
                    result: result
                } 
                window.data=data
                resolve()
            }
                ).then(
                    new Promise((resolve)=>{
                history.push(data);
                    resolve();
                })

                ).then(
                    store()
                )
                )
            }
            
                
            




