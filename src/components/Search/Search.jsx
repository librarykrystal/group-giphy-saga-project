import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState } from "react";

const Search = () =>{
    const history = useHistory();
    const dispatch = useDispatch();
    // const searchTerm = useSelector(store => store.searchTerm)

    const [searchTermInput, setSearchTermInput] = useState('');

const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({type: 'SET_SEARCH_TERM', payload: searchTermInput})
}


    return (
        <>
        <h3>search the database</h3>
        <form onSubmit={handleSubmit} className="searchInput">
            <input
                // required   // prevents if stmt from checking warning boolean in handleSubmit
                className="searchInput"
                type="string" 
                onChange={(event) => setSearchTermInput(event.target.value)}
            />
            <br />
            <button className="submitBtn" type="submit">Search</button>
        </form>
        </>
    )
}
export default Search;