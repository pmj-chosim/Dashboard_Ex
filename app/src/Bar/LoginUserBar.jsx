import React from "react";
import { Link } from "react-router-dom";
import "./MenuBar.css";

const LoginUserBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/mypage">MyPage</Link>
        </li>{" "}
        {/* 로그인 페이지로 이동 */}
      </ul>
    </nav>
  );
};

export default LoginUserBar;
