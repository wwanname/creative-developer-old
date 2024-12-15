"use client";

import Image from "next/image";
import React, { useState } from 'react';
import SearchManufacturer from "./SearchManufacturer";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type='submit' className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src={"/magnifying-glass.svg"}
      alt={"magnifying glass"}
      width={40}
      height={40}
      className='object-contain'
    />
  </button>
);

const SearchBar = () => {
    const [manufacturer, setManuFacturer] = useState('');

    const handleSearch = () => {}

  return (
    <form className='flex items-center justify-start max-sm:flex-col w-full relative max-sm:gap-4 max-w-3xl' 
        onSubmit={handleSearch}>
      <div className='flex-1 max-sm:w-full flex justify-start items-center relative'>
        <SearchManufacturer
          manufacturer={manufacturer}
          setManuFacturer={setManuFacturer}
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <div className='flex-1 max-sm:w-full flex justify-start items-center relative'>
        <Image
          src='/model-icon.png'
          width={25}
          height={25}
          className='absolute w-[20px] h-[20px] ml-4'
          alt='car model'
        />
        <input
          type='text'
          name='model'
          placeholder='Tiguan...'
          className='searchbar__input'
        />
        <SearchButton otherClasses='sm:hidden' />
      </div>
      <SearchButton otherClasses='max-sm:hidden' />
    </form>
  );
};

export default SearchBar;