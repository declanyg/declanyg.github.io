import { BrowserRouter, Route, Routes } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, Assignments, StarsCanvas } from "./components";

const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={
          <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />  
          <Tech />
          <Works />
          <Assignments />
          {/* <Feedbacks /> */}
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
        </div>
        } />
        <Route path="/assignments" element={
        <div className='relative z-0 bg-primary'>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
          </div>
          <Assignments />
        </div>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
