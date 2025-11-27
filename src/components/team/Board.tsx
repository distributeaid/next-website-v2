import BoardCard from "./BoardCard";
import { Box, Flex, Grid } from "@radix-ui/themes";
import { boardMembers } from "./BoardMembers";
const Board = () => {
  const getColorFromSeed = (seed: string) => {
    const colors = [
      "bg-blue-100",
      "bg-blue-200",
      "bg-blue-300",
      "bg-blue-400",
      "bg-blue-500",
    ];
    let hash = 0;
    for (let i = 0; i < seed.length; i++) {
      hash = (hash << 5) - hash + seed.charCodeAt(i);
      hash = hash & hash;
    }

    return colors[Math.abs(hash) % colors.length];
  };

  return (
    <>
      <Box
        pt={{ initial: "1", md: "4" }}
        pb={{ initial: "1", md: "8" }}
        px={{ initial: "6", md: "9", lg: "180px" }}
      >
        <Box className="flex justify-center flex-wrap gap-5">
          {boardMembers.map((member) => (
            <BoardCard
              key={member.id}
              name={member.name}
              source={member.source}
              alt={member.alt}
              blurb={member.blurb}
              bgColor={getColorFromSeed(member.id)}
            />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Board;
