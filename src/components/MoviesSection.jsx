import CreateCard from './card/CreateCard'
import Postertest from "../assets/postertest.jpg";
import KunfuPanda from "../assets/poster/kunfupanda.jpg";
import Poster1 from "../assets/poster/poster1.jpg";
import DamselImg from "../assets/poster/damsel.jpg";
import React from "react";

function MoviesSection() {
  return (
    <div className="flex justify-center text-center flex-col">
    <h1 className="text-center font-semibold text-[30px]">Movies</h1>
      <div className="flex gap-10 *:border-2 *:border-gray-600 *:cursor-pointer *:rounded-lg justify-center mt-[30px]">
        {CreateCard(DamselImg)}
        {CreateCard(Postertest)}
        {CreateCard(KunfuPanda)}
        {CreateCard(Poster1)}
        {CreateCard(Postertest)}
      </div>


      <h1 className="p-[6px] text-[30px] font-semibold">Animated</h1>
      <div className="flex gap-10 *:border-2 *:border-gray-600 *:cursor-pointer *:rounded-lg justify-center mt-[30px]">
        {CreateCard(Postertest)}
        {CreateCard(Poster1)}
        {CreateCard(KunfuPanda)}
      </div>

      <h1 className="p-[6px] text-[30px] font-semibold">Action</h1>
      <div className="flex gap-10 *:border-2 *:border-gray-600 *:cursor-pointer *:rounded-lg justify-center mt-[30px]">
        {CreateCard(Postertest)}
        {CreateCard(Postertest)}
        
      </div>
    </div>
  );
}

export default MoviesSection;
