import Link from "next/link";

export default function join() {
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
                        <div className="form-floating mb-3">
                          <input className="form-control" id="inputPassword" type="password" placeholder="비밀번호" />
                          <label htmlFor="inputPassword">비밀번호</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input className="form-control" id="inputRePassword" type="password" placeholder="비밀번호 확인" />
                          <label htmlFor="inputRePassword">비밀번호 확인</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input className="form-control" id="user_name" type="text" placeholder="이름" />
                          <label htmlFor="user_name">이름</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input className="form-control" id="user_mobile" type="tel" placeholder="전화번호" />
                          <label htmlFor="user_mobile">전화번호</label>
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