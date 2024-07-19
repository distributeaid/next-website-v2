"use client";
import React, { useEffect, useState, useCallback } from 'react';
import { ResponsiveCalendar } from '@nivo/calendar';
import axios from 'axios';

const CalendarChart = ({ selectedSegment, startYear, endYear }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const loadData = useCallback((segment) => {
    let fileName = '';
    switch (segment) {
      case 'Main Leg':
        fileName = 'calendar_main_leg_counts.json';
        break;
      case 'First Mile':
        fileName = 'calendar_first_mile_counts.json';
        break;
      case 'Last Mile':
        fileName = 'calendar_last_mile_counts.json';
        break;
      default:
        fileName = 'calendar_total_counts.json';
    }

    axios.get(`${process.env.PUBLIC_URL}/${fileName}`)
      .then(response => {
        const filteredData = filterDataByYear(response.data, startYear, endYear);
        setData(filteredData);
        setError(null);
      })
      .catch(error => {
        console.error("Error fetching the calendar data", error);
        setError("Error fetching the calendar data");
      });
  }, [startYear, endYear]);

  const filterDataByYear = (data, startYear, endYear) => {
    return data.filter(item => {
      const year = parseInt(item.day.split('-')[0]);
      return year >= startYear && year <= endYear;
    });
  };

  useEffect(() => {
    loadData(selectedSegment);
  }, [selectedSegment, loadData]);

  if (error) return <div>{error}</div>;

  return (
    <div style={{ height: 700 }}>
      {data.length > 0 ? (
        <ResponsiveCalendar
          data={data}
          from={`${startYear}-01-01`}
          to={`${endYear}-12-31`}
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
