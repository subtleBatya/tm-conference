// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div className='f-2 text-5xl text-amber-200 esas_container'>
//         HOW ARE YOU
//       </div>
//     </>
//   )
// }

// export default App


import Navbar from "./components/navbar/Navbar";

import Home from "./pages/Home";
// import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { useEffect, useState } from "react";
// import ScrollToTopOnRouteChange from "./components/ScrollToTopOnRouteChange";



function App() {
  // const location = useLocation();
  // useEffect(() => {
  //   // const scrollToTop = () => {
  //     window.scrollTo({
  //       top: 0,
  //       behavior: 'auto' // Optional: smooth scrolling behavior
  //     });
  //   // };
  //   // Scroll to the top when the route changes
  //   // window.addEventListener('hashchange', scrollToTop);
  //   // return () => window.removeEventListener('hashchange', scrollToTop);
  //   });
    // }, [location.pathname]);

  return (
    <>
      <div className="flex min-h-[100vh] flex-col bg-blue-700/80">

        <Navbar />
        {/* <Router> */}
        <div className="grow esas_container">

          {/* <Routes> */}
            <Home />
            {/* <ScrollToTopOnRouteChange/> */}
            {/* <div className="relative"> */}
            {/* <Route path="ecohub/" exact element={<Home />} /> */}
            {/* <Route path="/map1" element={<AnotherMap />} /> */}

            {/* <Home /> */}
            {/* <NewsPage /> */}
          {/* </Routes> */}
        </div>

        {/* </Router> */}
     {/* Su tayda FOOTER Durmaly */}
        {/* </div> */}
      </div>


    </>
  );
}

export default App;
