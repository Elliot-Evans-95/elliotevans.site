import { IHomeNode } from './home.types';

export interface IHeader {
  icon: string;
  heading: string;
}

export type IEdge = {
  node: IHomeNode;
};

export type Theme = 'light' | 'dark';
export type IndexState = {
  theme: Theme | undefined;
};
