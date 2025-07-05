import configs from "~/configs/configs";

type ExperienceCardProps = {
  title: string;
  content: string;
  degree?: string;
  date?: string;
  location?: string;
  eayikesLink?: string;
};

export default function ExperienceCard(props: ExperienceCardProps) {
  const renderTitle = () => {
    if (!props.eayikesLink || !props.title.includes("Eayikes")) return props.title;
  
    const [before, after] = props.title.split("Eayikes");
  
    return (
      <>
        {before}
        <a
          href={props.eayikesLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 underline"
        >
          Eayikes
        </a>
        {after}
      </>
    );
  };
  
  return (
    <div
      className="w-full md:w-11/12 mx-auto my-4 rounded-2xl shadow-md"
      style={{ backgroundColor: configs.colors.primary }}
    >
      <div className="px-8 py-6">
        {/* title */}
        <h2 className="text-2xl font-blackOpsOne text-gray-900">{renderTitle()}</h2>

        {/* data */}
        {(props.date || props.location) && (
          <p className="text-m font-blackOpsOne text-gray-700 mt-1">
            {props.date}
            {props.location && ` · ${props.location}`}
          </p>
        )}

        {/* degree */}
        {props.degree && (
          <p className="text-md italic text-gray-700 mb-1">{props.degree}</p>
        )}

        {/* content */}
        <p className="text-md text-black mb-1">
          {props.content}
        </p>
      </div>
    </div>
  );
}
