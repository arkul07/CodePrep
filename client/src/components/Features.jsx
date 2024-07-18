import React from 'react';

const Features = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto text-center">
        <h3 className="text-2xl font-bold mb-8">Features</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-4 shadow-lg rounded bg-gray-100">
            <h4 className="text-xl font-bold mb-2">Adaptive Learning</h4>
            <p>Quizzes that adjust to your skill level to provide the best learning experience.</p>
          </div>
          <div className="p-4 shadow-lg rounded bg-gray-100">
            <h4 className="text-xl font-bold mb-2">Comprehensive Topics</h4>
            <p>Covering software development, machine learning, and AI topics.</p>
          </div>
          <div className="p-4 shadow-lg rounded bg-gray-100">
            <h4 className="text-xl font-bold mb-2">Detailed Feedback</h4>
            <p>Get instant feedback and explanations to improve your knowledge.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
