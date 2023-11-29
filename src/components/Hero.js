import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/Navbar/NavBar';
import heroImg from '../images/web-dev.svg';
import heroVideo from '../images/heroVideo.mp4'

const Hero = () => {
    return (
        <>
            <div className="hero" id='hero'>
                <div>
                    <NavBar />
                </div>
                
                <div className="m-auto overflow-hidden h-5/6" data-aos="zoom-in">

                    <div className="flex flex-col lg:flex-row justify-between text-left">
                        <video autoPlay loop muted width="full" height="full" >
                            <source src={heroVideo} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div className='absolute lg:w-[55%] w-full h-full items-end lg:items-center flex px-[8px] lg:px-0 lg:pl-[108px]'>
                            <div className=''>
                                <h1 className="md:mb-5 mb-10 lg:text-5xl md:text-2xl text-sm font-bold text-gray-600">
                                    Không có công nghệ tốt nhất, chỉ có công nghệ phù hợp
                                </h1>
                                <p className='md:text-xl md:flex hidden text-xs font-normal tracking-tight mb-5 text-gray-500'>Unicube giải quyết nhu cầu của các bạn bằng những giải pháp tối ưu nhất.</p>
                                <div className="mb-4 space-x-0 md:space-x-2 md:mb-8 md:flex hidden">
                                    <Link to="/contact" className="text-white bg-[#F58320] hover:bg-orange-600 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">
                                        Xem Thêm
                                        <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </Link>
                                    
                                </div>
                            </div>
                            

                        </div>
                        
                        {/* <div className="lg:w-1/2 flex flex-col justify-center" data-aos="zoom-in" data-aos-delay="200">
                            <h1 className="mb-5 md:text-5xl text-3xl font-bold text-black">
                                Không có công nghệ tốt nhất, chỉ có công nghệ phù hợp
                            </h1>
                            <div className="text-xl font-normal tracking-tight mb-5 text-gray-500">Unicube giải quyết nhu cầu của các bạn bằng những giải pháp tối ưu nhất.</div>
                            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
                                <Link to="/contact" className="text-white bg-orange-600 hover:bg-orange-700 inline-flex items-center justify-center w-full px-6 py-3 my-4 text-lg shadow-xl rounded-2xl sm:w-auto sm:mb-0">
                                    Xem Thêm
                                    <svg className="w-4 h-4 ml-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </Link>
                                
                            </div>
                        </div> */}
                        {/* <div className="flex lg:justify-end w-full lg:w-1/2" data-aos="fade-up" data-aos-delay="700">
                            <img alt="card img" className="rounded-t float-right duration-1000 w-full" src={heroImg} />
                        </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero;