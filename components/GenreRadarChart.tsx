import React, { useMemo } from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';
import { Genre, RadarDataPoint } from '../types';
import { RADAR_LABELS } from '../constants';

interface GenreRadarChartProps {
  genre: Genre;
}

const GenreRadarChart: React.FC<GenreRadarChartProps> = ({ genre }) => {
  const isKpop = genre.category === 'K-POP';
  const mainColor = isKpop ? '#db2777' : '#3b82f6';
  const fillColor = isKpop ? '#db2777' : '#3b82f6';

  const data: RadarDataPoint[] = useMemo(() => {
    return RADAR_LABELS.map((label, index) => ({
      subject: label,
      A: genre.attr[index],
      fullMark: 10,
    }));
  }, [genre]);

  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid />
          <PolarAngleAxis 
            dataKey="subject" 
            tick={{ fill: '#4b5563', fontSize: 12, fontWeight: 700 }} 
          />
          <PolarRadiusAxis angle={30} domain={[0, 10]} tick={false} axisLine={false} />
          <Radar
            name={genre.name}
            dataKey="A"
            stroke={mainColor}
            strokeWidth={3}
            fill={fillColor}
            fillOpacity={0.15}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GenreRadarChart;