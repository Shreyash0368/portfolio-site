import * as React from "react";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineOppositeContent,
} from "@mui/lab";
import { Typography } from "@mui/material";

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
      <TimelineItem>
        <TimelineOppositeContent>(2021 - present)</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent color="text.light">
          B Tech (Information Technology) <br /> (cgpa: 8.8/10)
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>(2020 - 2021)</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent color="text.light">XII (90.8%)</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>(2020 - 2021)</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
        </TimelineSeparator>
        <TimelineContent color="text.light">X (93.2%)</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}
