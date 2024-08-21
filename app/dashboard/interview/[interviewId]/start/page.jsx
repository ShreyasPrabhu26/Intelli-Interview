"use client"
import QuestionSection from '@/app/dashboard/interview/[interviewId]/start/_components/QuestionSection'
import { db } from '@/utils/db'
import { MockInterview } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import RecordAnswerSection from './_components/RecordAnswerSection'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const StartInterview = ({ params }) => {
    const mockId = params.interviewId
    const [interviewData, setInterviewData] = useState("");
    const [mockInterviewQuestion, setMockInterviewQuestion] = useState([]);
    const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);

    const getInterviewDetails = async () => {
        try {
            const interviewDetails = await db.select().from(MockInterview)
                .where(eq(MockInterview.mockId, mockId))

            if (!interviewDetails) {
                setInterviewData(null)
            } else {
                setInterviewData(interviewDetails[0])
                const jsonMockResponse = JSON.parse(interviewDetails[0].jsonMockResp);
                setMockInterviewQuestion(jsonMockResponse["questions"]);
            }

        } catch (err) {
            console.warn(err);
        }
    }

    useEffect(() => {
        getInterviewDetails()
    }, [])
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Questiosn */}
                <QuestionSection
                    mockInterviewQuestions={mockInterviewQuestion}
                    activeQuestionIndex={activeQuestionIndex}
                />
                {/* Video/Rec */}
                <div className='flex flex-col gap-5 items-center justify-center border rounded-lg'>
                    <RecordAnswerSection
                        interviewData={interviewData}
                        mockInterviewQuestions={mockInterviewQuestion}
                        activeQuestionIndex={activeQuestionIndex}
                    />
                    <div className="flex justify-evenly w-full">
                        {activeQuestionIndex > 0 &&
                            <Button onClick={() => setActiveQuestionIndex(activeQuestionIndex - 1)}>
                                Previous Question
                            </Button>}
                        {activeQuestionIndex !== (mockInterviewQuestion?.length - 1) &&
                            <Button onClick={() => setActiveQuestionIndex(activeQuestionIndex + 1)}>
                                Next Question
                            </Button>
                        }
                        {activeQuestionIndex === (mockInterviewQuestion?.length - 1) &&
                            <Link href={`/dashboard/interview/${interviewData?.mockId}/feedback`}>
                                <Button className="bg-red-500 hover:bg-red-700">End Question</Button>
                            </Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StartInterview