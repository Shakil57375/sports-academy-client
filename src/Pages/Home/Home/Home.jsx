import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Facilities from "../Facilities/Facilities";
import Instrucotrs from "../Instrucotrs/Instrucotrs";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Sports Academy | Home</title>
      </Helmet>
      <Banner />
      <Instrucotrs></Instrucotrs>
      <Facilities />
    </div>
  );
};

export default Home;
