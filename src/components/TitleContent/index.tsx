type TitleContentProps = {
  title: string;
  content: string;
  tag?: string;
  button?: ButtonProps;
};

type ButtonProps = {
  label: string;
  url: string;
  target: string;
};

export default function TitleContent({
  tag,
  title,
  content,
  button,
}: TitleContentProps) {
  return (
    <div className="mb-18">
      {tag && <span className="text-sm uppercase pb-2 text-yellow">{tag}</span>}
      <h2 className="text-green text-4xl font-extralight mb-3">{title}</h2>
      <p
        className="text-white text-xl font-extralight mb-4"
        dangerouslySetInnerHTML={{ __html: content }}
      />

      {button && (
        <a
          href={button.url}
          className="py-2 px-4 text-green rounded border border-green hover:bg-green hover:text-white"
          target={button.target ?? "_self"}
        >
          {button.label}
        </a>
      )}
    </div>
  );
}
