import React from 'react'
import Array from '../components/Array'
import KeyThemes from '../components/KeyThemes'
import Program from '../components/Program'
import Header from '../components/Header'
// import Navbar from '../components/navbar/Navbar'
// import Navbar from "./components/Navbar";
// import RecentBlogs from "./pages/RecentBlogs";




function Home() {
    return (
        <div className=''>
            <Header />
            <Array />
            <KeyThemes />
            <Program />

           

            {/* <About /> */}
            {/* <Courses /> */}
            {/* <RecentBlogs/> */}
        </div>
    )
}

export default Home