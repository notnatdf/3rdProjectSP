import React, { useState } from "react";
import Button from "./Button"; // 버튼 컴포넌트를 가져옵니다.
import "./App.css"; // 필요한 스타일을 포함합니다.

declare global {
  interface Window {
    Kakao: any;
  }
}

const Join: React.FC = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (
      !name ||
      !password ||
      !confirmPassword ||
      !phoneNumber ||
      !email ||
      !address
    ) {
      setError("모든 필드를 입력해주세요");
      return;
    }

    if (password !== confirmPassword) {
      setError("비밀번호가 일치하지 않습니다.");
      return;
    }

    console.log("회원가입 정보:", {
      name,
      password,
      phoneNumber,
      email,
      address,
    });

    setError("");
  };

  const handleKakaoLogin = () => {
    window.Kakao.Auth.login({
      success: function (authObj: any) {
        console.log("카카오 로그인 성공", authObj);
        window.Kakao.API.request({
          url: "/v2/user/me",
          success: function (response: any) {
            console.log("카카오 사용자 정보", response);
            // 사용자 정보로 상태 업데이트 등 추가 로직 작성
          },
          fail: function (error: any) {
            console.error("사용자 정보 요청 실패", error);
          },
        });
      },
      fail: function (error: any) {
        console.error("카카오 로그인 실패", error);
      },
    });
  };

  return (
    <div className="join-container">
      <h2>지금 가입하세요</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">닉네임:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
        <div>
          <label htmlFor="confirmPassword">비밀번호 확인:</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="phoneNumber">전화번호:</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
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
          <label htmlFor="address">사는 곳:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Button type="submit" label="Join" />
      </form>
      <Button onClick={handleKakaoLogin} label="카카오로 로그인" />
    </div>
  );
};

export default Join;
