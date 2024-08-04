import Image from "next/image";

export default function Home(): JSX.Element {
  return (
    <section className="relative mt-[-70px] flex h-full w-full flex-col items-center justify-center md:pt-44">
      <div className="absolute bottom-0 left-0 right-0 top-0 -z-10 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      <p className="text-center">Run your agency, in one place</p>
      <div className="from-primary to-secondary-foreground relative bg-gradient-to-r bg-clip-text text-transparent">
        <h1 className="text-center text-9xl font-bold md:text-[300px]">
          Ketone
        </h1>
      </div>
      <div className="relative flex items-center justify-center md:mt-[-70px]">
        <Image
          alt="banner image"
          className="border-muted rounded-tl-2xl rounded-tr-2xl border-2"
          height={1200}
          src="/assets/preview.png"
          width={1200}
        />
        <div className="dark:from-background absolute bottom-0 left-0 right-0 top-[50%] z-10 bg-gradient-to-t" />
      </div>
    </section>
  );
}
