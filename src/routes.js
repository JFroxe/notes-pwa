import Clientes from "./pages/Clientes";
import Ordenes from "./pages/Ordenes";
import Login from "./pages/Login";

const routes = [
  { path: "/", element: <Login /> },
  { path: "/clientes", element: <Clientes /> },
  { path: "/ordenes", element: <Ordenes /> },
];

export default routes;
