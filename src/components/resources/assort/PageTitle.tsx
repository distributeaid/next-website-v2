interface PageTitleProps {
  title: string;
  bgColor: string;
  textColor: string;
}

export const PageTitle = ({ textColor, title, bgColor }: PageTitleProps) => {
  return (
    <div className={`bg-${bgColor} py-8 text-center`}>
      <h1 className={`text-${textColor} uppercase font-extrabold text-5xl`}>
        {title}
      </h1>
    </div>
  );
};
