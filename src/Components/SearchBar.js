import React, {useState} from "react";

function SearchBar({item}){
    const transactionsArray = item
    
    const [searchInput, setSearchInput] = useState("");
    
    const handleFilter = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
      };
      
      if (searchInput.length > 0) {
          transactionsArray.filter((element) => {
          return element.description.match(searchInput);
      });
      }
    
    
    
    return (
        <div className="searchbar">
            <h1>Bank of Flatiron</h1>
            <input
                type="text"
                placeholder="Search here"
                onChange={handleFilter}
                value={searchInput} 
                />
        </div>
    )
}

export default SearchBar;