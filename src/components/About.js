import bgAbout from './../img/bg-about.png'
import logo from "./../img/haierd-logo.png"

const About = () => {
    return ( 
        <div className="vh-100 vw-100 p-5">
             <h1 className="text-center mt-5">Tentang Kami</h1>
            <div className="mx-5 mt-5 d-flex flex-row rounded" style={{ backgroundColor:"#f2f2f2", height:"70vh" }}>
                <div className="w-50">
                    <ul style={{ listStyleType:'none' }}>
                        <li>
                    
                    <div className="p-5 h-20 w-50">
                        <p className="fs-2 pt-10">Visi :</p>
                        <p className='ps-3'>jadi gini</p>
                    </div>
                    </li>
                    <li>
                    <div className="p-5 h-20 w-80">
                    <p className="fs-2 pt-10">Misi :</p>
                        <ol>
                            <li>gini bro</li>
                            <li>Memberikan Pelayanan Terbaik</li>
                            <li>Memprioritaskan Kenyamanan dan Kesejahteraan</li>
                        </ol>
                    </div>
                    </li>
                    </ul>
                </div>
                
                <div className="w-50 d-flex align-items-center justify-content-center ">
                    <img src={logo} alt="logo" className=' h-50'/>
                </div>
            </div>
        </div>
     );
}
 
export default About;