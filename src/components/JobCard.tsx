import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import PrimaryButton from "./UI/PrimaryButton";
import Link from "next/link";

export default function JobCard() {
  return (
    <Link href={"/job-opportunities/job-details"}>
      {" "}
      <div className="w-full p-4 rounded-lg border border-borderColor">
        <div className="flex w-full justify-between ">
          <div className="flex gap-3 items-center">
            <div className="size-[64px] bg-gray-300 rounded-sm"></div>
            <div className="flex flex-col items-start">
              <p className="text-xl font-semibold text-darkGreen">
                Senior Co-ordinator
              </p>
              <div className="flex gap-1 items-center text-text text-sm">
                <FaLocationDot />
                <p>Putalisadak Chowk-30, Kathmandu,</p>
              </div>
            </div>
          </div>
          <p className="text-darkGreen font-semibold text-xl lg:block hidden">
            Rs.50000
          </p>
        </div>
        <p className="py-3 text-text text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <div className="w-full flex justify-between items-center">
          <div className="flex gap-3 items-center ">
            <div className="bg-bodyColor px-4 py-2 rounded-md flex items-center justify-center text-text text-xs font-bold">
              On-Site
            </div>
            <div className="bg-bodyColor px-4 py-2 rounded-md flex items-center justify-center text-text text-xs font-bold">
              Full Time
            </div>
            <div className="bg-bodyColor px-4 py-2 rounded-md flex items-center justify-center text-text text-xs font-bold">
              Deskwork
            </div>
          </div>
          <PrimaryButton text="View Job" className="lg:block hidden" />
        </div>
        <div className="w-full flex justify-between items-center pt-4">
          <p className="text-darkGreen font-semibold text-xl block lg:hidden">
            Rs.50000
          </p>
          <PrimaryButton text="View Job" className="block lg:hidden" />
        </div>
      </div>
    </Link>
  );
}
