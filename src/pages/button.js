import { Outlet, Link } from "react-router-dom";

const Ho = () => {
    return <><button><Link to="/home">Home</Link></button>;
    <Outlet/></>
  };
  
  export default Ho;