import React, { useRef } from "react";
import { Row, Col, Button } from "antd";
import styles from "./Signin.module.css";
import { LoginReqType } from "../types";

interface SigninProps {
  login: (reqData: LoginReqType) => void;
}

const Signin: React.FC<SigninProps> = ({ login }) => {
  // useRef type input으로 설정해줘야함 any 노노
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  return (
    <Row align="middle" className={styles.signin_row}>
      <Col span={24}>
        <Row className={styles.signin_contents}>
          <Col span={12}>
            <img
              src="/bg_signin.png"
              alt="Signin"
              className={styles.signin_bg}
            />
          </Col>
          <Col span={12}>
            <div className={styles.signin_title}>My Books</div>
            <div className={styles.signin_subtitle}>
              Please Note Your Opinion
            </div>
            <div className={styles.signin_underline} />
            <div className={styles.email_title}>
              Email
              <span className={styles.required}>*</span>
            </div>
            <div className={styles.input_area}>
              <input
                ref={emailRef}
                placeholder="Email"
                autoComplete="email"
                name="email"
                className={styles.input}
              />
            </div>
            <div className={styles.password_title}>
              Password
              <span className={styles.required}>*</span>
            </div>
            <div className={styles.input_area}>
              <input
                ref={passwordRef}
                type="password"
                autoComplete="current-password"
                className={styles.input}
              />
            </div>
            <div className={styles.button_area}>
              <Button size="large" className={styles.button} onClick={click}>
                Sign In
              </Button>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
  function click() {
    const email = emailRef.current!.value;
    const password = passwordRef.current!.value;

    login({ email, password });
  }
};

export default Signin;
