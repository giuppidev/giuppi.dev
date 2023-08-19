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
import { Database } from "../types/supabase";

type Course = Database["public"]["Tables"]["products"]["Row"];

interface EmailProps {
  name?: string;
}

const logoURL =
  "https://res.cloudinary.com/de30mupo1/image/upload/v1687948027/giuppi.dev/logo_white.png";

interface ZoomLinkEmailProps extends EmailProps {
  course?: Partial<Course>;
  customDate?: Date;
}

export default function ZoomLinkEmail({
  name = "nomade",
  course = {
    name: "Da HTML a React: viaggio nella programmazione WEB moderna.",
    start_date: "2023-07-05 20:30:00",
  },
  customDate,
}: ZoomLinkEmailProps) {
  const previewText = `L'evento si avvicina!`;
  const courseDate = customDate ?? new Date(course?.start_date || "");
  const courseDatetime = new Intl.DateTimeFormat("it-IT", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  }).format(courseDate);
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
              Pronto per il prossimo evento LIVE?
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">Ciao!</Text>
            <Text className="text-black text-[14px] leading-[24px]">
              oggi si terrà il prossimo evento LIVE della mia Academy:
            </Text>
            <Text className="text-black text-[14px] leading-[24px] italic">
              {course?.name}
            </Text>
            <Text className="text-black text-[14px] leading-[24px] italic">
              <strong>QUANDO: </strong>
              {courseDatetime}
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Qui sotto il link per partecipare:
            </Text>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                pX={20}
                pY={12}
                className="bg-[#6D9022] border-4 border-gray-900 text-white text-[12px] font-semibold  text-center cursor-pointer underline"
                href={course.zoom_url || ""}
              >
                Link ZOOM
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
