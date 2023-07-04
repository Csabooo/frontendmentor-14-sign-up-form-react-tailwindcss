import React from "react";

function Article() {
  return (
    <div>
      <div>
        <h1>Stay updated!</h1>
        <p>Join 60,000+ product managers receiving monthly updates on:</p>
      </div>
      <ul className="my-4">
        <li className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21">
            <g fill="none">
              <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
              <path
                stroke="#FFF"
                stroke-width="2"
                d="M6 11.381 8.735 14 15 8"
              />
            </g>
          </svg>
          Product discovery and building what matters
        </li>
        <li className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21">
            <g fill="none">
              <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
              <path
                stroke="#FFF"
                stroke-width="2"
                d="M6 11.381 8.735 14 15 8"
              />
            </g>
          </svg>
          Measuring to ensure updates are a succes
        </li>
        <li className="flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="21"
            height="21"
            viewBox="0 0 21 21">
            <g fill="none">
              <circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155" />
              <path
                stroke="#FFF"
                stroke-width="2"
                d="M6 11.381 8.735 14 15 8"
              />
            </g>
          </svg>
          And much more!
        </li>
      </ul>
    </div>
  );
}

export default Article;
