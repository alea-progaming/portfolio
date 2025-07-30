import Item1 from "./BentoItems/Item1";
const Bento = () => {
  return (
    <>
      <section className="w-[80vw] mx-auto h-dvh flex flex-col items-center justify-center font-outfit">
        <h1 className="font-kronaOne text-[#8E05C2] text-6xl inline-flex items-center gap-3 mb-16">
          &rsaquo;&lsaquo;<span className="text-3xl text-white">Overview</span>
          &rsaquo;&lsaquo;
        </h1>
        <div className="lg:grid grid-cols-12 w-full xl:w-[70%] lg:w-[80%] md:w-[90%] gap-3 mx-auto">
          {/* Item 1 */}
          <div className="col-start-1 col-span-8 row-start-1 row-span-1   overflow-hidden rounded-2xl">
            <Item1 />
          </div>

          <div className="col-start-9 col-span-4 row-start-1 row-span-2 bg-blue-300">
            Grid
          </div>
          <div className="col-start-1 col-span-4 row-start-2 row-span-2 bg-purple-300">
            Grid
          </div>
          <div className="col-start-5 col-span-4 row-start-2 row-span-1 bg-yellow-300">
            Grid
          </div>
          <div className="col-start-5 col-span-8 row-start-3 row-span-1 bg-green-300">
            Grid
          </div>
        </div>
      </section>
    </>
  );
};
export default Bento;
