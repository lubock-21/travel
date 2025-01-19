import './PartFour.css'
import reactangular34 from '../assets/Rectangle 34.png'
import reactangular35 from '../assets/Rectangle 35.png'
import reactangular36 from '../assets/Rectangle 36.png'

function PartFour() {
  return (
    <div className='part_four'>
        <h2>Popular</h2>
        <h1>TOUR PACKAGES</h1>
        <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been <br /> the industry's standard dummy text ever since the 1500s,</h5>
        <div className="part_four_cards">
            <div className="four_card">
                <img src={reactangular34} alt="" />
                <h3>rome, italy</h3>
                <div className="four_card_insider">
                    <p>10 days trip</p>
                    <h4>$5.24K</h4>
                </div>
            </div>
            <div className="four_card">
                <img src={reactangular35} alt="" />
                <h3>Lahore, pakistan</h3>
                <div className="four_card_insider">
                    <p>6 days trip</p>
                    <h4>$3.25K</h4>
                </div>
            </div>
            <div className="four_card">
                <img src={reactangular36} alt="" />
                <h3>singapore</h3>
                <div className="four_card_insider">
                    <p>7 days trip</p>
                    <h4>$7.00K</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PartFour;