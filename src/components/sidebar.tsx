import { faAngleDown, faChalkboard, faChartLine, faList, faSignal, faTachometerAlt, faUserGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function sidebar() {
    return (
        <div id="layoutSidenav_nav">
            <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                <div className="sb-sidenav-menu">
                    <div className="nav">
                        <div className="sb-sidenav-menu-heading">Main</div>
                        <Link className="nav-link" href="/main">
                            <div className="sb-nav-link-icon">
                                <FontAwesomeIcon icon={faChalkboard} />
                            </div>
                            Main Board
                        </Link>
                        <div className="sb-sidenav-menu-heading">Menu</div>
                        <Link className="nav-link" href="/sensor/sensorList">
                            <div className="sb-nav-link-icon">
                                <FontAwesomeIcon icon={faTachometerAlt} />
                            </div>
                            &nbsp;센서 제어
                        </Link>
                        <Link className="nav-link" href="/relay/relayList">
                            <div className="sb-nav-link-icon">
                                <FontAwesomeIcon icon={faSignal} />
                            </div>
                            릴레이 제어
                        </Link>
                        <Link className="nav-link" href="/graph/graphList">
                            <div className="sb-nav-link-icon">
                                <FontAwesomeIcon icon={faChartLine} />
                            </div>
                            &nbsp;센서 그래프
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
                                <Link className="nav-link" href="/user/userList">사용자 조회</Link>
                                <Link className="nav-link" href="/user/userAdd">사용자 추가</Link>
                            </nav>
                        </div>
                        <Link className="nav-link" href="/menu/menuList">
                            <div className="sb-nav-link-icon">
                                <FontAwesomeIcon icon={faList} />
                            </div>
                            &nbsp;메뉴 관리
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}