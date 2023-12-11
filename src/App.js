import Header from "./pages/header/header";
import Home from "./pages/home/home";
import Landding from "./pages/landing/landding";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Otp from "./pages/login_signup/otp/otp";
import Login from "./pages/login_signup/login/login";
import Idverification from "./pages/myapplication/idverification/idverify";
import ProfileDetail from "./pages/profile/profile";
import PieChartWithCenterLabel from "./pages/profile/pie";
import BarChart from "./pages/profile/bar";
import Income from "./pages/myapplication/income/income";
import Loan from "./pages/myapplication/loan/loan";
import Agreement from "./pages/myapplication/agree/agree";
import Close from "./pages/profile/close";
import Success from "./pages/myapplication/success/success";

function App() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleImageLoad = () => {
    // This function will be called when the image is successfully loaded
    setIsImageLoaded(true);
  };

  return (
    <div className="App">
      {!isImageLoaded && <p>Loading...</p>}
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/Money-protect"} element={<Home />} />
          <Route path={"/otp"} element={<Otp />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/idverification"} element={<Idverification />} />
          <Route path={"/agreement"} element={<Agreement />} />
          <Route path={"/Income"} element={<Income />} />
          <Route path={"/loan"} element={<Loan />} />
          <Route path={"/profiledetail"} element={<ProfileDetail />} />
          <Route path={"/pie"} element={<PieChartWithCenterLabel />} />
          <Route path={"/bar"} element={<BarChart />} />
          <Route path={"/close"} element={<Close />} />
          <Route path={"/successfull"} element={<Success />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
