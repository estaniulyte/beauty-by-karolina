import Image from 'next/image';

const Intro = () => {
  return (
    <div className='flex flex-col md:gap-x-5 md:flex-row w-full mb-9'>
      <div className='w-100% md:w-96'>
        <img
          className='object-cover'
          src='https://drive.google.com/uc?export=download&id=1FdW__pWqKDHYcRAK9dd3kPv7YgliGbiv'
          alt='Portrait picture'
        />
      </div>
      <div className='md:ml-5 md:w-1/3 pt-3 md:pt-24 flex flex-col gap-y-2'>
        <p className='text-2xl'>Sveiki!</p>
        <h2 className='text-3xl font-semibold'>Esu grožio meistrė Karolina</h2>
        <p className='text-xl'>
          Mano tikslas kuo natūraliau pabrėžti jūsų grožį kokybiškų priemonių
          pagalba
        </p>
      </div>
    </div>
  );
};

export default Intro;
