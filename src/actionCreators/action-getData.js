import FullListAction from './action-fullList';

const URL=  'https://swapi.co/api/people/';
const GetData= ()=>{
    return (dispatch) => {
        
        fetch(URL)
            .then((response) => {
                if (!response.ok) {
                    throw Error(response.statusText);
                }
                return response;
            })
            .then((response) => {
                return response.json()
            })
            .then((data) => {dispatch(FullListAction(data))})
            .catch(() => alert('something went wrong in api call'));
    }
}

export default GetData;