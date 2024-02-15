import { ElementType } from 'react';

export type HeadingElement = Extract<ElementType, `h${number}`>;

export interface HeadingProps {
  as?: HeadingElement;
}
