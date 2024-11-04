import React from 'react'
import "./SearchComponets.css";
import SearchUserCard from './SearchUserCard';
const SearchComponets = () => {
  return (
    <div className='searchContainer'>
        <div className='px-3 pb-5'>
            <h1 className='text-xl pb-5'>Search </h1>
            <input type="text" placeholder='Search...' className='searchInput' />
        </div>
        <hr />
        <div className='px-3 pt-5'>
         {[1,1,1,1,1,1,].map((item)=><SearchUserCard/>)}
        </div>
    </div>
  )
}

export default SearchComponets;