import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import NavigationBar from "./NavigationBar";

const Form = () => {
    const [isOpen, setIsOpen] = useState(false);

    function handleOpen() {
      setIsOpen(true)
    }

    function handleClose() {
        setIsOpen(false)
    }

    return ( 
        <div className="border">
            <Modal className="mt-5 pt-5" show={isOpen} onHide={!isOpen}>
            
            <Modal.Body>  
                <form>
                     <div class="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Nama</label>
                        <input type="text" class="form-control" />
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" class="form-control" />
                    </div>

                    <div class="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Nomor Telepon</label>
                        <input type="email" class="form-control" />
                    </div>
                    
                    <div class="mb-3">
                        <label for="exampleInputEmail1" className="form-label">Pesan</label>
                        <textarea class="form-control" rows="5" style={{ resize:"none" }} id="comment"></textarea>
                    </div>
                  
                    <Button variant="secondary" className="me-2" onClick={handleClose}>Tutup</Button>  
                    <Button variant="primary" className="mx-2" >Kirim</Button>  
                </form>
            </Modal.Body>  
               
            <Modal.Footer>  
                <div className="form-text">Semua data yang anda input aman</div>
            </Modal.Footer>  
            </Modal>
            <NavigationBar handleOpen={handleOpen}/>
        </div>
     );
}
 
export default Form;