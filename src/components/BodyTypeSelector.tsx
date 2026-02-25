"use client";

import { useMemo, useState } from "react";
import Image from "next/image";

const bodyTypes = [
  {
    id: "rectangle",
    label: "Rectangle",
    image: "/images/body-rectangle.png",
    recommendations: [
      { title: "Relaxed Fit Coat", image: "/images/r1.png" },
      { title: "Hooded Jacket", image: "/images/r2.png" },
    ],
  },
  {
    id: "inverted-triangle",
    label: "Inverted Triangle",
    image: "/images/body-inverted.png",
    recommendations: [
      { title: "Relaxed Fit Coat", image: "/images/t1.png" },
      { title: "Hooded Jacket", image: "/images/t2.png" },
    ],
  },
  {
    id: "oval",
    label: "Oval",
    image: "/images/body-oval.png",
    recommendations: [
      { title: "Relaxed Fit Coat", image: "/images/o1.png" },
      { title: "Soft Shell Jacket", image: "/images/o2.png" },
    ],
  },
  {
    id: "trapezoid",
    label: "Trapezoid",
    image: "/images/body-trapezoid.png",
    recommendations: [
      { title: "Utility Jacket", image: "/images/tz1.png" },
      { title: "Field Coat", image: "/images/tz2.png" },
    ],
  },
  {
    id: "athletic",
    label: "Athletic",
    image: "/images/body-athletic.png",
    recommendations: [
      { title: "Structured Blazer", image: "/images/a1.png" },
      { title: "Tailored Bomber", image: "/images/a2.png" },
    ],
  },
];

export default function BodyTypeSelector() {
  const [selectedId, setSelectedId] = useState("inverted-triangle");

  const selectedBodyType = useMemo(
    () => bodyTypes.find((type) => type.id === selectedId) ?? bodyTypes[0],
    [selectedId]
  );

  const cardBase =
    "relative overflow-hidden rounded-[26px] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.98),_rgba(248,246,242,0.94)_55%,_rgba(240,237,230,0.90)_100%)] shadow-[0_24px_55px_rgba(15,12,10,0.14)] ring-1 ring-stone-300/80 backdrop-blur transition-all duration-300";

  return (
    <section
      aria-labelledby="body-type-heading"
      className="bg-stone-100/60 px-4 py-20 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <h2
            id="body-type-heading"
            className="text-3xl font-semibold tracking-tight text-stone-900 sm:text-4xl"
          >
            Find the Perfect Jacket for Your Body Type!
          </h2>
          <p className="mt-4 text-base text-stone-600 sm:text-lg">
            Select your body type to see personalized recommendations.
          </p>
        </div>

        <div className="mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 pt-2 sm:grid sm:justify-items-center sm:gap-6 sm:overflow-visible sm:pb-0 sm:pt-0 sm:snap-none sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          {bodyTypes.map((type) => {
            const isActive = type.id === selectedId;

            return (
              <button
                key={type.id}
                type="button"
                onClick={() => setSelectedId(type.id)}
                className={`${cardBase} group flex h-full w-[220px] flex-none snap-center flex-col items-center gap-4 px-4 pb-5 pt-5 text-center before:pointer-events-none before:absolute before:inset-0 before:rounded-[26px] before:bg-[linear-gradient(140deg,_rgba(255,255,255,0.35),_rgba(255,255,255,0)_55%)] before:opacity-0 before:transition-opacity before:duration-300 hover:-translate-y-1.5 hover:shadow-[0_30px_70px_rgba(15,12,10,0.20)] hover:before:opacity-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-stone-900 sm:w-full sm:flex-none sm:max-w-none ${
                  isActive
                    ? "ring-2 ring-stone-900/80 shadow-[0_34px_85px_rgba(15,12,10,0.24)]"
                    : ""
                }`}
              >
                <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-stone-100/70 ring-1 ring-stone-300/70 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.4)]">
                  <Image
                    src={type.image}
                    alt={type.label}
                    fill
                    className="object-contain p-4 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.14em] text-stone-900">
                  {type.label}
                </p>
              </button>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-stone-900">
            Recommended Jackets for {selectedBodyType.label} Body Type
          </h3>
        </div>

        <div className="mt-10 grid items-stretch gap-8 sm:grid-cols-2">
          {selectedBodyType.recommendations.map((item) => (
            <div
              key={item.title}
              className={`${cardBase} group flex h-full flex-col items-center p-6 text-center sm:p-7`}
            >
              <div className="relative mx-auto aspect-square w-full max-w-sm overflow-hidden rounded-2xl bg-stone-100/70 ring-1 ring-stone-300/70 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.4)]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <p className="mt-5 text-base font-semibold uppercase tracking-[0.12em] text-stone-900">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
