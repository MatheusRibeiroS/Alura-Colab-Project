export default function Statement({
  category,
  statement,
}: {
  category: string;
  statement: string;
}) {
  return (
    <>
      <section className="bg-[#263673] w-full h-[25%] text-left p-6 space-y-2">
        <h1 className="text-xl text-white font-bold italic">{category}</h1>
        <p className="text-2xl text-white font-semibold">{statement}</p>
      </section>
    </>
  );
}
