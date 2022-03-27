import aboutData from "../data/aboutData"

export default function AboutContent (){
    const {mainData, tagData} = aboutData
    return(
        <div className="flex w-full min-h-[100vh] h-fit flex-col py-10">
            <div className="about"></div>
            <div className="flex w-[80%] mx-auto min-w-[330px] p-4 h-fit flex-wrap justify-center">
                <div data-aos='fade-right' data-aos-duration="1000" className="flex bg-[url('/images/about.jpg')] bg-cover bg-top bg-no-repeat w-[300px] h-[300px]  xs:w-[450px] xs:h-[450px] rounded-full m-4"></div>
                <div className="flex flex-col flex-1 justify-center  h-fit min-h-[50vh] min-w-[330px] my-auto lg:mx-10 text-white">
                    <h1 className="text-[3rem] mb-2">{mainData.mainTitle}</h1>
                    <p data-aos='fade-up' data-aos-once='true' data-aos-duration='1500' data-aos-delay='500' className="max-w-[600px] min-w-[300px] text-[1.2rem] font-light">{mainData.content1}</p>
                </div>
            </div>
            <div className="flex w-[80%] mx-auto min-w-[330px] p-4 h-fit flex-wrap justify-center">
                <div className="flex flex-col flex-1 justify-center  h-fit min-h-[50vh] min-w-[330px] my-auto lg:mx-10 text-white">
                    <h1 className="text-[2rem] mb-2">{mainData.heading}</h1>
                    <p data-aos='fade-right' data-aos-duration="1000" data-aos-anchor-placement='top-bottom' className="max-w-[600px] min-w-[300px] text-[1.2rem] font-light">{mainData.content2}</p>
                </div>
                <div className="flex flex-1 my-auto ml-5 lg:ml-0 items-center flex-wrap h-fit min-w-[330px] text-white">
                    {tagData.map((data,index) => {
                        var delay = index * 200
                        return(
                            <Tag 
                                key={data.id}
                                tagName={data.tagValue}
                                tagDelay={delay}
                            />
                        )
                    })}
                </div>
            </div>
        </div>  
    )
}

const Tag = (props) => {
    return(
        <div key={props.key} data-aos="fade-up" data-aos-dueation="1400" data-aos-delay={`${props.tagDelay}`} className="flex text-[0.8rem] m-2 font-semibold w-fit h-fit min-w-[100px] px-4 py-2  border-[1px] border-white text-white items-center justify-center rounded-xl">
            {props.tagName}
        </div>
    )
}