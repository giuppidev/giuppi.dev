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

interface NewContentProps extends EmailProps {
  course: Partial<Course>;
  link: string;
}

export default function NewContentEmail({ course, link }: NewContentProps) {
  const contentType =
    course.product_type === "course" ? "lezione" : "masterclass";
  const previewText = `Ciao! Ho caricato una nuona ${contentType}`;

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
              Nuova {contentType} caricata!
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Ciao! 👋
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              Sulla piattaforma è disponibile una nuova {contentType}:
            </Text>
            <Text className="text-black text-[14px] leading-[24px] italic">
              {course?.name}
            </Text>

            <Text className="text-black text-[14px] leading-[24px]">
              Qui sotto il link per visualizzarla:
            </Text>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                pX={20}
                pY={12}
                className="bg-[#6D9022] border-4 border-gray-900 text-white text-[12px] font-semibold  text-center cursor-pointer underline"
                href={link || ""}
              >
                Link alla {contentType}
              </Button>
            </Section>

            <Text className="text-black text-[14px] leading-[24px]">
              Buono studio! 🚀
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
