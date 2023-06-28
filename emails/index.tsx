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
}
const baseUrl =
  process?.env?.NEXT_PUBLIC_SITE_URL ?? // Set this to your site URL in production env.
  process?.env?.NEXT_PUBLIC_VERCEL_URL ?? // Automatically set by Vercel.
  "http://localhost:3000/";

const logoURL =
  "https://res.cloudinary.com/de30mupo1/image/upload/v1687948027/giuppi.dev/logo_white.png";

export const OrderEmail = ({ name = "nomade" }: EmailProps) => {
  const previewText = `Sei entrato ufficialmente nella community dei programmatori nomadi!`;

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
              Benvenuto nella mia academy!
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Ciao {name},
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              grazie per aver scelto di entrare nell'academy per{" "}
              <strong>programmatori nomadi</strong>.
            </Text>

            <Text className="text-black text-[14px] leading-[24px]">
              Di seguito il link per registrarti sulla piattaforma e accedere
              alla tua area riservata (effettua il login se ti sei già
              registrato).*
            </Text>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                pX={20}
                pY={12}
                className="bg-[#6D9022] rounded text-white text-[12px] font-semibold no-underline text-center"
                href={`https://giuppi.dev/auth/sign-in`}
              >
                Registrati o effettua il login
              </Button>
            </Section>
            <Text className="text-black text-[14px] leading-[24px]">
              Qui potrai accedere al server Discord della community!
            </Text>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                pX={20}
                pY={12}
                className="bg-[#6D9022] rounded text-white text-[12px] font-semibold no-underline text-center"
                href={"https://discord.gg/zvZxkxJYyy"}
              >
                Entra nel server Discord
              </Button>
            </Section>
            <Text className="text-black text-[14px] leading-[24px]">
              Ci vediamo dall'altra parte! 🚀
            </Text>

            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-black text-[14px] leading-[24px]">
              * dalla tua area riservata potrai gestire il tuo abbonamento e
              trovera le registrazioni dei corsi passati.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

interface MentorshipProps extends EmailProps {
  duration: string;
}

export const MentorshipEmail = ({
  name = "nomade",
  duration,
}: MentorshipProps) => {
  const calLink = "https://cal.com/giuppidev/mentorship";
  const calLink30 = "https://cal.com/giuppidev/mentorship-30";
  const previewText = `Grazie per aver prenotato una chiacchierata con me!`;

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
              Prenota la tua mentorship ora!!
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Ciao {name},
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              grazie per aver scelto di effettuare una mentorship con me.
            </Text>

            <Text className="text-black text-[14px] leading-[24px]">
              Di seguito il link per prenotare.
            </Text>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                pX={20}
                pY={12}
                className="bg-[#6D9022] rounded text-white text-[12px] font-semibold no-underline text-center"
                href={duration === "30" ? calLink30 : calLink}
              >
                Prenota
              </Button>
            </Section>

            <Text className="text-black text-[14px] leading-[24px]">
              Ci vediamo dall'altra parte! 🚀
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};
