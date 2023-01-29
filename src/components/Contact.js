import iconWa from "./../img/wa-logo.png"

const Contacts = () => {
    return ( 
        <div className="fixed-bottom vh-15 vw-50 justify-content-end d-flex">
            <div className="justify-content-end d-flex px-2 rounded-pill mx-5" style={{ width:"190px", height:"42px",backgroundColor:"#263238", marginBottom:"10px", cursor:"pointer" }}>
                <img src={iconWa} alt="iconwa" className="m-2" style={{ width:"25px", height:"25px" }}/>
                <p className="text-light m-2">0812-6969-4200</p>
            </div>
        </div>
     );
}
 
export default Contacts;