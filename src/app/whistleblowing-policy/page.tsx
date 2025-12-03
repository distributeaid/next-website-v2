import { Box, Heading, Text, Link } from "@radix-ui/themes";

import "./style.css";

const page = () => (
  <main className="[&>section]:p-6">
    <Heading as="h1" align="center" size="8" m="8">
      Whistleblowing Policy
    </Heading>
    <section className="[&>p]:pb-6">
      <Text as="p">
        Distribute Aid requires directors, coordinators, and other volunteers to
        observe high standards of organisational and personal ethics in the
        conduct of their duties and responsibilities. As representatives of
        Distribute Aid, we must practice honesty and integrity in fulfilling our
        responsibilities and comply with all applicable laws, regulations, and
        internal ethical policies. Doing this helps us be as effective as
        possible at pursuing our mission!
      </Text>
      <Text as="p">
        This Whistleblower Policy is intended to encourage and enable
        individuals to raise serious concerns without retribution so that
        Distribute Aid can address and correct inappropriate conduct and
        actions. It is the responsibility of all board members, directors,
        coordinators, and volunteers to report concerns about violations of{" "}
        <Link href="/">Distribute Aid’s Code of Conduct</Link> or suspected
        violations of law or regulations that govern Distribute Aid’s
        operations. Such violations could include using racist, sexist, ableist,
        or otherwise derogatory and discriminatory language, or graver
        violations such as putting the safety of people on the move at risk by
        willfully exposing locations or publicising photographs with sensitive
        information.
      </Text>
      <Text as="p">
        It is the policy of Distribute Aid that a Whistleblower shall receive no
        retaliation or retribution for a report that was provided in good faith.
        Anyone who retaliates against the Whistleblower (who reported an event
        in good faith) at any point in the process described below will be
        subject to discipline.
      </Text>
      <Text as="p">
        The following outlines the procedure for anyone to raise concerns about
        the conduct of any member of Distribute Aid or practice carried out by
        the organisation.
      </Text>
    </section>
    <section className="bg-gray-100 p-6" id="internal-reporting-procedure">
      <Heading>
        Internal Reporting Procedure for Individuals with a Concern is as Such:
      </Heading>
      <ol className="list-decimal pl-6 [&>*]:my-5">
        <li className="[&>ol>*]:my-5 [&>ol]:list-[lower-latin]">
          The Whistleblower begins the process when they have good faith,
          reasonable grounds for believing that a violation has occurred.
          <ol className="list-decimal pl-6">
            <li>
              If the person is not acting in good faith and offers
              unsubstantiated allegations made maliciously or knowingly to be
              false, this can be viewed as a disciplinary offence.
            </li>
          </ol>
        </li>
        <li className="[&>ol>*]:my-5 [&>ol]:list-[lower-latin]">
          Assuming they are acting in good faith, the Whistleblower should first
          decide if they wish for their report to be anonymous or not.
          <ol className="pl-6">
            <li>
              If they do not wish to report anonymously, they may use any
              written medium (email, document, etc.) to file the report with the
              proper individual, per step 3.
            </li>
            <li>
              If they do wish to report anonymously, they should create an
              account on ProtonMail{" "}
              <Link id="footnote-1-ref" href="#footnote-1">
                ¹
              </Link>{" "}
              with an anonymous address, such as a random sequence of numerals.
              See <Link href="#appendix-b">Appendix B</Link> of this document
              for instructions on how to set up a Proton Mail Account to File a
              Report{" "}
              <Link id="footnote-2-ref" href="#footnote-2">
                ²
              </Link>
              .
            </li>
          </ol>
        </li>
        <li>
          If the Whistleblower is uncomfortable or otherwise reluctant to report
          to the relevant director (for example, if said director is the source
          of the concern), then the Whistleblower may report the event to the
          next highest level of management, which is the Executive Director (see{" "}
          <Link href="#appendix-a">Appendix A</Link> of this document for
          contact information). If the Whistleblower is uncomfortable or
          otherwise reluctant to report to the relevant director and the
          Executive Director, then the Whistleblower may report the event to an
          appropriate board member (see{" "}
          <Link href="#appendix-a">Appendix A</Link> of this document for
          contact information). For financial concerns the Whistleblower may
          contact the Auditor (see <Link href="#appendix-a">Appendix A</Link> of
          this document for contact information).
        </li>

        <li className="[&>ol>*]:my-5 [&>ol]:list-[lower-latin]">
          It is the responsibility of the person who receives a report to
          promptly investigate and/or resolve the issue.
          <ol className="pl-6">
            <li>
              Throughout this investigation and the entire process, the identity
              of the Whistleblower, if known, shall remain confidential to all
              persons directly involved in applying this policy, unless the
              issue requires investigation by law enforcement, in which case
              members of the organisation may be required to disclose this
              information to law enforcement.
            </li>
          </ol>
        </li>
        <li className="[&>ol>*]:my-5 [&>ol]:list-[lower-latin]">
          The investigating individual shall send a report to the Whistleblower
          within seven days of the initial report, regarding the investigation,
          disposition, or resolution of the issue. This report must be in
          writing.
          <ol className="pl-6">
            <li>
              If the initial report was not filed anonymously, then the
              investigative report may be issued by email or print to the
              Whistleblower.
            </li>
            <li>
              If the initial report was filed anonymously, then the
              investigative report must be sent via ProtonMail to the same
              address that the initial report came from.
            </li>
          </ol>
        </li>
        <li className="[&>ol>*]:my-5 [&>ol]:list-[lower-latin]">
          If the Whistleblower is not satisfied with the report from the
          internal investigator, then they have the right to report the event to
          the next highest level of authority within the organisation for
          another 7-day investigation or to the appropriate legal or
          investigative agency. If the Whistleblower chooses to report
          internally, then the process returns to step 2.
          <ol className="pl-6">
            <li>
              For example, if someone is unsatisfied with the Operations Leads’
              resolution, they could file a second report with the Executive
              Director.
            </li>
          </ol>
        </li>
      </ol>
      <Text as="p" id="footnote-1" size="2">
        <Link href="#footnote-1-ref">¹</Link> ProtonMail is an anonymous,
        end-to-end encrypted, Swiss-based email service that does not require
        personal information and does not log IP addresses. It has a reputation
        for true anonymity and security. Setting up an account can be done
        quickly and easily.
      </Text>
      <Text as="p" id="footnote-2" size="2">
        <Link href="#footnote-2-ref">²</Link> The Whistleblower should take care
        to record their login details for ProtonMail so that they can log back
        in and see when a response comes in, since DA will not be able to see or
        reset their password.
      </Text>
    </section>
    <section id="reporting-to-authorities">
      <Heading as="h2">Reporting to Authorities</Heading>
      <Text as="p">
        At any point during the process, a Whistleblower may choose to file a
        report with the appropriate legal or investigative agency, outside of
        Distribute Aid. Crimes against persons or property, such as assault,
        burglary, etc., should immediately be reported to local law enforcement
        personnel. Sweden does not have a dedicated agency for overseeing
        non-profit organisations.
      </Text>
      <Text as="p">
        The following agencies may be helpful depending on the nature of the
        issue:
      </Text>
      <ul className="list-disc  pl-6 [&>*]:my-5">
        <li>
          Swedish Tax Agency,{" "}
          <Link href="https://www.skatteverket.se/" target="_blank">
            skatteverket.se
          </Link>
          , <Link href="tel:+46771567567">+46 771 567 567</Link>
        </li>
        <li>
          Swedish Consumer Agency,{" "}
          <Link
            href="https://www.konsumentverket.se/languages/english-engelska/this-is-how-you-file-a-complaint/"
            target="_blank"
          >
            report form
          </Link>
          ,{" "}
          <Link href="mailto:konsumentverket@konsumentverket.se">
            konsumentverket@konsumentverket.se
          </Link>
        </li>
        <li>
          Swedish Police,{" "}
          <Link
            href="https://polisen.se/en/victims-of-crime/making-a-report/"
            target="_blank"
          >
            report form
          </Link>
          , <Link href="tel:+771141400">+46 77 114 14 00</Link>.
        </li>
      </ul>
    </section>
    <section id="appendix-a" className="bg-gray-100 p-6">
      <Heading as="h2" mb="4">
        Appendix A: Contact Information for Relevant Parties
      </Heading>
      <Heading as="h3">Coordinators</Heading>
      <section>
        <Heading as="h4" size="5">
          Operations Lead
        </Heading>
        <address>
          <Heading as="h5" size="4">
            Taylor Fairbank
          </Heading>
          <Text as="p">Email: taylor@distributeaid.org</Text>
          <Text as="p">ProtonMail: taylordistributeaid@proton.me</Text>
        </address>
      </section>
      <section>
        <Heading as="h4" size="5">
          European Director
        </Heading>
        <address>
          <Heading as="h5" size="4">
            Nicole Tingle
          </Heading>
          <Text as="p">Email: nicole@distributeaid.org</Text>
          <Text as="p">ProtonMail: NicoleDistributeAid@proton.me</Text>
        </address>
      </section>
      <section>
        <Heading as="h4" size="5">
          Director
        </Heading>
        <address>
          <Heading as="h5" size="4">
            Sara Lönegård
          </Heading>
          <Text as="p">Email: sara@distributeaid.org</Text>
          <Text as="p">ProtonMail: saradistributeaid@proton.me</Text>
        </address>
      </section>
      <Heading as="h3">Board Members</Heading>
      <section>
        <address>
          <Heading as="h5" size="4">
            Rudayna Abdo
          </Heading>
          <Text as="p">Email: rudayna@thaki.org</Text>
          <Text as="p">ProtonMail: rudaynadistributeaid@proton.me</Text>
        </address>
        <address>
          <Heading as="h5" size="4">
            Stephanie Fairbank
          </Heading>
          <Text as="p">Email: stephanie@distributeaid.org</Text>
          <Text as="p">ProtonMail: stephaniedistributeaid@proton.me</Text>
        </address>
      </section>
    </section>
    <section id="appendix-b">
      <Heading as="h2">
        Appendix B: Instructions for Setting Up Proton Mail Account to{" "}
        <em>File a Report</em>
      </Heading>
      <ol className="list-decimal ml-6 [&>ol]:list-[lower-latin]">
        <li className="mb-4">
          Go to{" "}
          <Link
            href="https://protonmail.com/"
            target="_blank"
            rel="noreferrer noopener"
          >
            protonmail.com
          </Link>
          .
        </li>
        <li className="mb-4">Select “Sign Up” in the top right.</li>
        <li className="mb-4">
          Select the “Free” option and then click “Select Free Account.”
        </li>
        <li className="mb-4">
          Select a username that is not personally identifiable, like a
          meaningless string of numerals. Select a password, and record it
          somewhere so that you can access your account later.
        </li>
        <li className="mb-4">
          You may choose to add a recovery method. If you do not do this and
          lose your password, then you will be unable to log into your account
          later to check on the status of your report and receive your 7 day
          investigative report. If you do choose to add a recovery method, this
          information will not be visible to Distribute Aid at any point during
          the reporting process.
          <ol className="list-decimal ml-6 mt-2">
            <li className="mb-4">
              If you do not wish to add a recovery method, click “Skip”.
            </li>
          </ol>
        </li>
        <li className="mb-4">Select the free plan once again.</li>
        <li className="mb-4">
          Verify that you are a human via Captcha or one of the other options.
        </li>
        <li className="mb-4">
          You should be redirected to an email inbox. You can now compose a
          message.
        </li>
      </ol>
    </section>
    <Box className="p-6 bg-gray-100">
      <Text>
        This policy was adapted from sample whistleblower policies from the{" "}
        <Link
          href="https://www.councilofnonprofits.org/sites/default/files/Sample%20WhistleblowerPolicy%202.2010.pdf"
          target="_blank"
        >
          National Council of Nonprofits
        </Link>{" "}
        and{" "}
        <Link
          href="https://managementhelp.org/misc/Sample-Whistleblower-Policy.pdf"
          target="_blank"
        >
          Authenticity Consulting, LLC
        </Link>
        .
      </Text>
    </Box>
  </main>
);

export default page;
