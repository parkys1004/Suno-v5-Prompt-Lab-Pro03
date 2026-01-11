export interface Prompt {
  text: string;
  desc: string;
}

export interface Genre {
  id: number;
  name: string;
  category: string;
  desc: string;
  attr: number[]; // [Energy, Electronic, Acoustic, Atmosphere, Complexity]
  tags: string[];
  prompts: Prompt[];
}

export interface RadarDataPoint {
  subject: string;
  A: number;
  fullMark: number;
}