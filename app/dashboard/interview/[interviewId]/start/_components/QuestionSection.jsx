import { Lightbulb, Volume2 } from 'lucide-react'
import React from 'react'

const QuestionSection = ({ mockInterviewQuestions, activeQuestionIndex }) => {
    const currentQuestion = mockInterviewQuestions[activeQuestionIndex]?.["question"]

    const textToSpeach = (text) => {
        if ('speechSynthesis' in window) {
            const speech = new SpeechSynthesisUtterance(text);
            window.speechSynthesis.speak(speech);
        } else {
            console.warn(`Sorry your Browser Does not support Text To Speach!!!`);
        }
    }

    return (
        <div className='p-5'>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {mockInterviewQuestions && mockInterviewQuestions.map((question, index) => (
                    <h2 key={index}
                        className={`p-2 bg-blue-200 rounded-full text-xs md:text-sm text-center cursor-pointer ${activeQuestionIndex === index && "bg-blue-500 text-white"}`}>
                        Question {index + 1}
                    </h2>
                ))}
            </div>
            <h2 className='my-5 text-sm md:text-lg'>{currentQuestion}</h2>
            <Volume2 className='cursor-pointer' onClick={() => textToSpeach(currentQuestion)} />

            <div className='border rounded-lg p-5 bg-blue-100 mt-20'>
                <h2 className='flex gap-5 items-center text-blue-500'>
                    <Lightbulb />
                    <strong>Note:</strong>
                </h2>
                <p className='mt-3 text-blue-400'>
                    Enable Vidio Web Cam and Microphone to start your AI Generated Mock Interview,it contains {process.env.NEXT_PUBLIC_NO_OF_INTERVIEW_QUESTION} questions.
                </p>
            </div>
        </div>
    )
}

export default QuestionSection