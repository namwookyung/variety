import Link from "next/link";

export default function login() {
  return (
    <div className="bg-dark">
      <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
          <main>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-5">
                  <div className="card shadow-lg border-0 rounded-lg mt-5">
                    <div className="card-header">
                      <h3 className="text-center font-weight-light my-4">VARIETY</h3>
                    </div>
                    <div className="card-body">
                      <form>
                        <div className="form-floating mb-3">
                          <input className="form-control" id="inputId" type="text" placeholder="아이디" />
                          <label htmlFor="inputId">아이디</label>
                        </div>
                        <div className="form-floating mb-3">
                          <input className="form-control" id="inputPassword" type="password" placeholder="Password" />
                          <label htmlFor="inputPassword">비밀번호</label>
                        </div>
                        <Link className="btn btn-warning" href="/join">회원가입</Link>
                        <Link className="btn btn-primary" href="/main">로그인</Link>
                      </form>
                    </div>
                    <div className="card-footer text-center py-3">
                      <div className="small" style={{color:"gray"}}>Copyright &copy; Wookyung Nam 2023</div>
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