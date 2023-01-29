import bgHome from './../img/bg-home.png';

import About from './About';
import Map from './Map';
import Galeri from './Galeri';

const Homepage = () => {
    return (    
        <div className='d-flex flex-column align-items-center vh-200'>
    
        <section id='home'>
            <div className="d-flex flex-row align-items-center vw-100 vh-100" > 
                <div className=" w-50 h-50" >
                    <h1 className="p-5 display-3">Memberikan Solusi Terbaik, Profesional, dan Bijak</h1>
                </div>
                <div className=" w-50 h-100 ">
                    <img src={bgHome} alt="bgHome" className='h-100'/>
                </div>
            </div>
        </section>

        <section id='about'>
            <About/>
        </section>

        <section id='map'>
            <Map/>
        </section>

        <section id='galeri'>
            <Galeri/>
        </section>
        </div>
     );
}
 
export default Homepage;