interface PageTitleProps {
    title: string;
  }

  const PageTitle = ({ title }: PageTitleProps) => {
    return (
      <div className="prose bg-light-green py-8 text-center">
        <h1 className="text-dark-blue uppercase font-extrabold text-5xl">{title}</h1>
      </div>
    );
  };

export default PageTitle