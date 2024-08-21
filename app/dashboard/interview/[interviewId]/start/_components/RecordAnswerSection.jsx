"use client"
import { Button } from '@/components/ui/button'
import { Mic, WebcamIcon } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import useSpeechToText from 'react-hook-speech-to-text'
import Webcam from 'react-webcam'

const RecordAnswerSection = () => {
    const {
        error,
        interimResult,
        isRecording,
        results,
        startSpeechToText,
        stopSpeechToText,
    } = useSpeechToText({
        continuous: true,
        useLegacyResults: false
    });


    const [isWebCamEnabled, setIsWebCamEnabled] = useState(false);
    const [userAnswer, setUserAnswer] = useState("");

    if (error) {
        return <p>Web Speech API is not available in this browser 🤷‍ Please switch to Chrome Browser for best experience</p>
    }

    useEffect(() => {
        results.map((result) => (
            setUserAnswer((prevAns) => prevAns + result.transcript)
        ))
    }, [results])

    return (
        <div className='flex flex-col items-center justify-center'>
            <div className='flex flex-col justify-center mt-8 items-center bg-blue-100 rounded-lg p-5'>
                <WebcamIcon className='h-64 w-full my-7 p-20 rounded-lg absolute' />
                <Webcam className="rounded-2xl h-96 w-full z-10"
                    mirrored={true}
                    onUserMedia={() => setIsWebCamEnabled(true)}
                    onUserMediaError={() => setInterviewData(false)} />
            </div>
            <Button
                className="mt-3 bg-blue-500"
                onClick={isRecording ? stopSpeechToText : startSpeechToText}>
                {
                    isRecording ?
                        <h2 className='flex justify-center items-center text-red-300'>
                            <Mic /> 'Recording...'
                        </h2>
                        :
                        "Record Answer"}
            </Button>
            <Button onClick={() => console.log(userAnswer)}>ShoW ANS</Button>
        </div>
    )


    // return (
    //     <div>
    //         <h1>Recording: {isRecording.toString()}</h1>
    //         <button onClick={isRecording ? stopSpeechToText : startSpeechToText}>
    //             {isRecording ? 'Stop Recording' : 'Start Recording'}
    //         </button>
    //         <ul>
    //             {results.map((result) => (
    //                 <li key={result.timestamp}>{result.transcript}</li>
    //             ))}
    //             {interimResult && <li>{interimResult}</li>}
    //         </ul>
    //     </div>
    // );
}

export default RecordAnswerSection