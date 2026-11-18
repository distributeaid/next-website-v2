import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cache, type ReactNode } from "react";
import { Box, Container, Heading, Section } from "@radix-ui/themes";
import { MarkdownContent } from "@/components/markdown/MarkdownContent";
import { getRecruitingRole } from "@/utils/strapi/api";

const getRole = cache(getRecruitingRole);

const markdownWrapper = (children: ReactNode) => (
  <div className="space-y-4 text-gray-700 [&_ol]:list-decimal [&_ol]:pl-5 [&_ul]:list-disc [&_ul]:pl-5">
    {children}
  </div>
);

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const role = await getRole(slug);
  return role ? { title: `${role.title} · Distribute Aid` } : {};
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const role = await getRole(slug);

  if (!role) notFound();

  return (
    <main id="main-content">
      <Section className="bg-navy-900" size="1">
        <Container px="4">
          <Heading
            as="h1"
            size={{ initial: "8", sm: "9" }}
            weight="bold"
            className="text-white md:text-center"
          >
            {role.title}
          </Heading>
        </Container>
      </Section>
      <Section size="2">
        <Container px="4">
          <Box className="mx-auto max-w-3xl">
            <Link
              href="/work-with-us"
              className="text-navy-700 underline underline-offset-4"
            >
              Back to all roles
            </Link>
            {role.roleDetails.length > 0 && (
              <Box mt="6">
                <Heading as="h2" size="6" mb="4" className="text-navy-800">
                  About the role
                </Heading>
                <dl className="grid gap-x-6 gap-y-3 sm:grid-cols-[auto_1fr]">
                  {role.roleDetails.map((detail) => (
                    <div key={detail.id} className="sm:contents">
                      <dt className="font-bold text-navy-800">
                        {detail.label}
                      </dt>
                      <dd className="text-gray-700">{detail.value}</dd>
                    </div>
                  ))}
                </dl>
              </Box>
            )}
            {role.sections.map((section) => (
              <Box key={section.id} mt="7">
                <Heading as="h2" size="6" mb="4" className="text-navy-800">
                  {section.heading}
                </Heading>
                <MarkdownContent
                  content={section.content}
                  wrapper={markdownWrapper}
                />
              </Box>
            ))}
            <Box mt="7" pt="6" className="border-t border-navy-200">
              <Heading as="h2" size="6" mb="4" className="text-navy-800">
                How to apply
              </Heading>
              <MarkdownContent
                content={role.applicationInstructions}
                wrapper={markdownWrapper}
              />
            </Box>
            <Box mt="7">
              <Link
                href="/work-with-us#values"
                className="text-navy-700 underline underline-offset-4"
              >
                Read our shared values
              </Link>
            </Box>
          </Box>
        </Container>
      </Section>
    </main>
  );
}
