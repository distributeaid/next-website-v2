import Link from 'next/link';

const Assort = () => {
  return (
    <section>
        <div className="grid md:grid-cols-2">
            <section className=" bg-primary-brown-10 pb-8 px-4 py-8 text-[15px] leading-7">
                <h2 className=" border-l-2 border-navy-600 pl-4 py-4 text-4xl font-bold text-dark-blue mb-8">About ASSORT</h2>
                <article className="border-l-2 border-navy-400 pl-4">
                    <p className="mb-3 pt-4">The Aid Standards for Sorting (ASSORT) are a set of interoperability standards for humanitarian aid that are designed to save grassroots organisations time, effort, and money.</p>
                    <p>When quality control and sorting are not standardised, inefficiencies arise. These inefficiencies require significant expenditure of resources:</p>
                    <ul className="ml-4 list-disc py-4">
                        <li className="mb-2">
                            Quality Control - the receiver may have to pay to dispose of items that are culturally inappropriate, out of season, or poor in quality.
                        </li>
                        <li className="mb-2">
                            Sorting - 100,000 aid items on a shipment might be sorted one way by the sender and then re-sorted another way by the receiver. Sorting takes time.
                        </li>
                    </ul>
                </article>
                <article className="border-l-2 border-navy-400 pl-4">
                    <p className="mb-3"><span className="text-text-blue font-bold">That’s where ASSORT comes in.</span> ASSORT leads to faster, cheaper, and more responsive aid. By providing a “common language” for aid donations, organisations receiving aid can know ahead of time what is on an aid shipment. When the shipment arrives, they process it much faster than they otherwise could. Indeed, a pilot shipment showed that using ASSORT standards significantly cut down on the receiving organisation’s sorting and processing time. Saving time and volunteer capacity makes a big difference for grassroots aid organisations.</p>
                    <p>The ASSORT Guide includes multiple areas of standardisation:</p>
                    <ul className="ml-4 list-disc py-4">
                        <li className="mb-2">
                        How to quality check donated items meant for distribution.
                        </li>
                        <li className="mb-2">
                        How to sort donations into standard categories.
                        </li>
                        <li className="mb-2">
                        How to size clothing donations with a printable ASSORT sizing chart.
                        </li>
                        <li className="mb-2">
                        How to box and label the sorted donations and ready them for shipment.
                        </li>
                    </ul>
                </article> 
                <article className="border-l-2 border-navy-400 pl-4 mt-8">
                    <p>ASSORT was established as part of a joint partnership between 
                        <span> <Link className=' text-brown-800 font-bold underline' href="https://www.boxtribute.org/"> Boxtribute</Link>,</span>
                        <span> <Link className=' text-brown-800 font-bold underline' href="/"> Distribute Aid</Link>,</span>
                        <span> <Link className=' text-brown-800 font-bold underline' href="https://hermine.global/"> HERMINE</Link>,</span>
                        and the <span> <Link className=' text-brown-800 font-bold underline' href="https://www.iha.help/"> InterEuropean Human Aid Association</Link>.</span>
                    </p>
                </article>
            </section>
            <section className=" bg-brown-900 pb-8 px-4 py-8 text-[15px] leading-7">
                <h2 className=" border-l-2 border-navy-600 pl-4 py-4 text-4xl font-bold text-dark-blue mb-8">Download</h2>
                <div className="border-l-2 border-navy-400 pl-4">
                    <a className='text-brown-800 font-bold underline block' href="/documents/assort_guidelines_v15.pdf" download="assort_guidelines_v15">Standards Guide</a>
                    <a className='text-brown-800 font-bold underline block' href="/documents/assort_sizing_chart_v6.pdf" download="assort_sizing_chart_v6">Sizing Chart</a>
                    <p className='text-brown-800 font-bold italic mt-2'>
                        If you are an organisation intending to adopt the standards, we strongly encourage you to fill out this form to receive updates when revised versions of the standards come out:
                        <span className='text-brown-800 font-bold '> <Link className='underline' href="https://lb.benchmarkemail.com//listbuilder/signupnew?IkfHTmyPVq88gyT7h8Hzz%252F5pwVnAjsSIBdsuOiiRRR3tO5iNRn8gS049TyW7spdJ">Stay Up To Date</Link>!</span>
                    </p>
                </div>
            </section>
        </div>
    </section>
  )
}

export default Assort