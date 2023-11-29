import React from 'react';
import {Link} from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import logo from '../images/logo_new.png'
import logo_latest from '../images/logo_latest.svg'

const Footer = () => {
    return (
        <>
            <footer>
                <div className="footer max-w-full mx-auto px-4 sm:px-6 bg-gray-100 border-t border-b py-30">

                    {/* Top area: Blocks */}
                    <div className="grid sm:grid-cols-12 gap-5 py-8 md:py-12 border-t border-gray-200 lg:ml-11">

                    {/* 1st block */}
                    <div className="col-span-12 lg:col-span-4 font-semibold">
                        <div className="box-border text-center rounded-lg xl:w-80 mx-auto">
                            <Link to="/">
                                
                                <div className='flex flex-row items-center justify-start'>
                                    <img className='w-[55px] h-[60px]' src={logo_latest} alt="logo" />
                                    <div className='font-sans flex flex-col justify-center ml-3'>
                                        <h3 className='text-[20px] text-[#F58320]'>UNICUBE</h3>
                                        <p className='text-[12px]'>Services and Solution</p>
                                    </div>

                                    
                                </div>
                            </Link>
                            <p className='text-sm text-left font-normal mt-4'>Unicube giải quyết nhu cầu của các bạn bằng những giải pháp tối ưu nhất.</p>
                            {/* <div className='text-md font-medium text-gray-600'>
                                <h5>Molad e Konsult</h5>
                                <p>Ilo Awela,</p>
                                <p>Ota,</p>
                                <p>Ogun State.</p>
                            </div> */}
                            <div className="mx-auto text-center mt-4">
                                <ul className="flex justify-start mb-4 md:mb-0">
                                    <li>
                                        <Link to="#" className="flex justify-start items-center text-[#262626] hover:text-[#F58320] bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
                                        <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                                        </svg>
                                        </Link>
                                    </li>
                                    <li className="ml-4">
                                        <Link to="#" className="flex justify-center items-center text-[#262626] hover:text-[#F58320] bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
                                        <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                                        </svg>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* 2nd block */}
                    <div className="col-span-6 md:col-span-6 lg:col-span-1 ml-7 mx-auto">
                        <h6 className="text-[#262626] text-xl font-bold mb-4">LĨNH VỰC</h6>
                        <ul className="text-md">
                        <li className="mb-2">
                            <HashLink to="#" className="text-[#262626] hover:text-[#F58320] transition duration-250 ease-in-out">Thanh Toán</HashLink>
                        </li>
                        <li className="mb-2">
                            <HashLink to="#" className="text-[#262626] hover:text-[#F58320] transition duration-250 ease-in-out">Outsource</HashLink>
                        </li>
                        <li className="mb-2">
                            <HashLink to="#" className="text-[#262626] hover:text-[#F58320] transition duration-250 ease-in-out">Odoo ERP</HashLink>
                        </li>    
                        <li className="mb-2">
                            <HashLink to="#" className="text-[#262626] hover:text-[#F58320] transition duration-250 ease-in-out">Tư Vấn/Triển Khai</HashLink>
                        </li>                            
                        </ul>
                    </div>

                    {/* 3rd block */}
                    <div className="col-span-6 md:col-span-6 lg:col-span-4 mx-auto"> 
                        <h6 className="text-[#262626] text-xl font-bold mb-4">DỊCH VỤ</h6>
                        <ul className="text-md">
                        <li className="mb-2">
                            <Link to="#services" className="text-[#262626] hover:text-[#F58320] transition duration-250 ease-in-out">Xây Dựng Website</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="#services" className="text-[#262626] hover:text-[#F58320] transition duration-250 ease-in-out">Xây Dựng Ứng Dụng Di Động</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="#services" className="text-[#262626] hover:text-[#F58320] transition duration-250 ease-in-out">Odoo ERP</Link>
                        </li>
                        <li className="mb-2">
                            <Link to="#services" className="text-[#262626] hover:text-[#F58320] transition duration-250 ease-in-out">Tư Vấn/Triển Khai</Link>
                        </li>
                        </ul>
                    </div>

                    {/* 4th block */}
                    <div className="col-span-12 text-center mx-auto lg:col-span-3 text-[#262626]">
                        <div className="text-xl mb-6 uppercase font-bold">
                            Liên Hệ
                        </div>
                        <div>
                            <p>Trụ sở chính: 33 Khu dân cư Phú Long, Nguyễn Hữu Thọ, Phước Kiển, Nhà Bè, TP.Hồ Chí Minh</p>
                            <p>Email: unicube.vn@gmail.com</p>
                            <p>Số điện thoại: 0976 517 102</p>

                        </div>
                                
                    </div>          

                    </div>

                    <div className="flex flex-wrap items-center md:justify-between justify-center mx-auto px-4">
                <div className="w-full md:w-4/12 px-4 mx-auto text-center py-2">
                    <div className="text-sm text-gray-200 font-semibold py-1">
                    Copyright &copy; {new Date().getFullYear()}{"  "}
                    <HashLink
                        to="#"
                        className=" hover:text-gray-900"
                    >
                        Unicube
                    </HashLink>. All rights reserved.
                    </div>
                </div>
                </div>

                </div>
                
            </footer>
        </>
    )
}
export default Footer;
