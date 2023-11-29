import khanh from '../images/khanh.jpeg' 
import facebook from '../images/facebook.png'
import x from '../images/x.png'
import tele from '../images/tele.png'
import linkedin from '../images/in.png'
import persion from '../images/persion-icon.jpeg'
import anhjean from '../images/anhjean.jpg'
import loi from '../images/loi.jpeg'
import lam from '../images/lam.jpg'
import tra from '../images/tra.jpg'
import logo_latest from '../images/logo_latest.svg'

const Profile = () => {

    return (
        <>
            <div className="flex flex-col justify-center items-center w-full bg-white py-12 lg:py-24 bg-gray-200">
                <div className="flex justify-center items-center flex-col text-center max-w-[90%]">
                    <div className='w-[70px] h-[70px]'>
                        <img src={logo_latest} />
                    </div>
                    <h1 className="text-2xl font-bold mt-[24px]">MEET OUR TEAM</h1>
                    <p>Come together, share together, work together, succeed together.</p>

                    <div className="flex flex-row gap-x-2 mt-3">
                        <div className='border-4 rounded-full border-[#474747]'></div>
                        <div className='border-4 rounded-full border-[#2E77AE]'></div>
                        <div className='border-4 rounded-full border-[#F58320]'></div>
                        <div className='border-4 rounded-full border-[#2E3D76]'></div>
                    </div>
                </div>

                <div className='grid lg:grid-cols-4 gap-x-10 gap-y-14 max-w-[80%] mt-10'>
                    <div >
                        <div className='flex justify-center items-center'>
                            <img className='rounded-full w-[160px] h-[160px]' src={anhjean}></img>
                        </div>
                        
                        <div className='flex justify-center items-center flex-col mt-3'>
                            <h1 className='text-xl font-bold'>Nguyen Hoang Anh</h1>
                            <p>Founder</p>
                        </div>
                        <div className="flex flex-row gap-x-2 mt-1 justify-center items-center">
                            <div className='border-4 rounded-full border-[#474747]'></div>
                            <div className='border-4 rounded-full border-[#2E77AE]'></div>
                            <div className='border-4 rounded-full border-[#F58320]'></div>
                            <div className='border-4 rounded-full border-[#2E3D76]'></div>
                        </div>

                        <div className='flex flex-row gap-x-2 justify-center items-center mt-3'>
                            <a href='#'><img className='w-7 h-7' src={facebook} /></a>
                            <a href='#'><img className='w-7 h-7' src={tele} /></a>
                            <a href='#'><img className='w-7 h-7' src={x} /></a>
                            <a href='https://www.linkedin.com/in/hoang-anh-nguyen-994a16121/'><img className='w-7 h-7' src={linkedin} /></a>
                        </div>
                        <div className='text-center mt-3'>
                            <p>I have been working in banking industry for 13 years and payment industry for 5 years</p>
                            <p>My background are Digital Product, EMV card payment system, Lending system, Virtual Account system and ERP.</p>

                        </div>
                    </div>

                    <div >
                        <div className='flex justify-center items-center'>
                            <img className='rounded-full w-[160px] h-[160px]' src={khanh}></img>
                        </div>
                        
                        <div className='flex justify-center items-center flex-col mt-3'>
                            <h1 className='text-xl font-bold'>Khanh Nguyen</h1>
                            <p>Software Engineer</p>
                        </div>
                        <div className="flex flex-row gap-x-2 mt-1 justify-center items-center">
                            <div className='border-4 rounded-full border-[#474747]'></div>
                            <div className='border-4 rounded-full border-[#2E77AE]'></div>
                            <div className='border-4 rounded-full border-[#F58320]'></div>
                            <div className='border-4 rounded-full border-[#2E3D76]'></div>
                        </div>

                        <div className='flex flex-row gap-x-2 justify-center items-center mt-3'>
                            <a href='#'><img className='w-7 h-7' src={facebook} /></a>
                            <a href='#'><img className='w-7 h-7' src={tele} /></a>
                            <a href='#'><img className='w-7 h-7' src={x} /></a>
                            <a href='www.linkedin.com/in/khanh-duke/'><img className='w-7 h-7' src={linkedin} /></a>
                        </div>
                        <div className='text-center mt-3'>
                            <p>With over 3 years experience in the industry, I have worked on a variety of projects, from server-side to front-end. I specialize in:</p>
                            <p className='text-sm'>Frontend: HTML, CSS, JavaScript (ReactJS)</p>
                            <p className='text-sm'>Backend: Python, Go</p>
                            <p className='text-sm'>Database: MongoDB, MySQL, PostgreSQL</p>
                            <p className='text-sm'>Tools and techniques: Git, RESTful APIs, Docker, K8s, CI/CD</p>
                        </div>
                    </div>

                    <div >
                        <div className='flex justify-center items-center'>
                            <img className='rounded-full w-[160px] h-[160px]' src={loi}></img>
                        </div>
                        
                        <div className='flex justify-center items-center flex-col mt-3'>
                            <h1 className='text-xl font-bold'>Loi Bui</h1>
                            <p>Product Owner</p>
                        </div>
                        <div className="flex flex-row gap-x-2 mt-1 justify-center items-center">
                            <div className='border-4 rounded-full border-[#474747]'></div>
                            <div className='border-4 rounded-full border-[#2E77AE]'></div>
                            <div className='border-4 rounded-full border-[#F58320]'></div>
                            <div className='border-4 rounded-full border-[#2E3D76]'></div>
                        </div>

                        <div className='flex flex-row gap-x-2 justify-center items-center mt-3'>
                            <a href='#'><img className='w-7 h-7' src={facebook} /></a>
                            <a href='#'><img className='w-7 h-7' src={tele} /></a>
                            <a href='#'><img className='w-7 h-7' src={x} /></a>
                            <a href='#'><img className='w-7 h-7' src={linkedin} /></a>
                        </div>
                        <div className='text-center mt-3'>
                            <p>I have been working in banking industry for 10 years and 5 experienced - years as product/ business analyst.</p>
                            <p>I am specialist in banking/ financial services & products, and experienced in some special sector, such as EMV, PCI-DSS, POS system payment, loan products.</p>
                        </div>
                    </div>

                    <div >
                        <div className='flex justify-center items-center'>
                            <img className='rounded-full w-[160px] h-[160px]' src={tra}></img>
                        </div>
                        
                        <div className='flex justify-center items-center flex-col mt-3'>
                            <h1 className='text-xl font-bold'>Tra Tran</h1>
                            <p>Frontend Developer</p>
                        </div>
                        <div className="flex flex-row gap-x-2 mt-1 justify-center items-center">
                            <div className='border-4 rounded-full border-[#474747]'></div>
                            <div className='border-4 rounded-full border-[#2E77AE]'></div>
                            <div className='border-4 rounded-full border-[#F58320]'></div>
                            <div className='border-4 rounded-full border-[#2E3D76]'></div>
                        </div>

                        <div className='flex flex-row gap-x-2 justify-center items-center mt-3'>
                            <a href='#'><img className='w-7 h-7' src={facebook} /></a>
                            <a href='#'><img className='w-7 h-7' src={tele} /></a>
                            <a href='#'><img className='w-7 h-7' src={x} /></a>
                            <a href='https://www.linkedin.com/in/tratran96/'><img className='w-7 h-7' src={linkedin} /></a>
                        </div>
                        <div className='text-center mt-3'>
                            <p>With 5 years of experience as a passionate and creative Frontend developer, always looking for ways to create the best user experience and take user interfaces to the next level.</p>
                            <p className='text-sm'>Programming language: HTML, CSS, JavaScript (ES6+)</p>
                            <p className='text-sm'>Framework: ReactJs, Nextjs, Angular, Nodejs</p>
                            <p className='text-sm'>Tools and techniques: Git, Webpack, Babel, Figma</p>
                            <p className='text-sm'>Responsive Design: Bootstrap, Flexbox, Tailwind</p>
                        </div>
                    </div>

                    <div >
                        <div className='flex justify-center items-center'>
                            <img className='rounded-full w-[160px] h-[160px]' src={lam}></img>
                        </div>
                        
                        <div className='flex justify-center items-center flex-col mt-3'>
                            <h1 className='text-xl font-bold'>Nhat Lam</h1>
                            <p>Mobile Developer</p>
                        </div>
                        <div className="flex flex-row gap-x-2 mt-1 justify-center items-center">
                            <div className='border-4 rounded-full border-[#474747]'></div>
                            <div className='border-4 rounded-full border-[#2E77AE]'></div>
                            <div className='border-4 rounded-full border-[#F58320]'></div>
                            <div className='border-4 rounded-full border-[#2E3D76]'></div>
                        </div>

                        <div className='flex flex-row gap-x-2 justify-center items-center mt-3'>
                            <a href='#'><img className='w-7 h-7' src={facebook} /></a>
                            <a href='#'><img className='w-7 h-7' src={tele} /></a>
                            <a href='https://twitter.com/LamNguy42067088'><img className='w-7 h-7' src={x} /></a>
                            <a href='https://www.linkedin.com/in/lam-nguyen-783227268/'><img className='w-7 h-7' src={linkedin} /></a>
                        </div>
                        <div className='text-center mt-3'>
                            <p>With over 2 years of dedicated experience in mobile development, I have honed my skills across various facets of the industry.</p>
                            <p>Specializing in crafting robust and intuitive mobile applications, I am passionate about leveraging technology to create seamless user experiences.</p>
                            <p className='text-sm'>Mobile : IOS(Swift), Android(Kotlin/Java), React native, Flutter</p>
                            <p className='text-sm'>Frontend: React, Java Script, HTML5, Tailwind</p>
                            <p className='text-sm'>Backend: PHP, NodeJS</p>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile