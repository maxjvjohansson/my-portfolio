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
          <Link href={`/projects/${project.slug}`} key={project._id}>
            <Image
              src={project.image}
              alt={project.title}
              width={2880}
              height={2048}
              style={{ width: "20rem", height: "auto" }}
              priority
            />
          </Link>
        </div>
      ))}
    </main>
  );
}
