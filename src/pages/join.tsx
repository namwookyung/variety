import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState } from "react";

export default function join() {
  const [passwordVisible, setPasswordVisible] = useState(false);  // 비밀번호 표시 여부 상태
  const [rePasswordVisible, setRePasswordVisible] = useState(false);  // 비밀번호 확인 표시 여부 상태

  const togglePasswordVisibility = () => {
    setPasswordVisible((prev) => !prev);
  }

  const toggleRePasswordVisibility = () => {
    setRePasswordVisible((prev) => !prev);
  }
  return (
    <div className="bg-secondary">
      <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
          <main>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-5">
                  <div className="card shadow-lg border-0 rounded-lg mt-5">
                    <div className="card-header">
                      <h3 className="text-center font-weight-light my-4">VARIETY 회원가입</h3>
                    </div>
                    <div className="card-body">
                      <form>
                        <div className="form-floating mb-3">
                          <input className="form-control" id="inputId" type="text" placeholder="아이디" />
                          <label htmlFor="inputId">아이디</label>
                        </div>
                        <div className="input-group mb-3">
                          <div className="form-floating">
                            <input className="form-control" id="inputPassword" type={passwordVisible ? "text" : "password"} placeholder="비밀번호" /> {/* type 동적 변경 */}
                            <label htmlFor="inputPassword">비밀번호</label>
                          </div>
                          <span className="input-group-text" style={{ cursor: "pointer" }} onClick={togglePasswordVisibility}>  {/* 클릭 가능하도록 스타일 추가 */}
                            <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
                          </span>
                        </div>
                        <div className="input-group mb-3">
                          <div className="form-floating">
                            <input className="form-control" id="inputRePassword" type={rePasswordVisible ? "text" : "password"} placeholder="비밀번호 확인" /> {/* type 동적 변경 */}
                            <label htmlFor="inputRePassword">비밀번호 확인</label>
                          </div>
                          <span className="input-group-text" style={{ cursor: "pointer" }} onClick={toggleRePasswordVisibility}>  {/* 클릭 가능하도록 스타일 추가 */}
                            <FontAwesomeIcon icon={rePasswordVisible ? faEyeSlash : faEye} />
                          </span>
                        </div>
                        <div className="form-floating mb-3">
                          <input className="form-control" id="user_nick" type="text" placeholder="닉네임" />
                          <label htmlFor="user_nick">닉네임</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input className="form-control" id="user_email" type="email" placeholder="이메일" />
                          <label htmlFor="user_email">이메일</label>
                        </div>
                        <div style={{textAlign:'right'}}>
                          <Link className="btn btn-primary" href="/main">회원가입</Link>
                        </div>
                      </form>
                    </div>
                    <div className="card-footer text-center py-3">
                      <div className="small" style={{color:"gray"}}>Copyright &copy; Wookyung Nam 2024</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}