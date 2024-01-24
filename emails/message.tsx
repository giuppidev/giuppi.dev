import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface EmailProps {
  email?: string;
  name: string;
  message?: string;
}

const logoURL =
  "https://res.cloudinary.com/de30mupo1/image/upload/v1687948027/giuppi.dev/logo_white.png";

export default function MessageEmail({ email, name, message }: EmailProps) {
  const previewText = `Nuovo messaggio dal sito!`;

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
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Nuovo messaggio!
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Nome: {name}
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Email: {email}
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Message: {message}
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
