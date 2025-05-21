function ModalLogin() {
  return (
    <>
      {/* <!-- LOGIN SECTION --> */}
      <div id="modal1" className="modal fade" role="dialog">
        <div className="log-in-pop">
          <div className="log-in-pop-left">
            <h1>Hello...</h1>
            <p>
              Don't have an account? Create your account. It's take less then a
              minutes
            </p>
            <h4>Login with social media</h4>
            <ul>
              {/* <li>
                <a href="#">
                  <i className="fa fa-facebook"></i> Facebook
                </a>
              </li> */}
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      "http://localhost:8000/api/auth/facebook";
                  }}
                >
                  <i className="fa fa-facebook"></i> Facebook
                </a>
              </li>
              {/* <li>
                <a href="#">
                  <i className="fa fa-google"></i> Google+
                </a>
              </li> */}
              <li>
                <a href="http://localhost:8000/login/google">
                  <i className="fa fa-google"></i> Google
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-twitter"></i> Twitter
                </a>
              </li>
            </ul>
          </div>
          <div className="log-in-pop-right">
            <a href="#" className="pop-close" data-dismiss="modal">
              <img src="images/cancel.png" alt="" />
            </a>
            <h4>Login</h4>
            <p>
              Don't have an account? Create your account. It's take less then a
              minutes
            </p>
            <form className="s12">
              <div>
                <div className="input-field s12">
                  <input
                    type="text"
                    data-ng-model="name"
                    className="validate"
                  />
                  <label>User name</label>
                </div>
              </div>
              <div>
                <div className="input-field s12">
                  <input type="password" className="validate" />
                  <label>Password</label>
                </div>
              </div>
              <div>
                <div className="s12 log-ch-bx">
                  <p>
                    <input type="checkbox" id="test5" />
                    <label htmlFor="test5">Remember me</label>
                  </p>
                </div>
              </div>
              <div>
                <div className="input-field s4">
                  <input
                    type="submit"
                    value="Login"
                    className="waves-effect waves-light log-in-btn"
                  />
                </div>
              </div>
              <div>
                <div className="input-field s12">
                  <a
                    href="#"
                    data-dismiss="modal"
                    data-toggle="modal"
                    data-target="#modal3"
                  >
                    Forgot password
                  </a>
                  |
                  <a
                    href="#"
                    data-dismiss="modal"
                    data-toggle="modal"
                    data-target="#modal2"
                  >
                    Create a new account
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default ModalLogin;
