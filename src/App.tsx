import Home from "./views/Home";
import Details from "./views/Details";
import Cart from "./views/Cart";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "./views/NotFound";
import OnSale from "./views/OnSale";

function App() {
  const browserRouter = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/details/:id",
      element: < Details />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
    {
      path: "/*",
      element: <NotFound />,
    },
    {
      path: "/ofertas",
      element: <OnSale />,
    }
  ]);

  return (
    <>
      <RouterProvider router={browserRouter} />
    </>
  );
}

export default App;