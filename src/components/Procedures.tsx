interface Item {
  name: string;
  image: string;
}

interface Props {
  items: Item[];
}

const Procedures = ({ items }: Props) => {
  return (
    <>
      <div className='relative isolate'>
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
        <h1 className='text-3xl uppercase text-center font-medium mb-9'>
          Procedūros
        </h1>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4'>
          {items.length &&
            items.map((item) => {
              return (
                <div
                  key={item.name}
                  className='w-full relative justify-center items-center aspect-square bg-slate-300'
                >
                  <img
                    className='object-cover h-[100%] w-[100%]'
                    src={item.image}
                    alt='Procedure image'
                  ></img>
                  {/* <h4 className='text-center uppercase text-xl max-w-[60%] leading-relaxed font-semibold'>

                    {item.name}
                  </h4> */}
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
