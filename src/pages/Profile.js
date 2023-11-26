import khanh from '../images/khanh.jpeg' 
import facebook from '../images/facebook.png'
import x from '../images/x.png'
import tele from '../images/tele.png'
import linkedin from '../images/in.png'
import persion from '../images/persion-icon.jpeg'

const Profile = () => {

    return (
        <>
            <div className="flex flex-col justify-center items-center w-full bg-white py-12 lg:py-24 bg-gray-200">
                <div className="flex justify-center items-center flex-col text-center max-w-[90%]">
                    <h1 className="text-2xl font-bold">MEET OUR TEAM</h1>
                    <p>Come together, share together, work together, succeed together.</p>

                    <div className="flex flex-row gap-x-2 mt-3">
                        <div className='border-4 rounded-full border-black'></div>
                        <div className='border-4 rounded-full border-[#dc2626]'></div>
                        <div className='border-4 rounded-full border-[#2563eb]'></div>
                        <div className='border-4 rounded-full border-[#d97706]'></div>
                    </div>
                </div>

                <div className='grid lg:grid-cols-4 gap-x-10 gap-y-14 max-w-[80%] mt-9'>
                    <div >
                        <div className='flex justify-center items-center'>
                            <img className='rounded-full w-[160px] h-[160px]' src={persion}></img>
                        </div>
                        
                        <div className='flex justify-center items-center flex-col mt-3'>
                            <h1 className='text-xl font-bold'>Nguyen Hoang Anh</h1>
                            <p>Fullstack Developer</p>
                        </div>
                        <div className="flex flex-row gap-x-2 mt-1 justify-center items-center">
                            <div className='border-4 rounded-full border-black'></div>
                            <div className='border-4 rounded-full border-[#dc2626]'></div>
                            <div className='border-4 rounded-full border-[#2563eb]'></div>
                            <div className='border-4 rounded-full border-[#d97706]'></div>
                        </div>

                        <div className='flex flex-row gap-x-2 justify-center items-center mt-3'>
                            <a href='#'><img className='w-7 h-7' src={facebook} /></a>
                            <a href='#'><img className='w-7 h-7' src={tele} /></a>
                            <a href='#'><img className='w-7 h-7' src={x} /></a>
                            <a href='#'><img className='w-7 h-7' src={linkedin} /></a>
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
                            <p>Software Engineer | Devops</p>
                        </div>
                        <div className="flex flex-row gap-x-2 mt-1 justify-center items-center">
                            <div className='border-4 rounded-full border-black'></div>
                            <div className='border-4 rounded-full border-[#dc2626]'></div>
                            <div className='border-4 rounded-full border-[#2563eb]'></div>
                            <div className='border-4 rounded-full border-[#d97706]'></div>
                        </div>

                        <div className='flex flex-row gap-x-2 justify-center items-center mt-3'>
                            <a href='#'><img className='w-7 h-7' src={facebook} /></a>
                            <a href='#'><img className='w-7 h-7' src={tele} /></a>
                            <a href='#'><img className='w-7 h-7' src={x} /></a>
                            <a href='#'><img className='w-7 h-7' src={linkedin} /></a>
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
                            <img className='rounded-full w-[160px] h-[160px]' src={persion}></img>
                        </div>
                        
                        <div className='flex justify-center items-center flex-col mt-3'>
                            <h1 className='text-xl font-bold'>Loi Bui</h1>
                            <p>Business Analyst</p>
                        </div>
                        <div className="flex flex-row gap-x-2 mt-1 justify-center items-center">
                            <div className='border-4 rounded-full border-black'></div>
                            <div className='border-4 rounded-full border-[#dc2626]'></div>
                            <div className='border-4 rounded-full border-[#2563eb]'></div>
                            <div className='border-4 rounded-full border-[#d97706]'></div>
                        </div>

                        <div className='flex flex-row gap-x-2 justify-center items-center mt-3'>
                            <a href='#'><img className='w-7 h-7' src={facebook} /></a>
                            <a href='#'><img className='w-7 h-7' src={tele} /></a>
                            <a href='#'><img className='w-7 h-7' src={x} /></a>
                            <a href='#'><img className='w-7 h-7' src={linkedin} /></a>
                        </div>
                        <div className='text-center mt-3'>
                            <p>This is the is sample</p>
                            <p>Dummy text insert your.</p>
                            <p>desired text</p>

                        </div>
                    </div>

                    <div >
                        <div className='flex justify-center items-center'>
                            <img className='rounded-full w-[160px] h-[160px]' src={persion}></img>
                        </div>
                        
                        <div className='flex justify-center items-center flex-col mt-3'>
                            <h1 className='text-xl font-bold'>Tra Tran</h1>
                            <p>Frontend Developer</p>
                        </div>
                        <div className="flex flex-row gap-x-2 mt-1 justify-center items-center">
                            <div className='border-4 rounded-full border-black'></div>
                            <div className='border-4 rounded-full border-[#dc2626]'></div>
                            <div className='border-4 rounded-full border-[#2563eb]'></div>
                            <div className='border-4 rounded-full border-[#d97706]'></div>
                        </div>

                        <div className='flex flex-row gap-x-2 justify-center items-center mt-3'>
                            <a href='#'><img className='w-7 h-7' src={facebook} /></a>
                            <a href='#'><img className='w-7 h-7' src={tele} /></a>
                            <a href='#'><img className='w-7 h-7' src={x} /></a>
                            <a href='#'><img className='w-7 h-7' src={linkedin} /></a>
                        </div>
                        <div className='text-center mt-3'>
                            <p>This is the is sample</p>
                            <p>Dummy text insert your.</p>
                            <p>desired text</p>
                        </div>
                    </div>

                    <div >
                        <div className='flex justify-center items-center'>
                            <img className='rounded-full w-[160px] h-[160px]' src={persion}></img>
                        </div>
                        
                        <div className='flex justify-center items-center flex-col mt-3'>
                            <h1 className='text-xl font-bold'>Nhat Lam</h1>
                            <p>Mobile Developer</p>
                        </div>
                        <div className="flex flex-row gap-x-2 mt-1 justify-center items-center">
                            <div className='border-4 rounded-full border-black'></div>
                            <div className='border-4 rounded-full border-[#dc2626]'></div>
                            <div className='border-4 rounded-full border-[#2563eb]'></div>
                            <div className='border-4 rounded-full border-[#d97706]'></div>
                        </div>

                        <div className='flex flex-row gap-x-2 justify-center items-center mt-3'>
                            <a href='#'><img className='w-7 h-7' src={facebook} /></a>
                            <a href='#'><img className='w-7 h-7' src={tele} /></a>
                            <a href='#'><img className='w-7 h-7' src={x} /></a>
                            <a href='#'><img className='w-7 h-7' src={linkedin} /></a>
                        </div>
                        <div className='text-center mt-3'>
                            <p>This is the is sample</p>
                            <p>Dummy text insert your.</p>
                            <p>desired text</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile