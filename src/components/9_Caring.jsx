import React from 'react';
import IMG1 from './Caring_IMG/image 18.png';
import IMG2 from './Caring_IMG/image 19.png';
import IMG3 from './Caring_IMG/image 20.png';

const Caring = () => {
  const cards = [
    {
      image: IMG1,
      title: 'Creating Streamlined Safeguarding Processes with OneRen',
      link: '#',
    },
    {
      image: IMG2,
      title:
        'What are your safeguarding responsibilities and how can you manage them?',
      link: '#',
    },
    {
      image: IMG3,
      title: 'Revamping the Membership Model with Triathlon',
      subtitle: 'Australia.',
      link: '#',
    },
  ];
  return (
    <div>
      <section className="py-12 bg-white text-center">
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">
          Caring is the new marketing
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10">
          The Nextcent blog is the best place to read about the latest
          membership insights, trends and more. See who's joining the community,
          read about how our community are increasing their membership income
          and lot's more.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-5xl max-w-6xl mx-auto px-4">
          {cards.map((card, index) => (
            <div key={index} className="relative flex flex-col items-center">
              <div className="w-full bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition duration-300 transform hover:-translate-y-5 z-0">
                <img
                  src={card.image}
                  alt="Card Image"
                  className="w-full h-60 object-cover"
                />
              </div>

              <div
                className="w-[92%] rounded-2xl p-6 -mt-20 z-10 relative flex flex-col justify-between text-center h-44"
                style={{
                  backgroundColor: '#F5F7FA',
                  boxShadow: '0px 5.57px 11.14px 0px #ABBED166',
                }}
              >
                <h3 className="text-[#717171] font-medium text-lg mb-1">
                  {card.title}
                </h3>
                {card.subtitle && (
                  <p className="text-[#717171] font-medium text-lg mb-3">
                    {card.subtitle}
                  </p>
                )}
                <a
                  href={card.link}
                  className="text-green-500 font-semibold hover:underline inline-flex items-center justify-center"
                >
                  Readmore
                  <span className="ml-1">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Caring;
