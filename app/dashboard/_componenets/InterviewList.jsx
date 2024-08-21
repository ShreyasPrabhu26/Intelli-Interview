"use client"
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { desc, eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react'
import InterviewItemCard from './InterviewItemCard';

const InterviewList = () => {

    const { user } = useUser();
    const [interviewList, setInterviewList] = useState([]);

    const getInterviewList = async () => {
        const interviewList = await db.select()
            .from(MockInterview)
            .where(eq(MockInterview.createdBy, user?.primaryEmailAddress?.emailAddress))
            .orderBy(desc(MockInterview.id))
        setInterviewList(interviewList);
    }

    useEffect(() => {
        user && getInterviewList();
    }, [user])

    return (
        <div>
            <h1 className='font-medium text-xl'>
                Previous Mock Interview
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {interviewList && interviewList.map((interviewDetail, index) => (
                    <div key={index} className='bg-gray-100 mb-3'>
                        <InterviewItemCard interviewDetail={interviewDetail} />
                    </div>
                ))}
            </div>
        </div >
    )
}

export default InterviewList