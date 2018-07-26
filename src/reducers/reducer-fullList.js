const FullList = (state = null, action) =>{
   
    switch(action.type){

        case 'FullList':
        let filteredlist = action.data.results;
        return [...state, filteredlist];
        default:
        return state;
    }
}

export default FullList;