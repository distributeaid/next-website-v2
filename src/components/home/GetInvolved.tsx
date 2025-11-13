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

const GetInvolved = () => {
  const getInvolvedItems = [
    {
      label: "Give Money",
      href: "/",
      bgColor: "#5AC597",
      Icon: (
        <svg
          width="73"
          height="78"
          viewBox="0 0 73 78"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M46.4617 40.4452C45.8643 38.755 44.7576 37.2917 43.2939 36.2568C41.8302 35.2219 40.0817 34.6664 38.2891 34.6667V32.5H33.9557V34.6667C31.6572 34.6667 29.4528 35.5798 27.8275 37.2051C26.2022 38.8304 25.2891 41.0348 25.2891 43.3333C25.2891 45.6319 26.2022 47.8363 27.8275 49.4616C29.4528 51.0869 31.6572 52 33.9557 52V60.6667C32.0707 60.6667 30.4652 59.4642 29.8672 57.7785C29.7785 57.5027 29.6354 57.2475 29.4463 57.028C29.2572 56.8085 29.0261 56.6292 28.7665 56.5006C28.5069 56.372 28.2241 56.2967 27.935 56.2793C27.6458 56.2619 27.356 56.3026 27.0829 56.3991C26.8097 56.4956 26.5587 56.646 26.3446 56.8412C26.1306 57.0364 25.9579 57.2726 25.8367 57.5357C25.7155 57.7988 25.6483 58.0836 25.6391 58.3732C25.6299 58.6627 25.6788 58.9512 25.7831 59.2215C26.3804 60.9116 27.4872 62.3749 28.9509 63.4098C30.4146 64.4447 32.1631 65.0003 33.9557 65V67.1667H38.2891V65C40.5876 65 42.792 64.0869 44.4173 62.4616C46.0426 60.8363 46.9557 58.6319 46.9557 56.3333C46.9557 54.0348 46.0426 51.8304 44.4173 50.2051C42.792 48.5798 40.5876 47.6667 38.2891 47.6667V39C39.1852 38.9998 40.0594 39.2774 40.7912 39.7946C41.5231 40.3119 42.0765 41.0433 42.3754 41.8882C42.5667 42.43 42.9655 42.8737 43.484 43.1216C43.7407 43.2443 44.0191 43.3153 44.3033 43.3304C44.5874 43.3456 44.8718 43.3046 45.1401 43.2098C45.4084 43.1151 45.6554 42.9684 45.867 42.7782C46.0787 42.588 46.2507 42.3579 46.3735 42.1012C46.4962 41.8445 46.5672 41.5661 46.5823 41.282C46.5975 40.9978 46.5565 40.7135 46.4617 40.4452ZM33.9557 39C32.8065 39 31.7043 39.4565 30.8916 40.2692C30.0789 41.0819 29.6224 42.1841 29.6224 43.3333C29.6224 44.4826 30.0789 45.5848 30.8916 46.3975C31.7043 47.2101 32.8065 47.6667 33.9557 47.6667V39ZM38.2891 60.6667C39.4383 60.6667 40.5405 60.2101 41.3532 59.3975C42.1658 58.5848 42.6224 57.4826 42.6224 56.3333C42.6224 55.1841 42.1658 54.0819 41.3532 53.2692C40.5405 52.4565 39.4383 52 38.2891 52V60.6667Z"
            fill="#051E5E"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.6205 5.67883C17.9375 3.07667 26.6605 0 36.2069 0C45.5539 0 54.0472 2.94883 59.336 5.51633L59.635 5.6615C61.2297 6.45017 62.5167 7.1955 63.4224 7.8L55.4187 19.5C73.87 38.363 88.1224 77.9935 36.2069 77.9935C-15.7086 77.9935 -1.83981 39.0823 16.7719 19.5L8.82019 7.8C9.43335 7.39917 10.2112 6.93333 11.1385 6.43933C11.5979 6.19233 12.0919 5.93739 12.6205 5.67883ZM50.275 19.3462L56.6819 9.97967C50.7235 10.4087 43.6342 11.8083 36.8092 13.7843C31.9342 15.1927 26.5175 14.9782 21.5017 14.053C20.2377 13.819 18.9824 13.54 17.7382 13.2167L21.8982 19.3418C30.814 22.516 41.357 22.516 50.275 19.3462ZM19.3957 23.0317C29.8282 27.0617 42.3667 27.0617 52.7992 23.0273C57.1528 27.6188 60.7955 32.8352 63.6065 38.5038C66.5359 44.4795 68.1305 50.453 67.8705 55.601C67.6192 60.5692 65.6649 64.8137 61.2015 67.9683C56.5497 71.2552 48.7259 73.6602 36.2047 73.6602C23.6705 73.6602 15.8099 71.2963 11.1147 68.0463C6.61885 64.9328 4.64502 60.7447 4.36552 55.8437C4.07302 50.752 5.63302 44.8088 8.55152 38.792C11.3357 33.0547 15.2205 27.5318 19.3957 23.0317ZM16.904 8.48467C18.6374 9.00033 20.4487 9.44883 22.286 9.789C26.9444 10.647 31.6157 10.7727 35.6024 9.61783C40.248 8.26389 44.9732 7.19946 49.7507 6.43067C45.764 5.23033 41.1014 4.33333 36.2047 4.33333C28.7405 4.33333 21.779 6.4155 16.904 8.48467Z"
            fill="#051E5E"
          />
        </svg>
      ),
    },
    {
      label: "Donate Supplies",
      href: "/",
      bgColor: "var(--pink-5)",
      Icon: (
        <svg
          width="104"
          height="104"
          viewBox="0 0 104 104"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M69.3335 69.3332L78.0002 77.9998L95.3335 60.6665"
            stroke="#082B76"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M91 43.3336V34.6669C90.9984 33.1471 90.5973 31.6544 89.8367 30.3386C89.0761 29.0228 87.9829 27.9301 86.6667 27.1702L56.3333 9.83689C55.0158 9.07624 53.5213 8.67578 52 8.67578C50.4787 8.67578 48.9842 9.07624 47.6667 9.83689L17.3333 27.1702C16.0171 27.9301 14.9239 29.0228 14.1633 30.3386C13.4028 31.6544 13.0016 33.1471 13 34.6669V69.3336C13.0016 70.8534 13.4028 72.3461 14.1633 73.6619C14.9239 74.9777 16.0171 76.0703 17.3333 76.8302L47.6667 94.1636C48.9842 94.9242 50.4787 95.3247 52 95.3247C53.5213 95.3247 55.0158 94.9242 56.3333 94.1636L65 89.2236"
            stroke="#082B76"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M71.4999 40.733L32.7166 18.373"
            stroke="#082B76"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M14.2566 30.3335L51.9999 52.0002L89.7432 30.3335"
            stroke="#082B76"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M52 95.3338V52.0005"
            stroke="#082B76"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      label: "Volunteer via Tech",
      buttonLabel: "Volunteer",
      href: "/",
      bgColor: "#4362A6",
      Icon: (
        <svg
          width="104"
          height="104"
          viewBox="0 0 104 104"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M88.4865 19.8463C86.3126 17.6648 83.7294 15.9339 80.8851 14.7529C78.0408 13.5718 74.9913 12.9639 71.9115 12.9639C68.8318 12.9639 65.7823 13.5718 62.938 14.7529C60.0937 15.9339 57.5105 17.6648 55.3366 19.8463L51.9999 23.2263L48.6632 19.8463C46.4893 17.6648 43.9061 15.9339 41.0618 14.7529C38.2175 13.5718 35.168 12.9639 32.0882 12.9639C29.0085 12.9639 25.959 13.5718 23.1147 14.7529C20.2704 15.9339 17.6872 17.6648 15.5132 19.8463C6.32655 29.033 5.76322 44.5463 17.3332 56.333L51.9999 90.9996L86.6665 56.333C98.2365 44.5463 97.6732 29.033 88.4865 19.8463Z"
            stroke="#F9FAFB"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M52 23.2266L38.4367 36.8332C36.7219 38.562 35.7598 40.8983 35.7598 43.3332C35.7598 45.7682 36.7219 48.1045 38.4367 49.8332C40.1654 51.548 42.5017 52.5101 44.9367 52.5101C47.3716 52.5101 49.7079 51.548 51.4367 49.8332L61.23 40.2566C63.6639 37.8485 66.9495 36.4977 70.3733 36.4977C73.7972 36.4977 77.0828 37.8485 79.5167 40.2566L89.9167 50.6566"
            stroke="#F9FAFB"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M78.0002 64.9997L69.3335 56.333"
            stroke="#F9FAFB"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M65.0002 78.0002L56.3335 69.3335"
            stroke="#F9FAFB"
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

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
      >
        <ul>
          {getInvolvedItems.map(
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
                    {Icon}
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

      <Box
        style={{
          backgroundColor: "var(--pink-5)",
        }}
        mt="170px"
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
      </Box>
    </section>
  );
};

export default GetInvolved;
