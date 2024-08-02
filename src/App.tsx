import React, { useEffect } from "react";
import Join from "./Join";
import "./App.css";

const App: React.FC = () => {
  useEffect(() => {
    // Replace 'YOUR_KAKAO_APP_KEY' with your actual Kakao app key
    window.Kakao.init("YOUR_KAKAO_APP_KEY");
  }, []);

  return (
    <div className="App">
      <Join />
    </div>
  );
};

export default App;
