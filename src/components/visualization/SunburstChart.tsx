"use client";
import React, { useState, useEffect, useCallback } from 'react';
import { ResponsiveSunburst } from '@nivo/sunburst';

// Import datasets manually
import sunburst_sending_group_count from '../../data/sunburstchart/sunburst_sending_group_count.json';
import sunburst_sending_group_needs from '../../data/sunburstchart/sunburst_sending_group_needs.json';
import sunburst_receiving_group_count from '../../data/sunburstchart/sunburst_receiving_group_count.json';
import sunburst_receiving_group_needs from '../../data/sunburstchart/sunburst_receiving_group_needs.json';
import sunburst_sending_category_count from '../../data/sunburstchart/sunburst_sending_category_count.json';
import sunburst_sending_category_needs from '../../data/sunburstchart/sunburst_sending_category_needs.json';
import sunburst_receiving_category_count from '../../data/sunburstchart/sunburst_receiving_category_count.json';
import sunburst_receiving_category_needs from '../../data/sunburstchart/sunburst_receiving_category_needs.json';

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

interface SunburstChartProps {
  selectedView: string;
  selectedGroup: string;
  selectedMetric: string;
}

const SunburstChart: React.FC<SunburstChartProps> = ({ selectedView, selectedGroup, selectedMetric }) => {
  const [data, setData] = useState<any>([]);
  const [originalData, setOriginalData] = useState<any>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const loadData = useCallback(() => {
    setLoading(true); // Set loading to true when starting to load data
    let data;
    if (selectedView === 'Sending/Receiving Groups') {
      if (selectedGroup === 'Sending') {
        data = selectedMetric === 'Count' ? sunburst_sending_group_count : sunburst_sending_group_needs;
      } else {
        data = selectedMetric === 'Count' ? sunburst_receiving_group_count : sunburst_receiving_group_needs;
      }
    } else {
      if (selectedGroup === 'Sending') {
        data = selectedMetric === 'Count' ? sunburst_sending_category_count : sunburst_sending_category_needs;
      } else {
        data = selectedMetric === 'Count' ? sunburst_receiving_category_count : sunburst_receiving_category_needs;
      }
    }

    setData(data);
    setOriginalData(data);
    setLoading(false); // Set loading to false once data is loaded
    setError(null);
  }, [selectedView, selectedGroup, selectedMetric]);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const assignColors = (node: any) => {
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
      <button 
        onClick={() => setData(originalData)} 
        style={{ 
          padding: '10px 20px', 
          margin: '10px 0',
          backgroundColor: '#4CAF50', 
          color: 'white', 
          border: 'none', 
          borderRadius: '5px', 
          cursor: 'pointer' 
        }}
      >
        Reset
      </button>
      {loading ? (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '600px' }}>
          <p>Loading data...</p>
        </div>
      ) : (
        <div style={{ height: 500 }}>
          {data.children && data.children.length > 0 ? (
            <ResponsiveSunburst
              data={data}
              margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
              id="name"
              value="value"
              cornerRadius={4}
              borderWidth={4}
              borderColor="white"
              colors={{ scheme: 'nivo' }}
              inheritColorFromParent={false}
              childColor={{
                from: 'color',
                modifiers: [['darker', 0.1]]
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
              animate={false}
              motionConfig="stiff"
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
      )}
    </div>
  );
};

export default SunburstChart;
