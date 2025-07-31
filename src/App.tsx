import React from "react";
import { useFormik } from "formik";

type Card = {
  title: string;
  description: string;
};

const App: React.FC = () => {
  const cards: Card[] = [
    {
      title: "My Card",
      description: "Here only I can Click.",
    },
    {
      title: "Your Card",
      description: "Here you can click but I can always cick hehe.",
    },
    {
      title: "Our Card",
      description: "You can click here once but again I will cick it.",
    },
     {
      title: "No Card",
      description: "No Card is here guys.",
    },
  ];
const buttonColors = [
  'bg-fuchsia-800 hover:bg-fuchsia-600',
  'bg-blue-800 hover:bg-blue-600',
  'bg-green-800 hover:bg-green-600',
  'bg-red-800 hover:bg-red-600',
];

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

return (
  <div className="p-0 min-h-screen  font-sans">
 
<h1 className="text-center text-4xl text-red-800 mb-8 font-bold font-poppins">
  My Tailwind Cards
</h1>



    {/* Grid layout: Form on left, Cards on right */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
      {/* Form Section */}
      <div className="md:col-span-0">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
            Contact Form
          </h2>
          <form onSubmit={formik.handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.name}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                onChange={formik.handleChange}
                value={formik.values.message}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* Cards Section */}
      <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative bg-zinc-900 text-white rounded-xl p-0 flex flex-col h-full transform transition-transform duration-300 hover:-translate-y-1 shadow-xl shadow-blue-500/30 hover:shadow-blue-500/60"
          >
            <div className="flex flex-col justify-between h-full text-center p-4">
              <div>
                <h2 className="text-xl font-bold mb-2 text-gray-200">
                  {card.title}
                </h2>
                <p className="text-gray-400 text-sm mb-4">
                  {card.description}
                </p>
              </div>
              <button
              className={`mt-auto ${buttonColors[index % buttonColors.length]} text-white py-2 px-4 rounded-md text-sm `}
              >
                Click This
                </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

};

export default App;
