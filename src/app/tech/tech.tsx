import { techContent } from '@/data/techData';
import Image from 'next/image';
import Link from 'next/link';
import TechSection from '../../components/techSection';

const Tech = () => {
  return (
    <section className='w-[90%] md:w-[70%] lg:w-[50%] m-auto pt-4'>
      <div className='mb-8 last:mb-0 border-l-2 pl-4 py-8 border-navy-400'>
        <Image 
          width={585.2}
          height={127.02}
          src="/images/tech/da-oss-explorers-horizontal--inverse.png" 
          alt="DA Open Source Explorers Logo"
         />
      </div>
      {techContent.map((content, index) => (
        <TechSection key={index} {...content} />
      ))}
    </section>
  );
};

export default Tech;
