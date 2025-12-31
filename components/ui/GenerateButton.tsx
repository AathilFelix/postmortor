"use client";

import React from "react";
import { Button } from "./button";

type Props = {
  onGenerate: () => void;
};

const GenerateButton = ({ onGenerate }: Props) => {
  return (
    <div className="text-center">
      <Button
        className="bg-[#564787] rounded-[10px] text-white items-center"
        size="lg"
        onClick={onGenerate}
      >
        Generate postmortem
      </Button>

      <div className="flex flex-row gap-2 mt-2 items-center">
        <span className="text-muted-foreground text-sm">
          Uses logs and metrics to generate a structured postmortem.
        </span>
      </div>
    </div>
  );
};

export default GenerateButton;
