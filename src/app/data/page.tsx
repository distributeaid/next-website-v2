import CalendarGraph from "@/components/visualization/CalendarGraph";
import PageTitle from "@/components/pageTitle";
import Graph from "@/components/visualization/Graph";

const page = () => {
  return (
    <section>
      <PageTitle title="SHIPMENT DATA REPORTING" bgColor="green-100" />
      <div className="bg-green-10 h-96 py-4">
        <Graph />
      </div>
      <div className="bg-green-10 h-96 py-4">
        <CalendarGraph />
      </div>
    </section>
  );
};

export default page;
