import React from 'react';
import kws from '../images/clients/kws.png';
import geps from '../images/clients/geps.png';
import protergia from '../images/clients/protergia.png';

const clientImage = {
    height: '10rem',
    width: 'auto',
    mixBlendMode: 'colorBurn'
}

const Clients = () => {
    return (
        <div className="mt-8 bg-gray-100">
            <section data-aos="fade-up">
                <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-[#262626] uppercase font-bold">Khách Hàng</h2>
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-orange-600'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-gray-600">Một số khách hàng của chúng tôi.</h2>
                    </div>

                <div className="p-16" data-aos="fade-in" data-aos-delay="600">
                    <div className="grid sm:grid-cols-3 lg:grid-cols-3 gap-y-9">
                        <div style={clientImage} className= "overflow-hidden flex justify-center transition-all ease-in-out opacity-100  w-1/6">
                            <img src="https://bucket.thebeanfamily.org/beanlegal/bean_logo/android/android-launchericon-192-192.png" alt="client" />                           
                        </div>

                        <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-100 ">
                            <img src="https://vietsens.vn/wp-content/uploads/2020/07/logo-vietsens-chuan-01-01.png" alt="client" />                            
                        </div> 

                        <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-100 ">
                            <img src="https://teship.net/img/logo/logo-dark-full.png" alt="client" />                            
                        </div>

                    </div>
                    <div className="grid sm:grid-cols-3 lg:grid-cols-3 gap-y-9 mt-[24px] justify-center items-center">
                       
                        <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-100 ">
                            {/* <img src="https://go24.vn/wp-content/uploads/2022/07/logo.png" alt="client" />                             */}
                        </div> 
                        <div style={clientImage} className="overflow-hidden p-3 flex justify-center transition-all ease-in-out opacity-100 ">
                            <img src="https://go24.vn/wp-content/uploads/2022/07/logo.png" alt="client" />                            
                        </div> 

                        
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Clients;