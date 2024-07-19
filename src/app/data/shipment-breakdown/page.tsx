"use client";
import React, { useState } from 'react';
import PageTitle from "@/components/pageTitle";
import SunburstChart from "@/components/visualization/SunburstChart";

const SunburstChartPage = () => {
  const [selectedView, setSelectedView] = useState('Sending/Receiving Groups');
  const [selectedGroup, setSelectedGroup] = useState('Sending');
  const [selectedMetric, setSelectedMetric] = useState('Count');

  return (
    <section>
      <PageTitle title="SHIPMENT BREAKDOWN" bgColor="green-100" />
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        <label>
          View:
          <select value={selectedView} onChange={(e) => setSelectedView(e.target.value)}>
            <option value="Sending/Receiving Groups">Sending/Receiving Groups</option>
            <option value="Category/Item">Category/Item</option>
          </select>
        </label>
        <label>
          Group:
          <select value={selectedGroup} onChange={(e) => setSelectedGroup(e.target.value)}>
            <option value="Sending">Sending</option>
            <option value="Receiving">Receiving</option>
          </select>
        </label>
        <label>
          Metric:
          <select value={selectedMetric} onChange={(e) => setSelectedMetric(e.target.value)}>
            <option value="Count">Count</option>
            <option value="Total Needs Met">Total Needs Met</option>
          </select>
        </label>
      </div>
      <div style={{ marginTop: '2rem' }}>
        <SunburstChart selectedView={selectedView} selectedGroup={selectedGroup} selectedMetric={selectedMetric} />
      </div>
    </section>
  );
};

export default SunburstChartPage;
