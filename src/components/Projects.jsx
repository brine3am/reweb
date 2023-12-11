import { useRef } from 'react';
import '../index.css'
import { ArrowRight, ArrowUpRight } from '@phosphor-icons/react';

const Projects = () => {
    const p1ref = useRef();
    const p2ref = useRef();
    const p3ref = useRef();
    const p4ref = useRef();
    const changeBg1 = () => {
        document.getElementById('projbg1').style.display = 'block';
        p2ref.current.classList.toggle('hide');
        p3ref.current.classList.toggle('hide');
        p4ref.current.classList.toggle('hide');
    }
    const revertBg1 = () => {
        document.getElementById('projbg1').style.display = 'none';
        p2ref.current.classList.toggle('hide');
        p3ref.current.classList.toggle('hide');
        p4ref.current.classList.toggle('hide');
    }
    const changeBg2 = () => {
        document.getElementById('projbg2').style.display = 'block';
        p1ref.current.classList.toggle('hide');
        p3ref.current.classList.toggle('hide');
        p4ref.current.classList.toggle('hide');
    }
    const revertBg2 = () => {
        document.getElementById('projbg2').style.display = 'none';
        p1ref.current.classList.toggle('hide');
        p3ref.current.classList.toggle('hide');
        p4ref.current.classList.toggle('hide');
    }
    const changeBg3 = () => {
        document.getElementById('projbg3').style.display = 'block';
        p2ref.current.classList.toggle('hide');
        p1ref.current.classList.toggle('hide');
        p4ref.current.classList.toggle('hide');
    }
    const revertBg3 = () => {
        document.getElementById('projbg3').style.display = 'none';
        p2ref.current.classList.toggle('hide');
        p1ref.current.classList.toggle('hide');
        p4ref.current.classList.toggle('hide');
    }
    const changeBg4 = () => {
        document.getElementById('projbg4').style.display = 'block';
        p2ref.current.classList.toggle('hide');
        p3ref.current.classList.toggle('hide');
        p1ref.current.classList.toggle('hide');
    }
    const revertBg4 = () => {
        document.getElementById('projbg4').style.display = 'none';
        p2ref.current.classList.toggle('hide');
        p3ref.current.classList.toggle('hide');
        p1ref.current.classList.toggle('hide');
    }
    return(
        <section id="proj-sec-start" className="proj-sec">
            <div className='proj-textsec'>
                <h6>WHAT WE DO</h6>
                <p>We bring your brand to life through stunning visuals and user-friendly online experiences. We craft unique and engaging websites that not only look great but also function seamlessly.</p>
            </div>
            <div className='proj-card-container'>
                <a href='https://www.behance.net/gallery/159114323/NatGeos-Documentarys-Website-UI-Design' target='_blank' style={{zIndex: 11}} id='p1' ref={p1ref} className="proj-card" onMouseOver={changeBg1} onMouseLeave={revertBg1}>
                    <a>NatGeo 2050</a>
                    <a href="#">View Project <span><ArrowUpRight/></span></a>
                </a>
                <div style={{zIndex: 10}} className='projbg' id='projbg1'></div>
                <a href='https://dainty-druid-e537cf.netlify.app/' target='_blank' style={{zIndex: 12}} id='p2' ref={p2ref} className="proj-card" onMouseOver={changeBg2} onMouseLeave={revertBg2}>
                <a>TNDS GLOBAL</a>
                    <a href="#">View Project <span><ArrowUpRight/></span></a>
                </a>
                <div style={{zIndex: 10}} className='projbg' id='projbg2'></div>
                {/* <div style={{zIndex: 13}} id='p3' ref={p3ref} className="proj-card" onMouseOver={changeBg3} onMouseLeave={revertBg3}>
                    <a>zxStudio</a>
                    <a href="#">View Project <span><ArrowUpRight/></span></a>
                </div>
                <div style={{zIndex: 10}} className='projbg' id='projbg3'></div>
                <div style={{zIndex: 14}} id='p4' ref={p4ref} className="proj-card" onMouseOver={changeBg4} onMouseLeave={revertBg4}>
                <a>People of Color</a>
                    <a href="#">View Project <span><ArrowUpRight/></span></a>
                </div>
                <div style={{zIndex: 10}} className='projbg' id='projbg4'></div> */}
            </div>
        </section>
    )
}

export default Projects;