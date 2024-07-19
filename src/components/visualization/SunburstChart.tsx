"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { ResponsiveSunburst } from '@nivo/sunburst';
import axios from 'axios';

const colorDictionary = {
  "USA": "#61cdbb",
  "Canada": "#97e3d5",
  "Germany": "#e8c1a0",
  "France": "#f47560",
  "Clothing": "#61cdbb",
  "Food": "#97e3d5",
  "Medicine": "#e8c1a0",
  "Tools": "#f47560",
  "Shirts": "#61cdbb",
  "Pants": "#97e3d5",
  "Rice": "#e8c1a0",
  "Beans": "#f47560",
  // Add more entries as needed for specific countries, groups, categories, and items
};

const SunburstChart = ({ selectedView, selectedGroup, selectedMetric }) => {
  const [data, setData] = useState([]);
  const [originalData, setOriginalData] = useState([]);
  const [error, setError] = useState(null);

  const loadData = useCallback(() => {
    let fileName = '';

    if (selectedView === 'Sending/Receiving Groups') {
      if (selectedGroup === 'Sending') {
        fileName = selectedMetric === 'Count' ? 'sunburst_sending_group_count.json' : 'sunburst_sending_group_needs.json';
      } else {
        fileName = selectedMetric === 'Count' ? 'sunburst_receiving_group_count.json' : 'sunburst_receiving_group_needs.json';
      }
    } else {
      if (selectedGroup === 'Sending') {
        fileName = selectedMetric === 'Count' ? 'sunburst_sending_category_count.json' : 'sunburst_sending_category_needs.json';
      } else {
        fileName = selectedMetric === 'Count' ? 'sunburst_receiving_category_count.json' : 'sunburst_receiving_category_needs.json';
      }
    }

    axios.get(`${process.env.PUBLIC_URL}/${fileName}`)
      .then(response => {
        setData(response.data);
        setOriginalData(response.data);
        setError(null);
      })
      .catch(error => {
        console.error("Error fetching the sunburst data", error);
        setError("Error fetching the sunburst data");
      });
  }, [selectedView, selectedGroup, selectedMetric]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const assignColors = (node) => {
    if (colorDictionary[node.name]) {
      node.color = colorDictionary[node.name];
    } else {
      node.color = `hsl(${Math.random() * 360}, 70%, 50%)`; // Fallback color
    }
    if (node.children) {
      node.children.forEach(assignColors);
    }
  };

  if (data.children) {
    data.children.forEach(assignColors);
  }

  if (error) return <div>{error}</div>;

  return (
    <div>
      <button onClick={() => setData(originalData)}>Reset</button>
      <div style={{ height: 600 }}>
        {data.children && data.children.length > 0 ? (
          <ResponsiveSunburst
            data={data}
            margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
            id="name"
            value="value"
            cornerRadius={4}
            borderWidth={4}
            borderColor= "white"
            colors={{ scheme: 'nivo' }}
            inheritColorFromParent={false}
            childColor={{
              from: 'color',
              modifiers: [
                ['darker', 0.1]
              ]
            }}
            enableArcLabels={true}
            arcLabelsSkipAngle={35}
            layers={['arcs', 'labels', 'arcLabels', ({ centerX, centerY }) => (
              <text
                x={centerX}
                y={centerY}
                textAnchor="middle"
                dominantBaseline="central"
                style={{
                  fontSize: 14,
                  fill: '#333',
                }}
              >
                {data.name}
              </text>
            )]}
            tooltip={({ id, value, color, percentage }) => (
              <div
                style={{
                  padding: '5px 10px',
                  background: '#333',
                  color: '#fff',
                }}
              >
                <strong>ID:</strong> {id}<br />
                <strong>Value:</strong> {value}<br />
                <strong>Percentage:</strong> {Math.round(percentage * 100) / 100}%
              </div>
            )}
            theme={{
              tooltip: {
                container: {
                  background: '#333',
                  color: '#fff'
                }
              }
            }}
            animate = {false}
            motionConfig= "stiff"
            onClick={(node, event) => {
              const newData = { ...data };
              // Logic to drill down to the next level
              if (node.depth === 1) {
                newData.children = node.data.children;
                setData(newData);
              } else if (node.depth === 0) {
                loadData(); // Reset to the original data
              }
            }}
          />
        ) : (
          <p>No data available for the selected filters</p>
        )}
      </div>
    </div>
  );
};

export default SunburstChart;
