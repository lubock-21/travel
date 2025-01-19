import './Seven.css'
import building from '../assets/pngwing.com 1.png'
import { FaArrowRight } from "react-icons/fa6";

function Seven() {
  return (
    <div className='part_seven'>
        <div className="seven_left">
            <img src={building} alt="" />
        </div>
        <div className="seven_right">
            <h1>Get Our Monthly
            Newsletter</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
            <input type="email" placeholder='Input your emaill address in here' />
            <button>
            <FaArrowRight />
            </button>
        </div>
    </div>
  )
}

export default Seven;