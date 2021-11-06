import { getFileBySlug, getList } from "lib/markdownParser";

export const getAllProjects = () => {
  const projects = getList("_projects");

  return projects.sort((a, b) => b.createdAt - a.createdAt);
};

export const getProject = async (slug) => {
  return await getFileBySlug("_projects", slug);
};
