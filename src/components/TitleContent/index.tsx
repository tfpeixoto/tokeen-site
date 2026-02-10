type TitleContentProps = {
  title: string;
  content: string;
  tag?: string;
  button?: ButtonProps;
};

type ButtonProps = {
  label: string;
  url: string;
};

export default function TitleContent({
  tag,
  title,
  content,
  button,
}: TitleContentProps) {
  return (
    <div className="mb-10">
      {tag && <span className="text-sm uppercase pb-2 text-white">{tag}</span>}
      <h2 className="text-[#69BD45] text-4xl font-extralight mb-3">{title}</h2>
      <p
        className="text-white text-xl font-extralight mb-4"
        dangerouslySetInnerHTML={{ __html: content }}
      />

      {button && (
        <a
          href={button.url}
          className="py-2 px-4 text-[#69BD45] rounded border border-[#69BD45]"
        >
          {button.label}
        </a>
      )}
    </div>
  );
}
