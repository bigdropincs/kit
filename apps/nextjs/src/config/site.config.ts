export const siteConfig = {
  name: "Kit",
  shortName: "Kit",
  description:
    "A comprehensive boilerplate to build, launch, and scale your next project",
  url:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://kit.bigdropincs.com",
  
};
