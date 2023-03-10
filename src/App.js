import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import * as ROUTES from "./constants/routes";
import "./App.css";
import NavigationBar from "./components/NavigationBar";
import SignUpForm from "./components/SignUpForm";
// import NavigationBar2 from "./components/NavigationBar2";
import Home from "./pages/Home";
import HowItWorks from "./pages/HowItWorks";
import Profile from "./pages/Profile";
// import PrivateRouteOutlet from "./components/PrivateRoute";
import GeneratorPage from "./pages/GeneratorPage";
import SignInForm from "./components/SignInForm";
import { useAuth } from "./context/AuthContext";

function App() {
  const { isLoading } = useAuth();
  return isLoading ? (
    <h1>Content is loading...</h1>
  ) : (
    <BrowserRouter>
      <div className="App">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/howitworks" element={<HowItWorks />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/signin" element={<SignInForm />} />
          <Route path="/generator" element={<GeneratorPage />} />
          {/* <Route path='{ROUTES.GENERATOR}' element={
          <PrivateRoute>
            <GeneratorPage />
          </PrivateRoute>}/> */}
          {/* <Route path="/generator" element={<PrivateRouteOutlet />}>
            <Route element={<GeneratorPage/>}/>
            </Route> */}
          {/* <Route path="*" element={<p>Path Not Resolved</p>} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
