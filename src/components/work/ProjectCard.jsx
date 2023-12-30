import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { github } from "../../assets";
import { fadeIn, textVariant } from "../../utils/motion";
import { Link } from "react-router-dom";

const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
    Url,
    projectId
}) => {
    return (
        <div >
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full' >
                <div className='relative w-full h-[230px] cursor-pointer'
                    onClick={() => window.open(Url, "_blank")}
                >
                    <img
                        src={image}
                        alt='project_image'
                        className='w-full h-full object-cover rounded-2xl'
                    />
                    <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                        <div
                            onClick={() => window.open(source_code_link, "_blank")}
                            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
                        >
                            <img
                                src={github}
                                alt='source code'
                                className='w-1/2 h-1/2 object-contain'
                            />
                        </div>
                    </div>
                </div>
                <div className='mt-5'>
                    <h3 className='text-white font-bold text-[24px]'>{name}</h3>
                    <p className='mt-2 text-secondary text-[14px]'>{description} </p>
                    <div className="flex justify-between">
                        <p className="mt-5 mx-3">
                            <Link to={`/project/${projectId}`} className=' 
                    text-white hover:underline px-2 py-1 border border-blue-500 rounded focus:outline-none bg-blue-500 transition-all '>
                                Learn More
                            </Link>
                        </p>
                        <p className="mt-5 mr-5"
                            onClick={() => window.open(Url, "_blank")}
                        >
                            <Link className=' 
                    text-blue-500 hover:underline px-2 py-1 border border-blue-500 rounded focus:outline-none focus:border-blue-700 transition-all '>
                                Live Website
                            </Link>
                        </p>
                    </div>
                </div>

                <div className='mt-8 flex flex-wrap gap-2'>
                    {tags.map((tag) => (
                        <p
                            key={`${name}-${tag.name}`}
                            className={`text-[14px] ${tag.color}`}
                        >
                            #{tag.name}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default ProjectCard