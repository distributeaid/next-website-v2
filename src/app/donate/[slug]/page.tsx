import { notFound } from "next/navigation";
import { Fund } from "@/types/fund";
import FUND_RAISERS from "@/data/donate.json";

interface Props {
  params: {
    slug: string;
  }
}

export async function generateStaticParams() {
  return FUND_RAISERS.map((fundRoute: Fund) => ({
    slug: fundRoute.slug,
  }))
}

const Post = ({ params }: Props) => {
  const { slug } = params;

  const route = FUND_RAISERS.find((fund: Fund) => fund.slug === slug);

  if(!route) {
     notFound();
  }
  
  return (
    <div>
      <h1>{route.title}</h1>
    </div>
  );
};

export default Post;
