import portfolioData from "../data/portfolioData"
import Link from "next/link"

export default function Sub () {
    return(
        <div className="flex items-center justify-center w-full min-h-[60vh] bg-white my-5 p-4 min-w-[300px] shadow-xl font-raleway">
            <div className="flex w-full min-w-[300px] h-fit flex-wrap p-4 justify-center">
                {portfolioData.map((data) => {
                    return(
                        <Card 
                            key={data.id}
                            bg={data.cardPreview}
                            title={data.cardTitle}
                            content={data.cardContent}
                            link={data.portLink}
                        />
                    )
                })}
            </div>
        </div>
    )
}


const Card = (props) => {
    return(
        <div key={props.key} className="flex relative flex-1 min-w-[300px] m-4 max-w-[350px] h-[40vh] group overflow-hidden">
            <Link href={props.link}>
                <a className="w-full h-full relative">
                    <div className="absolute w-full h-full bg-black z-10 opacity-40 flex items-center justify-center text-center scale-0 group-hover:scale-100">
                        <h1 className="text-white w-fit h-fit">View Site</h1>
                    </div>
                    <div className="relative w-full h-full bg-cover bg-no-repeat bg-top bg-purple-300" style={{backgroundImage: props.bg}}></div>
                </a>
            </Link>
            <div className="absolute w-full h-fit bg-white border-2 z-10 bottom-0 p-4 flex flex-col justify-center group-hover:translate-y-[50%]">
                <h1 className="text-[1.5rem]">{props.title}</h1>
                <p className="text-[0.9rem] relative ">
                    {props.content}
                </p>
            </div>
        </div>
    )
}


