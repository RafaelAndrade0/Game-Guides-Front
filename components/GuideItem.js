import Link from "next/link";

export default function GuideItem({ guide }) {
  console.log(guide);
  return (
    <Link href={`/guides/${guide.slug}`}>
      <a>
        <div className="col">
          <div
            className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
            style={{
              backgroundImage: `url(${
                guide.image[0]?.formats
                  ? guide.image[0].formats.medium.url
                  : "/images/placeholder.jpg"
              })`,
            }}
          >
            <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
              <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                {guide.title}
              </h2>
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
