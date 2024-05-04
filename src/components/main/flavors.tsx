import React from "react";

export default function Flavors() {
  // fraise - menthe - bubble gum - spicy - bacon fumé - france - jus de mynthos - montazac et torez
  const flavors = [
    {
      name: "Fraise",
      description: "La saveur préférée des enfants, un classique indémodable.",
      image: "/flavor-1.svg",
    },
    {
      name: "Menthe",
      description: "Une saveur rafraîchissante pour un suçotage vivifiant.",
      image: "/flavor-2.svg",
    },
    {
      name: "Bubble Gum",
      description: "Un goût sucré et fruité pour un suçotage gourmand.",
      image: "/flavor-3.svg",
    },
    {
      name: "Spicy",
      description:
        "Une saveur épicée pour un suçotage qui réveille les papilles.",
      image: "/flavor-4.svg",
    },
    {
      name: "Bacon fumé",
      description: "Une saveur salée et fumée pour un suçotage original.",
      image: "/flavor-5.svg",
    },
    {
      name: "France",
      description: "La saveur de la France pour un suçotage authentique.",
      image: "/flavor-6.svg",
    },
    {
      name: "Jus de Mynthos",
      description:
        "La saveur inédite du Jus de Mynthos pour un suçotage exclusif.",
      image: "/flavor-7.svg",
    },
    {
      name: "Montazac et Torez",
      description:
        "La saveur unique de Montazac et Torez pour un suçotage rare.",
      image: "/flavor-8.svg",
    },
  ];
  return (
    <div
      id="flavors"
      className="relative w-full flex items-center justify-center"
    >
      <div className="w-full max-w-3xl flex flex-col items-center justify-center gap-52 px-10 pt-40 pb-40">
        <div className="flex items-end justify-center gap-4">
          {flavors.map((flavor, index) => (
            <div
              key={index}
              className="flavor relative flex flex-col items-center justify-center w-24 font-gustavo cursor-pointer"
            >
              <div
                className={`flavor-card w-72 flex flex-col items-start gap-2 absolue opacity-0 border border-fg-1 shrink-0 p-6
              ${
                index >= flavors.length - 4
                  ? "-translate-x-1/2"
                  : "translate-x-1/2"
              }
              `}
              >
                <h3 className="text-2xl text-fg-1">{flavor.name}</h3>
                <p className="text-fg-3 font-gustavo">{flavor.description}</p>
              </div>
              <img
                src={flavor.image}
                alt={flavor.name}
                className="w-32 flavor-image -mb-2 z-10"
              />
              <img
                src="/shadow.svg"
                alt="shadow"
                className="w-14 blur-sm flavor-shadow"
              />
            </div>
          ))}
        </div>
        <div className="w-full flex items-center justify-between font-gustavo">
          <div className="flex flex-col items-start gap-2 w-1/3">
            <h3 className="text-6xl font-bold">30</h3>
            <span className="block text-fg-3">
              Saveurs <br /> disponibles
            </span>
          </div>
          <div className="flex flex-col items-start gap-2 w-1/3">
            <h3 className="text-6xl font-bold">1</h3>
            <span className="block text-fg-3">
              Vertus <br /> médicinales
            </span>
          </div>
          <p className="text-fg-3 w-1/3">
            Laissez-vous tenter par les saveurs des différents plugs et{" "}
            <span className="font-bold">découvrez un monde de délices</span>{" "}
            pour chaque envie.
          </p>
        </div>
      </div>
    </div>
  );
}
