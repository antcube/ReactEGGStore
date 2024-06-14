type HeroProps = {
    firstMessage: string;
    secondMessage: string;
};

export default function Hero({ firstMessage, secondMessage }: HeroProps) {

  return (
    <>
      <section className=" h-[200px] bg-[url('/hero_bg.png')] bg-cover bg-center flex justify-center">
        <article className="w-[1080px] flex flex-col items-start justify-center px-5">
          <span className="text-xl text-white font-bold sm:text-4xl">{firstMessage}</span>
          <span className="text-white font-bold text-5xl leading-7 sm:text-8xl sm:leading-[80px]	">{secondMessage}</span>
        </article>
      </section>
    </>
  );
}
