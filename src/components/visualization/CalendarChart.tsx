"use client";
import React, { useEffect, useState, useCallback } from 'react';
import { ResponsiveCalendar } from '@nivo/calendar';

// Import datasets manually
import calendar_first_mile_counts from '../../data/calendar/calendar_first_mile_counts.json';
import calendar_last_mile_counts from '../../data/calendar/calendar_last_mile_counts.json';
import calendar_main_leg_counts from '../../data/calendar/calendar_main_leg_counts.json';
import calendar_total_counts from '../../data/calendar/calendar_total_counts.json';

interface CalendarChartProps {
  selectedSegment: string;
  startYear: number;
  endYear: number;
}

interface CalendarDataItem {
  day: string;
  value: number;
}

const CalendarChart: React.FC<CalendarChartProps> = ({ selectedSegment, startYear, endYear }) => {
  const [data, setData] = useState<CalendarDataItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  // Function to filter data by the specified year range
  const filterDataByYear = (data: CalendarDataItem[], startYear: number, endYear: number): CalendarDataItem[] => {
    return data.filter(item => {
      const year = parseInt(item.day.split('-')[0]);
      return year >= startYear && year <= endYear;
    });
  };

  const loadData = useCallback((segment: string) => {
    let filteredData: CalendarDataItem[] = [];
    switch (segment) {
      case 'Main Leg':
        filteredData = filterDataByYear(calendar_main_leg_counts, startYear, endYear);
        break;
      case 'First Mile':
        filteredData = filterDataByYear(calendar_first_mile_counts, startYear, endYear);
        break;
      case 'Last Mile':
        filteredData = filterDataByYear(calendar_last_mile_counts, startYear, endYear);
        break;
      default:
        filteredData = filterDataByYear(calendar_total_counts, startYear, endYear);
    }
    setData(filteredData);
    setError(null);
  }, [startYear, endYear]);

  useEffect(() => {
    loadData(selectedSegment);
  }, [selectedSegment, loadData]);

  if (error) return <div>{error}</div>;

  // Calculate the last month end date for the given end year
  const lastMonthEnd = new Date(endYear, 11, 31).toISOString().split('T')[0];

  // Calculate dynamic height based on the number of years
  const numberOfYears = endYear - startYear + 1;
  const dynamicHeight = numberOfYears * 175; // Adjust this multiplier as needed

  return (
    <div style={{ height: `${dynamicHeight}px` }}>
      {data.length > 0 ? (
        <ResponsiveCalendar
          data={data}
          from={`${startYear+1}-01-01`}  // Increment startYear by 1 to prevent an extra year row
          to={lastMonthEnd}
          emptyColor="#eeeeee"
          colors={['#61cdbb', '#97e3d5', '#e8c1a0', '#f47560']}
          margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
          yearSpacing={40}
          monthBorderColor="#ffffff"
          dayBorderWidth={2}
          dayBorderColor="#ffffff"
        />
      ) : (
        <p>No data available for the selected filters</p>
      )}
    </div>
  );
};

export default CalendarChart;
