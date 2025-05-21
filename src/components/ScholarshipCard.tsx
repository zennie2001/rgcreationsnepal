import Image from "next/image";
import React from "react";
import interviewImage from "@/assets/images/unilogo.svg";
import usa from "@/assets/images/usa.svg";

export default function ScholarshipCard() {
  return (
    <div className="border border-borderColor p-6 rounded-sm">
      <div className="border border-borderColor p-1 size-14 rounded-md">
        <Image
          src={interviewImage}
          alt="page header image"
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <p className="text-darkGreen font-bold pt-3">
        International Undergraduate Scholarship for Women
      </p>
      <div className="flex gap-2 items-center pt-2">
        <div className="size-5">
          <Image
            src={usa}
            alt="page header image"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <p className="text-text text-sm font-medium">
          San Francisco Bay University
        </p>
      </div>
      <div className="flex pt-4 justify-between w-full gap-2">
        <div className="flex flex-col gap-1 text-text">
          <p className="font-bold text-xs">STUDY LEVEL</p>
          <p className="text-xs ">Undergraduate</p>
        </div>
        <div className="flex flex-col gap-1 text-text">
          <p className="font-bold text-xs">FUNDING TYPE</p>
          <p className="text-xs ">Fee waiver</p>
        </div>
      </div>
    </div>
  );
}
