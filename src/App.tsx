import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Details from "./views/Details";
import Home from "./views/Home";
import Cart from "./views/Cart";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/index.html",
      element: <Home />,
    },
    {
      path: "/details.html/:id", // Revisar esta ruta
      element: < Details />,
    },
    {
      path: "/cart.html",
      element: <Cart />,
    }
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

// 2. Importa createBrowserRouter y RouterProvider de react-router-dom en el componente App y asegurate de tener importados los componentes de vista Home, Cart y Product.