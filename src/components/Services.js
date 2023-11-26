import React from 'react';
import img4 from '../images/consultation.svg';
import webService from '../images/web-service.png'
import mobileService from '../images/mobile-service.png'
import erpService from '../images/erp-service.png'

const Services = () => {

    return (
        <div id="services" className="bg-gray-100 py-12" >
            <section data-aos="zoom-in-down">
                    <div className="my-4 py-4">
                        <h2 className="my-2 text-center text-3xl text-[#262626] uppercase font-bold">Dịch vụ</h2>
                        
                        <div className='flex justify-center'>
                            <div className='w-24 border-b-4 border-orange-600'></div>
                        </div>
                        <h2 className="mt-4 mx-12 text-center text-xl lg:text-2xl font-semibold text-gray-600">Chúng tôi cam kết cho sự phát triển và thành công của khách hàng.</h2>
                    </div>

                    <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                            
                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={webService} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Xây Dựng Website</h2>
                                    <p className="text-md font-medium">
                                        Chúng tôi chuyên tạo và tối ưu hóa các trang web tùy chỉnh, chất lượng cao cho các doanh nghiệp và tổ chức thuộc mọi quy mô. Xây dựng các trang web và ứng dụng thân thiện với thiết bị di động và dễ sử dụng cho khách hàng.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={mobileService} />
                                    <h2 className="font-semibold my-4 text-2xl text-center">Xây Dựng Ứng Dụng Di Động</h2>
                                    <p className="text-md font-medium">
                                        Chúng tôi phát triển các ứng dụng di động đa nền tảng tùy chỉnh, chất lượng cao, mạnh mẽ và được tối ưu hóa về hiệu suất, khả năng mở rộng và khả năng truy cập.
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                    <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={erpService} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Odoo ERP</h2>
                                    <p className="text-md font-medium">
                                        {/* Thiết kế & tư vấn cho khách hàng các phần mềm, hệ thống phù hợp với nhu cầu kinh doanh trên nền tảng những phần mềm phổ biến trên thị trường hiện nay.  */}
                                        Chúng tôi tự hào giới thiệu dịch vụ tư vấn triển khai Odoo ERP - một hệ thống quản lý doanh nghiệp tích hợp mạnh mẽ, giúp tối ưu hóa quy trình kinh doanh và nâng cao hiệu suất. UNICUBE cam kết tùy chỉnh và triển khai Odoo phù hợp hoàn hảo với nhu cầu cụ thể của khách hàng, giúp tối ưu hóa quản lý, tăng cường hiệu suất và đạt được mục tiêu kinh doanh. 
                                    </p>
                                </div>
                            </div>

                            <div className="bg-white transition-all ease-in-out duration-400  overflow-hidden text-gray-700 hover:bg-gray-500 hover:text-white rounded-lg shadow-2xl p-3 group">
                                <div className="m-2 text-justify text-sm">
                                <img alt="card img" className="rounded-t group-hover:scale-[1.15] transition duration-1000 ease-in-out" src={img4} />
                                    <h2 className="font-semibold my-4 text-2xl text-center ">Tư Vấn/Triển Khai</h2>
                                    <p className="text-md font-medium">
                                        Với đội ngũ nhiều năm triển khai giải pháp hạ tầng cho các công ty cũng như tổ chức tài chính, UNICUBE tự tin có thể đưa ra các phương án tối ưu cho khách hàng.
                                    </p>
                                </div>
                            </div>                    
                        </div>
                    </div>
            </section>

            <section>
                <div className="m-auto max-w-6xl p-2 md:p-12 h-5/6">
                    <div className="flex flex-col-reverse lg:flex-row py-8 justify-between lg:text-left" data-aos="zoom-out">
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <div className='text-orange-600 mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className='fill-current'><path d="M2 12h2a7.986 7.986 0 0 1 2.337-5.663 7.91 7.91 0 0 1 2.542-1.71 8.12 8.12 0 0 1 6.13-.041A2.488 2.488 0 0 0 17.5 7C18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725-2.431-.973-5.223-.958-7.635.059a9.928 9.928 0 0 0-3.18 2.139 9.92 9.92 0 0 0-2.14 3.179A10.005 10.005 0 0 0 2 12zm17.373 3.122c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71a8.12 8.12 0 0 1-6.13.041A2.488 2.488 0 0 0 6.5 17C5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725A9.965 9.965 0 0 0 12 22a9.983 9.983 0 0 0 9.217-6.102A9.992 9.992 0 0 0 22 12h-2a7.993 7.993 0 0 1-.627 3.122z"></path><path d="M12 7.462c-2.502 0-4.538 2.036-4.538 4.538S9.498 16.538 12 16.538s4.538-2.036 4.538-4.538S14.502 7.462 12 7.462zm0 7.076c-1.399 0-2.538-1.139-2.538-2.538S10.601 9.462 12 9.462s2.538 1.139 2.538 2.538-1.139 2.538-2.538 2.538z"></path></svg>
                            </div>
                            <h3 className="text-3xl text-[#262626] font-bold">Chúng Tôi <span className='font-black'>Xây Dựng</span></h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>
                                Với hơn 5 năm kinh nghiệm trong phân tích và thiết kế phần mềm cũng như hiểu biết sâu sắc về các xu hướng và giải pháp CNTT mới nhất, chúng tôi cung cấp các đề xuất và chiến lược tùy chỉnh để giúp bạn cải thiện hoạt động, giảm chi phí và tăng hiệu quả.
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/2 flex flex-col lg:mx-4 justify-center">
                            <div className='text-orange-600 mb-4'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className='fill-current'><path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path></svg>
                            </div>
                            <h3 className="text-3xl text-[#262626] font-bold">Chúng Tôi <span className='font-black'>Hợp Tác</span></h3>
                            <div>
                                <p className='my-3 text-xl text-gray-600 font-semibold'>Chúng tôi có thể cộng tác với nhóm công nghệ hiện tại của bạn để mở rộng quy mô các ứng dụng phần mềm hiện có hoặc thiết kế các ứng dụng phần mềm tùy chỉnh phù hợp với nhu cầu hàng ngày của bạn và đơn giản hóa các quy trình khác nhau.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Services;