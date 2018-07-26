const FilterAction = (data,list)=>{
    return {
        type: 'FILTER_LIST_ACTION',
        data:data,
        fullList: list
    }
}

export default FilterAction;