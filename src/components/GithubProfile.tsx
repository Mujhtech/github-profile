import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../stores/hook";
import { faUsers, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { fetchRepo } from "../stores/repo";
import Header from "./Header";
import RepoCard from "./RepoCard";

export default function GithubProfile() {
  const { data } = useAppSelector((state) => state.profile);
  const { datas } = useAppSelector((state) => state.repo);
  const dispatch = useAppDispatch();

  const [keyword, setKeyword] = useState("");

  useEffect(() => {
      
    if (data != null && datas == null) {
      dispatch(fetchRepo({ username: data.login }));
    }
  });

  const filterRepo = () => {
    if (keyword === "") {
      return datas;
    }
    return datas.filter((repo: any) => {
      return repo.name.toLowerCase().includes(keyword.toLowerCase());
    });
  };

  return (
    <div className="min-h-screen">
      <div className="flex flex-col w-full">
        <Header />
        <div className="px-4 md:px-16">
          <div className="grid grid-cols-1 overflow-hidden md:grid-cols-app gap-5">
            <div className="flex flex-col">
              <div className="flex flex-row md:flex-col space-x-3 md:space-x-0 items-center md:items-start">
                <img
                  src={data.avatar_url}
                  className="rounded-full border w-[100px] h-[100px] md:h-[260px] md:w-[260px]"
                  alt={data.login}
                />
                <div className="flex flex-col">
                  <h1 className="text-xl font-black">{data.name}</h1>
                  <p className="text-xl">{data.login}</p>
                </div>
              </div>
              <button className="my-2 bg-[#F5F8FA] border rounded text-md py-1">
                Follow
              </button>
              <p className="text-sm font-normal">{data.bio}</p>
              <div className="my-2 flex flex-row items-center space-x-2">
                <div className="flex flex-row items-center space-x-1 text-sm">
                  <FontAwesomeIcon
                    icon={faUsers}
                    className="text-sm text-gray-500"
                  />
                  <span className="font-medium">{data.followers}</span>
                  <p>Followers</p>
                </div>
                <span className="text-md font-black">.</span>
                <div className="flex flex-row space-x-1 text-sm">
                  <span className="font-medium">{data.following}</span>
                  <p>Following</p>
                </div>
              </div>
              <div className="flex flex-col space-y-2">
                <div className="flex flex-row items-center space-x-2">
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="text-sm text-gray-500"
                  />
                  <p>{data.location}</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-sm text-gray-500"
                  />
                  <p>{data.company}</p>
                </div>
                <div className="flex flex-row items-center space-x-2">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="text-sm text-gray-500"
                  />
                  <p>{data.twitter_username}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="w-full border-b flex flex-row py-3">
                <input
                  type="text"
                  name="search"
                  onChange={(e) => setKeyword(e.target.value)}
                  placeholder="Find a repository..."
                  className="w-2/3 border-2 focus:border-blue-600 focus:right-0 focus:outline-none py-1 px-4 rounded-md"
                />
              </div>
              {filterRepo() != null &&
                filterRepo().map((data: any, index: any) => (
                  <RepoCard key={index} data={data} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
