"use client"
import { db } from '@/utils/db'
import { UserAnswer } from '@/utils/schema'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronsUpDownIcon, LightbulbIcon } from 'lucide-react'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const FeedBack = ({ params }) => {

    const [feedBackList, setFeedBackList] = useState([]);
    const router = useRouter();

    const getFeedBack = async () => {
        const interviewDetails = await db.select()
            .from(UserAnswer)
            .where(eq(UserAnswer.mockIdRef, params?.interviewId))
            .orderBy(UserAnswer.id)
        setFeedBackList(interviewDetails);
    }

    useEffect(() => {
        getFeedBack()
    }, [])

    return (
        <>
            <div className="flex flex-col gap-2 mb-8">
                <div className='text-3xl font-bold text-green-500'>
                    Congratulations!
                </div>
                <h2 className='text-2xl font-bold'>
                    Here is your interview Feedback
                </h2>
                <span className='text-2xl font-bold'>
                    Your Overall Ratings: 5/10
                </span>
                <p className='text-xl text-gray-500'>
                    Find below interview question with correct answer.
                </p>
            </div>

            {feedBackList && feedBackList.map((feedback, index) => (

                <Collapsible key={index}>
                    <CollapsibleTrigger
                        className='p-2 bg-blue-100 rounded-lg my-2 text-left flex justify-between'>
                        {feedback.question} <ChevronsUpDownIcon className='h-5 w-5' />
                    </CollapsibleTrigger>

                    <CollapsibleContent>
                        <div className='flex flex-col gap-2 text-lg'>
                            <section className='text-blue-400 p-2 border shadow-md rounded-lg'>
                                <strong>Rating:</strong>
                                <span className="text-blue-700">{feedback?.rating}</span>
                            </section>
                            <section className='text-blue-400 p-2 border rounded-lg tracking-wide	'>
                                <strong className='text-yellow-500 font-bold'>Your Answer:</strong>
                                <span className="text-yellow-500">{feedback?.userAnswer}</span>
                            </section>
                            <section className='p-2 border rounded-lg bg-green-200 '>
                                <strong className='font-bold'>Correct Answer:</strong>
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                    {feedback?.correctAnswer}
                                </ReactMarkdown>
                            </section>
                            <section className='p-2 border rounded-lg bg-blue-200 inline-block'>
                                <strong className='font-bold flex gap-2 rounded'>
                                    <LightbulbIcon />
                                    <span className='inline-block'>Feedback:</span>
                                </strong>
                                <span className=''>
                                    {feedback?.feedback}
                                </span>
                            </section>
                        </div>
                    </CollapsibleContent>
                </Collapsible>
            ))}
            <Button onClick={() => router.replace("/dashboard")}>
                Go Home
            </Button>
        </>
    )
}

export default FeedBack