interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

export const ProjectCard = ({
  title,
  description,
  imageUrl,
  link,
}: ProjectCardProps) => {
  return (
    <div className="rounded-4xl bg- flex flex-col">
      <img
        src={imageUrl}
        alt={title}
        className="rounded-t-4xl w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 mb-4">{description}</p>
        <a
          href={link}
          className="text-blue-500 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>
    </div>
  );
};
