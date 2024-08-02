import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Join from "./Join";
import Login from "./Login";
import Button from "./Button";

const App = () => {
  useEffect(() => {
    // Replace 'YOUR_KAKAO_APP_KEY' with your actual Kakao app key
    if (window.Kakao) {
      window.Kakao.init("8351d9b48815ea58eea880fabe717a57");
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/join" component={Join} />
          <Route path="/login" component={Login} />
          <Route path="/" exact component={Join} />{" "}
          {/* 기본 경로를 Join으로 설정 */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;
