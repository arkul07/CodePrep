import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Footer from "../components/Footer"

const HomePage = () => {
  const [username, setUsername] = useState('User')
  const [recommendedQuizzes, setRecommendedQuizzes] = useState([])
  const [pastQuizzes, setPastQuizzes] = useState([])
  const [resources, setResources] = useState([])
  const [achievements, setAchievements] = useState([])

  useEffect(() => {
    // Fetch user data, recommended quizzes, past quizzes, resources, and achievements from API
    // setUsername(...);
    // setRecommendedQuizzes(...);
    // setPastQuizzes(...);
    // setResources(...);
    // setAchievements(...);
  }, [])

  return (
    <div className='min-h-screen bg-gray-100'>
      <nav className='bg-white shadow'>
        <div className='container mx-auto px-6 py-3'>
          <div className='flex justify-between items-center'>
            <div className='text-xl font-semibold text-gray-700'>CodePrep</div>
          </div>
        </div>
      </nav>
      <div className='container mx-auto px-6 py-8'>
        <h1 className='text-3xl font-semibold text-gray-700'>
          Welcome, {username}
        </h1>
        <section className='mt-8'>
          <h2 className='text-2xl font-semibold text-gray-700'>
            Recommended Quizzes
          </h2>
          <div className='mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {recommendedQuizzes.map(quiz => (
              <div key={quiz.id} className='bg-white p-4 rounded-lg shadow'>
                <h3 className='text-xl font-semibold text-gray-700'>
                  {quiz.topic}
                </h3>
                <p className='text-gray-600'>Difficulty: {quiz.difficulty}</p>
                <p className='text-gray-600'>{quiz.description}</p>
                <Link
                  to={`/quiz/${quiz.id}`}
                  className='mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded'
                >
                  Start Quiz
                </Link>
              </div>
            ))}
          </div>
        </section>
        <section className='mt-8'>
          <h2 className='text-2xl font-semibold text-gray-700'>
            Your Past Quizzes
          </h2>
          <div className='mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {pastQuizzes.map(quiz => (
              <div key={quiz.id} className='bg-white p-4 rounded-lg shadow'>
                <h3 className='text-xl font-semibold text-gray-700'>
                  {quiz.topic}
                </h3>
                <p className='text-gray-600'>Score: {quiz.score}</p>
                <p className='text-gray-600'>
                  Taken on: {new Date(quiz.date).toLocaleDateString()}
                </p>
                <Link
                  to={`/quiz/${quiz.id}/retake`}
                  className='mt-2 inline-block bg-green-500 text-white px-4 py-2 rounded'
                >
                  Retake Quiz
                </Link>
              </div>
            ))}
          </div>
        </section>
        <section className='mt-8'>
          <h2 className='text-2xl font-semibold text-gray-700'>
            Learning Resources
          </h2>
          <div className='mt-4 underline text-blue'>
            <Link to ='/learningresources'>Go to Learning Resources page</Link>
          </div>
        </section>
        {/* <section className='mt-8'>
          <h2 className='text-2xl font-semibold text-gray-700'>Achievements</h2>
          <div className='mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {achievements.map(achievement => (
              <div
                key={achievement.id}
                className='bg-white p-4 rounded-lg shadow'
              >
                <h3 className='text-xl font-semibold text-gray-700'>
                  {achievement.title}
                </h3>
                <p className='text-gray-600'>{achievement.description}</p>
              </div>
            ))}
          </div>
        </section> */}
      </div>
      <Footer/>
    </div>
  )
}

export default HomePage
