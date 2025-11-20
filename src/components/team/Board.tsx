import BoardCard from "./BoardCard";
import { Box, Flex, Grid } from "@radix-ui/themes";

const Board = () => {
  return (
    <>
      <Box
        pt={{ initial: "1", md: "4" }}
        pb={{ initial: "1", md: "8" }}
        px={{ initial: "6", md: "9", lg: "180px" }}
      >
        <Box className="flex justify-center flex-wrap gap-5">
          <BoardCard
            name="sara lonegard"
            source="/images/checkerboard.svg"
            alt="#"
            blurb="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum laudantium, error consequuntur sequi ipsum cumque ratione dolores assumenda facilis soluta praesentium accusamus ut qui itaque non sit quis officia delectus!"
          />
          <BoardCard
            name="sara lonegard"
            source="/images/checkerboard.svg"
            alt="#"
            blurb="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum laudantium, error consequuntur sequi ipsum cumque ratione dolores assumenda facilis soluta praesentium accusamus ut qui itaque non sit quis officia delectus!"
          />
          <BoardCard
            name="sara lonegard"
            source="/images/checkerboard.svg"
            alt="#"
            blurb="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum laudantium, error consequuntur sequi ipsum cumque ratione dolores assumenda facilis soluta praesentium accusamus ut qui itaque non sit quis officia delectus!"
          />
          <BoardCard
            name="sara lonegard"
            source="/images/checkerboard.svg"
            alt="#"
            blurb="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum laudantium, error consequuntur sequi ipsum cumque ratione dolores assumenda facilis soluta praesentium accusamus ut qui itaque non sit quis officia delectus!"
          />
          <BoardCard
            name="sara lonegard"
            source="/images/checkerboard.svg"
            alt="#"
            blurb="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum laudantium, error consequuntur sequi ipsum cumque ratione dolores assumenda facilis soluta praesentium accusamus ut qui itaque non sit quis officia delectus!"
          />
        </Box>
      </Box>
    </>
  );
};

export default Board;
