import { getPostsData } from "../../../../lib/posts";

const Page: React.FC<{ params: Promise<{ slug: string }> }> = async ({
  params,
}) => {
  const { slug } = await params;

  const data = getPostsData();

  const currPost = data.find((post) => post.id === slug);

  return (
    <div>
      <p>beng</p>
      {currPost?.id}
    </div>
  );
};

export default Page;
