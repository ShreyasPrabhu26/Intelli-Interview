"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/app/dashboard/upgrade/_components/Card";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { BackgroundGradientWrapper } from "@/components/homepageComponents/BackgroundGradientWrapper";

const PricingHeader = ({ title, subtitle }) => (
    <section className="text-center">
        <h2 className="text-3xl font-bold">{title}</h2>
        <p className="text-xl pt-1">{subtitle}</p>
        <br />
    </section>
);

const PricingCard = ({ title, interviewsCount, description, features, actionLabel, popular, exclusive }) => (
    <BackgroundGradientWrapper className={"p-1"}>
        <Card
            className={cn(` rounded-md w-72 flex flex-col justify-between py-1 border-zinc-700 mx-auto sm:mx-0`, {
                "animate-background-shine bg-white dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors":
                    exclusive,
            })}
        >
            <div>
                <CardHeader className="pb-8 pt-4">
                    <CardTitle className="text-zinc-700 dark:text-zinc-300 text-lg">{title}</CardTitle>
                    <div className="flex gap-0.5">
                        <h3 className="text-3xl font-bold">{interviewsCount} Interviews</h3>
                    </div>
                    <CardDescription className="pt-1.5 h-12">{description}</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-2">
                    {features.map((feature) => (
                        <CheckItem key={feature} text={feature} />
                    ))}
                </CardContent>
            </div>
            <CardFooter className="mt-2">
                <Button
                    onClick={() => {
                        if (title === "Pro") {
                            console.log("pro");
                        } else if (title === "Basic") {
                            console.log("basic");
                        }
                    }}
                    className="relative inline-flex w-full items-center justify-center rounded-md bg-black text-white dark:bg-white px-6 font-medium dark:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                    <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur" />
                    {actionLabel}
                </Button>


            </CardFooter>
        </Card>
    </BackgroundGradientWrapper>
);

const CheckItem = ({ text }) => (
    <div className="flex gap-2">
        <CheckCircle2 size={18} className="my-auto text-green-400" />
        <p className="pt-0.5 text-zinc-700 dark:text-zinc-300 text-sm">{text}</p>
    </div>
);

export default function Page() {
    const plans = [
        {
            title: "Basic",
            interviewsCount: 10,
            description: "Essential features you need to get started",
            features: [
                "Access to 10 AI-generated interviews",
                "Basic interview question sets",
                "Limited feedback on answers",
                "Email support",
                "Standard analytics dashboard",
            ],
            actionLabel: "Get Started",
        },
        {
            title: "Pro",
            interviewsCount: 25,
            description: "Perfect for owners of small & medium businesses",
            features: [
                "Access to 25 AI-generated interviews",
                "Advanced interview question sets",
                "Detailed feedback and recommendations",
                "Advanced analytics dashboard",
            ],
            actionLabel: "Get Started",
            popular: true,
        },
    ];


    return (
        <div className="">
            <PricingHeader title="Interview Packages" subtitle="Choose the package that's right for you" />
            <section className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-8 ">
                {plans.map((plan) => (
                    <PricingCard key={plan.title} {...plan} />
                ))}
            </section>
        </div >
    );
}
