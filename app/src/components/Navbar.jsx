import { Link } from "react-router-dom";

export default function Navbar({ page }) {
  return (
    <nav className="flex items-center gap-2 bg-blue p-6">
      <Link className="flex gap-4" to={"/"}>
        <svg
          class="fill-white min-w-5 max-w-5 min-h-5 max-h-5"
          enable-background="new 0 0 15 26"
          height="26px"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 15 26"
          width="15px"
          xml:space="preserve"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <polygon points="12.885,0.58 14.969,2.664 4.133,13.5 14.969,24.336 12.885,26.42 2.049,15.584 -0.035,13.5 " />
        </svg>

        <span className="text-white font-medium">{page}</span>
      </Link>
    </nav>
  );
}
