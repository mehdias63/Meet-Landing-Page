import React from "react";

function App() {
  return (
    <main>
      <header>
        <img src="/images/logo.svg" />
        <img src="/images/tablet/image-hero.png" />
        <h1>Group Chat for Everyone</h1>
        <p>
          Meet makes it easy to connect with others face-to-face virtually and
          collaborate across any device.
        </p>
        <div>
          <button>
            Download<span>v1.3</span>
          </button>
          <button>What is it?</button>
        </div>
      </header>
      <div>
        <div className="w-[0.0625rem] h-[5.25rem] bg-gray mx-auto"></div>
        <div className="w-14 h-14 bg-white rounded-full mx-auto border-2 border-gray text-center leading-[3.5rem]">
          01
        </div>
      </div>
      <article>
        <section>
          <img src="/images/desktop/image-woman-in-videocall.jpg" />
          <img src="/images/desktop/image-women-videochatting.jpg" />
          <img src="/images/desktop/image-men-in-meeting.jpg" />
          <img src="/images/desktop/image-man-texting.jpg" />
        </section>
        <p>Built for modern use</p>
        <h2>Smarter meetings, all in one place</h2>
        <p>
          Send messages, share files, show your screen, and record your meetings
          — all in one workspace. Control who can join with invite-only team
          access, data encryption, and data export.
        </p>
      </article>
      <div>
        <div className="w-[0.0625rem] h-[5.25rem] bg-gray mx-auto"></div>
        <div className="w-14 h-14 bg-white rounded-full mx-auto border-2 border-gray text-center leading-[3.5rem]">
          02
        </div>
      </div>
      <footer className="bg-[url(/images/mobile/image-footer.jpg)] bg-no-repeat bg-cover md:bg-[url(/images/desktop/image-footer.jpg)]">
        <h3>Experience more together</h3>
        <p>Stay connected with reliable HD meetings and unlimited one-on-one and group video sessions.</p>
        <button>
            Download<span>v1.3</span>
          </button>
      </footer>
    </main>
  );
}

export default App;
