import Image from 'next/image';

const Intro = () => {
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
          Veido <span className='text-amber-700'>grožio procedūros</span>{' '}
          Vilniuje
        </h2>
        <p className='mt-5 max-w-prose text-zinc-700 sm:text-lg'>
          Labas! Esu Karolina ir mano tikslas kuo natūraliau pabrėžti Tavo grožį
          kokybiškų priemonių pagalba.
        </p>
      </div>
    </div>
  );
};

export default Intro;
