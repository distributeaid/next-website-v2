import ImageComponent from "@/components/image/Image";
import { FC } from "react";
import boardSrc from "../../../public/images/about-us/board.jpg";

const BoardMembers: FC = () => (
  <section className="py-12 lg:py-20">
    <ImageComponent
      image={boardSrc.src}
      width={600}
      height={300}
      altText={
        "Our board members from left to right: Rudayna Abdo, Sara Lönegård, and Stephanie Fairbank"
      }
      caption={
        "Our board members from left to right: Rudayna Abdo, Sara Lönegård, and Stephanie Fairbank"
      }
      attribution={"DistributeAid"}
      alignment={"center"}
    />
  </section>
);

export default BoardMembers;
