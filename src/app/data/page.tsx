import CalendarGraph from "@/components/visualization/CalendarGraph";
import PageTitle from "@/components/pageTitle";
import Graph from "@/components/visualization/Graph";
import AreaBump from "@/components/visualization/AreaBumpChart"

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
      <div className="bg-green-10 h-96 py-4">
        <AreaBump selectedMetric="Count" selectedFilter="Project / Response" startYear={2021} endYear={2024} />
      </div>
    </section>
  );
};

export default page;
