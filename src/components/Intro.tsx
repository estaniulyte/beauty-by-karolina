'use client';
import Image from 'next/image';

const Intro = () => {
  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, '_blank', 'noopener,noreferrer');
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div className='flex flex-col md:gap-x-5 md:flex-row w-full mb-9 pt-5'>
      <div className='w-100% md:w-96'>
        <Image
          className=' sm:m-auto w-full object-fit sm:object-full'
          src='/profile.jpg'
          width={500}
          height={500}
          alt='Picture of the author'
        />
      </div>
      <div className='md:ml-5 md:w-2/3 pt-3 md:pt-24 flex flex-col gap-y-2 text-center md:text-left'>
        <p className='text-xl'></p>
        <h2 className='text-5xl font-bold md:text-6xl lg:text-7xl'>
          Veido <span className='text-amber-600'>grožio procedūros</span>{' '}
          Vilniuje
        </h2>
        <p className='mt-5 max-w-prose text-zinc-700 sm:text-lg'>
          Labas! Esu Karolina ir mano tikslas kuo natūraliau pabrėžti Tavo grožį
          kokybiškų priemonių pagalba.
        </p>
        <p className='mt-5 max-w-prose text-zinc-700 sm:text-md font-medium'>
          Susisiekime per:
        </p>
        <div className='mt-1 flex align-end justify-center md:justify-start'>
          <button
            onClick={() =>
              openInNewTab('https://www.instagram.com/karolina.st.beauty/')
            }
            type='button'
            className='w-full lg:w-1/4 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-base px-5 md:px-6 py-3 md:py-3.5 text-center me-2 mb-2'
          >
            Instagram
          </button>
          <button
            onClick={() =>
              openInNewTab(
                'https://www.facebook.com/people/Karolinabeauty/100063484149955/'
              )
            }
            type='button'
            className='w-full lg:w-1/4 text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-base px-5 md:px-6 py-3 md:py-3.5 text-center me-2 mb-2'
          >
            Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Intro;
