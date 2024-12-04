import { faAngleDown, faBars, faBriefcase, faComments, faList, faListCheck, faUserGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function sidebar() {
    return (
        <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav">
                        {/* <div className="sb-sidenav-menu-heading">Main</div>
                        <Link className="nav-link" href="/main">
                            <div className="sb-nav-link-icon">
                                <FontAwesomeIcon icon={faChalkboard} />
                            </div>
                            Home
                        </Link> */}
                        <div className="sb-sidenav-menu-heading">Notice</div>
                        <Link className="nav-link" href="/board">
                            <div className="sb-nav-link-icon">
                                <FontAwesomeIcon icon={faList} />
                            </div>
                            공지사항
                        </Link>
                        <div className="sb-sidenav-menu-heading">List</div>
                        <Link className="nav-link" href="/board">
                            <div className="sb-nav-link-icon">
                                <FontAwesomeIcon icon={faBars} />
                            </div>
                            자유게시판
                        </Link>
                        <Link className="nav-link" href="/qna">
                            <div className="sb-nav-link-icon">
                                <FontAwesomeIcon icon={faComments} />
                            </div>
                            Q & A
                        </Link>
                        <Link className="nav-link" href="/info">
                            <div className="sb-nav-link-icon">
                                <FontAwesomeIcon icon={faBriefcase} />
                            </div>
                            정보 공유
                        </Link>
                        <div className="sb-sidenav-menu-heading">Setting</div>
                        <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseUsers" aria-expanded="false" aria-controls="collapseUsers">
                            <div className="sb-nav-link-icon">
                                <FontAwesomeIcon icon={faUserGear} />
                            </div>
                            사용자 관리
                            <div className="sb-sidenav-collapse-arrow">
                                <FontAwesomeIcon icon={faAngleDown} />
                            </div>
                        </a>
                        <div className="collapse" id="collapseUsers" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                            <nav className="sb-sidenav-menu-nested nav">
                                <Link className="nav-link" href="/user">사용자 조회</Link>
                                <Link className="nav-link" href="/user/add">사용자 추가</Link>
                            </nav>
                        </div>
                        <a className="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseUsers" aria-expanded="false" aria-controls="collapseUsers">
                            <div className="sb-nav-link-icon">
                                <FontAwesomeIcon icon={faListCheck} />
                            </div>
                            공지사항 관리
                            <div className="sb-sidenav-collapse-arrow">
                                <FontAwesomeIcon icon={faAngleDown} />
                            </div>
                        </a>
                        <div className="collapse" id="collapseUsers" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                            <nav className="sb-sidenav-menu-nested nav">
                                <Link className="nav-link" href="/notice">공지사항 조회</Link>
                                <Link className="nav-link" href="/notice/add">공지사항 추가</Link>
                            </nav>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}