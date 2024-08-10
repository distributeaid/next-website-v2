import Link from 'next/link';

interface TechSectionProps {
    getInTouch?: { textStart?: string; linkText?: string; href?: string };
    applicationProcess?: { text?: string; textStart?: string; linkText?: string; href?: string }[];
    applyLink?: string;
    description?: { text: string; textStart?: string; linkText?: string; href?: string }[];
    links?: { textStart?: string; linkText: string; text: string; href: string }[];
    listItems?: string[];
    nestedLists?: { title: string; listItems: string[] }[];
    specificProjects?: { text?: string; textStart?: string; linkText?: string; href?: string }[];
    subHeading?: string;
    subHeadingText?: string;
    subHeadingDescription?: string;
    title: string;
  }

const TechSection = ({ 
  getInTouch, applicationProcess, applyLink, description, links, listItems, nestedLists, specificProjects, subHeading, subHeadingText, subHeadingDescription, title 
}: TechSectionProps) => {
  return (
    <section className='mt-20'>
      <h2 className='border-l-2 pl-4 border-navy-600 mb-8 text-4xl font-bold text-dark-blue'>{title}</h2>
      <article className='border-l-2 pl-4 border-navy-400 mb-8'>
        {description?.map((descObj, index) => (
            (descObj.linkText && descObj.href)
            ?
            <p key={index} className='mb-4'>{descObj.textStart} <strong><Link className='text-brown-800 font-bold underline mt-4' href={descObj.href}>{descObj.linkText}</Link></strong>{descObj.text}</p>
            :
            <p key={index} className='mb-4'>{descObj.text}</p>
          
        ))}
        {
          nestedLists && (
            <ul className="ml-4 list-disc py-4">
              {nestedLists?.map((listObj, index) => (
                <li key={index} className='mb-3'>
                  {listObj.title}
                  <ul className="ml-6 list-disc mt-2">
                    {listObj.listItems.map((item, i) => (
                      <li key={i} className='mb-3'>{item}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )
        }
        {
          applicationProcess && applicationProcess.map((process, index) => (
            <div key={index}>
              <p className='mb-4'>
                <strong className=' text-text-blue'>{process.textStart}</strong>
                {(process.linkText && process.href) && (
                  <strong>
                    <Link className='text-brown-800 font-bold underline mt-4' href={process.href}>{process.linkText}</Link>
                  </strong>
                )}
                {process.text}
              </p>
            </div>
          ))
        }
        {
          subHeadingText && (
            <h3 className='mt-4 text-xl mb-2 font-bold text-dark-blue'>{subHeadingText}</h3>
          )
        }
        {
          subHeadingDescription && (
            <p className='mb-4'>{subHeadingDescription}</p>
          )
        }
        {listItems && (
          <ul className="ml-4 list-disc py-4">
            {listItems?.map((track, index) => (
              <li key={index} className='mb-2'>{track}</li>
            ))}
          </ul>
        )}
        {
          subHeading && (
            <h3 className='mt-4 text-xl mb-2 font-bold'>{subHeading}</h3>
          )
        }
        {specificProjects && (
          <ul className="ml-4 list-disc py-4">
            {specificProjects.map((project, index) => (
              <li key={index} className='mb-2'>
                {project?.textStart ? project?.textStart + " " : ""}{project.href ? <strong><Link className='text-brown-800 font-bold underline mt-4' href={project.href}>{project?.linkText}</Link></strong> : ""}{project.text}
              </li>
            ))}
          </ul>
        )}
        {applyLink && <strong><Link className='text-brown-800 font-bold underline mt-4' href={applyLink}>Apply Now</Link></strong>}
        {
          getInTouch && (
            <p className='mb-4 mt-4'>
              {getInTouch.textStart ? getInTouch.textStart : ""}{" "}
              {getInTouch.href ? (
                <strong>
                  <Link className='text-brown-800 font-bold underline mt-4' href={getInTouch.href}>
                    {getInTouch.linkText}
                  </Link>
                </strong>
              ) : (
                ""
              )}
            </p>
          )
        }
      </article>
      {
        links && (
          <article className='border-l-2 pl-4 border-navy-400'>
            <ul className="ml-4 list-disc py-4">
              {links.map((linkObj, index) => (
                <li key={index} className='mb-2'>
                  {linkObj?.textStart ? linkObj?.textStart + " " : ""}<strong><Link className='text-brown-800 font-bold underline mt-4' href={linkObj.href}>{linkObj?.linkText}</Link></strong>{linkObj.text}
                </li>
              ))}
            </ul>
          </article>
        )
      }

    </section>
  );
};

export default TechSection;
