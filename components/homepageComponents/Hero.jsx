import Image from "next/image";
import { Container } from "@/components/ui/Container";
import heroImg from "../../public/img/hero.png";
import { HeroTitle } from "./HeroTitle";
import Companies from "./Companies";
import Link from "next/link";


export const Hero = () => {
    return (
        <>
            <div className="flex flex-col md:flex-row gap-4">
                <div className="flex items-center w-full lg:w-1/2">
                    <div className="max-w-2xl mb-8">
                        <HeroTitle />
                        <p className="md:mb-5 text-lg md:text-md leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
                            Step into the future of job preparation with Intelli Interview. Our AI-driven platform provides personalized feedback,and real-time coaching to help you shine in every interview. Get ready to impress and land your dream job!
                        </p>
                        <div className="">
                            <Link
                                href="/dashboard"
                                rel="noopener"
                                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md ">
                                Get Started For Free
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full lg:w-1/2">
                    <div className="">
                        <Image
                            src={heroImg}
                            width="616"
                            height="617"
                            className={"object-cover"}
                            alt="Hero Illustration"
                            loading="eager"
                            placeholder="blur"
                        />
                    </div>
                </div>
            </div>
            <Companies />
        </>
    );
}
