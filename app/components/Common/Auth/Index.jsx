import React, { useEffect, useState } from "react";
import LoginCompB2B from "../../Common/Auth/Login/B2B/Index";
import RegisterB2BGeneral from "../../Common/Auth/Register/B2B/General/Index";
import ForgotPasswordForm from "../../Common/Auth/Register/B2B/ForgetPassForm/Index";
import ResetPasswordForm from "../../Common/Auth/Register/B2B/ResetPasswordForm/Index";
// import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

import "./styles.scss";

function Index(props) {
  const [logIn, setlogIn] = useState(true);
  const [ForgotPassword, setForgotPassword] = useState(false);
  const [ResetPassword, setResetPassword] = useState(false);
  const router = useRouter();

  const searchParams = useSearchParams();

  const backGO = () => {
    setlogIn(true);
    setForgotPassword(false);
    setResetPassword(false);
    router.push("/");
  };

  useEffect(() => {
    let authQuery = searchParams.get("auth");
    if (authQuery == "register") {
      props?.setShow(true);
      setlogIn(false);
    }
  }, []);

  useEffect(() => {
    let authQuery = searchParams.get("generate");
    if (authQuery == "password") {
      props?.setShow(true);
      setResetPassword(true);
    }
  }, []);

  return (
    <div className="authPageMain32">
      <Modal
        {...props}
        size="lg"
        fullscreen={true}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter"></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {ResetPassword ? (
            <div className="ItemWrapper">
              <ResetPasswordForm
                onhide={props?.onHide}
                ResetPassword={ResetPassword}
                setResetPassword={setResetPassword}
                backGO={backGO}
              />
            </div>
          ) : (
            <div className="ItemWrapper">
              {ForgotPassword ? (
                <ForgotPasswordForm
                  onhide={props?.onHide}
                  ForgotPassword={ForgotPassword}
                  setForgotPassword={setForgotPassword}
                  backGO={backGO}
                />
              ) : logIn ? (
                <LoginCompB2B
                  setlogIn={setlogIn}
                  onhide={props?.onHide}
                  setForgotPassword={setForgotPassword}
                />
              ) : (
                <RegisterB2BGeneral
                  setlogIn={setlogIn}
                  onhide={props?.onHide}
                />
              )}
            </div>
          )}
        </Modal.Body>

        {/* <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer> */}
      </Modal>
    </div>
  );
}

export default Index;
