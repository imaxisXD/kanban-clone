import Image from "next/image";
import Searchbar from "./ui/searchbar";

export default function NavBar() {
    return (
        <nav className="bg-white text-black flex h-20 items-center sticky inset-x-0 top-0 z-30 w-full">
            <div className="flex items-center justify-between pr-10">
                <div className="flex items-center justify-center">
                    <Image src='navbar-logo.svg' alt="project-logo" width={24} height={24} />
                    <h1>Project M.</h1>
                </div>
                <Image src='left-arrow.svg' alt="left-arrow" width={26} height={20} />
            </div>
            <Searchbar />
        </nav>
    )
}