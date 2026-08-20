import type { NavItem, PropertyDetails } from "../types";

export const navItems: NavItem[] = [
  { label: "Home", href: "/home" },
  { label: "Property", href: "/property" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const propertyData: PropertyDetails = {
  beds: 3,
  baths: 2,
  sqft: 2200,
  title: "Light House NY",
  subtitle:
    "Get started by choosing from one of our pre-built page templates to showcase your properties",
  price: 3272,
  imageUrl: "/image/photo-1510798831971-661eb04b3739.avif",
  callNumber: "+10 (78) 356 3276",
};

export const propertiesList = [
  {
    id: 1,
    title: "Appartment",
    price: 6728,
    subtitle:
      "Get started by choosing from one of our pre-built page templates to showcase your properties",
    beds: 2,
    baths: 2,
    sqft: 1050,
    imageUrl: "/image/photo-1522708323590-d24dbb6b0267.avif",
  },
  {
    id: 2,
    title: "Office",
    price: 6728,
    subtitle:
      "Get started by choosing from one of our pre-built page templates to showcase your properties",
    beds: 2,
    baths: 2,
    sqft: 1050,
    imageUrl: "/image/photo-1497366216548-37526070297c.avif",
  },
  {
    id: 3,
    title: "Classic Home",
    price: 6728,
    subtitle:
      "Get started by choosing from one of our pre-built page templates to showcase your properties",
    beds: 2,
    baths: 2,
    sqft: 1050,
    imageUrl: "/image/photo-1512917774080-9991f1c4c750.avif",
  },
  {
    id: 4,
    title: "Appartment",
    price: 6728,
    subtitle:
      "Get started by choosing from one of our pre-built page templates to showcase your properties",
    beds: 2,
    baths: 2,
    sqft: 1050,
    imageUrl: "/image/photo-1502672260266-1c1ef2d93688.avif",
  },
  {
    id: 5,
    title: "Office",
    price: 6728,
    subtitle:
      "Get started by choosing from one of our pre-built page templates to showcase your properties",
    beds: 2,
    baths: 2,
    sqft: 1050,
    imageUrl: "/image/photo-1504384308090-c894fdcc538d.avif",
  },
  {
    id: 6,
    title: "Classic Home",
    price: 6728,
    subtitle:
      "Get started by choosing from one of our pre-built page templates to showcase your properties",
    beds: 2,
    baths: 2,
    sqft: 1050,
    imageUrl: "/image/photo-1600596542815-ffad4c1539a9.avif",
  },
];

export const blogsList = [
  {
    id: 1,
    title: "Google inks pact for new 35-storey office",
    excerpt:
      "That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.",
    image: "/image/photo-1600585154340-be6161a56a0c.avif",
    date: "15 Jan",
  },
  {
    id: 2,
    title: "Modern interior design for luxury living",
    excerpt:
      "Transform your living spaces with these latest interior design aesthetics that define luxury and comfort in 2026.",
    image: "/image/photo-1600596542815-ffad4c1539a9.avif",
    date: "12 Feb",
  },
  {
    id: 3,
    title: "Why property investment is booming in 2026",
    excerpt:
      "Expert analysis on why this year is the best time to diversify your portfolio with high-yield real estate assets.",
    image: "/image/photo-1560518883-ce09059eeffa.avif", // Yeh link bilkul stable hai
    date: "05 Mar",
  },
];
