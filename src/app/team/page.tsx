import { FC } from "react";
import { TeamMembers } from "@/components/team/TeamMembers";
import Board from "@/components/team/Board";
import IntroSection from "@/components/team/IntroSection";

const Team: FC = () => {
  return (
    <main>
      <IntroSection />
      <TeamMembers
        roleType="director"
        bannerImage="/images/photos/photo-fra-calais-water.png"
        header="Executive Team"
      />
      <TeamMembers
        roleType="coordinator"
        bannerImage="/images/photos/photo-fra-calais-water.png"
        header="Coordination Team"
      />
      <TeamMembers
        roleType="volunteer"
        bannerImage="/images/photos/photo-fra-calais-water.png"
        header="Volunteer Team"
      />
      <Board />
    </main>
  );
};

export default Team;
