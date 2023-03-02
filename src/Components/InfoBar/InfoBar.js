import '../../Styles/InfoBar.css'
const InfoBar = () => {
    return (
        <div className="py-2 infobar">
            <div className="container">
                <div className="row">
                    {/* InfoBar-Left */}
                    <div className="col-md-4">
                        <ul className='infobar-left-side'>
                            <li><i class="bi bi-youtube"></i></li>
                            <li><i class="bi bi-instagram"></i></li>
                            <li><i class="bi bi-whatsapp"></i></li>
                            <li><i class="bi bi-twitter"></i></li>
                            <li><i class="bi bi-linkedin"></i></li>
                        </ul>
                    </div>
                    {/* InfoBar-middle */}
                    <div className="col-md-4">
                        {/* Brand Customer Support */}
                        <ul className='customer-support'>
                            <li><i class="bi bi-telephone"></i><span> +91-8888888888</span></li>
                            <li><i class="bi bi-envelope"></i><span> support@homemart.com</span></li>
                        </ul>
                    </div>
                    {/* InfoBar-right */}
                    <div className="col-md-4">
                        {/* User-details */}
                        <ul className='user-details'>
                            <li><i className='bi bi-geo-alt'></i><span> India</span></li>
                            <li><i class="bi bi-truck"></i><span> Order</span></li>
                            <li><i className='bi bi-heart'></i><span> Wishlist</span></li>
                            <li><i className='bi bi-person'></i><span> My Account</span></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoBar;