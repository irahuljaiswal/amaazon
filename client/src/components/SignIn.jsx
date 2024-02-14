import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

export default function SignIn() {
  const [data, setData] = React.useState({
    email: "",
    password: "",
  });

  // console.log(data);

  const addData = (e) => {
    const { name, value } = e.target;

    setData(() => {
      return {
        ...data,
        [name]: value,
      };
    });
  };

  const senddata = async (e) => {
    e.preventDefault();
    const {email, password} = data;
    const res = await fetch("http://localhost:8005/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const datas =  await res.json()
    console.log(datas);

    if(res.status == 400 || !data){
      toast.warn("invalid details entered",{
        position:"top-center"
      })
    }
    else{
      toast.success("Welcome user", {
        position: "top-center",
      });
      setData({...data, email:"", password:""})
    }
  };

  return (
    <div className="signin--main">
      <Link to="/">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          className="signin--logo"
          alt=""
        />
      </Link>
      <div className="signin--card">
        <h1 signin--heading>Sign in</h1>
        <form action="" method="POST">
          <h5>Email</h5>
          <input type="text" name="email" onChange={addData} value={data.email} />

          <h5>Password</h5>
          <input type="password" name="password" onChange={addData} value={data.password}/>
          <button className="signin--button" onClick={senddata}>
            Sign in
          </button>
        </form>
        <p>
          By Signing in, you agree to Amazon Clone's Conditions of Use and
          Privacy Notice.
        </p>

        <Link
          className="custom-link"
          to="https://www.linkedin.com/in/rahul-jaiswal-82027b1b3/"
        >
          <p>Need help?</p>
        </Link>
        <div className="dash"></div>

        <div className="signin--card--bottom">
          <h6 className="top">Buying for work?</h6>
          <Link
            className="custom-link"
            to="https://www.amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fbusiness%2Fregister%2Fcheck%2Fstatus%3Fref_%3Dab_welcome_bw_ckab_dsk%26originalRef%3Dab_reg_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=amzn_ab_reg_web_in&openid.mode=checkid_setup&marketPlaceId=A21TJRUUN4KGV&language=en_IN&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&pageId=ab_welcome_login_in&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&switch_account=signin&ref_=ab_welcome_bw_ap-sn_dsk&disableLoginPrepopulate=1"
          >
            <h6>Shop on Amazon Business</h6>
          </Link>
        </div>
      </div>
      <div className="sign--in--newuser">
        <p className="dashed">New to Amazon?</p>
        <Link to="/signup" className=" custom-link sign--in--newuser">
          <button className="create--acc">Create your Amazon account</button>
        </Link>
      </div>
      <ToastContainer/>
    </div>
  );
}
