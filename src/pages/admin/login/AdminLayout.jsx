import { Outlet, useNavigate } from "react-router-dom";

const AdminLayout = () => {


  

  return (
    <div className="min-h-screen bg-gray-100">

      {/* Top Bar */}
      <div className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-lg font-semibold">Admin Panel</h1>

        
      </div>

      {/* Page Content */}
      <div className="p-4 md:p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
