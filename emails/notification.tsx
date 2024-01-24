import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface EmailProps {
  name?: string;
  content: string;
  previewText: string;
  byeMessage?: string;
  link?: {
    url: string;
    message: string;
    label: string;
  };
}

const logoURL =
  "https://res.cloudinary.com/de30mupo1/image/upload/v1687948027/giuppi.dev/logo_white.png";

export default function CustomNotification({
  name = "dev",
  byeMessage = " Ci vediamo dall'altra parte! 🚀",
  content,
  link,
  previewText,
}: EmailProps) {
  console.log(content);
  console.log(link);
  console.log(previewText);
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
            </Section>

            <Text className="text-black text-[14px] leading-[24px]">
              Ciao {name},
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              {content}
            </Text>
            {link && (
              <>
                <Text className="text-black text-[14px] leading-[24px]">
                  {link.message}
                </Text>
                <Section className="text-center mt-[32px] mb-[32px]">
                  <Button
                    pX={20}
                    pY={12}
                    className="bg-[#495F16] border-solid border-4 border-black  text-white text-[14px] shadow-[5px_5px_0px_0px_#000] font-medium no-underline text-center"
                    href={link.url}
                  >
                    {link.label}
                  </Button>
                </Section>
              </>
            )}

            <Text className="text-black text-[14px] leading-[24px]">
              {byeMessage}
            </Text>

            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
