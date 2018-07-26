let filteredlist = [];

const filterFunc = (stateDtat, inputText, fullList) => {
    
    let filteredList = fullList.filter((item)=>{
        return item.name.toLowerCase().indexOf(inputText.toLowerCase()) > -1
    })
    return Object.assign([],filteredList)
}

export const mainReducer = (state = [], action) =>{
    switch(action.type){
        case 'FILTER_LIST_ACTION':
        filteredlist = filterFunc(state, action.data, action.fullList)
        return filteredlist;
        default:
        return action.data ? Object.assign([],state, action.data.results) : state;
    }
}