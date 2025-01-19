import './Navbar.css'
import { CiSearch } from "react-icons/ci";
import { IoLocation } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";


function Navbar() {
  return (
    <div className='part_one'>
        <div className="navbar">
            <h1>Listee Travel</h1>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Destinations</li>
                <li>Tours</li>
                <li>Shop</li>
                <li>Blogs</li>
            </ul>
            <p>Sign In</p>
            <button>SingUp</button>
        </div>

        {/* navbar is done */}

        <div className='part_one_insider'>
            <h2>Explorer and Travel</h2>
            <h1>Let’s Go Now</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            {/*  */}


            <div className="search-bar">
      <div className="search-item">
              <IoLocation className='icon' />

        <div className="text-group">
          <span className="label">Location</span>
          <span className="value">Thailand</span>
        </div>
      </div>
      <div className="divider"></div>
      <div className="search-item">
      <MdOutlineDateRange className='icon' />
        <div className="text-group">
          <span className="label">Date</span>
          <span className="value">13 May, 2023</span>
        </div>
      </div>
      <button className="search-button">
      <CiSearch className='icon' />
      </button>
    </div>


            
        </div>
    </div>
  );
}

export default Navbar;