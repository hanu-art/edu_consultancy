import { useNavigate } from "react-router-dom";

const technologies = [
  {
    category: "Programming Languages",
    items: ["Python","Java","C","C++","JavaScript","TypeScript"]
  },
  {
    category: "Frontend Development",
    items: ["HTML5","CSS3","JavaScript","React.js","Next.js","Tailwind CSS"]
  },
  {
    category: "Backend Development",
    items: ["Node.js","Express.js",".NET","Django","Spring Boot"]
  },
  {
    category: "Full Stack Technologies",
    items: ["MERN Stack","MEAN Stack","REST APIs","JWT Authentication"]
  },
  {
    category: "Database Systems",
    items: ["MySQL","MongoDB","PostgreSQL","Firebase"]
  },
  {
    category: "Cloud Computing",
    items: ["AWS","Microsoft Azure","Google Cloud"]
  },
  {
    category: "DevOps Technologies",
    items: ["Linux","Docker","Kubernetes","Jenkins","CI/CD"]
  },
  {
    category: "Data Science & Analytics",
    items: ["Data Analytics","Data Visualization","Power BI","Pandas","NumPy"]
  },
  {
    category: "Artificial Intelligence",
    items: ["Machine Learning","Deep Learning","Natural Language Processing","Computer Vision"]
  },
  {
    category: "Cyber Security",
    items: ["Ethical Hacking","Network Security","Penetration Testing","OWASP Security"]
  },
  {
    category: "Mobile App Development",
    items: ["Flutter Development","React Native","Android Development","iOS Development"]
  },
  {
    category: "Version Control & Tools",
    items: ["Git","GitHub","Agile Workflow","Project Collaboration"]
  }
];

const InternshipTechStack = () => {

  const navigate = useNavigate();

  return (
    <section className="py-20 bg-[#0056D2]">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="max-w-3xl">
          <h2 className="text-3xl font-semibold text-white">
            Trending IT Technologies
          </h2>

          <div className="w-16 h-[2px] bg-white mt-5"></div>

          <p className="mt-6 text-blue-100 leading-relaxed">
            Explore the most in-demand technologies shaping the future of
            software development, artificial intelligence, data science,
            cloud computing, and secure digital infrastructure.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {technologies.map((tech, index) => (
            <div
              key={index}
              onClick={() => navigate("/contact")}
              className="bg-white border border-gray-200 p-10 rounded-lg cursor-pointer
              transition-all duration-300
              hover:-translate-y-2 hover:shadow-2xl hover:border-[#0056D2]"
            >

              {/* Accent Line */}
              <div className="w-12 h-[3px] bg-[#0056D2] mb-6"></div>

              {/* Category */}
              <h3 className="text-lg font-semibold text-gray-700">
                {tech.category}
              </h3>

              {/* List */}
              <div className="mt-6 space-y-3">
                {tech.items.map((item, i) => (
                  <p key={i} className="text-sm text-gray-500">
                    {item}
                  </p>
                ))}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default InternshipTechStack;