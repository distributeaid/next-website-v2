import { FC } from "react";
import ReactMarkdown from "react-markdown";

type Props = {
  title: string;
  content: string;
};

const AboutOurMissionVision: FC<Props> = ({ title, content }) => (
  <div className="max-w-5xl mx-auto px-0 py-5 md:px-5 md:py-5 lg:py-20  text-lg text-gray-700 flex items-center flex-col h-full">
    <h2 className="text-2xl font-semibold mb-8 text-gray-800">
      About our {title}
    </h2>
    <ReactMarkdown className="text-lg font-normal leading-[35px] tracking-[-0.16px] text-center text-black">
      {content}
    </ReactMarkdown>
  </div>
);

export default AboutOurMissionVision;
