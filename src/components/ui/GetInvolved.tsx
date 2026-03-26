"use client";
import { type FormEvent, useRef, useState } from "react";
import {
  Box,
  Button,
  Heading,
  Text,
  TextField,
  Flex,
  Grid,
} from "@radix-ui/themes";

import { getInvolvedLinks } from "@/data/getInvolved";

import Section from "./SectionWithTitle";

const GetInvolved = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);
  const [newsletterSuccess, setNewsletterSuccess] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const email = emailInputRef.current?.value;

      if (!email) {
        throw Error("Email is missing :(");
      }

      const body = JSON.stringify({ email });

      const res = await fetch("/api/newsletter", {
        method: "POST",
        body,
      });
      if (res.status === 200) {
        setNewsletterSuccess(true);
      }
    } catch (error) {}
  };

  return (
    <Section
      title="Get Involved"
      subTitle="Three Ways To Make A Difference"
      noPadding
    >
      <Grid
        columns={{
          initial: "1",
          md: "3",
        }}
        gap="9"
        asChild
        mt="8"
        mb="9"
      >
        <ul>
          {getInvolvedLinks.map(
            ({ label, buttonLabel, href, bgColor, Icon }) => (
              <li key={label}>
                <Flex key={label} direction="column" align="center" gap="6">
                  <Flex
                    className="h-[228px] w-[228px] rounded-full"
                    style={{
                      backgroundColor: bgColor,
                    }}
                    justify="center"
                    align="center"
                  >
                    <Icon />
                  </Flex>
                  <Text weight="medium" size="8">
                    {label}
                  </Text>
                  <Button size="3" asChild>
                    <a href={href}>{buttonLabel ?? label}</a>
                  </Button>
                </Flex>
              </li>
            ),
          )}
        </ul>
      </Grid>

      <Box className="bg-fuchsia-100" id="newsletter-signup">
        <Box id="newsletter-signup" py="8" px="4" maxWidth="1242px" mx="auto">
          <Heading as="h3" size="8">
            Stay Connected With Distribute Aid
          </Heading>
          <Text>
            Join our monthly newsletter for the latest updates on humanitarian
            logistics, inspiring impact stories, and ways to support grassroots
            aid efforts. No spam—just meaningful insights, once a month.
          </Text>
          {newsletterSuccess ? (
            <Box className="text-center" m="5" data-testid="newsletter-success">
              <Heading size="7">Success!</Heading>
              <Text size="4">
                Thanks for signing up! Please check your email to confirm your
                subscription.
              </Text>
            </Box>
          ) : (
            <Flex
              gap="5"
              mt="4"
              direction={{
                initial: "column",
                lg: "row",
              }}
              asChild
            >
              <form onSubmit={handleSubmit} data-testid="newsletter-form">
                <TextField.Root
                  size="3"
                  placeholder="Enter email address"
                  aria-label="Email"
                  className="grow"
                  ref={emailInputRef}
                  required
                  type="email"
                />
                <Button size="3" className="grow" type="submit">
                  Subscribe Now
                </Button>
              </form>
            </Flex>
          )}
        </Box>
      </Box>
    </Section>
  );
};

export default GetInvolved;
