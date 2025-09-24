"use client";

import { galeriaAluguel } from "@/data/content.json";
import Image from "next/image";
import { useState } from "react";

export function GaleriaAluguel() {
  const [mainImage, setMainImage] = useState(galeriaAluguel[0]);

  return (
    <div className="flex flex-col h-[45rem] items-center space-y-6  p-4">
      {/* Imagem principal em formato de "prato" com estilo arredondado */}
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
        Temas para aluguel
      </h1>
      <div className="w-full max-w-4xl aspect-square rounded-2xl relative bg-sky-200 shadow-xl p-4 overflow-hidden">
        <div className="w-full h-full relative rounded-2xl flex items-center justify-center overflow-hidden">
          <Image
            src={mainImage}
            fill
            className="object-cover"
            alt="Main Image"
            sizes="(max-width: 768px) 100vw, 768px"
            priority
          />
        </div>
      </div>

      {/* Miniaturas em formato parecido com o da imagem principal */}
      <div className="grid grid-cols-5 max-w-3xl gap-2">
        {galeriaAluguel.map((image, index) => (
          <div
            key={index}
            className={`relative aspect-square cursor-pointer overflow-hidden transition-transform hover:scale-105 ${
              mainImage === image ? "ring-4 ring-sky-400" : ""
            }`}
            onClick={() => setMainImage(image)}
          >
            <div className="w-full h-full bg-sky-200 rounded-full overflow-hidden flex items-center justify-center p-1">
              <Image
                src={image}
                width={60}
                height={60}
                className="object-cover w-full h-full rounded-full hover:opacity-90 transition-opacity"
                alt={`Thumbnail ${index + 1}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
