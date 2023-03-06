"use client";
import React from "react";

import { BsSearch } from "react-icons/bs";

function Search() {
  const inputSearch = React.useRef<HTMLInputElement>(null);

  return (
    <div className='relative'>
      <input
        autoComplete='off'
        ref={inputSearch}
        type='text'
        className='bg-slate-100 bg-opacity-70 px-3 py-2 placeholder:text-gray-400 rounded-xl focus:outline-none lg:w-96 focus:bg-white ring-1 ring-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 transition-all'
        placeholder='Search here...'
      />

      <BsSearch className='text-gray-400 cursor-pointer absolute right-2 top-3' />
    </div>
  );
}

export default Search;
