import '../App.css';
import Statue from '../assets/creative.png';

const Hero = () => {
    return(
        <section id="hero-start" className="hero-section">
            <div>
                <div data-aos="fade-down"
                data-aos-offset="100"
                data-aos-delay="50"
                data-aos-duration="900"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center" >
                    {/* <h4 style={{marginBottom: "-1.5rem", width: "60%"}}>Authentic Freeflow Of Creativity</h4> */}
                    <h1>Crea<span><img style={{width: '12%', marginLeft: '1.5rem', marginRight: '.5rem'}} src={Statue} alt="" /></span>tive <br /> Visual & Frontend <br /> Developer<br />New DelhI*</h1>
                </div>
            </div>
        </section>
    )
}

export default Hero;