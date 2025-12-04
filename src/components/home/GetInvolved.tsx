"use client";
import { type FormEvent, useRef } from "react";
import {
  Box,
  Button,
  Heading,
  Text,
  TextField,
  Flex,
  Grid,
} from "@radix-ui/themes";

import { getInvolvedLinks } from "@/data/home/get-involved";

const GetInvolved = () => {
  const emailInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const email = emailInputRef.current?.value;
    console.log(email);
  };

  return (
    <section>
      <Flex direction="column" align="center">
        <Heading
          as="h2"
          className="text-navy-900 text-6xl"
          m="4"
          id="testimonial-heading"
        >
          Get Involved
        </Heading>
        <Text size="4" m="4">
          Three Ways To Make A Difference
        </Text>
      </Flex>
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
                    style={{
                      backgroundColor: bgColor,
                      height: "228px",
                      width: "228px",
                      borderRadius: "100%",
                    }}
                    justify="center"
                    align="center"
                  >
                    <Icon />
                  </Flex>
                  <Text weight="medium" size="8">
                    {label}
                  </Text>
                  <Button size="3">
                    <a href={href}>{buttonLabel ?? label}</a>
                  </Button>
                </Flex>
              </li>
            ),
          )}
        </ul>
      </Grid>

      {/*<Box
        style={{
          backgroundColor: "var(--pink-5)",
        }}

      >
        <Box py="8" px="4" maxWidth="1242px" mx="auto">
          <Heading as="h3" size="8">
            Stay Connected With Distribute Aid
          </Heading>
          <Text>
            Join our monthly newsletter for the latest updates on humanitarian
            logistics, inspiring impact stories, and ways to support grassroots
            aid efforts. No spam—just meaningful insights, once a month.
          </Text>
          <Flex
            gap="5"
            mt="4"
            direction={{
              initial: "column",
              lg: "row",
            }}
            asChild
          >
            <form onSubmit={handleSubmit}>
              <TextField.Root
                size="3"
                placeholder="Enter email address"
                aria-label="Email"
                className="grow"
                ref={emailInputRef}
              />
              <Button size="3" className="grow" type="submit">
                Subscribe Now
              </Button>
            </form>
          </Flex>
        </Box>
      </Box>*/}
    </section>
  );
};

export default GetInvolved;
