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


const AddNewInterview = () => {

    const [openDialog, setOpenDialog] = useState(false);
    const [jobPosition, setJobPosition] = useState("");
    const [jobDescription, setJobDescription] = useState("");
    const [jobExperience, setJobExperience] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        const inputPrompt = `"Using the following placeholders, generate a JSON object with ${process.env.NEXT_PUBLIC_NO_OF_INTERVIEW_QUESTION}technical interview questions and detailed answers: 
            - jobPosition: ${jobPosition}
            - jobDescription: ${jobDescription} 
            - jobExperience: ${jobExperience} year 
            Ensure the questions cover key concepts and practical scenarios relevant to the specified role, skills, and experience level."
            `
        const resultFromAI = await chatSession.sendMessage(inputPrompt);

        // Filtering the Respose from the model!
        let cleanResponse = (resultFromAI.response.text()).replace(/```json|```/g, '', '```', "");
        console.log(await JSON.parse(cleanResponse));
    }

    return (
        <div>
            <div onClick={() => setOpenDialog(true)} className='p-10 border rounded-lg bg-secondary hover:scale-105 hover:shadow-md cursor-pointer transition-all'>
                <h2 className='text-lg text-center'>+ Add New</h2>
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
                                            onChange={(event) => setJobPosition(event.target.value)}
                                        />
                                    </div>
                                    <div className='my-3'>
                                        <label>Job Description/Tech Stakc (In Short)</label>
                                        <Textarea placeholder="Ex React, NextJS, Angular, Node JS"
                                            required
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
                                    <Button type="button" variant="ghost" onClick={() => setOpenDialog(false)}>Cancle</Button>
                                    <Button type="submit">Start Interview</Button>
                                </div>
                            </form>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div >
    )
}

export default AddNewInterview