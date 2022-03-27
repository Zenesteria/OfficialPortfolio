import Link from "next/link";

import {FaDiscord, FaInstagram, FaGithub} from 'react-icons/fa'





const Main = () => {
    return(
        <div className="flex p-[2rem] flex-col w-full h-[90vh] relative items-center justify-center text-center font-raleway">
            <div className="absolute bg-[url('/images/backdrop.png')] bg-cover bg-center z-[-1]  w-full top-0 right-0 h-full"></div>
            <h1 data-aos='fade-up' data-aos-duration='2000' data-aos-delay='400' className="text-[2.5rem] lg:text-[3rem] xl:text-[4rem] font-semibold text-white">{"Hi I'm Abdurrahman"}<br/>{" Aderinto"}</h1>
            <p data-aos='fade-right' data-aos-duration='1000' data-aos-delay='1600' className=" max-w-[500px] text-white mb-4 font-medium">
                {"A curative storyteller, designer with an eye for detail and a dedicated developer to match. I am Nigerian by nationality, currently a fourth-year electrical electronics engineering student at AFIT."}
            </p>
            <Link href='/Contact'>
                <a className="flex border-[2px] text-white font-medium border-white px-[2.5rem] xl:text-[1.2rem] py-4 rounded-2xl my-4 tracking-widest hover:text-white hover:bg-purple-800 hover:border-transparent transition-all duration-500">
                    Learn More.
                </a>
            </Link>
            <div className="flex h-fit w-fit my-4">
                <Socials
                    linkPath='https://www.instagram.com/creatives_atlas/'
                    iconName={FaInstagram}
                />
                <Socials
                    linkPath='https://discord.gg/G4DuWfZ5'
                    iconName={FaDiscord}
                />
                <Socials
                    linkPath='https://github.com/Zenesteria'
                    iconName={FaGithub}
                />
            </div>
        </div>
    )
}


const Socials = (props) => {
    return(
        <Link href={props.linkPath}>
            <a className="flex my-2 mx-4 border-[2px] border-white p-[.6rem] text-white rounded-full tracking-widest hover:text-white hover:bg-purple-800 hover:border-transparent transition-all duration-500">
                <props.iconName className="text-[1.3rem]"/>
            </a>
        </Link>
    )
}

export default Main;