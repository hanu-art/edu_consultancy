import { useEffect, useState } from "react";
import { getProfile } from "../../../api/auth/auth.api";
import {
  getAllStudents,
  deleteStudent,
} from "../../../api/students/students.api";

const AdminDashboard = () => {
  const [profile, setProfile] = useState(null);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileRes = await getProfile();
        const studentRes = await getAllStudents();

        setProfile(profileRes.data.data);
        setStudents(studentRes.data.data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteStudent(id);

      // 🔥 UI update without refresh
      setStudents((prev) =>
        prev.filter((student) => student.students_id !== id)
      );
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="p-4 md:p-8">

      {/* Profile Section */}
      <div className="mb-6">
        <h2 className="text-xl md:text-2xl font-semibold">
          Welcome, {profile?.name}
        </h2>
        <p className="text-sm text-gray-600">
          {profile?.email}
        </p>
      </div>

      {/* Students Table */}
      <div className="bg-white shadow overflow-x-auto rounded">

        <table className="w-full text-sm min-w-[700px]">
          <thead className="bg-gray-300">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Description</th>
              <th className="p-3 text-left">Action</th>
            </tr>
          </thead>

          <tbody>
            {students.map((student) => (
              <tr key={student.students_id} className="border-b">
                <td className="p-3">{student.name}</td>
                <td className="p-3">{student.email}</td>

                {/* Description with Read More */}
                <td className="p-3 max-w-xs break-words">
                  {student.description?.length > 80 ? (
                    <>
                      {expandedId === student.students_id
                        ? student.description
                        : student.description.slice(0, 80) + "..."}

                      <button
                        onClick={() =>
                          setExpandedId(
                            expandedId === student.students_id
                              ? null
                              : student.students_id
                          )
                        }
                        className="ml-2 text-blue-500 text-xs font-light"
                      >
                        {expandedId === student.students_id
                          ? "Show Less"
                          : "Read More"}
                      </button>
                    </>
                  ) : (
                    student.description
                  )}
                </td>

                <td className="p-3">
                  <button
                    onClick={() =>
                      handleDelete(student.students_id)
                    }
                    className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1 transition"
                  >
                    Delete
                  </button>
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>
    </div>
  );
};

export default AdminDashboard;
