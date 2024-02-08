import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

import { Markdown } from "@react-email/markdown";

interface EmailProps {
  previewText: string;
  content: string;
  byeMessage: string;
}

const logoURL =
  "https://res.cloudinary.com/de30mupo1/image/upload/v1687948027/giuppi.dev/logo_white.png";

export default function CustomMdNotification({
  content,
  previewText,
  byeMessage = " Ci vediamo dall'altra parte! 🚀",
}: EmailProps) {
  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
            <Section className="mt-[32px]">
              <Img
                src={logoURL}
                width="150"
                height="37"
                alt="giuppi.dev"
                className="my-0 mx-auto"
              />
            </Section>{" "}
            <Markdown
              markdownCustomStyles={{
                h4: { padding: "0px", fontSize: "1.3rem", margin: "1rem 0px" },
                codeInline: { background: "grey" },
                p: { fontSize: "16px" },
                image: { width: "400px" },
                ul: {
                  paddingInlineStart: "0.5rem",
                  padding: "0.5rem",
                },
                li: { fontSize: "16px" },
                link: {
                  boxShadow: "5px 5px 0px 0px #000",
                  border: "2px solid black",
                  color: "#fff",
                  background: "#495F16",
                  textDecoration: "none",
                  alignSelf: "center",
                  padding: "2px 8px",
                },
              }}
            >
              {content}
            </Markdown>
            <Text className="text-black text-[14px] leading-[24px]">
              {byeMessage}
            </Text>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                pX={20}
                pY={12}
                className="bg-[#495F16] border-solid border-4 border-black  text-white text-[14px] shadow-[5px_5px_0px_0px_#000] font-medium no-underline text-center"
                href="https://www.giuppi.dev/dashboard/corsi"
              >
                Vai ai corsi
              </Button>
            </Section>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
