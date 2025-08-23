/** @format */

import { Outlet } from "react-router";
import "./App.css";
import MainLayout from "./components/Layout/MainLayout";

function App() {
  return (
    <>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </>
  );
}

export default App;
