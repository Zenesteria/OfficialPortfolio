import { useRouter } from "next/router";
import { useEffect } from "react";

const Footer = () => {
    const router = useRouter();
    const Path = router.pathname

    useEffect(() => {
        console.log(Path)
    })
    return(
        <div className="flex justify-center p-2 text-center w-full font-raleway">
            <p className="text-[18px] font-light tracking-[.2rem]" style={Path != '/Portfolio' ? {} : {color:'white',fontWeight:'bold'}}>
                Copyright Creatives Atlas © 2022
            </p>
        </div>
    )
}

export default Footer;