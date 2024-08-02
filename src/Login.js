import React, { useState } from "react";
import Button from "./Button"; // 버튼 컴포넌트를 가져옵니다.
import "./App.css"; // 필요한 스타일을 포함합니다.

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError("모든 필드를 입력해주세요");
      return;
    }

    if (password !== confirmPassword) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }

    console.log("로그인 정보:", {
      email,
      password,
    });

    setError("");
  };

  const handleKakaoLogin = () => {
    if (!window.Kakao) {
      console.error("Kakao SDK가 로드되지 않았습니다.");
      return;
    }

    window.Kakao.Auth.login({
      success: function (authObj) {
        console.log("카카오 로그인 성공", authObj);
        window.Kakao.API.request({
          url: "/v2/user/me",
          success: function (response) {
            console.log("카카오 사용자 정보", response);
            // 사용자 정보로 상태 업데이트 등 추가 로직 작성
          },
          fail: function (error) {
            console.error("사용자 정보 요청 실패", error);
          },
        });
      },
      fail: function (error) {
        console.error("카카오 로그인 실패", error);
      },
    });
  };

  return (
    <div className="Login-container">
      <h2>로그인</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">E-Mail:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">비밀번호:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Button type="submit" label="Login" />
      </form>
      <Button onClick={handleKakaoLogin} label="카카오로 로그인" />
    </div>
  );
};

export default Login;
