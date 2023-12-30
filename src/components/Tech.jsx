import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  return (
    <div>
      <h2 className="text-center text-3xl pb-5 font-semibold">Skills
      </h2>
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <img src={technology.icon} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, "Tech");
