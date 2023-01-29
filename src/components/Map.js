import mapHaierd from './../img/map-haierd.png'

const Map = () => {
    return ( 
        <div className="d-flex flex-row align-items-center vh-100 vw-100">
            <div className="ms-5 w-50 ">
                <a target="_blank" href="https://goo.gl/maps/dj11Mw7VskwEUrKn7"><img className='img-fluid img-thumbnail' src={mapHaierd} alt="map" /></a>
            </div>
            <div className="mx-2 w-25 h-50">
                <h2 className='px-5 mb-5'>Lokasi</h2>
                <p className='px-5 py-5'>Jl. Rose Garden 5 Ruko Grand Galaxy City Blok RRG 5 No. 101, RT.001/RW.020, Jaka Setia, Kec. Bekasi Sel., Kota Bks, Jawa Barat 17148</p>
            </div>
            <div className="ms-2 me-5 w-25 h-50">
                <h2 className='px-5 mb-5'>Waktu Operasional</h2>
                <table className="table table-borderless">
                        <tbody>
                            <tr>
                                <th scope='row'className='px-5 small text-muted'>Senin</th>
                                <td className='small text-muted'>09.00 - 16.00</td>
                            </tr>
                            <tr>
                                <th scope='row' className='px-5 small text-muted'>Selasa</th>
                                <td className='small text-muted'>09.00 - 16.00</td>
                            </tr>
                            <tr>
                                <th scope='row' className='px-5 small text-muted'>Rabu</th>
                                <td className='small text-muted'>09.00 - 16.00</td>
                            </tr>
                            <tr>
                                <th scope='row' className='px-5 small text-muted'>Kamis</th>
                                <td className='small text-muted'>09.00 - 16.00</td>
                            </tr>
                            <tr>
                                <th scope='row' className='px-5 small text-muted'>Jumat</th>
                                <td className='small text-muted'>09.00 - 11.00 / 13.00 - 17.00</td>
                            </tr>
                        </tbody>
                    </table>
            </div>
        </div>
     );
}
 
export default Map;