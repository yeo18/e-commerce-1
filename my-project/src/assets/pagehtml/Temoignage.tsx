import  { useState } from 'react';

export const Temoignage = () => {
  const TestimonialData = [
    {
      id: 1,
      name: "Victor",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/101/101",
    },
    {
      id: 2,
      name: "Satya Nadella",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/102/102",
    },
    {
      id: 3,
      name: "Virat Kohli",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/104/104",
    },
    {
      id: 4,
      name: "Sachin Tendulkar",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
      img: "https://picsum.photos/103/103",
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const maxStartIndex = TestimonialData.length - 3; // empêche de dépasser

  // Slicing 3 témoignages à partir de l'index sélectionné
  const visibleCards = TestimonialData.slice(startIndex, startIndex + 3);

  return (
    <div className='py-10 mb-10'>
      <div className='container mx-auto px-4'>
        {/* Header */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <p className='text-sm text-primary'>What our customers are saying</p>
          <h1 className='text-2xl font-bold'>Témoignage</h1>
          <p className='text-xs text-gray-400'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio aspernatur cupiditate alias nulla fugit,
            nemo quibusdam qui quaerat labore dolor, quisquam autem laudantium neque adipisci?
          </p>
        </div>

        {/* Cartes de témoignages */}
        <div data-aos="zoom-in">
          <div className='flex justify-center gap-6 flex-wrap'>
            {visibleCards.map((data) => (
              <div key={data.id} className='w-[300px]'>
                <div className='flex flex-col gap-4 shadow-lg py-8 px-6 rounded-xl dark:bg-gray-800 bg-primary/10 relative'>
                  <div className='mb-4 flex justify-center'>
                    <img src={data.img} alt={data.name} className='rounded-full w-20 h-20' />
                  </div>
                  <div className='flex flex-col items-center gap-4'>
                    <div className='space-y-3'>
                      <p className='text-xs text-gray-500'>{data.text}</p>
                      <h1 className='text-xl font-bold text-black/80 dark:text-light'>{data.name}</h1>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ronds de navigation */}
        <div className='flex justify-center mt-6 gap-3'>
          {TestimonialData.map((_, index) => {
            // Empêche l’index de dépasser la dernière position affichable
            const adjustedIndex = Math.min(index, maxStartIndex);
            return (
              <button
                key={index}
                onClick={() => setStartIndex(adjustedIndex)}
                className={`w-3 h-3 rounded-full ${
                  startIndex === adjustedIndex ? 'bg-primary' : 'bg-gray-400'
                } transition duration-300`}
              ></button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
