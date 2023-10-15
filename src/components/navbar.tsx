import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faBars, faHouse, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function navbar() {
    return (
        <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            {/* Navbar Brand */}
            <Link className="navbar-brand ps-3" href="/main">
                VARIETY
            </Link>
            {/* Sidebar Toggle */}
            {/* <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle">
                <FontAwesomeIcon icon={faBars} />
            </button> */}
            {/* Navbar Search */}
            <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="search" />
                    <button className="btn btn-primary" id="btnNavbarSearch" type="button">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>
            </form>
            {/* Navbar */}
            <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <Link className="nav-link" href="/main">
                    <FontAwesomeIcon icon={faHouse} />
                </Link>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <FontAwesomeIcon icon={faUser} />
                    </a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><Link className="dropdown-item" href="/profile/myProfile">내 프로필</Link></li>
                        {/* <li><a className="dropdown-item" href="#!"></a></li> */}
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="/">로그아웃</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}