
import { createRoutesFromElements, createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Service from './pages/Service';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import RootLayout from './layouts/RootLayout';
import Home from "./pages/Home";
import Error from "./components/Error";



const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        <Route path="*" element={<Error />} />

      </>
    )

  );


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
