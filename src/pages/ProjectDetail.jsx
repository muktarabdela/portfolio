import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { ProjectDetailData } from "../constants";

const ProjectDetail = () => {
    const { projectId } = useParams();
    const projectDetailRef = useRef();
    const projectData = ProjectDetailData.find((project) => project.name === projectId);
    useEffect(() => {
        if (projectDetailRef.current) {
            projectDetailRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [projectData]);
    if (!projectData) {
        return <div className="text-center text-red-500">Project not found</div>;
    }

    const { title, TheGoal, TheChallenge, TheSolution, youtube, Outcome } = projectData;
    return (
        <div ref={projectDetailRef} className="max-w-4xl mx-auto mt-[4em] p-6 rounded-lg shadow-md bg-gradient-to-r from-black-900 via-blue-600 to-blue-900">

            <h2 className="text-3xl font-bold mb-4 text-blue-600">
                {title}
            </h2>
            <section className="mb-8">
                <h3 className="text-xl font-semibold mb-2 text-green-600">
                    Project Show case video
                </h3>
                <div className="aspect-w-16 aspect-h-9">
                    <div dangerouslySetInnerHTML={{ __html: youtube }} />
                </div>
            </section>
            <section className="mb-8">
                <h3 className="text-xl font-semibold mb-2 text-yellow-600">
                    The Goal</h3>
                <p className="text-gray-200">{TheGoal}</p>
            </section>
            <section className="mb-8">
                <h3 className="text-xl font-semibold mb-2 text-red-600">
                    The Challenge
                </h3>
                <ul className="mt-5 list-decimal ml-5 space-y-2 text-gray-200">
                    {TheChallenge.map((point, index) => (
                        <li
                            key={`experience-point-${index}`}
                            className="pl-1 tracking-wider"
                        >
                            {point}
                        </li>
                    ))}
                </ul>
            </section>
            <section className="mb-8">
                <h3 className="text-xl font-semibold mb-2 text-indigo-600">
                    The Solution
                </h3>
                <ul className="mt-5 list-decimal ml-5 space-y-2 text-gray-200">

                    {TheSolution.map((point, index) => (
                        <li
                            key={`experience-point-${index}`}
                            className="pl-1 tracking-wider"
                        >
                            {point}
                        </li>
                    ))}
                </ul>
            </section>

            <section className="mb-8">
                <h3 className="text-xl font-semibold mb-2 text-yellow-600">
                    The Outcome</h3>
                <p className="text-gray-200">{Outcome}</p>
            </section>

        </div>
    );
};

export default ProjectDetail;