"use client";
import { PlayCircleIcon, StopCircleIcon } from "@heroicons/react/24/solid";
import WavesurferPlayer from "@wavesurfer/react";
import { useState } from "react";

type TestimonialType = {
  description: string;
  img: string;
  audio: string;
  name: string;
};

const testimonials: TestimonialType[] = [
  {
    description:
      "Giuppi riesce ad esporre gli argomenti in modo esaustivo ma semplice da capire anche per chi è ancora junior.",
    img: "/testimonials/img/vittorio.webp",
    audio: "/testimonials/audio/vittorio.m4a",
    name: "Vittorio R.",
  },
  {
    description:
      "La cosa più bella di fare formazione con Giuppi è che ti spiega concetti complicati in modo semplice e non ti fa sentire ignorante.",
    img: "/testimonials/img/tony.webp",
    audio: "/testimonials/audio/tony.m4a",
    name: "Antonio L.",
  },

  {
    description:
      "Giuppi mi sta aiutando a scoprire nuove tecnologie e a capirle fino in fondo, in modo da fare lo step di seniority più velocemente.",
    img: "/testimonials/img/benni.webp",
    audio: "/testimonials/audio/benni.m4a",
    name: "Alberto B.",
  },
  {
    description:
      "Trovo sia molto stimolante perché possiamo decidere insieme gli argomenti ma soprattutto i progetti reali a cui partecipare.",
    img: "/testimonials/img/seba.webp",
    audio: "/testimonials/audio/sebastiano.wav",
    name: "Sebastiano L.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-20 border-b-4 border-gray-900">
      <div className="mx-auto  px-6  lg:px-8 ">
        <div className="mx-auto max-w-7xl  ">
          <p className=" text-5xl font-semibold  tracking-tight text-gray-900 sm:text-7xl lg:text-center">
            I miei studenti
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 lg:mx-0 lg:max-w-none lg:grid-cols-4 divide-y-2 divide-y-gray-900 lg:divide-y-0">
          {testimonials.map((testimonial) => (
            <Testimonial testimonial={testimonial} key={testimonial.name} />
          ))}
        </div>
      </div>
    </section>
  );
}

const Testimonial = ({ testimonial }: { testimonial: TestimonialType }) => {
  const [wavesurfer, setWavesurfer] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const onReady = (ws: any) => {
    setWavesurfer(ws);
    setIsPlaying(false);
  };

  const onPlayPause = () => {
    wavesurfer && wavesurfer.playPause();
  };

  return (
    <div
      key={testimonial.name}
      className="flex flex-col pb-10 sm:pb-16 lg:pb-0 px-4  border-gray-900"
    >
      <figure className="mt-10 flex flex-auto flex-col justify-between">
        <div className="grid grid-cols-[auto_1fr] gap-2 w-full items-center bg-black shadow-upperYellow p-4">
          {isPlaying ? (
            <StopCircleIcon
              onClick={onPlayPause}
              className="h-10 w-10 text-white"
            />
          ) : (
            <PlayCircleIcon
              onClick={onPlayPause}
              className="h-10 w-10 text-white"
            />
          )}

          <WavesurferPlayer
            height={50}
            progressColor={"#fff"}
            waveColor="#ffcc33"
            url={testimonial.audio}
            onReady={onReady}
            barWidth={2}
            barGap={1}
            barRadius={2}
            barHeight={1}
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          />
        </div>
        <blockquote className="text-lg leading-8 pt-5">
          <p>“{testimonial.description}”</p>
        </blockquote>
        <figcaption className="mt-10 flex items-center gap-x-4">
          <img
            className="h-14 w-14 rounded-full bg-gray-800 border-4 border-gray-900"
            src={testimonial.img}
            alt=""
          />
          <div className="text-base">
            <div className="font-semibold ">{testimonial.name}</div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};
