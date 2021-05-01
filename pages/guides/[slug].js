import axios from "axios";
import Image from "next/image";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import remarkslug from "remark-slug";

import Layout from "@components/Layout";

export async function getStaticPaths() {
  const res = await axios.get(`http://localhost:1337/guides`);
  const guides = await res.data;

  const paths = guides.map((guide) => ({ params: { slug: guide.slug } }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params: { slug } }) {
  const res = await axios.get(`http://localhost:1337/guides?slug=${slug}`);
  const guides = await res.data;
  return { props: { guide: guides[0] }, revalidate: 1 };
}

export default function GuidePage({ guide }) {
  console.log(guide);
  return (
    <Layout title={`${guide.title} - Guide`}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8">
            {guide.image[0]?.formats && (
              <Image
                src={guide.image[0].formats.medium.url}
                width={900}
                height={400}
              />
            )}

            <ReactMarkdown
              children={guide.description}
              remarkPlugins={[remarkslug]}
            />
            {/* <ReactMarkdown>{guide.description}</ReactMarkdown> */}
          </div>
          <div className="col-12 col-md-4">
            <div className="card">
              <div className="card-body">
                <h1 className="border-b">{guide.title}</h1>
                <h3 className="card-text text-secondary">RPG</h3>
                <span className="badge bg-primary ms-1">PS4</span>
                <span className="badge bg-primary ms-1">PS5</span>
                <span className="badge bg-success ms-1">Xbox One</span>
                <span className="badge bg-success ms-1">Xbox Series</span>
                <span className="badge bg-danger ms-1">Switch</span>
              </div>
            </div>

            <div className="card mt-2">
              <div className="card-body">
                <h1 className="border-b">Table of Contents</h1>
                <ReactMarkdown>{guide.content}</ReactMarkdown>
                {/* <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    <a href={`/${guide.slug}#prologue`}>Prologue</a>
                  </li>
                  <li className="list-group-item">A second item</li>
                  <li className="list-group-item">A third item</li>
                </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
