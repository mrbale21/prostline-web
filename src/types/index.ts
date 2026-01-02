import type { JSX } from "react";

export type GalleryImage = {
  id: number;
  title: string;
  description?: string;
  imageUrl: string;
  serviceDetails: string[];
  duration: string;
  location: string;
};

export type Service = {
  icon: JSX.Element;
  title: string;
  desc: string;
};

export type Benefit = {
  icon: JSX.Element;
  title: string;
  desc: string;
};

export type Package = {
  name: string;
  price: string;
  features: string[];
  recommended: boolean;
};

export type PriceItem = {
  service: string;
  price: string;
};

export type Testimonial = {
  name: string;
  company: string;
  rating: number;
  text: string;
  avatarUrl: string;
};
