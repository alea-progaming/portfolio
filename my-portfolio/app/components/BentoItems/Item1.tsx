const Item1 = () => {
  return (
    <div className="relative bg-black/15 text-white h-full rounded-2xl border-3 border-white/15">
      <div className="z-10">
        <p>Think</p>
        <p>Design</p>
        <p>Code</p>
      </div>
      <div className="blur-3xl bg-blend-screen -z-10">
        {/* Blobs */}
        <div className="absolute size-[150px] top-40 -left-15 bg-[#05C29F]/80 rounded-full" />
        <div className="absolute size-[150px] top-0 -right-20 bg-[#8E05C2]/80 rounded-full" />
      </div>
    </div>
  );
};
export default Item1;
