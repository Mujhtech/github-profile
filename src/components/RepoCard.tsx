import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import {
  faCaretDown,
  faScaleBalanced,
  faCodeFork,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import moment from "moment";

type Props = {
  data: any;
};

export default function RepoCard({ data }: Props) {
  console.log(data);

  return (
    <li className="py-8 border-b flex flex-row justify-between">
      <div className="flex flex-col space-y-2 w-2/3">
        <h4 className="flex flex-row space-x-2">
          <a href={data.html_url} className="text-blue-600 font-bold">
            {data.name}
          </a>
          <span className="border rounded-full text-gray-500 py-1 px-3 text-sm capitalize">
            {data.visibility}
          </span>
        </h4>
        <div>
          <p className="text-gray-500 text-md">{data.description}</p>
        </div>

        <div className="flex flex-row space-x-3 items-center font-medium">
          {data.language && (
            <div className="flex flex-row space-x-2 items-center">
              <span className="bg-blue-600 h-3 w-3 rounded-full"></span>
              <span className="text-gray-500 text-sm">{data.language}</span>
            </div>
          )}
          {data.stargazers_count > 0 && (
            <div className="flex flex-row space-x-2 items-center">
              <FontAwesomeIcon
                icon={faStar}
                className="text-gray-500 text-sm"
              />
              <span className="text-gray-500 text-sm">
                {data.stargazers_count}
              </span>
            </div>
          )}
          {data.fork && (
            <div className="flex flex-row space-x-2 items-center">
              <FontAwesomeIcon
                icon={faCodeFork}
                className="text-gray-500 text-sm"
              />
              <span className="text-gray-500 text-sm">{data.forks}</span>
            </div>
          )}

          {data.license && (
            <div className="flex flex-row space-x-2 items-center">
              <FontAwesomeIcon
                icon={faScaleBalanced}
                className="text-gray-500 text-sm"
              />
              <span className="text-gray-500 text-sm">{data.license.name}</span>
            </div>
          )}
          <span className="text-sm text-gray-500">
            Updated {moment(data.updated_at).fromNow()}
          </span>
        </div>
      </div>
      <div className="flex flex-col items-end">
        <div className="">
          <button className="my-2 flex flex-row bg-[#F5F8FA] border rounded text-sm px-2">
            <div className="flex flex-row items-center space-x-2 py-1 pr-2">
              <FontAwesomeIcon icon={faStar} className="text-black text-sm" />
              <span className="text-black text-sm">Star</span>
            </div>
            <div className="border-l pl-2 py-1">
              <FontAwesomeIcon icon={faCaretDown} className="text-gray-400" />
            </div>
          </button>
        </div>
      </div>
    </li>
  );
}
