import Image from 'next/image';

interface Item {
  name: string;
  image: string;
  alt: string;
}

interface Props {
  items: Item[];
}

const Procedures = ({ items }: Props) => {
  return (
    <>
      <div className='relative isolate mt-12'>
        <div
          aria-hidden='true'
          className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
          />
        </div>
        <h2 className='text-4xl sm:text-5xl md:text-center font-bold mb-9 text-gray-900'>
          Procedūros
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          {items.length &&
            items.map((item) => {
              return (
                <div
                  key={item.name}
                  className='w-full relative justify-center items-center aspect-square bg-slate-300'
                >
                  <Image
                    src={item.image}
                    width={500}
                    height={500}
                    className='object-cover h-[100%] w-[100%]'
                    alt={item.alt}
                  />
                  <div className='absolute inset-0 bg-black opacity-60 rounded-md'></div>
                  <div className='absolute inset-0 flex items-center justify-center'>
                    <h2 className='text-white text-3xl font-bold text-center max-w-[60%]'>
                      {item.name}
                    </h2>
                  </div>
                </div>
              );
            })}
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Procedures;
