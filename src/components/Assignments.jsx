import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import { styles } from '../styles';
import { SectionWrapper  } from '../hoc';
import { assignments } from '../constants';
import { fadeIn, textVariant} from '../utils/motion';

const AssignmentCard = ({index, name, description, video=null, source_code_link, project_link_image }) => {
  return (
    <motion.div variants={fadeIn("up", 'spring', index*0.5, 0.75)}>
      <Tilt
        options={{
          max: 45, 
          scale: 1,
          speed: 450
        }}
        className="bg-tertiary p-5 rounded-2xl w-full"
      >
        <div className=''>
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[14px]">{description}</p>
             { video ?
              <iframe src={video} width="426" height="240" allow="autoplay"></iframe>
             : <></>}
        </div>
        <div className='w-[18%]'>
          <button
              onClick={() => window.open(source_code_link, "_blank")}
              className="bg-[#377ef7] bg-opacity-75 items-center flex flex-row gap-2 mt-4 transition duration-500 hover:scale-110 duration-300 py-3 px-8 w-fit text-white font-bold rounded-xl"
              >
              Github Link
              <img 
                  src={project_link_image}
                  alt="link_image" 
                  className='w-6 h-6 inline-block align-middle'
              />
            </button>
        </div>
              
      </Tilt>
    </motion.div>
  )
}

const Assignments = () => {

  const location = useLocation();

  useEffect(() => {
    if (location.pathname == "/assignments") {
      document.body.style.zoom = "90%"
      setTimeout(() => {

        window.scroll({ top: -1, left: 0, behavior: "smooth" });
    
      }, 10); 
    } 
    else {
      document.body.style.zoom = "100%"
    }
  }, [location]);

  return (
    <>
      <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>My Assignments for CS506 </p>
      <h2 className={styles.sectionHeadText}>Assignments.</h2>
      </motion.div>

      <div className='w-full'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          The following assignments showcase some of the assignemnts I've done for CS506.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap flex-col gap-7'>
        {location.pathname == "/" ? <div>{assignments.slice(0, 3).map((assignment, index) => (
          <AssignmentCard 
            key={`assignment-${index}`}
            index={index}
            {...assignment}
          />
        ))}</div> : <div>{assignments.map((assignment, index) => (
          <AssignmentCard 
            key={`assignment-${index}`}
            index={index}
            {...assignment}
          />
        ))}</div>}
      </div>
      {location.pathname == "/" ? <Link
          to="/assignments"
          className="flex items-center gap-2 justify-center"
        >
            <button
            type='submit'
            className="mt-8 bg-[#377ef7] bg-opacity-75 hover:shadow-secondary transition duration-500 hover:scale-110 duration-300 py-3 px-8 w-fit text-white font-bold shadow-md shadow-secondary/50 rounded-xl">
            See More...
          </button>
        </Link> : <div/>}
    </>
  )
}

export default SectionWrapper(Assignments, "assignments");