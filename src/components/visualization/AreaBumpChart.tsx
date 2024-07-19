"use client";
import React, { useEffect, useState, useCallback } from 'react';
import { ResponsiveAreaBump } from '@nivo/bump';
// import data sets manually
import area_bump_project_counts from '../../data/areabumpchart/area_bump_project_count.json';
import area_bump_project_needs from '../../data/areabumpchart/area_bump_project_needs.json';
import area_bump_shipment_counts from '../../data/areabumpchart/area_bump_shipment_count.json';
import area_bump_shipment_needs from '../../data/areabumpchart/area_bump_shipment_needs.json';

interface AreaBumpChartProps {
  selectedMetric: string;
  selectedFilter: string;
  startYear: number;
  endYear: number;
}

interface DataItem {
  id: string;
  data: { x: string; y: number }[];
}

const AreaBumpChart: React.FC<AreaBumpChartProps> = ({ selectedMetric, selectedFilter, startYear, endYear }) => {
  const [data, setData] = useState<DataItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  const filterDataByYear = (data: DataItem[], startYear: number, endYear: number): DataItem[] => {
    return data.map(item => ({
      ...item,
      data: item.data.filter(d => {
        const year = parseInt(d.x.split('-')[0]);
        return year >= startYear && year <= endYear;
      })
    })).filter(item => item.data.length > 0);
  };

  const loadData = useCallback((filter: string, metric: string) => {
    let selectedData: DataItem[] = [];

    if (filter === 'Project / Response') {
      selectedData = metric === 'Count' ? area_bump_project_counts : area_bump_project_needs;
    } else {
      selectedData = metric === 'Count' ? area_bump_shipment_counts : area_bump_shipment_needs;
    }

    try {
      const filteredData = filterDataByYear(selectedData, startYear, endYear);
      setData(filteredData);
      setError(null);
    } catch (error) {
      console.error("Error filtering the area bump data", error);
      setError("Error filtering the area bump data");
    }
  }, [startYear, endYear]);

  useEffect(() => {
    loadData(selectedFilter, selectedMetric);
  }, [selectedFilter, selectedMetric, startYear, endYear, loadData]);

  if (error) return <div>{error}</div>;

  return (
    <div style={{ height: 400 }}>
      {data.length > 0 ? (
        <ResponsiveAreaBump
          data={data}
          margin={{ top: 40, right: 275, bottom: 80, left: 275 }}
          spacing={15}
          colors={{ scheme: 'nivo' }}
          blendMode="multiply"
          startLabel="id"
          endLabel="id"
          axisTop={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: -45,
            legend: '',
            legendPosition: 'middle',
            legendOffset: 32
          }}
        />
      ) : (
        <p>No data available for the selected filters</p>
      )}
    </div>
  );
};

export default AreaBumpChart;
