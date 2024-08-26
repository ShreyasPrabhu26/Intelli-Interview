"use client"
import QuestionSection from '@/app/dashboard/interview/[interviewId]/start/_components/QuestionSection'
import { db } from '@/utils/db'
import { MockInterview } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import RecordAnswerSection from '@/app/dashboard/interview/[interviewId]/start/_components/RecordAnswerSection'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const StartInterview = ({ params }) => {
    const mockId = params.interviewId;
    const [interviewData, setInterviewData] = useState(null);
    const [mockInterviewQuestion, setMockInterviewQuestion] = useState([]);
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
    const [isRecording, setIsRecording] = useState(false);

    const getInterviewDetails = async () => {
        try {
            const interviewDetails = await db.select().from(MockInterview)
                .where(eq(MockInterview.mockId, mockId));

            if (!interviewDetails.length) {
                setInterviewData(null);
            } else {
                setInterviewData(interviewDetails[0]);
                const jsonMockResponse = JSON.parse(interviewDetails[0].jsonMockResp);
                setMockInterviewQuestion(jsonMockResponse["questions"]);
            }
        } catch (err) {
            console.warn(err);
        }
    };

    useEffect(() => {
        getInterviewDetails();
    }, []);

    const handleNextQuestion = () => {
        if (!isRecording && activeQuestionIndex < mockInterviewQuestion.length - 1) {
            setActiveQuestionIndex(activeQuestionIndex + 1);
        }
    };

    if (!interviewData) {
        return <div>Loading...</div>;
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 ">
            {/* Questions Section */}
            <div className="order-1">
                <QuestionSection
                    mockInterviewQuestions={mockInterviewQuestion}
                    activeQuestionIndex={activeQuestionIndex}
                />
            </div>
            {/* Video/Recording Section */}
            <div className="flex flex-col gap-5 items-center justify-center border rounded-lg p-4 order-2">
                <RecordAnswerSection
                    interviewData={interviewData}
                    mockInterviewQuestions={mockInterviewQuestion}
                    activeQuestionIndex={activeQuestionIndex}
                    setIsRecording={setIsRecording}
                />
                <div className="flex justify-evenly w-full">
                    {
                        <Button
                            disabled={activeQuestionIndex === 0}
                            onClick={() => setActiveQuestionIndex(activeQuestionIndex - 1)}
                            className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600"
                        >
                            Previous Question
                        </Button>
                    }
                    {activeQuestionIndex !== (mockInterviewQuestion?.length - 1) && (
                        <Button
                            onClick={handleNextQuestion}
                            disabled={isRecording}
                            className="bg-blue-500 dark:bg-blue-700 text-white hover:bg-blue-600 dark:hover:bg-blue-800"
                        >
                            Next Question
                        </Button>
                    )}
                    {activeQuestionIndex === (mockInterviewQuestion?.length - 1) && (
                        <Link href={`/dashboard/interview/${interviewData?.mockId}/feedback`}>
                            <Button
                                className="bg-red-500 dark:bg-red-700 text-white hover:bg-red-600 dark:hover:bg-red-800"
                                disabled={isRecording}
                            >
                                End Interview
                            </Button>
                        </Link>
                    )}

                </div>
            </div>
        </div>
    );
};

export default StartInterview;