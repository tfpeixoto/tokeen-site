type TitleContentProps = {
  title: string;
  content: string;
};

export default function TitleContent({ title, content }: TitleContentProps) {
  return (
    <div className="mb-3">
      <h2 className="text-[#69BD45] text-4xl font-extralight">{title}</h2>
      <p
        className="text-white text-xl font-extralight"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
