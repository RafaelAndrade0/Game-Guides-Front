import Image from "next/image";

export default function Hero() {
  return (
    <div>
      <div className="px-4 my-md-5 my-2 text-center">
        <Image
          className="d-block mx-auto mb-4 img-fluid"
          src="/images/hero.jpg"
          alt="Hero"
          width="1920"
          height="600"
        />
        <h1 className="display-5 fw-bold">Welcome to Game Guides</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
            assumenda accusamus id modi maiores unde quis corrupti iusto quae ea
            aperiam corporis facere pariatur eligendi. Porro non iure id
            reprehenderit.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-sm-3"
            >
              Primary button
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Secondary
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
