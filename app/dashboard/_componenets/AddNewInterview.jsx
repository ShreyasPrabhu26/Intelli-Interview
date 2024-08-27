"use client"
import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { chatSession } from '@/utils/GeminiAiModel';
import { LoaderCircle } from 'lucide-react';
import { Fascinate } from 'next/font/google';
import { db } from '@/utils/db';
import { v4 as uuidv4 } from 'uuid';
import { useUser } from '@clerk/nextjs';
import moment from 'moment/moment';
import { MockInterview } from '@/utils/schema';
import { useRouter } from 'next/navigation';
import { BackgroundGradientWrapper } from '@/app/dashboard/_componenets/BackgroundGradientWrapper';


const AddNewInterview = () => {

    const { user } = useUser();

    const [openDialog, setOpenDialog] = useState(false);
    const [jobPosition, setJobPosition] = useState("");
    const [jobDescription, setJobDescription] = useState("");
    const [jobExperience, setJobExperience] = useState("");
    const [loading, setLoading] = useState(false);
    const [jsonResponse, setJsonResponse] = useState([])
    const router = useRouter();

    const onSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);

        try {
            const inputPrompt = `"Using the following placeholders, generate a JSON object with ${process.env.NEXT_PUBLIC_NO_OF_INTERVIEW_QUESTION} technical interview questions and detailed answers: 
            - jobPosition: ${jobPosition}
            - jobDescription: ${jobDescription}
            - jobExperience: ${jobExperience}
            Ensure the questions cover key concepts and practical scenarios relevant to the specified role, skills, and experience level.
            For software engineering roles, avoid asking the user to write a coding program; instead, focus on logic and problem-solving skills."`;

            const resultFromAI = await chatSession.sendMessage(inputPrompt);

            const cleanResponseFromAi = resultFromAI.response.text()
            const cleanResponse = cleanResponseFromAi.replace(/```json|```/g, '').replace(/[\u0000-\u001F\u007F-\u009F]/g, '').replace(/[\n\r\t]/g, '').trim();

            try {
                const parsedJSONResponse = JSON.parse(cleanResponse);
                const responseFromORM = await db.insert(MockInterview)
                    .values({
                        mockId: uuidv4(),
                        jsonMockResp: parsedJSONResponse,
                        jobPosition,
                        jobDescription,
                        jobExperience,
                        createdBy: user?.primaryEmailAddress?.emailAddress,
                        createdAt: moment().format("DD-MM-yyyy"),
                    }).returning({ mockId: MockInterview.mockId });

                if (responseFromORM) {
                    setOpenDialog(false);
                    router.push(`/dashboard/interview/${responseFromORM[0]?.mockId}`);
                }
            } catch (jsonError) {
                console.error('JSON Parsing Error:', jsonError.message);
                console.warn("Please Contact Developer");

            }
        } catch (error) {
            console.error('Error during interview creation:', error);
        } finally {
            setLoading(false);
        }
    };


    return (
        <div>
            <div onClick={() => setOpenDialog(true)} className='border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all'>
                <BackgroundGradientWrapper>
                    <h2 className='text-lg text-center'>
                        + Add New</h2>
                </BackgroundGradientWrapper>
            </div>
            <Dialog open={openDialog}>
                <DialogContent className="max-w-2xl">
                    <DialogHeader>
                        <DialogTitle className='font-bold text-2xl'>
                            Tell us more about your Job Interview
                        </DialogTitle>
                        <DialogDescription>
                            <form onSubmit={onSubmit}>
                                <div>
                                    <h3>Add details about your Job Position/role,Job description and years of experience</h3>
                                    <div className='mt-7 my-3'>
                                        <label>Job Role/Position</label>
                                        <Input placeholder="Ex Full Stack Developer"
                                            required
                                            autoFocus={true}
                                            onChange={(event) => setJobPosition(event.target.value)}
                                        />
                                    </div>
                                    <div className='my-3'>
                                        <label>Job Description/Tech Stakc (In Short)</label>
                                        <Textarea placeholder="Ex React, NextJS, Angular, Node JS"
                                            required
                                            className="my-1"
                                            onChange={(event) => setJobDescription(event.target.value)} />
                                    </div>
                                    <div className='my-3'>
                                        <label>Years of experience</label>
                                        <Input placeholder="Ex: 2" type="number" max="100"
                                            required
                                            onChange={(event) => setJobExperience(event.target.value)} />
                                    </div>
                                </div>
                                <div className='flex gap-5 justify-end'>
                                    <Button type="button" className="border-2" variant="ghost" onClick={() => setOpenDialog(false)}>Cancle</Button>
                                    <Button type="submit" className="text-white " disabled={loading}>
                                        {loading ?
                                            <>
                                                <LoaderCircle className='animate-spin' />
                                                Preparing your Interview
                                            </>
                                            : "Start Interview"}
                                    </Button>
                                </div>
                            </form>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default AddNewInterview