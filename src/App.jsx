import React from "react";
import Circle from "./components/Circle";

function App() {
  return (
    <main className="min-h-screen max-w-[98rem] mx-auto font-red flex flex-col justify-center items-center">
      <img src="/images/logo.svg" className="my-12" alt="logo" />
      <div className="grid grid-cols-[minmax(0,1fr)_2fr_2fr_minmax(0,1fr)] lg:grid-cols-[minmax(0,1fr)_2fr_minmax(0,1fr)] gap-6 items-center justify-items-center">
        <img
          src="/images/desktop/image-hero-left.png"
          className="col-span-2 lg:col-span-1"
          alt="hero"
        />
        <img
          src="/images/desktop/image-hero-right.png"
          className="col-span-2 lg:col-span-1 lg:col-start-3"
          alt="hero"
        />
        <div className="col-span-4 md:col-start-2 md:col-span-2 lg:col-span-1 lg:col-start-2 lg:row-start-1 flex flex-col items-center p-6 text-center">
          <h1 className="text-[2.5rem] md:text-5xl lg:text-[4rem] font-black leading-[2.75rem] md:leading-[3rem] lg:leading-[4rem] text-black lg:max-w-[28rem]">
            Group Chat for Everyone
          </h1>
          <p className="text-base md:text-lg text-gray font-medium leading-[1.625rem] lg:mx-[3rem] my-6 sm:max-w-[25rem] md:max-w-[30rem]">
            Meet makes it easy to connect with others face-to-face virtually and
            collaborate across any device.
          </p>
          <div className="flex flex-col sm:flex-row m-4 justify-center items-center">
            <button className="btn bg-green mb-6 sm:mb-0 hover:bg-light-green">
              Download<span className="text-light-blue "> v1.3</span>
            </button>
            <button className="btn bg-purple ml-2 hover:bg-light-pink">
              What is it?
            </button>
          </div>
        </div>
      </div>
      <Circle number="01" />
        <section className="grid grid-cols-2 gap-6 p-6 md:grid-cols-4 lg:px-20">
          <img
            src="/images/desktop/image-woman-in-videocall.jpg"
            className="rounded-xl"
            alt="woman-in-videocall"
          />
          <img
            src="/images/desktop/image-women-videochatting.jpg"
            className="rounded-xl"
            alt="women-videochatting"
          />
          <img
            src="/images/desktop/image-men-in-meeting.jpg"
            className="rounded-xl"
            alt="men-in-meeting"
          />
          <img
            src="/images/desktop/image-man-texting.jpg"
            className="rounded-xl"
            alt="man-texting"
          />
        </section>
        <section className="flex flex-col justify-center items-center p-4">
          <p className="text-green uppercase text-base font-black leading-[1.625rem] tracking-[0.25rem] my-4">
            Built for modern use
          </p>
          <h2 className="text-[2rem] md:text-[2.5rem] font-black leading-9 md:leading-[2.75rem] text-black text-center max-w-[22rem] md:max-w-[27rem]">
            Smarter meetings, all in one place
          </h2>
          <p className="text-gray text-base lg:text-lg font-medium leading-[1.625rem] my-4 sm:mx-12 md:max-w-[35rem] text-center">
            Send messages, share files, show your screen, and record your
            meetings — all in one workspace. Control who can join with
            invite-only team access, data encryption, and data export.
          </p>
        </section>
      <Circle number="02" className="mb-[-3rem] z-10 relative" />
      <div className="bg-[url(/images/mobile/image-footer.jpg)] bg-no-repeat bg-cover lg:bg-[url(/images/desktop/image-footer.jpg)] w-full text-white px-6 py-20 flex flex-col lg:flex-row justify-center lg:justify-evenly lg:px-4 items-center bg-blend-multiply bg-green opacity-80">
        <h3 className="text-[2rem] md:text-[2.5rem] font-black leading-9 md:leading-[2.75rem] my-4 lg:max-w-[20rem]">
          Experience more together
        </h3>
        <p className="text-lg text-center font-medium leading-[1.625rem] my-4 lg:max-w-[20rem] lg:text-left">
          Stay connected with reliable HD meetings and unlimited one-on-one and
          group video sessions.
        </p>
        <button className="btn bg-purple hover:bg-light-pink mt-8 lg:mt-2">
          Download<span className="text-light-purple"> v1.3</span>
        </button>
      </div>
    </main>
  );
}

export default App;
