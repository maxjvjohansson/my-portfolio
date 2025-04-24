import Image from "next/image";
import Link from "next/link.js";
import { getProject } from "../../../../sanity/queries.js";

export default async function ProjectPage({ params }) {
  const { project: slug } = await params;
  const project = await getProject(slug);

  return (
    <div className="project-overview" key={params._id}>
      <h2 className="project-title">{project.title}</h2>
      <Link
        href={project.project}
        key={project._id}
        target="_blank"
        rel="noopener noreferrer"
        className="project-global-link"
      >
        <Image
          src={project.image}
          alt={project.title}
          width={2880}
          height={2048}
          style={{ width: "20rem", height: "auto" }}
          priority
        />
      </Link>
      <p>{project.description}</p>
      <Link
        className="project-link"
        href={project.project}
        target="_blank"
        rel="noopener noreferrer"
      >
        {project.project}
      </Link>
      <Link
        className="project-link"
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        {project.github}
      </Link>
      <div className="skills">
        {project.skills.map((skill, index) => (
          <div key={index} className="skill-item">
            <p>{skill.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
