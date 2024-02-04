import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { Typography } from '@mui/material';

export default function EducationTimeline() {
  return (
    <Timeline position="alternate">
        <Typography variant='h2' sx={{color:'text.light', marginBottom: 6}}>Education</Typography>
      <TimelineItem>
        <TimelineOppositeContent >
          (2021 - present)
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent color='text.light'>B Tech (Information Technology) <br /> (cgpa: 8.8/10)</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent >
          (2020 - 2021)
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent color='text.light'>XII (90.8%)</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent >
          (2020 - 2021)
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          
        </TimelineSeparator>
        <TimelineContent color='text.light'>X (93.2%)</TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}