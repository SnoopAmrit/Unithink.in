import React from 'react';
import { FaTrophy } from 'react-icons/fa'; // Import FontAwesome trophy icon

const awards = [
  {
    title: 'Global Women in Business & Leadership Awards',
    year: 2023,
    description: 'by GCPIT',
    imgSrc: 'https://firebasestorage.googleapis.com/v0/b/unithink-89630.appspot.com/o/awards%20icons%2Fgcpit.png?alt=media&token=4599b54d-024b-47a2-9d1f-59070e93f2ff',
  },
  {
    title: 'Outstanding Management and Entrepreneurship Education Institute',
    year: 2022,
    description: 'by CISME and GCPIT on 24th Sept',
    imgSrc: 'https://firebasestorage.googleapis.com/v0/b/unithink-89630.appspot.com/o/awards%20icons%2Fcisme.png?alt=media&token=9e9432a1-fd74-4092-a91d-896c510bcaab',
  },
  {
    title: 'Eminent Academician Award',
    year: 2022,
    description: 'by M S Ramaiah Foundation at RIMS Bangalore on 10th Sept',
    imgSrc: 'https://firebasestorage.googleapis.com/v0/b/unithink-89630.appspot.com/o/awards%20icons%2FMSRF%20logo.png?alt=media&token=f487a8c4-7845-435c-950e-f1e3fede137a',
  },
  {
    title: 'Best Academician Award',
    year: 2022,
    description: 'by St. Mother Theresa University',
    imgSrc: 'https://firebasestorage.googleapis.com/v0/b/unithink-89630.appspot.com/o/awards%20icons%2Fstmothertheresauniversity_logo.jpeg?alt=media&token=4d92c352-790a-4fcf-a6b3-e398feead283',
  },
  {
    title: 'Certificate of Appreciation for OMC-Google Challenge',
    year: 2021,
    description: 'by INADES from 20th Oct 2020 to 15th March 2021',
    imgSrc: 'https://firebasestorage.googleapis.com/v0/b/unithink-89630.appspot.com/o/awards%20icons%2Fgoogle%20omc.png?alt=media&token=849443c5-b8df-4ad6-8aea-b31024acafdb',
  },
  {
    title: 'Outstanding Management Teacher Award',
    year: 2018,
    description: 'by MTC Global on 13th Sept',
    imgSrc: 'https://firebasestorage.googleapis.com/v0/b/unithink-89630.appspot.com/o/awards%20icons%2FMTC%20Global%20awards.jpg?alt=media&token=ef822ed7-9df1-46e5-8e81-8aa68c8e8fd7',
  },
  {
    title: 'AIMA-Accredited Management Teacher',
    year: 2011,
    description: 'certified by the All India Management Association (AIMA)',
    imgSrc: 'https://firebasestorage.googleapis.com/v0/b/unithink-89630.appspot.com/o/awards%20icons%2Faima.png?alt=media&token=eee1eef8-d7d4-4710-b37a-e7c398bad310',
  },
];

const AwardsPage = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-3xl">
        <h1 className="uppercase text-center font-bold tracking-widest text-gray-800 text-left mb-8">
          Awards and Accolades
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {awards.map((award, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 text-center border-2 border-yellow-400"
          >
            <FaTrophy className="text-yellow-400 text-2xl mx-auto mb-3" />
            <img
              src={award.imgSrc}
              alt={award.title}
              className="mx-auto w-16 h-16 mb-3 rounded-full"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-1">
              {award.title}
            </h3>
            <p className="text-gray-600 text-sm">{award.description}</p>
            <p className="text-gray-600 text-sm mt-2">Year: {award.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardsPage;
