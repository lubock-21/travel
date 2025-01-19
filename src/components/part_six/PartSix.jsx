import './PartSix.css'
import ellipse1 from '../assets/Ellipse 4.png'
import ellipse2 from '../assets/Ellipse 5.png'
import ellipse3 from '../assets/Ellipse 6.png'
import ellipse4 from '../assets/Ellipse 7.png'
import ellipse5 from '../assets/Ellipse 8.png'
import ellipse6 from '../assets/Ellipse 9.png'

function PartSix() {
  return (
    <div className='part_six'>
        <h2>Review & Testimonials</h2>
        <h1>top reviews for etour</h1>
        <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been <br /> the industry's standard dummy text ever since the 1500s,</h5>
        <div className="part_six_card">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s.....</p>
        </div>
        <div className="part_six_photo">
            <img src={ellipse1} alt="" />
            <img src={ellipse2} alt="" />
            <img src={ellipse3} alt="" />
            <img src={ellipse4} alt="" />
            <img src={ellipse5} alt="" />
            <img src={ellipse6} alt="" />
        </div>
    </div>
  )
}

export default PartSix;