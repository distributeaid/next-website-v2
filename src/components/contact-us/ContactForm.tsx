"use client";
import { useRef, useState } from "react";
import { RxQuestionMarkCircled } from "react-icons/rx";
import {
  Box,
  Button,
  Flex,
  Grid,
  Link,
  Text,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import Image from "next/image";

import IconHeader from "../text/IconHeader";
import ErrorModal from "./ErrorModal";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [formState, setFormState] = useState({
    success: false,
    error: false,
    loading: false,
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setFormState((prev) => ({ ...prev, loading: true }));
      const form = formRef.current;
      const data = new FormData(form!);
      const body = JSON.stringify(Object.fromEntries(data.entries()));

      const res = await fetch("/api/send", {
        method: "POST",
        body,
      });

      if (res.status === 200) {
        setFormState((prev) => ({ ...prev, success: true, loading: false }));
      } else {
        setFormState((prev) => ({ ...prev, error: true, loading: false }));
      }
    } catch (error) {
      setFormState((prev) => ({ ...prev, error: true, loading: false }));
    }
  };

  const toggleError = () =>
    setFormState((prev) => ({ ...prev, error: !prev.error }));

  const labelStyle: React.CSSProperties = {
    color: "#224BA4",
    fontWeight: 500,
    font: "14px",
  };

  const inputStyle: React.CSSProperties = {
    padding: "8px",
    minHeight: "46px",
  };

  return (
    <>
      <Flex
        direction={{
          initial: "column-reverse",
          md: "row",
        }}
        gap="8"
        my="8"
        mx={{ initial: "5", lg: "auto" }}
        maxWidth={{ initial: "auto", md: "1240px" }}
      >
        <Flex width={{ initial: "100%", md: "50%" }} direction="column" gap="5">
          <IconHeader Icon={RxQuestionMarkCircled} title="General Inquiries" />
          <Text className="text-lg">
            The best way to get in touch with Distribute Aid is to email us at{" "}
            <Link href="mailto:hello@distributeaid.org">
              hello@distributeaid.org
            </Link>
            . You can also fill out the form below.
          </Text>
          {formState.success ? (
            <Text className="text-lg">
              Thank you for reaching out. We'll get back to you as quickly as
              possible.
            </Text>
          ) : (
            <form ref={formRef} onSubmit={handleSubmit}>
              <Flex direction="column" gap="4">
                <Grid gap="4" columns={{ initial: "1", sm: "2" }}>
                  <Box>
                    <Text as="label" id="first-name-label" style={labelStyle}>
                      First Name
                    </Text>
                    <TextField.Root
                      aria-labelledby="first-name-label"
                      placeholder="Type your first name here"
                      name="firstName"
                      style={inputStyle}
                      required
                    />
                  </Box>
                  <Box>
                    <Text as="label" id="last-name-label" style={labelStyle}>
                      Last Name
                    </Text>
                    <TextField.Root
                      aria-labelledby="last-name-label"
                      placeholder="Type your last name here"
                      name="lastName"
                      style={inputStyle}
                      required
                    />
                  </Box>
                </Grid>
                <Box>
                  <Text as="label" id="email-label" style={labelStyle}>
                    Email Address
                  </Text>
                  <TextField.Root
                    aria-labelledby="email-label"
                    placeholder="Type your email here"
                    name="email"
                    style={inputStyle}
                    type="email"
                    required
                  />
                </Box>
                <Box>
                  <Text as="label" id="message-label" style={labelStyle}>
                    Your Message
                  </Text>
                  <TextArea
                    aria-labelledby="message-label"
                    placeholder="Type your message here"
                    name="message"
                    style={inputStyle}
                    required
                  />
                </Box>
                <Button
                  type="submit"
                  style={{ height: "44px" }}
                  className="bg-navy-600 hover:bg-navy-500"
                  disabled={formState.loading}
                  loading={formState.loading}
                >
                  {formState.loading ? "Sending" : "Send message"}
                </Button>
              </Flex>
            </form>
          )}
        </Flex>
        <Box
          className="rounded-r-2xl overflow-hidden"
          width={{ initial: "100%", md: "50%" }}
          minHeight={{ md: "500px" }}
        >
          <Image
            src="/images/photos/photo-collaborating.jpg"
            alt="Four people sit around a wooden table with laptops and a tablet, collaborating."
            className="h-full w-full object-cover"
            width={500}
            height={500}
          />
        </Box>
      </Flex>
      <ErrorModal open={formState.error} toggleOpen={toggleError} />
    </>
  );
};

export default ContactForm;
