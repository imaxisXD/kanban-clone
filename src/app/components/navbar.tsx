import Image from "next/image";
import Searchbar from "./ui/searchbar";

export default function NavBar() {
    return (
        <div className="bg-white text-black flex h-20 items-center sticky inset-x-0 top-0 z-30 w-full border-b ">
            <div className="flex items-center ml-4 h-20 mr-11">
                <div className="flex items-center gap-2 h-full w-48">
                    <Image src='navbar-logo.svg' alt="project-logo" width={24} height={24} />
                    <h1 className="font-semibold text-xl ">Project M.</h1>
                </div>
                <Image src='left-arrow.svg' alt="left-arrow" width={26} height={20} />
                <div className="h-full w-0 border-l ml-6"></div>
            </div>
            <Searchbar />
            <div className="flex ml-56">
                <div className="flex gap-6 items-center ml-28 mr-16">
                    <Image src='calendar-2.svg' height={24} width={24} alt='calendar' />
                    <Image src='message-question.svg' height={24} width={24} alt='message' />
                    <Image src='notification.svg' height={24} width={24} alt='notification' />
                </div>
                <div className="flex item-center ">
                    <div className="flex flex-col text-right mr-5">
                        <p >Anima Aggarwal</p>
                        <p className="text-sm">U.P, India</p>
                    </div>
                    <div className="flex gap-1 items-center mr-3">
                        <Image src='profileimg.svg' width={38} height={38} alt='profile' className="h-9" />
                        <Image src='arrow-down.svg' width={18} height={18} alt='options' />
                    </div>
                </div>
            </div>
        </div>
    )
}