import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { CatCanvas } from "../components/canvas/";
import { BananyaCanvas } from "../components/canvas/";



const Tech = () => {
  return (

    <div className="flex flex-row gap-10 overflow-hidden">
      {/* <CatCanvas/> */}
      <div>
        <BananyaCanvas />
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-10">
      
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          <BallCanvas icon={technology.icon} />
        </div>
      ))}
      </div>
    </div>
  )
}

export default SectionWrapper(Tech, '');