import React from "react";
import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { BackgroundGradientWrapper } from "./BackgroundGradientWrapper";

export const CallToAction = () => {
    return (
        <Container>
            <div className="flex flex-wrap items-center justify-center w-full max-w-4xl gap-5 mx-auto text-white bg-indigo-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
                <div className="flex-grow text-center lg:text-left">
                    <h2 className="text-2xl font-medium lg:text-3xl">
                        Are you Ready?
                    </h2>
                    <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
                        Lets improve your interviewing skills!
                    </p>
                </div>
                <BackgroundGradientWrapper className={"p-2 bg-blue-500 hover:scale-105 transition-all"}>
                    <div className="flex-shrink-0 w-full text-center lg:w-auto">
                        <Link
                            href="/dashboard"
                            className="inline-block p-3 mx-auto text-lg font-medium text-center text-black dark:text-white bg-blue-500 rounded-md px-7 lg:px-10 lg:py-5 "
                        >
                            Get Started!
                        </Link>
                    </div>
                </BackgroundGradientWrapper>
            </div>
        </Container>
    );
};
