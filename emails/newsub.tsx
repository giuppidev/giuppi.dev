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

  payment_intent?: string;
}

const logoURL =
  "https://res.cloudinary.com/de30mupo1/image/upload/v1687948027/giuppi.dev/logo_white.png";

export default function Newsub({ email, payment_intent }: EmailProps) {
  const previewText = `Nuovo utente nell'academy!`;

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
              Nuovo iscritto nell'academy!
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Email: {email}
            </Text>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                pX={20}
                pY={12}
                className="bg-[#6D9022] rounded text-white text-[12px] font-semibold no-underline text-center"
                href={`https://dashboard.stripe.com/payments/${payment_intent}`}
              >
                Vai al pagamento
              </Button>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
