import Link from "next/link"

import { siteConfig } from "@/config/site"
import { buttonVariants } from "@/components/ui/button"

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tighter">
          Tom Hendra.
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          I&apos;m a UI dev from the UK based in Salamanca, Spain.
        </p>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          I am interested in performance, user experience and motion.
        </p>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          As a career transition success story, I currently work at
          <br className="hidden sm:inline" />
          Wembley Studios as a junior software developer.
        </p>
      </div>
      <div className="flex gap-4">
        <Link
          target="_blank"
          rel="noreferrer"
          href={siteConfig.links.github}
          className={buttonVariants({ variant: "outline" })}
        >
          GitHub
        </Link>
      </div>
    </section>
  )
}
