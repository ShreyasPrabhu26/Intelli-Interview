"use client"
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db'
import { MockInterview } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import { Lightbulb, WebcamIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'

const Interview = ({ params }) => {
    const mockId = params.interviewId
    const [interviewData, setInterviewData] = useState("");
    const [isWebCamEnabled, setIsWebCamEnabled] = useState(false)

    const getInterviewDetails = async () => {
        try {
            const interviewDetails = await db.select().from(MockInterview)
                .where(eq(MockInterview.mockId, mockId))


            if (!interviewDetails) {
                setInterviewData(null)
            } else {
                setInterviewData(interviewDetails[0])
            }

        } catch (err) {
            console.warn(err);
        }
    }

    useEffect(() => {
        getInterviewDetails()
    }, [])

    return (
        <div className='my-10'>
            <h2 className='font-bold text-2xl'>Let's Get Started</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-5 rounded-lg content-start">
                {/* LEFT SIDE */}
                <div className='flex flex-col gap-5 border p-5'>
                    <div className="flex flex-col rounded-lg gap-5">
                        <span><strong>Job Role/Job Position:</strong>{interviewData?.jobPosition?.toUpperCase()}</span>
                        <span><strong>Job Description:</strong>{interviewData?.jobDescription}</span>
                        <span><strong>Job Role/Job Position:</strong>{interviewData?.jobExperience}</span>
                    </div>
                    <div className='p-5 border rounded-lg border-yellow-300 bg-yellow-100'>
                        <h2 className='flex gap-2 items-center text-yellow-500'>
                            <Lightbulb /><strong>Information</strong>
                        </h2>
                        <p className='mt-3 text-yellow-500'>
                            Enable Vidio Web Cam and Microphone to start your AI Generated Mock Interview,it contains {process.env.NEXT_PUBLIC_NO_OF_INTERVIEW_QUESTION} questions.
                        </p>
                    </div>
                </div>
                {/* RIGHT SIDE */}
                {isWebCamEnabled ?
                    <Webcam className="rounded-2xl h-96 w-full"
                        mirrored={true}
                        onUserMedia={() => setIsWebCamEnabled(true)}
                        onUserMediaError={() => setInterviewData(false)} />
                    :
                    <div className='border'>
                        <WebcamIcon className='h-64 w-full my-7 p-20 rounded-lg' />
                        <Button className="w-full bg-blue-400" onClick={() => setIsWebCamEnabled(true)}>Enable Web Cam and Microphone</Button>
                    </div>
                }
            </div>
            <div>
                <div className="flex justify-end items-end">
                    <Button>Start Interview</Button>
                </div>
            </div>
        </div>
    )
}

export default Interview