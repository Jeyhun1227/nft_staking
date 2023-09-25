import { SectionDefault } from "@/layout/section";
import React from "react";

export const HomeGoal = () => {
  return (
    <SectionDefault title="our goal" subtitle="roadmap">
      {["", "", "", ""].map((_, idx) => {
        return (
          <div key={idx}>
            <p>Q1 2022</p>
            <p>Genesis</p>
            <p>V1 of the platform</p>
            <p>Onboard first artists</p>
            <p>Brand awareness</p>
            <p>Setup VIP access</p>
          </div>
        );
      })}
    </SectionDefault>
  );
};
