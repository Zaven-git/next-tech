import { ReactNode } from "react";


export interface NewsItem {
  title: string,
  news_site: string,
  url: string,
  id: string,
  image_url: string,
  summary: string,
}

export interface MediaLibraryProps {
  parentClasses: string,
  childClasses: string,
  alt: string,
  path: string,
}

export interface CardProps {
  path: string,
  fullscreen?: boolean,
  title: string,
  summary?: string,
}

export interface TabProps {
  tab: {
    id: number,
    text: string,
  }
  selectTab: Function,
  isActive: boolean
}

export type LayoutProps = {
  children: ReactNode;
}

export type NavBarProps = {
  classes: string;
}