import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar";
import AnimatedRoutes from "../components/AnimatedRoutes";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AnimatedRoutes />
    </BrowserRouter>
  );
};
export default AppRouter;
