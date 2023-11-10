import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const NavLinks = () => {
    return (
        <>
            <HashLink className="px-4 font-semibold text-black hover:text-orange-600" smooth to="/#about">
                Về chúng tôi
            </HashLink>
            <HashLink className="px-4 font-semibold text-black hover:text-orange-600" smooth to="/#services">
                Dịch vụ
            </HashLink>
            <HashLink className="px-4 font-semibold text-black hover:text-orange-600" to="/">
                Bài viết
            </HashLink>
            <HashLink className="px-4 font-semibold text-black hover:text-orange-600" to="/contact">
                Liên hệ
            </HashLink>
            {/* <Link className="text-white bg-blue-900 hover:bg-blue-800 inline-flex items-center justify-center w-auto px-6 py-3 shadow-xl rounded-xl" smooth to="/get-demo">
                Demo our products
            </Link> */}
        </>
    )
}

export default NavLinks;