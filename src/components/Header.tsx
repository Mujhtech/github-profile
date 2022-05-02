import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "../stores/hook";
import { faBookBookmark, faCube, faBookOpen, faBookAtlas } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";

export default function Header() {
  const [animateHeader, setAnimateHeader] = useState(false);

  const { data } = useAppSelector((state) => state.profile);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const listener = () => {
        if (window.scrollY > 90) {
          setAnimateHeader(true);
        } else setAnimateHeader(false);
      };
      window.addEventListener("scroll", listener);
      return () => {
        window.removeEventListener("scroll", listener);
      };
    }
  }, []);
  return (
    <header
      className={
        "z-50 bg-white" +
        (animateHeader && " sticky top-0 transition duration-200")
      }
    >
      <div className="w-full mt-4 border-b flex flex-row">
        <div className="w-1/3 hidden md:inline-flex">
          {animateHeader && (
            <div className="flex flex-row items-center space-x-2 pl-14">
              <span>
                <img
                  src={data.avatar_url}
                  width={32}
                  height={32}
                  className="rounded-full border"
                  alt={data.login}
                />
              </span>
              <span className="text-sm font-black">{data.login}</span>
            </div>
          )}
        </div>
        <ul className="px-4 flex flex-row space-x-6 overflow-x-auto">
          <li className="flex">
            <button className="inline-flex items-center space-x-2 py-3 px-2 text-md font-medium hover:bg-gray-400 hover:bg-opacity-20 hover:rounded-md">
              <FontAwesomeIcon
                icon={faBookOpen}
                className="text-xs text-black"
              />
              <h4>Overview</h4>
            </button>
          </li>
          <li className="flex">
            <button className="inline-flex items-center space-x-2 py-3 px-2 text-md font-medium border-b-2 border-gray-900 hover:bg-gray-400 hover:bg-opacity-20 hover:rounded-md">
              <FontAwesomeIcon
                icon={faBookBookmark}
                className="text-xs text-black"
              />
              <h4>Repositories</h4>
              <span className="bg-[#F5F8FA] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ">
                20
              </span>
            </button>
          </li>
          <li className="flex">
            <button className="inline-flex items-center space-x-2 py-3 px-2 text-md font-medium hover:bg-gray-400 hover:bg-opacity-20 hover:rounded-md">
              <FontAwesomeIcon
                icon={faBookAtlas}
                className="text-xs text-black"
              />
              <h4>Projects</h4>
            </button>
          </li>
          <li className="flex">
            <button className="inline-flex items-center space-x-2 py-3 px-2 text-md font-medium hover:bg-gray-400 hover:bg-opacity-20 hover:rounded-md">
              <FontAwesomeIcon
                icon={faCube}
                className="text-xs text-black"
              />
              <h4>Packages</h4>
            </button>
          </li>
          <li className="flex">
            <button className="inline-flex items-center space-x-2 py-3 px-2 text-md font-medium hover:bg-gray-400 hover:bg-opacity-20 hover:rounded-md">
              <FontAwesomeIcon icon={faStar} className="text-xs text-black" />
              <h4>Stars</h4>
              <span className="bg-[#F5F8FA] text-xs font-semibold mr-2 px-2.5 py-0.5 rounded ">
                20
              </span>
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
