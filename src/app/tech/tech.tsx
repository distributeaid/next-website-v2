import Image from 'next/image';

const Tech = () => {
  return (
    <section className='w-[90%] md:w-[80%] lg:w-[70%] m-auto my-12 flex flex-col prose pt-4'>
      <div className='mb-8 last:mb-0 border-l-2 pl-4 py-10 border-navy-400'>
        <Image 
          width={585.2}
          height={127.02}
          src="/images/tech/da-oss-explorers-horizontal--inverse.png" 
          alt="DA Open Source Explorers Logo"
         />
      </div>
    </section>
  );
};

export default Tech;
