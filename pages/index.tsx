import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getAllProjects } from "services/projects";

import {
  Layout,
  Banner,
  About,
  About2,
  About3,
  Projects,
} from "@components/index";

export default function Home({ projects }) {
  return (
    <Layout>
      <Banner />
      <About />
      <About2 />
      <About3 />
      <Projects projects={projects} />
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const projects = getAllProjects();

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      projects,
    },
  };
}
