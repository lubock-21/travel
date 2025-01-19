import './PartFive.css'
import photo1 from '../assets/Rectangle 4 (6).png'
import photo2 from '../assets/Rectangle 5.png'
import photo3 from '../assets/Rectangle 6.png'
import photo4 from '../assets/Rectangle 7.png'
import photo5 from '../assets/Rectangle 8 (1).png'
import photo6 from '../assets/Rectangle 9 (1).png'


function PartFive() {
  return (
    <div className='part_five'>
        <h2>Best Traveler’s</h2>
        <h1>Shared photos</h1>
        <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been <br /> the industry's standard dummy text ever since the 1500s,</h5>
        <div className="part_five_cards">
            <div className="five_card"><img src={photo1} alt="" /></div>
            <div className="five_card">
            <img src={photo2} alt="" />
            </div>
            <div className="five_card">
            <img src={photo3} alt="" />
            </div>
            <div className="five_card">
            <img src={photo4} alt="" />
            </div>
            <div className="five_card">
            <img src={photo5} alt="" />
            </div>
            <div className="five_card">
            <img src={photo6} alt="" />
            </div>
        </div>
    </div>
  )
}

export default PartFive;