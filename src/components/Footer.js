import './Footer.css';

const Footer = () => {
    return ( 
        <div className="vw-100 overflow-hidden" >
            <footer class="w-100 py-4 flex-shrink-0">
        <div class="container py-4">
            <div class="row gy-4 gx-5">
                <div class="col-lg-4 col-md-6">
                    <h5 class="h1 text-white">HaieRD</h5>
                    <p class="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                    <p class="small text-muted mb-0">&copy; Copyrights. All rights reserved.</p>
                </div>
                <div class="col-lg-2 col-md-6">
                    <h5 class="text-white mb-3">Halaman</h5>
                    <ul class="list-unstyled text-muted">
                        <li><a href="/#home">Home</a></li>
                        <li><a href="/#about">About</a></li>
                        <li><a href="/#map">Maps</a></li>
                    </ul>
                </div>
                <div class="col-lg-4 col-md-6">
                    <h5 class="text-white mb-3">Information</h5>
                    <p class="small text-muted">Buka : </p>
                    <table className="table table-dark">
                        <thead>
                            <tr>
                                <th scope='col' className='small text-muted'>Hari</th>
                                <th scope='col' className='small text-muted'>Waktu</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope='row'className='small text-muted'>Senin</th>
                                <td className='small text-muted'>09.00 - 16.00</td>
                            </tr>
                            <tr>
                                <th scope='row' className='small text-muted'>Selasa</th>
                                <td className='small text-muted'>09.00 - 16.00</td>
                            </tr>
                            <tr>
                                <th scope='row' className='small text-muted'>Rabu</th>
                                <td className='small text-muted'>09.00 - 16.00</td>
                            </tr>
                            <tr>
                                <th scope='row' className='small text-muted'>Kamis</th>
                                <td className='small text-muted'>09.00 - 16.00</td>
                            </tr>
                            <tr>
                                <th scope='row' className='small text-muted'>Jumat</th>
                                <td className='small text-muted'>09.00 - 11.00 / 13.00 - 17.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </footer>
        </div>
     );
}
 
export default Footer;