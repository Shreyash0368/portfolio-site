import * as React from "react";
import {
  Timeline
} from "@mui/lab";
import { Typography } from "@mui/material";
import AnimatedTimelineItem from "../components/AnimatedTimelineItem";

export default function EducationTimeline() {
  return (
    <Timeline position="alternate">
      <Typography
        variant="h2"
        sx={{ color: "text.light", my: 3 }}
        id="education"
      >
        Education
      </Typography>
      <AnimatedTimelineItem
        direction={"left"}
        text={"B Tech (Information Technology) (cgpa: 8.8/10)"}
        oppText={"(2021 - present)"}
        isLast={false}
      />
      <AnimatedTimelineItem
        direction={"right"}
        text={"XII (90.8%)"}
        oppText={"(2020 - 2021)"}
        isLast={false}
      />
      <AnimatedTimelineItem
        direction={"left"}
        text={"X (93.2%)"}
        oppText={"(2020 - 2021)"}
        isLast={true}
      />
    </Timeline>
  );
}
