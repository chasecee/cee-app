import Container from "@/app/(site)/components/Container";
import { Form } from "../components/Form";
import Link from "next/link";

export default function Contact() {
  return (
    <div>
      <Container>
        <div className="prose mx-auto dark:prose-invert">
          <header>
            <h1>Success!</h1>
          </header>
          <p>
            Can&apos;t wait to chat! Until then, learn more{" "}
            <Link href="/about" title="About me">
              about me
            </Link>
            , or check out my{" "}
            <Link href="/" title="recent chasecee work">
              recent work
            </Link>
            .
          </p>
        </div>
      </Container>
    </div>
  );
}