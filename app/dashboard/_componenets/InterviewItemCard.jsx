"use client"
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react'

const InterviewItemCard = ({ interviewDetail }) => {

    const mockId = interviewDetail?.mockId;
    const jobPosition = interviewDetail?.jobPosition?.toUpperCase();
    const jobExperience = interviewDetail?.jobExperience;
    const jobCreatedAt = interviewDetail?.createdAt;

    const router = useRouter();

    const onStart = () => {
    }

    return (
        <section className='border shadow-sm rounded-lg p-3 flex flex-col justify-center gap-3'>
            <span className='font-bold text-blue-500 text-lg'>{jobPosition}</span>
            <span className='font-bold text-base text-gray-500'>
                <strong className='text-blue-500'>
                    {jobExperience}
                </strong> Years of Experience
            </span>
            <span className='font-bold text-sm text-gray-500'>
                Created At: {jobCreatedAt}
            </span>
            <div className='flex justify-between gap-2'>
                <Button className="w-full bg-gray-300 text-black"
                    size="sm"
                    varient="outline"
                    onClick={() => router.push(`/dashboard/interview/${mockId}/feedback`)}>
                    Feedback
                </Button>
                <Button
                    className="w-full"
                    size="sm"
                    onClick={() => router.push(`/dashboard/interview/${mockId}`)}
                >
                    Start
                </Button>
            </div>
        </section>
    )
}

export default InterviewItemCard