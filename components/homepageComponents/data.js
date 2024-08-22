import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Master Your Interviews with AI",
  desc: "Prepare smarter and stand out in interviews with Intelli Interview. Here's how we help you succeed:",
  image: benefitOneImg,
  bullets: [
    {
      title: "Enhance Your Responses",
      desc: "Receive AI-driven feedback to refine your answers and highlight your strengths.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Practice with Realistic Scenarios",
      desc: "Simulate real interview conditions with customized questions tailored to your industry and role.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Gain Confidence to Succeed",
      desc: "Build the confidence to excel in any interview setting with personalized coaching.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Maximize Your Interview Success",
  desc: "Leverage our AI-powered platform to simulate real-world interviews. Get personalized feedback and insights that help you refine your responses and improve your confidence.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "On-the-Go Interview Practice",
      desc: "Prepare for your interviews wherever you are. Our platform is fully mobile-responsive, so you can practice anytime, anywhere.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Tailored Interview Scenarios",
      desc: "Experience interview simulations customized to your job role, industry, and skill level. Whether you're a beginner or an experienced professional, our AI adapts to your needs.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "User-Friendly Interface",
      desc: "Easily navigate through the platform with a clean, intuitive interface that makes your preparation seamless and stress- free. ",
      icon: <SunIcon />,
    },
  ],
};


export { benefitOne, benefitTwo };

