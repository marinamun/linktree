import "./App.css";
import "./styles/tailwind.css";
import logo from "/logo.png";

function App() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="mb-5 flex flex-col gap-3">
          <img src={logo} className="w-1/5 rounded-full block m-auto" />
          <h1 className="text-[#8b2020] text-lg dark:text-white mb-[-10px]">
            @spanishgitana
          </h1>
        </div>
        <a
          href="https://open.spotify.com/show/4KYtGSXTcR9dj22kuNy1Yg?si=t8pDJoLUQIKBT35ejbh_Ow&nd=1&dlsi=78633e8d365447ed"
          target="_blank"
          className="link"
        >
          Slow & Clear Spanish - spotify
        </a>
        <a
          href="https://www.youtube.com/channel/UCtCqI5Q9Jyn5MtU_Oqo2e6g"
          target="_blank"
          className="link"
        >
          Slow & Clear Spanish - youtube
        </a>

        <a
          href="https://spanishgitana.thinkific.com/courses/master-spanish-verbs"
          target="_blank"
          className="link"
        >
          Master Spanish Verbs - course
        </a>
        <a
          href="https://spanishgitana.thinkific.com/courses/spanish-from-scratch"
          target="_blank"
          className="link"
        >
          Spanish from Scratch - course
        </a>
        <a
          href="https://www.instagram.com/spanishgitana/"
          target="_blank"
          className="link"
        >
          Instagram
        </a>
      </div>
    </>
  );
}

export default App;
