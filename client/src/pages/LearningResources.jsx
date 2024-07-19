import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const LearningResourcesPage = () => {
  const [topic, setTopic] = useState('');
  const [subtopic, setSubtopic] = useState('');
  const [level, setLevel] = useState('');
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResources([]);

    const response = await fetch('/api/learning-resources/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        topic: topic,
        subtopic: subtopic,
        level: level,
      }),
    });

    const data = await response.json();
    setResources(data.resources);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-semibold text-gray-700">Learning Resources</h1>
        <form className="bg-white p-6 rounded-lg shadow mt-8" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="topic">
              Topic
            </label>
            <input
              type="text"
              id="topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subtopic">
              Subtopic
            </label>
            <input
              type="text"
              id="subtopic"
              value={subtopic}
              onChange={(e) => setSubtopic(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="level">
              Level
            </label>
            <select
              id="level"
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required
            >
              <option value="">Select Level</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
        {loading ? (
          <div className="mt-8 text-center">
            <p>Loading...</p>
          </div>
        ) : (
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-gray-700">Filtered Resources</h2>
            {resources.length > 0 ? (
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {resources.map((resource, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg shadow">
                    <p className="text-gray-600">{resource}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-600">No resources found for the selected criteria.</p>
            )}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default LearningResourcesPage;
