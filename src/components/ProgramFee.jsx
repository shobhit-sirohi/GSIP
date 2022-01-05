import React from "react";

const ProgramFee = () => {
  return (
    <div className="px-4 md:px-10 2xl:px-20 text-center text-newblue pb-10">
      <h2 className=" font-semibold text-4xl 2xl:text-5xl  py-10 ">
        Program Fee
      </h2>
      <p className="text-2xl 2xl:text-3xl 3xl:text-4xl font-medium">
        The program duration is 3 weeks and the program fee
        is <span className="text-newyellow">USD 249</span>.
      </p>
      <p className="text-2xl 2xl:text-3xl 3xl:text-4xl font-medium pt-4">
        We are offering a special Program fee waiver
        scholarship{" "}
        <span className="text-newyellow">(USD 50)</span> to
        early applicants.
      </p>
    </div>
  );
};

export default ProgramFee;
