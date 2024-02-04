import Link from 'next/link';

interface ProjectCardProps {
  id: string;
  color: string;
  title?: string;
  img?: string;
  heading: string;
  headingBottom?: boolean;
  height?: string;
}

const ProjectCard = ({ id, color, img, title, heading, headingBottom, height }: ProjectCardProps) => {
  return (
    <>
      {!headingBottom ? (
        <div className="projects__card">
          <Link href={`/projects/${id}`}>
            {heading === 'h2' ? (
              <h2 className={`text-center projects__card-${color}`}>{title}</h2>
            ) : heading === 'h3' ? (
              <h3 className={`text-center projects__card-${color}`}>{title}</h3>
            ) : (
              <h4 className={`text-center projects__card-${color}`}>{title}</h4>
            )}

            <img src={img} alt={title} style={{ height: height }} />
          </Link>
        </div>
      ) : (
        <div className="projects__card">
          <Link href={`/projects/${id}`}>
            <img src={img} alt={title} style={{ height: height }} />

            {heading === 'h2' ? (
              <h2 className={`text-center projects__card-${color}`}>{title}</h2>
            ) : heading === 'h3' ? (
              <h3 className={`text-center projects__card-${color}`}>{title}</h3>
            ) : (
              <h4 className={`text-center projects__card-${color}`}>{title}</h4>
            )}
          </Link>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
