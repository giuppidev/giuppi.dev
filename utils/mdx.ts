import { promises as fs } from "fs";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

type Frontmatter = {
  title: string;
  date: string;
};

type Course<TFrontmatter> = {
  serialized: MDXRemoteSerializeResult;
  frontmatter: TFrontmatter;
};

export async function getCourseMDX(
  filepath: string
): Promise<Course<Frontmatter>> {
  // Read the file from the filesystem
  const raw = await fs.readFile(filepath, "utf-8");

  // Serialize the MDX content and parse the frontmatter
  const serialized = await serialize(raw, {
    parseFrontmatter: true,
  });

  // Typecast the frontmatter to the correct type
  const frontmatter = serialized.frontmatter as Frontmatter;

  // Return the serialized content and frontmatter
  return {
    frontmatter,
    serialized,
  };
}
