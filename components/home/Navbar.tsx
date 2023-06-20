import Image from "next/image"
import Link from "next/link"
import CustomButton from "./CustomButton"

const Navbar = () => {
  return (
    <header className="absolute w-full z-50">
      <nav className="max-width flex-between padding-x padding-y">
        <Link 
          href={"/"} 
          className="flex-center"
        >
          <Image 
            className="object-contain"
            src={"/images/logo.svg"}
            alt="Drive Hub Logo"
            width={180}
            height={60}
          />
        </Link>

        <CustomButton 
          title="Sign in"
          btnType="button"
          containerStyles="py-2 px-4 transition-all bg-[#111111] hover:bg-opacity-90 border-transparent text-gray-200"
        />
      </nav>
    </header>
  )
}

export default Navbar