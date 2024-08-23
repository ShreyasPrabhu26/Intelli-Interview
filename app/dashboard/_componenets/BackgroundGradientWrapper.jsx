"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";

export function BackgroundGradientWrapper({ children }) {
    return (
        <div>
            <BackgroundGradient className="rounded-[22px] sm:p-10 h-16 bg-white dark:bg-zinc-900 flex flex-col items-center justify-center">
                {children}
            </BackgroundGradient>
        </div>
    );
}
