import { AlignRight } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"

export default function Header() {
    return (
        <header className="flex justify-between items-center md:px-20 md:py-2 p-3 px-7 bg-teal-50 font-sans ">
            {/* logo */}
            <div  data-aos="fade-right">
                <Image width={60} height={80} src="/logo.png" alt="" />
            </div>

            {/* navbar */}
            <ul className="hidden md:block md:flex-row flex-col " data-aos="fade-left" >
                <li className="space-x-10  ">
                    <Link className="hover:text-blue-600" href="">Home</Link>
                    <Link className="hover:text-blue-600" href="">Services</Link>
                    <Link className="hover:text-blue-600" href="">Property</Link>
                    <Link className="hover:text-blue-600" href="">Blogs</Link>
                    <Link className="hover:text-blue-600" href="">Services</Link>
                    <Link className="hover:text-blue-600" href="">Contact us</Link>
                </li>
            </ul >

            <Sheet>
                
                <SheetTrigger className="md:hidden">
                <AlignRight/>
                </SheetTrigger>

                <SheetContent>
                <ul  >
                <li className="md:flex-row flex-col flex ">
                    <Link className="hover:text-blue-600" href="">Home</Link>
                    <Link className="hover:text-blue-600" href="">Services</Link>
                    <Link className="hover:text-blue-600" href="">Property</Link>
                    <Link className="hover:text-blue-600" href="">Blogs</Link>
                    <Link className="hover:text-blue-600" href="">Services</Link>
                    <Link className="hover:text-blue-600" href="">Contact us</Link>
                </li>
            </ul >
                    
                </SheetContent>
            </Sheet>

        </header>
    )
}