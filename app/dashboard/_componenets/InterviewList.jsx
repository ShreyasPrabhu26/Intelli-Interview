"use client";
import { db } from '@/utils/db';
import { MockInterview } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { desc, eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';
import { InterviewItemCard3D } from './InterviewItemCard3D';
import { FlipWordsComponent } from './FlipWordsComponent';

const InterviewList = () => {
    const { user } = useUser();
    const [interviewList, setInterviewList] = useState([]);

    const getInterviewList = async () => {
        const interviewList = await db.select()
            .from(MockInterview)
            .where(eq(MockInterview.createdBy, user?.primaryEmailAddress?.emailAddress))
            .orderBy(desc(MockInterview.id));
        setInterviewList(interviewList);
    }

    useEffect(() => {
        user && getInterviewList();
    }, [user]);

    return (
        <div className="w-full px-4">
            <h1 className="font-medium text-xl md:text-5xl mb-10 text-center text-nowrap">
                {/* Previous Mock Interviews */}
                <FlipWordsComponent />
            </h1>
            {interviewList?.length === 0 ?
                <h1>Get started with a new Interview Now</h1>
                :
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {interviewList && interviewList.map((interviewDetail, index) => (
                        <InterviewItemCard3D key={index} interviewDetail={interviewDetail} />
                    ))}
                </div>
            }
        </div>
    );

}

export default InterviewList;
