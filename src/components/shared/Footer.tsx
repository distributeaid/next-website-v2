import { SOCIAL_LINKS } from '@/data/constants';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='h-[256px] w-full bg-navy-100 flex flex-col items-center justify-center text-center space-y-4'>
      <p>
        Email us at{' '}
        <a
          href='mailto:hello@distributeaid.org'
          className='text-navy-700 font-medium'
        >
          hello@distributeaid.org(opens in your email client)
        </a>
      </p>

      <div className='flex items-center font-medium space-x-1'>
        <a
          href='https://distributeaid.org/whistleblowing-policy'
          className='text-navy-700'
        >
          Whistleblowing Policy
        </a>
        <span>.</span>
        <a
          href='https://distributeaid.org/code-of-conduct'
          className='text-navy-700'
        >
          Code of Conduct
        </a>
      </div>

      <div className='flex justify-center space-x-2'>
        {SOCIAL_LINKS.map((social) => (
          <a
            href={social.link}
            key={social.name}
            target='_blank'
          >
            <Image
              src={`/images/social-icons/${social.name}.svg`}
              alt={social.name}
              width={40}
              height={40}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Footer;
