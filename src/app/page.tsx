'use client'

// app/page.tsx
import Image from 'next/image'
import { useState, useEffect} from 'react'
import Spline from '@splinetool/react-spline'

interface ContentItem {
  id: number
  title: string
  question: string
  explanation: string
  image: string
  side: 'left' | 'right'
}

const contents: ContentItem[] = [
  {
    id: 1,
    title: 'What is Davinxi?',
    question: 'What is Davinxi and what does it focus on?',
    explanation: 'Davinxi is an innovative startup focused on developing artificial intelligence solutions for various sectors. Our mission is to harness the power of AI to improve efficiency and productivity for companies.',
    image: '/assets/img.png',
    side: 'left',
  },
  {
    id: 2,
    title: 'Our Products',
    question: 'What products does Davinxi offer?',
    explanation: 'Our main products are: \n\n1. AI-based data analysis system to optimize business processes.\n2. Intelligent virtual assistant to improve customer experience.\n3. AI-powered task automation platform.',
    image: '/assets/img.png',
    side: 'right',
  },
  {
    id: 3,
    title: 'Our Team',
    question: 'Who makes up the Davinxi team?',
    explanation: 'Our team consists of experts in artificial intelligence, data scientists, software engineers, and business professionals. We all work closely together to develop innovative solutions that drive our clients\' growth.',
    image: '/assets/img.png',
    side: 'left',
  },
  {
    id: 4,
    title: 'Our Vision',
    question: 'What is Davinxi\'s vision?',
    explanation: 'Our vision is to become a global leader in the development of artificial intelligence solutions. We want to transform the way companies operate, making them more efficient, productive, and competitive through the implementation of cutting-edge technologies.',
    image: '/assets/img.png',
    side: 'right',
  },
]

export default function Home() {
  const [activeContent, setActiveContent] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative min-h-screen bg-black" >
      
        <Spline scene="https://draft.spline.design/9lMrBnhabDli1fkB/scene.splinecode" />
      
      <div className="absolute inset-0 flex py-2 md:py-4">
        <div className="flex flex-col justify-center px-2 md:px-4 w-1/4 md:w-1/5">
          {contents
            .filter((content) => content.side === 'left')
            .map((content) => (
              <button
                key={content.id}
                className={`text-white hover:text-pink-700 focus:outline-none transition-colors duration-300 py-2 text-sm md:text-base ${
                  activeContent === content.id ? 'text-blue-500' : ''
                }`}
                onClick={() => setActiveContent(content.id)}
              >
                {content.title}
              </button>
            ))}
        </div>
        <div className="flex-grow flex justify-center items-center relative">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex items-center">
            <div className="w-24 h-24 md:w-32 md:h-32 mr-2 md:mr-4">
              <Image
                src="/assets/img.png"
                alt="Logo"
                width={100}
                height={100}
                className="md:w-auto md:h-auto"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold">Davinxi</h1>
          </div>
          {contents.map((content) => (
            <div
              key={content.id}
              className={`flex justify-center w-full absolute transition-opacity duration-500 ${
                activeContent === content.id
                  ? 'opacity-100'
                  : 'opacity-0 pointer-events-none'
              }`}
            >
              <div
                className={`flex flex-col ${
                  content.side === 'left'
                    ? 'items-end mr-auto ml-2 md:ml-4'
                    : 'items-start ml-auto mr-2 md:mr-4'
                } bg-black bg-opacity-50 p-4 md:p-8 rounded-lg shadow-lg max-w-md md:max-w-xl`}
              >
                <h2 className="text-gray-300 mb-2 text-xs md:text-sm">
                  {content.question}
                </h2>
                <p className="text-gray-300 mb-4 whitespace-pre-line text-xs md:text-sm">
                  {content.explanation}
                </p>
                <Image
                  src={content.image}
                  alt={content.title}
                  width={200}
                  height={150}
                  className="mb-4 md:mb-8"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center px-2 md:px-4 w-1/4 md:w-1/5">
          {contents
            .filter((content) => content.side === 'right')
            .map((content) => (
              <button
                key={content.id}
                className={`text-white hover:text-pink-700 focus:outline-none transition-colors duration-300 py-2 text-sm md:text-base ${
                  activeContent === content.id ? 'text-blue-500' : ''
                }`}
                onClick={() => setActiveContent(content.id)}
              >
                {content.title}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}