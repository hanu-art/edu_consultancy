import { useNavigate } from "react-router-dom";

const courseCategories = [
  {
    title: "Engineering & Technology",
    courses: [
      "B.E / B.Tech",
      "B.Tech CSE",
      "B.Tech IT",
      "B.Tech AI & Data Science",
      "B.Tech Artificial Intelligence & ML",
      "B.Tech Mechanical Engineering",
      "B.Tech ECE",
      "B.Tech LEET Programs",
      "M.Tech Programs",
      "Integrated M.Tech"
    ]
  },
  {
    title: "Management & Business",
    courses: [
      "MBA / PGDM",
      "BBA",
      "BBA LLB",
      "BBA Hospital & Health System Management",
      "BBA Service Industry Management",
      "B.Com (Hons)",
      "M.Com"
    ]
  },
  {
    title: "Computer & IT",
    courses: [
      "BCA",
      "MCA",
      "B.Sc Artificial Intelligence",
      "B.Sc Cyber Security",
      "B.Sc Data Analytics",
      "B.Sc Multimedia",
      "B.Sc Graphics & Web Designing"
    ]
  },
  {
    title: "Medical & Health Sciences",
    courses: [
      "B.Sc Nursing",
      "MSc Nursing",
      "GNM",
      "BAMS (Ayurveda)",
      "BHMS (Homeopathy)",
      "Bachelor of Physiotherapy",
      "Bachelor of Public Health",
      "MS General Surgery",
      "MD Anatomy"
    ]
  },
  {
    title: "Pharmacy",
    courses: [
      "B.Pharmacy",
      "B.Pharmacy LEET",
      "D.Pharmacy",
      "M.Pharm Pharmaceutics",
      "M.Pharm Pharmacology",
      "Pharm.D"
    ]
  },
  {
    title: "Arts & Humanities",
    courses: [
      "BA",
      "BA English",
      "BA History",
      "MA English",
      "MA Sanskrit",
      "MA Music",
      "BJMC",
      "BA Media & Communication"
    ]
  },
  {
    title: "Science Programs",
    courses: [
      "B.Sc Chemistry",
      "M.Sc Chemistry",
      "B.Sc Biotechnology",
      "M.Sc Biotechnology",
      "B.Sc Microbiology"
    ]
  },
  {
    title: "Hospitality & Tourism",
    courses: [
      "BHM",
      "BHMCT",
      "Masters in HMCT",
      "B.Sc Hospitality & Hotel Administration",
      "Diploma in Food Production",
      "Diploma in Bakery"
    ]
  },
  {
    title: "Vocational Programs",
    courses: [
      "B.Voc Fashion Designing",
      "B.Voc Fashion Technology",
      "B.Voc Food Processing Technology"
    ]
  }
];

const CoursesSection = () => {

  const navigate = useNavigate();

  return (
    <section className="py-20 bg-[#0056D2]">

      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">

          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Trending Technology & Courses in Colleges & Universities
          </h2>

          <div className="w-20 h-[3px] bg-white mx-auto mt-4"></div>

          <p className="mt-6 text-blue-100 leading-relaxed">
            EduSkillPlace provides admission guidance across a wide range of
            academic programs including engineering, management, medical
            sciences, arts, pharmacy, hospitality, and emerging technology fields.
          </p>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-14">

          {courseCategories.map((category, index) => (
            <div
              key={index}
              onClick={() => navigate("/contact")}
              className="bg-white rounded-lg p-6 shadow-sm cursor-pointer
              hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >

              <h3 className="text-lg font-semibold text-gray-700 border-l-4 border-[#007bff] pl-3">
                {category.title}
              </h3>

              <ul className="mt-5 space-y-2 text-sm text-gray-600">

                {category.courses.map((course, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#007bff]">•</span>
                    {course}
                  </li>
                ))}

              </ul>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
};

export default CoursesSection;