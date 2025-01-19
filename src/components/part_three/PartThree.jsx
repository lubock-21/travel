import './PartThree.css'
import layer1 from '../assets/layer1.png'
import layer2 from '../assets/layer2.png'
import layer3 from '../assets/layer3.png'
import layer4 from '../assets/layer4.png'
import layer5 from '../assets/layer5.png'
import layer6 from '../assets/layer6.png'


function PartThree() {
  return (
    <div className='part_three'>
        <h2>Travel by</h2>
        <h1>ACTIVITY</h1>
        <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been <br /> the industry's standard dummy text ever since the 1500s,</h5>
        <div className="part_three_cards">
            <div className="three_card special">
                <img src={layer1} alt="" />
                <h3>Adventure</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            </div>
            <div className="three_card">
                <img src={layer2} alt="" />
                <h3>Camping</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            </div>
            <div className="three_card">
                <img src={layer3} alt="" />
                <h3>Trekking</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            </div>
            {/*  */}
            <div className="three_card">
                <img src={layer4} alt="" />
                <h3>Off Road</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            </div>
            <div className="three_card">
                <img src={layer5} alt="" />
                <h3>Camp Fire</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            </div>
            <div className="three_card">
                <img src={layer6} alt="" />
                <h3>Expiring</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            </div>
        </div>
    </div>
  )
}

export default PartThree