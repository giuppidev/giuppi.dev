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

export default function SendNotificationTestEmail({
  emails,
}: {
  emails: string[];
}) {
  return (
    <Html>
      <Head />
      <Preview>Notification test email</Preview>
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
              La mail di test sarà mandata a:
            </Heading>
            {emails.map((email) => (
              <Text className="text-black text-[14px] leading-[24px]">
                {email}
              </Text>
            ))}
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
