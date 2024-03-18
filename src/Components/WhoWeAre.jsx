import React from "react";
import LearnMore from "./LearnMore";

const WhoWeAre = () => {
  return (
    <div className="w-full py-8 ">
      <div className="max-w-screen-xl px-4 md:px-0 gap-5 m-auto md:flex-row flex-col bg-white flex py-16 justify-around">
        <h1 className="md:w-1/3  w-full font-thin text-3xl font-['open_sans'] text-zinc-800">
          Who We Are?
        </h1>
        <div className="md:w-[66%] w-full ">
          <p className="font-['open_sans'] mb-5 text-justify sm:text-16 text-18 leading-6 sm:leading-7 font-thin tracking-tight">
            Sync-Power Services Inc. is your all-in-one destination for
            comprehensive power solutions. As an engineering and service company
            specializing in critical and emergency power management, we offer a
            diverse range of services and products tailored to your needs. From
            emergency power generation to distribution, protection, and
            controls, we provide expert support across every aspect of power
            management. Whether you're seeking reliable backup systems or
            customized solutions for critical operations, we're dedicated to
            ensuring your power needs are met with precision and efficiency.
            Trust Sync-Power Services Inc. as your partner in safeguarding your
            operations against downtime and ensuring uninterrupted power supply.
          </p>
          <LearnMore />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
