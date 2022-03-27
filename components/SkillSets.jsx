import skillSets from '../data/skillSets'

const SkillSets = () => {
    return(
        <div className="flex my-5 w-full min-w-[300px] flex-col mt-[2rem] justify-center items-center flex-wrap h-fit font-raleway">
            <h1 className=" text-purple-800 text-4xl mb-2 font-medium">
                SkillSets
            </h1>
            <div className="flex justify-center flex-wrap w-[80%]">
                {skillSets.map((data) => {
                    return( <div key={data.id} className="relative flex items-center bg-purple-900 rounded-xl text-white flex-col m-4 min-h-[200px] p-4 text-center w-[18rem] hover:scale-105 transition-all duration-700">
                                <div className="absolute w-[70%] h-[70%] top-[15%] right-[15%] opacity-20 bg-center bg-contain bg-no-repeat" style={{backgroundImage:`url('/images/${data.bg}')`}}></div>
                                <div className="flex-1 p-4 flex flex-col justify-center z-10">
                                    <h1 className="text-2xl font-medium">{data.cardTitle}</h1>
                                    <h6>{data.cardSubtitle}</h6>
                                    <p className="my-4 font-bold">
                                        {data.cardContent}
                                    </p>
                                </div>
                            </div>
                    )
                })}
            </div>
        </div>
    )
}


export default SkillSets;