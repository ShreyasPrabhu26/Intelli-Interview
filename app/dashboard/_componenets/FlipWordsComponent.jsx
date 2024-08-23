import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export function FlipWordsComponent() {
    const words = ["Learnings", "Skill Reviews", "Journey Highlights", "Growth Insights"];

    return (
        <div className="max-w-50">
            Your Previous
            <FlipWords words={words} /> <br />
        </div>
    );
}
