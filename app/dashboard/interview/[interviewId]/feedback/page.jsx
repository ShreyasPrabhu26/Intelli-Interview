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
import { ChevronsUpDownIcon, LightbulbIcon, LoaderCircle } from 'lucide-react'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'

const FeedBack = ({ params }) => {

    const [feedBackList, setFeedBackList] = useState([]);
    const [overallRating, setOverallRating] = useState(0);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    const getFeedBack = async () => {
        setLoading(true);
        const interviewDetails = await db.select()
            .from(UserAnswer)
            .where(eq(UserAnswer.mockIdRef, params?.interviewId))
            .orderBy(UserAnswer.id)
        setFeedBackList(interviewDetails);
        setLoading(false);
    }

    useEffect(() => {
        getFeedBack();
    }, []);

    useEffect(() => {
        if (feedBackList.length > 0) {
            const totalRating = feedBackList.reduce((acc, feedback) => {
                const rating = parseFloat(feedback.rating);
                return !isNaN(rating) ? acc + rating : acc;
            }, 0);
            setOverallRating(totalRating);
        }
    }, [feedBackList]);

    return (
        <>
            {loading ?
                <LoaderCircle className='animate-spin' />
                :
                <div className="flex flex-col gap-2 mb-8">
                    {feedBackList?.length === 0 ?
                        <span className='text-2xl text-gray-500 font-bold'>
                            No Interview Data Found!
                        </span>
                        :
                        <div className=''>
                            <div className='text-3xl font-bold text-green-500'>
                                Congratulations!
                            </div>
                            <h2 className='text-2xl font-bold'>
                                Here is your interview Feedback
                            </h2>
                            <span className='text-2xl font-bold'>
                                Your Overall Rating: {overallRating} / 10
                            </span>
                            <p className='text-xl text-gray-500'>
                                Find below the interview questions with correct answers.
                            </p>
                        </div>
                    }
                </div>
            }

            {feedBackList && feedBackList.map((feedback, index) => (
                <Collapsible key={index}>
                    <CollapsibleTrigger
                        className='p-2 bg-blue-100 rounded-lg my-2 text-left flex justify-between dark:text-black'>
                        {feedback.question} <ChevronsUpDownIcon className='h-5 w-5' />
                    </CollapsibleTrigger>

                    <CollapsibleContent>
                        <div className='flex flex-col gap-2 text-lg dark:text-black'>
                            <section className='text-blue-400 p-2 border shadow-md rounded-lg'>
                                <strong>Rating:</strong>
                                <span className="text-blue-700">{feedback?.rating}</span>
                            </section>
                            <section className='text-blue-400 p-2 border rounded-lg tracking-wide'>
                                <strong className='text-yellow-500 font-bold'>Your Answer:</strong>
                                <span className="text-yellow-500">{feedback?.userAnswer}</span>
                            </section>
                            <section className='p-2 border rounded-lg bg-green-200'>
                                <strong className='font-bold'>Correct Answer:</strong>
                                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                    {feedback?.correctAnswer}
                                </ReactMarkdown>
                            </section>
                            <section className='p-2 border rounded-lg bg-blue-200'>
                                <strong className='font-bold flex gap-2 rounded'>
                                    <LightbulbIcon />
                                    <span className='inline-block'>Feedback:</span>
                                </strong>
                                <span>{feedback?.feedback}</span>
                            </section>
                        </div>
                    </CollapsibleContent>
                </Collapsible>
            ))}
            {loading ? <></> :
                <Button className="dark:text-white" onClick={() => router.replace("/dashboard")}>
                    Go Home
                </Button>
            }
        </>
    )
}

export default FeedBack;
