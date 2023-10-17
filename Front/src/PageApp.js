import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import FilledCircle from "./components/Page";
import { useEffect } from "react";




function App() {
  return (
    <div>
      <FilledCircle fill={0.5} />
    </div>
  );
}

  
export default App;
