import  { useState, useEffect } from 'react';
import Image1 from "../Image/Image1.png";
import Image2 from "../Image/Image2.png";
import Image3 from "../Image/Image3.png";

export const Hero = () => {
  const ImageList = [
    {
      id: 1,
      img: Image1,
      title: "Upto 50% off on all Men's Wear",
      description:
        "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 2,
      img: Image2,
      title: "30% off on all Women's Wear",
      description:
        "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: 3,
      img: Image3,
      title: "70% off on all Products Sale",
      description:
        "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  // Utilisation du state pour suivre l'index de l'image visible
  const [currentIndex, setCurrentIndex] = useState(0);

  // Fonction pour afficher l'image suivante
  const goToNextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % ImageList.length);
  };

  // Fonction pour afficher l'image précédente
  const goToPreviousImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + ImageList.length) % ImageList.length
    );
  };

  // Défilement automatique toutes les 20 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      goToNextImage();
    }, 20000); // 20 secondes

    // Nettoyage de l'intervalle au démontage
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      {/* Background pattern */}
      <div className="h-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-10"></div>

      <div className="container pb-8 sm:pb-0">
        <div>
          {/* Loop over ImageList to display the current image */}
          {ImageList.map((data, index) => (
            <div
              key={data.id}
              className={`${
                index === currentIndex ? 'grid grid-cols-1 sm:grid-cols-2' : 'hidden'
              }`}
            >
              {/* Text content section */}
              <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1">
                <h1 className="text-3xl sm:text-4xl lg:text-7xl font-bold">
                  {data.title}
                </h1>
                <p>{data.description}</p>
                <div>
                  <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4">
                    Order Now
                  </button>
                </div>
              </div>

              {/* Image section */}
              <div className="order-1 sm:order-2">
                <div className="relative z-10">
                  <img
                    src={data.img}
                    alt={data.title}
                    className="w-[300px] h-[300px] sm:h-[450px] sm:scale-125 object-contain mx-auto"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons for previous and next images */}
        <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
          <button
            onClick={goToPreviousImage}
            className="bg-primary text-white p-2 rounded-full shadow-md"
          >
            &lt;
          </button>
        </div>
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
          <button
            onClick={goToNextImage}
            className="bg-primary text-white p-2 rounded-full shadow-md"
          >
            &gt;
          </button>
        </div>
      </div>

      {/* Background pattern */}
    </div>
  );
};