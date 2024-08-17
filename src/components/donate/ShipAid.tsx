import { WaysToDonate } from "./WaysToDonate";

const ShipAid = () => {
  return (
    <section className="bg-rosemary-50">
      <div className="px-4 py-12">
        <header className="prose max-w-none mx-auto mb-8">
          <h2 className="text-center text-rosemary-800 text-[36px] font-bold leading-[1.3]">
            Ship aid to people in need.
            <br />
            Donate today:
          </h2>
        </header>
        <WaysToDonate />
      </div>
    </section>
  );
};

export default ShipAid;
