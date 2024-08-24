"use client"
import { BackgroundGradientWrapper } from '@/components/homepageComponents/BackgroundGradientWrapper'
import { Button } from '@/components/ui/button'
import { db } from '@/utils/db'
import { MockInterview } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import { Lightbulb, LoaderCircle, WebcamIcon } from 'lucide-react'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Webcam from 'react-webcam'

const Interview = ({ params }) => {
    const mockId = params.interviewId
    const [loading, setLoading] = useState(false);
    const [interviewData, setInterviewData] = useState("");
    const [isWebCamEnabled, setIsWebCamEnabled] = useState(false)

    const getInterviewDetails = async () => {
        try {
            setLoading(true);
            const interviewDetails = await db.select().from(MockInterview)
                .where(eq(MockInterview.mockId, mockId))

            if (!interviewDetails) {
                setInterviewData(null)
            } else {
                setInterviewData(interviewDetails[0])
            }
            setLoading(false);

        } catch (err) {
            console.warn(err);
        }
    }

    useEffect(() => {
        getInterviewDetails()
    }, [])

    return (
        <div className='my-10 border rounded-xl p-2 bg-gray-100 dark:bg-gray-300 dark:text-black'>
            <h2 className='font-bold text-2xl ml-3'>Let's Get Started</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 p-3 rounded-lg content-start">
                {/* LEFT SIDE */}
                {loading ? <LoaderCircle className='animate-spin' />
                    :
                    <div className='flex flex-col gap-5 border border-black p-5 rounded-md bg-gray-200'>
                        <div className="flex flex-col rounded-lg gap-5">
                            <span className='border border-black p-3 rounded-lg'>
                                <strong>Job Role/Job Position:</strong>
                                <span className='ml-3'>{interviewData?.jobPosition?.toUpperCase()}</span>
                            </span>
                            <span className='border border-black  p-3 rounded-lg'>
                                <strong>Job Description:</strong>
                                <span className='ml-3'>{interviewData?.jobDescription?.toUpperCase()}</span>
                            </span>
                            <span className='border border-black  p-3 rounded-lg'>
                                <strong>Job Role/Job Position:</strong>
                                <span className='ml-3'>{interviewData?.jobExperience}</span>
                            </span>
                        </div>
                        <div className='p-5 border dark:bg-gray-100 rounded-lg border-yellow-300 bg-yellow-100'>
                            <h2 className='flex gap-2 items-center text-yellow-500'>
                                <Lightbulb /><strong>Information</strong>
                            </h2>
                            <p className='mt-3 text-yellow-500'>
                                Enable Vidio Web Cam and Microphone to start your AI Generated Mock Interview,it contains {process.env.NEXT_PUBLIC_NO_OF_INTERVIEW_QUESTION} questions.
                            </p>
                        </div>
                    </div>
                }
                {/* RIGHT SIDE */}
                {isWebCamEnabled ?
                    <Webcam className="rounded-2xl h-96 w-full border border-black"
                        mirrored={true}
                        onUserMedia={() => setIsWebCamEnabled(true)}
                        onUserMediaError={() => setInterviewData(false)} />
                    :
                    <div className='flex flex-col justify-center items-center border border-black rounded-md'>
                        <WebcamIcon className='h-60 w-full my-7 p-20 rounded-lg' />
                        <Button className=" bg-blue-400 mb-3" onClick={() => setIsWebCamEnabled(true)}>Enable Web Cam and Microphone</Button>
                    </div>
                }
            </div>
            <div>
                <div className="flex justify-center items-end">
                    <Link href={`/dashboard/interview/${mockId}/start`}>
                        <BackgroundGradientWrapper className={"p-2"}>
                            <Button className="dark:text-white rounded-lg text-lg">Start Interview</Button>
                        </BackgroundGradientWrapper>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Interview