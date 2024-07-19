"use client";

import React, { useState } from "react";
import PageTitle from "@/components/pageTitle";
import CalendarChart from "@/components/visualization/CalendarChart";

const Page = () => {
  const [selectedSegment, setSelectedSegment] = useState<string>("Total");
  const [startYear, setStartYear] = useState<number>(2020);
  const [endYear, setEndYear] = useState<number>(2024);

  const handleSegmentChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSegment(e.target.value);
  };

  const handleStartYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartYear(parseInt(e.target.value));
  };

  const handleEndYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndYear(parseInt(e.target.value));
  };

  return (
    <section>
      <PageTitle title="CALENDAR OF PAST SHIPMENTS" bgColor="green-100" />
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', gap: '2rem', marginBottom: '1rem' }}>
            <label>
              Segment:
              <select value={selectedSegment} onChange={handleSegmentChange} style={{ marginLeft: '0.5rem' }}>
                <option value="Total">Total</option>
                <option value="Main Leg">Main Leg</option>
                <option value="First Mile">First Mile</option>
                <option value="Last Mile">Last Mile</option>
              </select>
            </label>
          </div>
          <div style={{ display: 'flex', gap: '2rem', marginBottom: '1rem' }}>
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
        <CalendarChart
          selectedSegment={selectedSegment}
          startYear={startYear}
          endYear={endYear}
        />
      </div>
    </section>
  );
};

export default Page;
