import React from 'react'
import {
  FaSearch,
  FaWpexplorer,
  FaBookOpen,
  FaServicestack,
} from 'react-icons/fa'
import SubNavIcon from './SubNavIcon'
import SubNavItem from './SubNavItem'

function Navbar() {
  return (
    <div>
      <div className=" flex  flex-col bg-primaryBlack lg:grid  lg:grid-cols-[200px_540px_300px]  lg:justify-center lg:gap-x-20 lg:py-4">
        {/* Logo */}
        <div className=" mb-4 lg:relative lg:mb-0 lg:self-center ">
          <h2 className=" leading-1 pb-1 font-gothic text-3xl font-bold  text-primaryGreen">
            materyum
            <span className=" absolute top-5 left-24 font-gothic  text-[16px] font-medium tracking-[-1.2px] text-primaryGreen  lg:absolute lg:right-8">
              evin için...
            </span>
          </h2>
        </div>
        {/* SearchBar */}
        <div className=" flex lg:self-end">
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
        <div className=" my-2 min-w-full max-w-sm text-center lg:flex lg:self-end ">
          <button className=" mr-5 w-1/3 rounded-md border bg-primaryGreen p-1 text-sm font-bold  text-primaryBlack transition-transform  hover:scale-105   hover:border-transparent lg:mr-4 lg:w-1/2 lg:rounded-2xl">
            Hizmet Ver
          </button>
          <button className=" w-1/3 truncate border bg-transparent p-1 text-sm font-semibold  text-white  transition-transform hover:scale-105  lg:mr-4 lg:w-1/2 lg:rounded-2xl ">
            Giriş Yap/Kaydol
          </button>
        </div>
      </div>
      {/* Sub NavIcon */}
      <div className=" hidden bg-primaryGreen py-4 lg:grid  lg:grid-cols-[900px] lg:justify-center">
        <div className=" flex  justify-between py-1.5">
          <SubNavIcon Icon={FaWpexplorer} title="Keşfet" />
          <SubNavIcon Icon={FaBookOpen} title="Marka Kataloğu" />
          <SubNavIcon Icon={FaServicestack} title="Profesyonel Hizmet Al" />
        </div>
      </div>
      {/* Sub Navbar */}
      <div className="hidden lg:grid lg:grid-cols-[850px] lg:justify-center lg:py-4">
        <div className="flex  justify-between py-1.5 font-avenir text-[14px] font-medium text-primaryBlack">
          <SubNavItem />
        </div>
      </div>
    </div>
  )
}

export default Navbar
