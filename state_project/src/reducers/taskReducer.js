export default function taskReducer (tasks,action){
// action =dispatch object
if(action.type === 'added'){
    // add logic
    return [...tasks,{
        id:action.id,
        text:action.text,
        done:false
    }]
}
else if(action.type ==="changed"){
    // 
}
else if(action.type ==="deleted"){
// delete task
}
else{
    throw Error(`not action matched with ${action.type}`)
}
}