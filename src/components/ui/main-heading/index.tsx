function MainHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <>
      <span className="uppercase text-center font-semibold opacity-30">{subtitle}</span>
      <h2 className="text-primary italic font-bold text-4xl">{title}</h2>
    </>
  );
}

export default MainHeading;
