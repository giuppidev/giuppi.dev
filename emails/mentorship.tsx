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
  name?: string;
}

const logoURL =
  "https://res.cloudinary.com/de30mupo1/image/upload/v1687948027/giuppi.dev/logo_white.png";

interface MentorshipProps extends EmailProps {
  duration: string;
}

export default function MentorshipEmail({
  name = "nomade",
  duration,
}: MentorshipProps) {
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
}
