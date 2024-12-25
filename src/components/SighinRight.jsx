/* eslint-disable no-unused-vars */
import React from "react";

const SighinRight = () => {
  return (
    <div className="w-1/2 h-screen bg-gray-100/70 p-5 flex justify-center items-center ">
      <div className="bg-white flex flex-col rounded-xl w-full border">
        <div className="border-b flex flex-col p-5 w-full gap-4">
          <div className="flex items-center justify-center gap-4">
            <img src="/svg/logo.svg" alt="logo" />
            <span className="font-light">CodeAnt AI</span>
          </div>
          <div className="flex justify-center text-2xl font-semibold mt-2">
            Welcome to CodeAnt AI
          </div>
          <div>
            <div className="bg-gray-100/70 border rounded-xl">
              <button className="p-3 rounded-xl w-1/2 bg-[#1570EF] text-white">
                SAAS
              </button>
              <button className="p-3 rounded-xl w-1/2 ">Self Hosted</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col p-5">
          <div className="flex items-center justify-center w-full">
            <div className="flex items-center flex-col justify-center w-full gap-2 max-w-[400px]">
              <a
                href="/Dashboard"
                className="border items-center flex w-full gap-3 p-2 rounded-xl justify-center"
              >
                <img src="/svg/github.svg" alt="github" className="w-5" />
                Sign in with Github
              </a>
              <a
                href="/Dashboard"
                className="border items-center flex w-full gap-3 p-2 rounded-xl justify-center"
              >
                <img src="/svg/bitbucket.svg" alt="bitbucket" className="w-5" />
                Sign in with Bitbucket
              </a>
              <a
                href="/Dashboard"
                className="border items-center flex w-full gap-3 p-2 rounded-xl justify-center"
              >
                <img
                  src="/svg/azure-devops.svg"
                  alt="azure-devops"
                  className="w-5"
                />
                Sign in with Azure Devops
              </a>
              <a
                href="/Dashboard"
                className="border items-center flex w-full gap-3 p-2 rounded-xl justify-center"
              >
                <img src="/svg/gitlab.svg" alt="gitlab" className="w-5" />
                Sign in with GitLab
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SighinRight;
