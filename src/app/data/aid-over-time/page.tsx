"use client";

import React, { useState } from "react";
import PageTitle from "@/components/pageTitle";
import AreaBumpChart from "@/components/visualization/AreaBumpChart";

const Page = () => {
  const [selectedMetric, setSelectedMetric] = useState<string>("Count");
  const [selectedFilter, setSelectedFilter] = useState<string>("Project / Response");
  const [startYear, setStartYear] = useState<number>(2021);
  const [endYear, setEndYear] = useState<number>(2024);

  const handleMetricChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedMetric(e.target.value);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedFilter(e.target.value);
  };

  const handleStartYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartYear(parseInt(e.target.value));
  };

  const handleEndYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndYear(parseInt(e.target.value));
  };

  return (
    <section>
      <PageTitle title="SHIPMENT AID REPORTING OVER TIME" bgColor="green-100" />
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '2rem', marginBottom: '1rem' }}>
            <label>
              Metric:
              <select value={selectedMetric} onChange={handleMetricChange} style={{ marginLeft: '0.5rem' }}>
                <option value="Count">Count</option>
                <option value="Total Needs Met">Total Needs Met</option>
              </select>
            </label>
            <label>
              Filter:
              <select value={selectedFilter} onChange={handleFilterChange} style={{ marginLeft: '0.5rem' }}>
                <option value="Project / Response">Project / Response</option>
                <option value="Type of Shipment">Type of Shipment</option>
              </select>
            </label>
          </div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <label>
              Start Year:
              <input type="number" value={startYear} onChange={handleStartYearChange} style={{ marginLeft: '0.5rem' }} />
            </label>
            <label>
              End Year:
              <input type="number" value={endYear} onChange={handleEndYearChange} style={{ marginLeft: '0.5rem' }} />
            </label>
          </div>
        </form>
      </div>
      <div style={{ marginTop: '20px' }} className="bg-green-10 py-4">
        <AreaBumpChart
          selectedMetric={selectedMetric}
          selectedFilter={selectedFilter}
          startYear={startYear}
          endYear={endYear}
        />
      </div>
    </section>
  );
};

export default Page;
