import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import search from '../Images/search.png'
import like from '../Images/nav_like_w.png'
import cart from '../Images/nav_cart_w.png'
import userProfImg from '../Images/nav_user_w.png'
import '../css/navbar.css'

function Navbar() {

    const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      
      if(scrollY > window.scrollY)
      {
        console.log(true)
      }else{
        console.log(false)
      }
      setScrollY(window.scrollY);
      console.log(scrollY)
    };

    window.addEventListener('scroll', handleScroll);

  }, []); 
  return (
    <>
    <div className='navMain'>
      <Link to={'/'}>
        <div className='logo'>ACEWEARS</div>
      </Link>
        <div className='navComps'>
            <Link to={'/menAllCollections'}>MEN</Link>
            <Link to={'/womenAllCollections'}>WOMEN</Link>
            <div className='navSearchBar'>
                <input type="text" placeholder='Search'/>
                <img src={search} alt="search" />
            </div>
            <Link to={'/wishlist'}>
                <img src={like} alt="like" />
            </Link>
            <Link to={'/cart'}>
                <img src={cart} alt="cart" />
            </Link>
            <Link>
                <img src={userProfImg} alt="userProfImg" />
            </Link>
        </div>
    </div>
    {/* <div className='navMain'>
        <Link>MEN</Link>
        <Link>MEN</Link>
        <Link>MEN</Link>
        <Link>MEN</Link>
        <Link>MEN</Link>
        <Link>MEN</Link>
        <Link>MEN</Link>
        <Link>MEN</Link>
        <Link>MEN</Link>
        <Link>MEN</Link>
        <Link>MEN</Link>
    </div>
    <div className="test"></div> */}
    </>
  )
}

export default Navbar