import axios from "axios";

import Layout from "@components/Layout";
import GuideItem from "@components/GuideItem";

export async function getStaticProps() {
  const res = await axios.get("http://localhost:1337/guides");
  const guides = await res.data;

  return { props: { guides }, revalidate: 1 };
}

export default function GuidesPage({ guides }) {
  console.log(guides);
  return (
    <Layout title="Game Guides" description="Game Guides">
      <h1 className="border-b">Game Guides</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {guides.map((guide) => (
          <GuideItem key={guide.id} guide={guide} />
        ))}
      </div>
    </Layout>
  );
}
