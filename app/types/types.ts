export type IDs = number[];

export interface Story {
  by: string;
  descendants: number;
  id: number;
  score: number;
  time: number;
  title: string;
  type: string;
  url: string;
  dead?: boolean;
}
