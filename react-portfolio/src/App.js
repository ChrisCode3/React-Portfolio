import { Outlet } from "react-router-dom";
import Navigation from "./components/navigation";


function App() {
  return (
    <div className="container">
      <Navigation />
      <Outlet />

   
    </div>
  );
}

export default App;



