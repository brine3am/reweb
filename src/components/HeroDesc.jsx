import Hand from '../assets/hand.png';

const HeroDesc = () => {
    return(
        <section className='hero-desc'>
            <div className='hero-desc-f' data-aos="fade-up"
    data-aos-offset="20"
    data-aos-delay="10"
    data-aos-duration="500"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center" style={{}}>
                <div>
                    <h1 style={{fontSize: '1rem', marginBottom: '1.5rem'}}>Who Are We?</h1>
                    <p style={{}}>We are a creative agency specializing in graphic design and website development.Whether you're looking to create a new website from scratch, revamp your existing site, or optimize it for better performance, our skilled team of developers is here to turn your digital vision into reality. </p></div>
            </div>
            <div data-aos="fade-up"
    data-aos-offset="20"
    data-aos-delay="10"
    data-aos-duration="500"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
                <img style={{width: '270px'}} src={Hand} alt="" />
            </div>
        </section>
    )
}

export default HeroDesc;