import React, { FC } from 'react';
import AboutHero from '@/components/about-us/AboutHero';
import AboutOurMission from '@/components/about-us/AboutOurMission';
import BoardMembers from '@/components/about-us/BoardMembers';
import MissionStatement from '@/components/about-us/MissionStatement';
import Timeline from '@/components/about-us/Timeline';
import missionStatementData from '@/data/about-us';
import PageHead from '@/components/about-us/PageHeader';

const AboutUsPage: FC = () => {
  const { missionStatement, aboutOurMission, timeline } = missionStatementData;

  return (
    <main className=''>
      <AboutHero />
      <MissionStatement missionStatement={missionStatement} />
      <BoardMembers />
      <AboutOurMission content={aboutOurMission} />
      <Timeline items={timeline} />
    </main>
  );
};

export default AboutUsPage;
