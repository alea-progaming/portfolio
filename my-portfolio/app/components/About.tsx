const About = () => {
  return (
    <>
      <section className="w-[80vw] mx-auto h-[60vh] flex flex-col items-center justify-center font-outfit">
        <h1 className="font-kronaOne text-[#8E05C2] text-6xl inline-flex items-center gap-3">
          &rsaquo;&lsaquo;<span className="text-3xl text-white">About me</span>
          &rsaquo;&lsaquo;
        </h1>
        <div className="tracking-wider md:mt-16 flex flex-col items-center gap-12 md:flex-row md:items-start md:gap-24">
          <div className="w-[250px] h-[250px] bg-purple-300">Avatar Motion</div>
          <div className="text-justify leading-relaxed max-w-xl w-full">
            <h2 className="text-2xl font-bold mb-4">Hi, I'm Mika!</h2>
            <p>
              I design and develop cool and useful web applications. You ask and
              I shall deliver. I just really love arts and crafts in general and
              I think, why not take it to the professional level? I love{" "}
              <span className="relative inline-block before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-full before:h-1 before:bg-[#05C29F] before:rounded-full before:-skew-y-3 before:scale-x-105 before:origin-left before:z-[1] text-white ">
                turning ideas
              </span>{" "}
              into{" "}
              <span className="relative inline-block after:content-[''] after:absolute after:-top-1 after:-left-1 after:w-full after:h-full after:border-2 after:border-red-500 after:rounded-[50%/40%] after:z-1">
                reality
              </span>
              . I like the challenges I encounter along the way and I like that
              I am able to get through those challenges with my dedication.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default About;
