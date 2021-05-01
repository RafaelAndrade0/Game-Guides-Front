import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="p-3 text-white" style={{ backgroundColor: "#463763" }}>
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <Image src="/images/logo.png" width="40" height="32" />
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <Link href="/">
                <a className="nav-link px-2 text-white">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/guides">
                <a className="nav-link px-2 text-white">Guides</a>
              </Link>
            </li>
            {/* <li>
              <a href="#" className="nav-link px-2 text-white">
                Add a Guide
              </a>
            </li> */}
            <li>
              <Link href="/about">
                <a className="nav-link px-2 text-white">About</a>
              </Link>
            </li>
          </ul>
          {/* 
          <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <input
              type="search"
              className="form-control form-control-dark"
              placeholder="Search..."
            />
          </form> */}

          <div className="text-end">
            <Link href="/guides/add">
              <a className="btn btn-warning">Add a Guide</a>
            </Link>
            {/* <button type="button" className="btn btn-outline-light me-2">
              Login
            </button>
            <button type="button" className="btn btn-warning">
              Sign-up
            </button> */}
          </div>
        </div>
      </div>
    </header>
  );
}
