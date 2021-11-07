import Image from "next/image";
import { Layout, Project } from "@components/index";
import { getAllProjects, getProject } from "@services/projects";

import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const ProjectPage = ({ project }) => {
  const router = useRouter();
  const { locale } = router;

  return (
    <Layout
      secondary
      title={project[`title_${locale}`]}
      description={project[`description_${locale}`]}
    >
      <Project project={project} locale={locale} />
    </Layout>
  );
};

export const getStaticPaths = (context) => {
  const projects = getAllProjects();
  return {
    paths: [
      ...projects.map((project) => ({
        params: { slug: project.slug },
        locale: "pl",
      })),
      ...projects.map((project) => ({
        params: { slug: project.slug },
        locale: "en",
      })),
    ],
    fallback: false,
  };
};

export const getStaticProps = async ({ params, locale }) => {
  const { slug } = params;
  const project = await getProject(slug);

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      project,
    },
  };
};

export default ProjectPage;
