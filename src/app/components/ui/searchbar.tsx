import Image from "next/image";

export default function Searchbar() {
    return (
        <div className="bg-[#DBDBDB] w-96 h-11 rounded-s">
            <div className="bg-transparent pl-4 flex items-center">
                <Image src='search-normal.svg' alt="search" width={22} height={22} />
                <input className="bg-transparent h-11 w-full focus:outline-none pl-4" type="search" name="searchbar" placeholder="Search for anything..." />
            </div>
        </div>
    )
}
