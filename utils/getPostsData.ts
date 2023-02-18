import path from "path";
import fs from "fs";
import { ImageProps } from "./types";

const getPostsData = () => {
  const filePath = path.join(process.cwd(), "/data/data.json");
  const fileContents = fs.readFileSync(filePath, "utf8");

  // parse the JSON data
  const data: ImageProps[] = JSON.parse(fileContents);
  return data;
};

export default getPostsData;
