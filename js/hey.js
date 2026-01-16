let taking=localStorage.getItem('history')
let data=JSON.parse(taking);
export let history=data||[
];

export function store(){
    let toString=JSON.stringify(history);
    localStorage.setItem('history',toString);
}

export function clearData(){

history=[];
localStorage.removeItem('history');
}





