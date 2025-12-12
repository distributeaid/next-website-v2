import BoardCard from "./BoardCard";
import { Box, Heading } from "@radix-ui/themes";
import { boardMembers } from "./BoardMembers";
const Board = () => {
  const getColorFromSeed = (seed: string) => {
    const colors = ["bg-navy-400"];
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
        <Box p="4" my="6" className="border-t-black border-t-2">
          <Heading
            as="h1"
            size={{ initial: "8", md: "9" }}
            align="center"
            className="uppercase"
          >
            Board
          </Heading>
        </Box>
        <Box className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
