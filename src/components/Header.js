import React from "react";
import Image from "next/image";
import { MenuIcon, SearchIcon, ShoppingCartIcon} from '@heroicons/react/outline';

function Header() {
  return (
    <header>
      <div className="flex item-center bg-amazon_blue-light p-1 flex-grow py-2 ">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            src="https://links.papareact.com/f90"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/* Search bar */}
        <div >
            <input type="text" />
            <SearchIcon className="" />
        </div>
      </div>

      <div></div>
    </header>
  );
}

export default Header;
