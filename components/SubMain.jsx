import DataValues from '../data/datashowcase'
import Link from 'next/link'

const SubMain = () => {
    return(
        <div className="flex h-fit min-h-[80vh] w-full p-4 flex-wrap font-raleway">
            <div data-aos='fade-in' className="flex flex-wrap h-full my-auto flex-1 min-w-[300px]  mx-4 items-center justify-center ">
                {DataValues.map((data) => {
                    return(
                        <SubData
                            key = {data.id}
                            value = {data.value}
                            title = {data.content}
                        />
                    )
                })}
            </div>
            <div data-aos='fade-left' data-aos-duration='2000' data-aos-anchor-placement='top-center' data-aos-once='true' className="flex h-[80%] my-auto flex-col justify-around flex-[0.8] min-w-[300px]  w-fit  mx-4 p-4 ">
                <h1 className='text-[1.5rem] xl:text-[2rem] font-light mr-auto'>Applying <span className='text-purple-700'>Creativity</span> <br /> Everyday</h1>
                <p className='text-[1.2rem] my-4 min-w-[300px]'>
                    {"Tinkering with ideas, rebuilding simplistic concepts and critical thoughts fed into a day's work"}
                </p>
                <Link href='/documents/resume.docx'>
                    <a className=' bg-purple-800 text-white px-[1rem] py-[0.7rem] rounded hover:tracking-wider mr-auto transition-all duration-300' download>
                        Download Resume
                    </a>
                </Link>
            </div>
        </div>
    )
}

const SubData = (props) => {
    return(
        <div className="flex items-center justify-around m-4 min-w-[250px] p-4 text-center h-[200px] flex-col border-b-[10px] border-purple-600 bg-purple-100 rounded-[20px]">
            <div className="flex items-center justify-center bg-white rounded-full shadow-md shadow-purple-500 h-[70px] w-[70px]">{props.value}</div>
            <h1 className="text-[1.2rem] font-light w-[150px]">{props.title}</h1>
        </div>
    )
}

export default SubMain;