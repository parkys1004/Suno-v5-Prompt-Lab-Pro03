export interface Genre {
  id: number;
  name: string;
  category: string;
  desc: string;
  attr: number[]; // [Energy, Electronic, Acoustic, Atmosphere, Complexity]
  tags: string[];
}

export interface RadarDataPoint {
  subject: string;
  A: number;
  fullMark: number;
}

export interface Prompt {
  text: string;
  desc: string;
}