import KunfuPanda from "../assets/poster/kunfupanda.jpg";
import Poster1 from "../assets/poster/poster1.jpg";
import DamselImg from "../assets/poster/damsel.jpg";
import React from "react";
import Navbar from "./Navbar";

function RequireLogin() {
  function StartNow() {
    localStorage.setItem("login", "true");
    window.location.href = "/"
  }
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center h-[100vh]">
        <div>
          <h1 className="text-[40px] font-semibold p-[6px]">
            Unete a Disney+ Clone!
          </h1>
          <p className="text-slate-300">La Mejor App, para ver peliculas!</p>
          <div
            onClick={() => {
              StartNow();
            }}
            className="bg-indigo-600 w-[130px] cursor-pointer  p-[10px] rounded-lg m-[6px]"
          >
            Empezar Ahora
          </div>
        </div>
        <div className="p-[6px]">
          <div className="w-[250px] inline-block p-[6px] rotate-3 bg-slate-900/5 rounded-lg cursor-pointer *:rounded-lg">
            <img src={KunfuPanda} alt="" />
          </div>
          <div className="w-[250px] inline-block p-[6px] -rotate-12 bg-slate-900/5 rounded-lg cursor-pointer *:rounded-lg">
            <img src={Poster1} alt="" />
          </div>
          <div className="w-[250px] block p-[6px] rotate-6 bg-slate-900/5 rounded-lg cursor-pointer *:rounded-lg">
            <img src={DamselImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RequireLogin;
