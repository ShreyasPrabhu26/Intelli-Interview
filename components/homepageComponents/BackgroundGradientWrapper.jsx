"use client";
import React from "react";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { cn } from "@/lib/utils";

export function BackgroundGradientWrapper({ children, className }) {
    return (
        <BackgroundGradient className={`rounded-[22px] bg-white dark:bg-zinc-900 ${cn(className)}`}>
            {children}
        </BackgroundGradient>
    );
}
