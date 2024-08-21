"use client"
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db'
import { chatSession } from '@/utils/GeminiAiModel'
import { UserAnswer } from '@/utils/schema'
import { useUser } from '@clerk/nextjs'
import { Mic, WebcamIcon } from 'lucide-react'
import moment from 'moment/moment'
import React, { useEffect, useState } from 'react'
import useSpeechToText from 'react-hook-speech-to-text'
import Webcam from 'react-webcam'
import { toast } from 'sonner'

const RecordAnswerSection = ({ interviewData, mockInterviewQuestions, activeQuestionIndex }) => {
    const {
        error,
        interimResult,
        isRecording,
        results,
        startSpeechToText,
        stopSpeechToText,
    } = useSpeechToText({
        continuous: true,
        useLegacyResults: false
    });


    const [isWebCamEnabled, setIsWebCamEnabled] = useState(false);
    const [userAnswer, setUserAnswer] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const { user } = useUser();

    const currentQuestion = mockInterviewQuestions[activeQuestionIndex]?.["question"]
    const correctAnswer = mockInterviewQuestions[activeQuestionIndex]?.["answer"]

    if (error) {
        return <p>Web Speech API is not available in this browser 🤷‍ Please switch to Chrome Browser for best experience</p>
    }

    const startStopRecording = async () => {
        if (isRecording) {
            stopSpeechToText();
        } else {
            startSpeechToText();
        }
    }

    const updateUserAnswerInDB = async () => {
        setIsLoading(true);

        const feedBackPromt = `"Based on the following question and user answer, provide a rating (out of 10) and detailed feedback. Highlight areas of improvement if necessary in 3-5 lines, in JSON format with 'rating' and 'feedback' fields. Note: Do not mention or critique grammar, spelling, or typos. Focus only on understanding the user's intent and the accuracy of their response. Assume any misspellings or grammar issues are due to transcription errors.
        Question: ${currentQuestion}
        User Answer: ${userAnswer}"`

        const resultFromAi = await chatSession.sendMessage(feedBackPromt);
        const mockResponse = resultFromAi.response.text().replace(/```json|```/g, '');
        const mockJsonResponse = JSON.parse(mockResponse);

        const responseFromORM = await db.insert(UserAnswer)
            .values({
                mockIdRef: interviewData?.mockId,
                question: currentQuestion,
                correctAnswer: correctAnswer,
                feedback: mockJsonResponse?.feedback,
                rating: mockJsonResponse?.rating,
                userEmail: user.primaryEmailAddress?.emailAddress,
                userAnswer: userAnswer,
                createdAt: moment().format("DD-MM-yyyy")
            })

        if (responseFromORM) {
            toast("Your Answer has been recorded Sucessfully!")
        }
        setIsLoading(false);
        setUserAnswer("");
    }

    useEffect(() => {
        results.map((result) => (
            setUserAnswer((prevAns) => prevAns + result.transcript)
        ))
    }, [results])

    useEffect(() => {
        if (!isRecording && userAnswer.length > 10) {
            updateUserAnswerInDB();
        }
    }, [userAnswer])

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-col justify-center mt-8 items-center bg-blue-100 rounded-lg p-5'>
                <WebcamIcon className='h-64 w-full my-7 p-20 rounded-lg absolute' />
                <Webcam className="rounded-2xl h-96 w-full z-10"
                    mirrored={true}
                    onUserMedia={() => setIsWebCamEnabled(true)}
                />
            </div>
            <Button
                className="mt-3 bg-blue-500"
                disabled={isLoading}
                onClick={startStopRecording}>
                {
                    isRecording ?
                        <h2 className='flex justify-center items-center text-red-200'>
                            <Mic /> Stop Recording...
                        </h2>
                        :
                        "Record Answer"}
            </Button>
        </div>
    )
}

export default RecordAnswerSection