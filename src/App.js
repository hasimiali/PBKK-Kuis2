import React from "react";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen";
import AboutUs from "./Screens/AboutUs";
import NotFound from "./Screens/NotFound";
import ContactUs from "./Screens/ContactUs";
import Login from "./Screens/Login";
import Register from "./Screens/Register";
import MoviePage from "./Screens/Movies";
import SingleMovie from "./Screens/SingleMovie";
import WatchPage from "./Screens/WatchPage";
import Profile from "./Screens/Dashboard/Profile";
import Aos from "aos";
import Password from "./Screens/Dashboard/Password";
import FavoriteMovies from "./Screens/Dashboard/FavoriteMovies";
import MovieList from "./Screens/Dashboard/Admin/MovieList";
import Dashboard from "./Screens/Dashboard/Admin/Dashboard";
import Categories from "./Screens/Dashboard/Admin/Categories";
import Users from "./Screens/Dashboard/Admin/Users";
import AddMovie from "./Screens/Dashboard/Admin/AddMovie";
import AgeRate from "./Screens/Dashboard/Admin/AgeRate";
import Casts from "./Screens/Dashboard/Admin/Casts";
import MovieStatus from "./Screens/Dashboard/Admin/MovieStatus";
import ScrollOnTop from "./ScrollOnTop";

const App = () => {
  Aos.init();
  return (
    <ScrollOnTop>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/movies" element={<MoviePage />} />
        <Route path="/movie/:id" element={<SingleMovie />} />
        <Route path="/watch/:id/" element={<WatchPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/password" element={<Password />} />
        <Route path="/favorites" element={<FavoriteMovies />} />
        <Route path="/movieslist" element={<MovieList />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/users" element={<Users />} />
        <Route path="/addmovie" element={<AddMovie />} />
        <Route path="/agerate" element={<AgeRate />} />
        <Route path="/Casts" element={<Casts />} />
        <Route path="/moviestatus" element={<MovieStatus />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </ScrollOnTop>
  );
};

export default App;
