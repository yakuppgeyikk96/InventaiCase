import Navbar from "./components/shared/Navbar";
import Footer from "./components/shared/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="container-lg py-4 px-4 px-lg-0">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
