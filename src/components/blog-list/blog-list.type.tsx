import { IEdge } from '../../models/shared.types';
import { IHomeNode } from '../../models/home.types';

export type IntroTextProps = {
  blogPost: IHomeNode;
};

export interface IHomePageProps {
  blog: Array<IEdge>;
}
