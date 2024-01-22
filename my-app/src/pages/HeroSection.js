import React, { useEffect, useState } from 'react'
import { allMovies } from '../Handle API/HandleAPI';

const HeroSection = () => {
    const [AllCourses, setAllCourses] = useState([]);
    
    const fetchData = async () => {
        try {
            await allMovies(setAllCourses)
        } catch (error) {
            console.error("Error Occured: ",error);
        }
    }

    useEffect(() => {
      fetchData();    
    }, [])
    
    console.log(AllCourses[0])

    
  return (
    <>
          <div className="flex mt-40">
            <h1>Hello</h1>
            {/* <h2>{AllCourses[0]?.show.image.medium}</h2> */}
            {AllCourses?.map((items,index)=>(
               <div className="flex">
                <img src={`${items.show.image?.medium}`} alt="" />
                <div className="flex">
                    <h1>{items.show.name}</h1>
                    
                </div>
               </div>
            ))}
          </div>
    </>
  )
}

export default HeroSection
