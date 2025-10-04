import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router";
import MainLayout from "../layouts/MainLayout";

import About from "@/pages/About";
import Contact from "@/pages/Contact";
import Menu from "@/pages/Menu";
import Home from "@/pages/Home";
import SignUp from "@/pages/SignUp";
import SignIn from "@/pages/SignIn";
import Cart from "@/pages/Cart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/cart" element={<Cart />} />

    </Route>
  )
);

export default router;
