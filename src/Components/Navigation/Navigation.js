import '../../Styles/Navigation.css';
import Appliances from '../../Images/Appliances.png'
import 'bootstrap/js/src/collapse.js';
import 'bootstrap/js/src/dropdown.js';
const Navigation = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-light">
            <div class="container">
                <div class="col-md-4">
                    <a class="navbar-brand" href="/">Nisarga <img src={Appliances} alt="."/> </a>
                </div>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link" aria-current="page" href="/home">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/categories">Categories</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/categories">Products</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/categories">Brand</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#!" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                More
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#!">Feedback</a></li>
                                <li><a class="dropdown-item" href="#!">Product Support</a></li>
                                <li><hr class="dropdown-divider" /></li>
                                <li><a class="dropdown-item" href="#!">Career</a></li>
                                <li><a class="dropdown-item" href="#!">Promoter</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul className='cart'>
                        <li><form class="d-flex" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form></li>
                        <li style={{ paddingLeft: "15px" }}></li>
                    </ul>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-bag" viewBox="0 0 16 16">
                        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
                    </svg>
                </div>
            </div>
        </nav>
    )
}

export default Navigation;