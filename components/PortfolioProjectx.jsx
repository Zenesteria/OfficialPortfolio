import { useState} from "react"

export default function PortfolioProjects () {
    const [background, setBackground] = useState("url('/images/project1.png')")
    const handleMouseOver = (e) => {
        const currentBackdrop = e.target.style.backgroundImage.split('/')
        const [currentBackdropName] = currentBackdrop[2].split('"')
        setBackground(`url('/images/${currentBackdropName}')`)

    }
    return(
        <div data-aos='fade-up' data-aos-once='true' data-aos-duration='1200' data-aos-delay='700' data-aos-anchor-placement='center-bottom' className="flex w-full flex-col">
            <h1 className="w-full text-center text-[3rem] tracking-widest text-white font-light">Featured Projects</h1>
            <div className="flex flex-1 flex-col-reverse xl:flex-row flex-wrap items-center justify-center w-full h-fit min-h-[50vh] p-5 xl:p-10 my-10 xs:my-0 ">
                <div className="flex flex-col items-center w-[340px] h-[340px] xs:w-[400px] xs:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] xl:w-[600px] m-auto xl:h-[600px] rounded-full border-2 border-transparent circle">
                    <div className="relative flex p-4 items-center justify-center w-full h-fit min-h-[20%] border-2 border-transparent">
                        <CircleA bg={{backgroundImage:"url('/images/project1.png')"}} handler={handleMouseOver}/>
                        <CircleB bg={{backgroundImage:"url('/images/project2.png')"}} handler={handleMouseOver}/>
                        <div className="flex w-[68px] h-[68px] xs:w-[80px] xs:h-[80px] md:w-[100px] md:h-[100px] xl:w-[120px] xl:h-[120px] border-2 border-transparent rounded-full hover:mx-5 hover:my-2 hover:scale-110 transition-all duration-700 bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url('/images/project3.png')`}} onMouseOver={handleMouseOver}></div>
                        <CircleB bg={{backgroundImage:"url('/images/project4.png')"}} handler={handleMouseOver}/>
                        <CircleA bg={{backgroundImage:"url('/images/project5.png')"}} handler={handleMouseOver}/>
                    </div>

                    <div className="flex mb-4 items-center justify-around w-full h-fit min-h-[20%] border-2 border-transparent">
                        <CircleC bg={{backgroundImage:"url('/images/project1.png')"}} handler={handleMouseOver}/>
                        <CircleD bg={{backgroundImage:"url('/images/project1.png')"}} handler={handleMouseOver}/>
                        <CircleD bg={{backgroundImage:"url('/images/project1.png')"}} handler={handleMouseOver}/>
                        <CircleC bg={{backgroundImage:"url('/images/project1.png')"}} handler={handleMouseOver}/>
                    </div>

                    <div className="flex items-center justify-around w-full h-fit min-h-[20%] border-2  border-transparent">
                        <CircleC bg={{backgroundImage:"url('/images/project1.png')"}} handler={handleMouseOver}/>
                        <CircleD bg={{backgroundImage:"url('/images/project1.png')"}} handler={handleMouseOver}/>
                        <CircleD bg={{backgroundImage:"url('/images/project1.png')"}} handler={handleMouseOver}/>
                        <CircleC bg={{backgroundImage:"url('/images/project1.png')"}} handler={handleMouseOver}/>
                    </div>

                    <div className="relative flex p-4 items-center justify-center w-full h-fit min-h-[20%] border-2 border-transparent">
                        <CircleA2 bg={{backgroundImage:"url('/images/project1.png')"}} handler={handleMouseOver}/>
                        <CircleB bg={{backgroundImage:"url('/images/project2.png')"}} handler={handleMouseOver}/>
                        <div className="flex w-[68px] h-[68px] xs:w-[80px] xs:h-[80px] md:w-[100px] md:h-[100px] xl:w-[120px] xl:h-[120px] border-2 border-transparent rounded-full hover:mx-5 hover:my-2 hover:scale-110 transition-all duration-700 bg-cover bg-center bg-no-repeat" style={{backgroundImage:`url('/images/project3.png')`}} onMouseOver={handleMouseOver}></div>
                        <CircleB bg={{backgroundImage:"url('/images/project4.png')"}} handler={handleMouseOver}/>
                        <CircleA2 bg={{backgroundImage:"url('/images/project5.png')"}} handler={handleMouseOver}/>
                    </div>
                </div>
                <div className={`flex border-[1rem] rounded-3xl border-white w-full xl:w-auto xl:flex-[0.9] min-h-[70vh] bg-cover bg-center bg-no-repeat md:min-w-[500px] my-10`} style={{backgroundImage:background}}>

                </div>
            </div>
        </div>
        
    )
}

const CircleA = (props) => {
    return(
        <div className="flex mt-[10%] mx-4 w-[30px] h-[30px] xl:w-[40px] xl:h-[40px] border-2 border-transparent rounded-full hover:mt-[15%] hover:mx-10 hover:scale-[2.8] transition-all duration-700  bg-center bg-cover bg-no-repeat" style={props.bg} onMouseOver={props.handler}></div>
    )
}
const CircleA2 = (props) => {
    return(
        <div className="flex mb-[10%] mx-4 w-[30px] h-[30px] xl:w-[40px] xl:h-[40px] border-2 border-transparent rounded-full hover:mb-[15%] hover:mx-10 hover:scale-[2.8] transition-all duration-700  bg-center bg-cover bg-no-repeat" style={props.bg} onMouseOver={props.handler}></div>
    )
}

const CircleB = (props) => {
    return(
        <div className="flex mx-4 w-[40px] h-[40px] xs:w-[47px] xs:h-[47px] md:w-[58px] md:h-[58px] xl:w-[70px] xl:h-[70px] border-2 border-transparent rounded-full hover:m-10 hover:scale-150 transition-all duration-700 bg-center bg-cover bg-no-repeat" style={props.bg} onMouseOver={props.handler}></div>
    )
}

const CircleC = (props) => {
    return(
        <div className="flex  w-[57px] h-[57px] xs:w-[67px] xs:h-[67px] md:w-[83px] md:h-[83px] xl:w-[100px] xl:h-[100px] border-2 border-transparent rounded-full hover:mx-10 hover:my-4 hover:scale-150 transition-all duration-700 bg-center bg-no-repeat bg-cover" style={props.bg} onMouseOver={props.handler}></div>
    )
}

const CircleD = (props) => {
    return(
        <div className="flex  w-[85px] h-[85px] xs:w-[100px] xs:h-[100px] md:w-[125px] md:h-[125px] xl:w-[150px] xl:h-[150px] border-2 border-transparent rounded-full hover:mx-10 hover:my-4 hover:scale-110 transition-all duration-700 bg-cover bg-center bg-no-repeat" style={props.bg} onMouseLeave={props.handler}></div>
    )
}
