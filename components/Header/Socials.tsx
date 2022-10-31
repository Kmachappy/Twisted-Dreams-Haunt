import { BsInstagram, BsTwitter } from "react-icons/bs";
import { FaTiktok } from "react-icons/fa";
import Link from "next/link";

const Socials = () => {
    return (
        <div className="hidden sm:flex justify-center items-center sm:flex-[1_1_0] order-2
                    
        sm:justify-end">
            <Link href={'https://www.instagram.com/twisted_dreams_haunt/'} className='hover:text-main-red p-4'>
                <BsInstagram className="text-2xl " />
            </Link>
            <Link href={'/'} className='hover:text-main-red p-4' >
                <BsTwitter className="text-2xl " />
            </Link>
            <Link href={'/'} className=' p-4 hover:text-main-red'>
                <FaTiktok className="text-2xl " />
            </Link>
        </div>
    )
}

export default Socials