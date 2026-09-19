import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";


export default function Home() {
  return (
    <div className="storybook:bg-red-200! storybook:py-5 storybook:flex storybook:flex-col storybook:flex-1 storybook:items-center storybook:justify-center storybook:bg-zinc-50 storybook:font-sans storybook:dark:bg-black">
      <main className="storybook:flex storybook:flex-1 storybook:w-full storybook:max-w-3xl storybook:flex-col storybook:items-center storybook:justify-between storybook:py-32 storybook:px-16 storybook:bg-white storybook:dark:bg-black storybook:sm:items-start">
        <Image
          className="storybook:dark:invert storybook:h-5 storybook:w-[100px]"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="storybook:flex storybook:flex-col storybook:items-center storybook:gap-6 storybook:text-center storybook:sm:items-start storybook:sm:text-left">
          <h1 className="storybook:max-w-xs storybook:text-3xl storybook:font-semibold storybook:leading-10 storybook:tracking-tight storybook:text-black storybook:dark:text-zinc-50">
            To get started, edit the{" "}
            <code className="storybook:rounded storybook:bg-black/[.06] storybook:px-1.5 storybook:py-0.5 storybook:font-mono storybook:text-[0.9em] storybook:dark:bg-white/[.08]">
              page.tsx
            </code>{" "}
            file.
          </h1>
          <p className="storybook:max-w-md storybook:text-lg storybook:leading-8 storybook:text-zinc-600 storybook:dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="storybook:font-medium storybook:text-zinc-950 storybook:dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="storybook:font-medium storybook:text-zinc-950 storybook:dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="storybook:flex storybook:flex-col storybook:gap-4 storybook:text-base storybook:font-medium storybook:sm:flex-row">
          <a
            className="storybook:flex storybook:h-12 storybook:w-full storybook:items-center storybook:justify-center storybook:gap-2 storybook:rounded-full storybook:bg-foreground storybook:px-5 storybook:text-background storybook:transition-colors storybook:hover:bg-[#383838] storybook:dark:hover:bg-[#ccc] storybook:md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="storybook:dark:invert storybook:h-[14px] storybook:w-4"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={14}
            />
            Deploy Now
          </a>
          <a
            className="storybook:flex storybook:h-12 storybook:w-full storybook:items-center storybook:justify-center storybook:rounded-full storybook:border storybook:border-solid storybook:border-black/[.08] storybook:px-5 storybook:transition-colors storybook:hover:border-transparent storybook:hover:bg-black/[.04] storybook:dark:border-white/[.145] storybook:dark:hover:bg-[#1a1a1a] storybook:md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
        <hr className="storybook:border-2 storybook:w-full storybook:mt-10 storybook:mb-0"></hr>
        <div className="storybook:my-10">
            <h2 className="storybook:mb-10">⬇️Test Components Below ⬇️</h2>
            <div className="storybook:my10">
                <div className="storybook:flex storybook:flex-row storybook:gap-4">
                    <Button variant="default">Hello World</Button>
                    <Button variant="destructive">Hello World</Button>
                    <Button variant="secondary">Hello World</Button>
                </div>
            </div>
            <div className="storybook:my-10">
                <Accordion className="storybook:w-100" defaultValue={["item-1"]}>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>What is Storybook?</AccordionTrigger>
                        <AccordionContent>
                            Storybook is a tool for building and documenting UI components
                            in isolation.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>Why use an accordion?</AccordionTrigger>
                        <AccordionContent>
                            Accordions organize related content into collapsible sections.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                        <AccordionTrigger>Can I customize it?</AccordionTrigger>
                        <AccordionContent>
                            Yes. Pass a className or other supported props to customize the
                            accordion and its items.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
            <div className="storybook:my-10">
                 <Card className="storybook:mx-auto storybook:w-full storybook:max-w-sm">
                    <CardHeader>
                        <CardTitle>
                            Terms of Service
                            </CardTitle>
                        <CardDescription>
                            Review the terms before accepting the agreement.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="storybook:-mb-(--card-spacing)">
                        <div className="storybook:-mx-(--card-spacing) storybook:max-h-48 storybook:space-y-4 storybook:overflow-y-scroll storybook:border-t storybook:bg-muted/50 storybook:px-(--card-spacing) storybook:py-4 storybook:text-sm storybook:leading-relaxed">
                        <p>
                            These terms govern your use of the workspace, including access to
                            shared documents, project files, and collaboration tools.
                        </p>
                        <p>
                            You are responsible for the content you upload and for ensuring that
                            your team has the appropriate permissions to view or edit it.
                        </p>
                        <p>
                            We may update features or limits as the service evolves. When those
                            changes materially affect your workflow, we will notify your
                            workspace administrators.
                        </p>
                        <p>
                            By continuing, you agree to keep your account credentials secure and
                            to follow your organization&apos;s acceptable use policies.
                        </p>
                        </div>
                    </CardContent>
                    <CardFooter className="storybook:justify-end storybook:gap-2">
                        <Button variant="outline">Decline</Button>
                        <Button>Accept</Button>
                    </CardFooter>
                    </Card>
            </div>
        </div>
      </main>
    </div>
  );
}
