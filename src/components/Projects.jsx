import { useRef } from 'react';
import '../index.css'

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
        <section className="proj-sec">
            <div className='proj-card-container'>
                <div style={{zIndex: 11}} id='p1' ref={p1ref} className="proj-card" onMouseOver={changeBg1} onMouseLeave={revertBg1}></div>
                <div style={{zIndex: 10}} className='projbg' id='projbg1'></div>
                <div style={{zIndex: 12}} id='p2' ref={p2ref} className="proj-card" onMouseOver={changeBg2} onMouseLeave={revertBg2}></div>
                <div style={{zIndex: 10}} className='projbg' id='projbg2'></div>
                <div style={{zIndex: 13}} id='p3' ref={p3ref} className="proj-card" onMouseOver={changeBg3} onMouseLeave={revertBg3}></div>
                <div style={{zIndex: 10}} className='projbg' id='projbg3'></div>
                <div style={{zIndex: 14}} id='p4' ref={p4ref} className="proj-card" onMouseOver={changeBg4} onMouseLeave={revertBg4}></div>
                <div style={{zIndex: 10}} className='projbg' id='projbg4'></div>
            </div>
        </section>
    )
}

export default Projects;