import Tambah from "../components/Tambah";
import Topnav from "../components/Topnav";
import { Outlet } from "react-router-dom";

function Home() {
  return (
    <div className="font-Poppins">
      <Topnav />
      <div className="md:w-3/4 mx-auto border m-16">
        <Tambah />
        <Outlet />
      </div>
    </div>
  );
}

export default Home;
