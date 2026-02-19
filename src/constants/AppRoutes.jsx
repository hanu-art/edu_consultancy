import {Routes , Route} from "react-router-dom";
import Home from "../pages/Home/Home.jsx";
import About from "../pages/About/About.jsx";
import Contact from "../pages/Contact/Contact.jsx";
import College from "../pages/Servicess/College.jsx";
import ItInstitute from "../pages/Servicess/ItInstitute.jsx";
import JobPlacement from "../pages/Servicess/JobPlacement.jsx";
import AdminLogin from "../pages/admin/login/AdminLogin.jsx";

import AdminDashboard from "../pages/admin/login/AdminDashboard.jsx";
import AdminLayout from "../pages/admin/login/AdminLayout.jsx";
import PrivateRoute from "./ PrivateRoute.jsx";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/services/college" element={<College />} />
      <Route path="/services/it-institute" element={<ItInstitute/>} />
      <Route path="/services/job-placement" element={<JobPlacement />} />


          {/* 🔐 Admin Routes */}
      <Route path="/admin/login" element={<AdminLogin />} />


          <Route path="/admin" element={<PrivateRoute />}>
        <Route element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
        </Route>
      </Route>


    </Routes>
  );
};

export default AppRoutes
