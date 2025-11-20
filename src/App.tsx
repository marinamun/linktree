import "./App.css";
import "./styles/tailwind.css";
import logo from "./assets/1685266102882.jfif";

function App() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="mb-5 flex flex-col gap-3">
          <img src={logo} className="w-1/5 rounded-full block m-auto" />
          <h1>@spanishgitana</h1>
        </div>

        <a
          href="https://open.spotify.com/show/4KYtGSXTcR9dj22kuNy1Yg?si=t8pDJoLUQIKBT35ejbh_Ow&nd=1&dlsi=78633e8d365447ed"
          target="_blank"
        >
          Podcast on Spotify
        </a>

        <a
          href="https://www.youtube.com/channel/UCtCqI5Q9Jyn5MtU_Oqo2e6g"
          target="_blank"
        >
          YouTube
        </a>

        <a
          href="https://slow-and-clear-spanish-pod.beehiiv.com/"
          target="_blank"
        >
          Newsletter
        </a>

        <a
          href="https://spanishgitana.thinkific.com/courses/master-spanish-verbs"
          target="_blank"
        >
          Master Spanish Verbs - course
        </a>

        <a
          href="https://spanishgitana.thinkific.com/courses/spanish-from-scratch"
          target="_blank"
        >
          Spanish from Scratch - course
        </a>

        <a href="https://www.instagram.com/spanishgitana/" target="_blank">
          Instagram
        </a>
      </div>
    </>
  );
}

export default App;
