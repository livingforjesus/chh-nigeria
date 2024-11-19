import Image from "next/image";
import logo from "../../public/next.svg"
import Link from "next/link";

const Header = () =>{
return(
    <div>
        <nav className="flex justify-between p-4" >
            <Image src={logo} alt="" className="w-36" />
            <ul className="flex justify-between gap-20">
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/about"}>About</Link></li>
                <li><Link href={"/blog"}>Blog</Link></li>
            </ul>
        </nav>
    </div>
)
}
export default Header;