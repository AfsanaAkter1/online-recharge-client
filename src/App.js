import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Support from "./Components/Support/Support";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import AuthProvider from "./Components/Contexts/AuthProvider";

import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

import Dashboard from "./Components/Dashboard/Dashboard/Dashboard";
import Offers from "./Components/Home/Offers/Offers";
import Navbar from "./Components/Shared/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/support" element={<Support />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* <Route
              path="/:id"
              element={
                <PrivateRoute>
                  <>
                    <Navbar />
                    <Offers />
                  </>
                </PrivateRoute>
              }
            /> */}
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
