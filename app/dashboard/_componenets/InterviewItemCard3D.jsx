"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { useRouter } from "next/navigation";
import { Meteors } from "@/components/ui/meteors";
import { Button } from "@/components/ui/button";

export function InterviewItemCard3D({ interviewDetail }) {
    const mockId = interviewDetail?.mockId;
    const jobPosition = interviewDetail?.jobPosition?.toUpperCase();
    const jobExperience = interviewDetail?.jobExperience;
    const jobCreatedAt = interviewDetail?.createdAt;
    const router = useRouter();

    return (
        <CardContainer className="inter-var max-w-sm mx-auto text-nowrap">
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border flex flex-col items-center justify-between h-full">
                <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-white"
                >
                    <div className="w-full relative max-w-xs mx-auto">
                        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
                        <div className="relative shadow-xl bg-gray-100 dark:bg-gray-900 border dark:border-gray-800 p-7 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center ">
                            <section className="shadow-sm rounded-lg flex flex-col justify-center items-center gap-5 z-10">
                                <span className="font-bold text-blue-500 text-lg">
                                    {jobPosition}
                                </span>
                                <span className="font-bold text-base text-gray-500">
                                    <strong className="text-blue-500">{jobExperience}</strong> Years
                                    of Experience
                                </span>
                                <span className="font-bold text-sm text-gray-500">
                                    Created At: {jobCreatedAt}
                                </span>
                            </section>
                            <Meteors number={20} />
                        </div>
                    </div>
                </CardItem>

                <div className="flex justify-between items-center mt-6 w-full">
                    <CardItem translateZ={20} className="w-full">
                        <Button
                            className="w-full bg-gray-300 text-black"
                            size="sm"
                            variant="outline"
                            onClick={() => router.push(`/dashboard/interview/${mockId}/feedback`)}
                        >
                            Feedback
                        </Button>
                    </CardItem>
                    <CardItem translateZ={20} className="w-full ml-4">
                        <Button
                            className="w-full dark:text-white"
                            size="sm"
                            onClick={() => router.push(`/dashboard/interview/${mockId}`)}
                        >
                            Start
                        </Button>
                    </CardItem>
                </div>
            </CardBody>
        </CardContainer>
    );
}
