import React from 'react'
import { FaSearch } from 'react-icons/fa'
function Navbar() {
  return (
    <div className="grid grid-cols-[200px_540px_300px]  justify-center  bg-primaryBlack py-4 lg:gap-x-20">
      {/* Logo */}
      <div className=" relative self-center ">
        <h2 className=" leading-1 pb-1 font-gothic text-3xl font-bold  text-primaryGreen">
          materyum
          <span className=" absolute top-5 right-8 font-gothic text-[16px] font-medium  tracking-[-1.2px] text-primaryGreen">
            evin için...
          </span>
        </h2>
      </div>
      {/* SearchBar */}
      <div className="flex self-end">
        <div className="w-full">
          <div className=" relative flex w-full flex-wrap  self-center rounded">
            <input
              type="text"
              className=" relative m-0 w-full min-w-0  flex-auto  rounded-2xl border border-solid border-primaryGreen bg-[#7D7D7D]  py-1.5 pl-3 pr-10 text-xs font-normal text-gray-700 transition ease-in-out focus:text-white focus:outline-none"
              placeholder="Search amongst products, brands, designers,news"
            />
            <span className=" absolute right-2 flex cursor-pointer items-center self-center whitespace-nowrap rounded px-3 py-1.5  font-normal ">
              <FaSearch className="h-4 w-4  text-white" />
            </span>
          </div>
        </div>
      </div>
      {/* Buttons */}
      <div className="flex self-end ">
        <button className=" mr-4 w-1/2 rounded-2xl border bg-primaryGreen bg-transparent p-1 text-sm  font-bold   text-primaryBlack transition-transform hover:scale-105 hover:border-transparent">
          Hizmet Ver
        </button>
        <button className="mr-4 w-1/2 rounded-2xl border bg-transparent  p-1  text-sm font-semibold  text-white transition-transform hover:scale-105 ">
          Giriş Yap/Kaydol
        </button>
      </div>
    </div>
  )
}

export default Navbar
