import SideMenu from "./components/SideMenu";
import '../index.css';
import { BrowserRouter } from "react-router-dom";

export default function Root(props) {
  return (<nav>
     <BrowserRouter>
        <SideMenu/>
     </BrowserRouter>
  </nav>);
}
