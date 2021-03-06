import React from 'react'
import {IAppInput} from "./ISearch"
import "./Search.css"

const Search: React.FC<IAppInput> = ({placeholder, type = "string", width, height, searchValue, setSearchValue}) => {
    return (
        <div className="search" style={{maxWidth: width, height: height}}>
            <input
                className="input"
                placeholder={placeholder}
                type={type}
                value={searchValue}
                onChange={e => setSearchValue(e)}
            />
        </div>
    )
}

export default Search