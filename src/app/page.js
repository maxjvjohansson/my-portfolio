import Image from "next/image.js";
import { getProjects } from "../../sanity/queries.js";
import Link from "next/link.js";

export default async function Home() {
  const projects = await getProjects();

  return (
    <main>
      {projects.map((project) => (
        <div className="project-card" key={project._id}>
          <h2 className="project-title">{project.title}</h2>
          <Image
            src={project.image}
            alt={project.title}
            width={2880}
            height={2048}
            style={{ width: "20rem", height: "auto" }}
            priority
          />
          <Link className="project-link" href={project.project}>
            {project.project}
          </Link>
          <Link className="project-link" href={project.github}>
            {project.github}
          </Link>
        </div>
      ))}
    </main>
  );
}
