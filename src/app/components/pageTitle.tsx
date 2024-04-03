interface PageTitleProps {
    title: string;
    bgColor: string;
  }
  
  const PageTitle = ({ title, bgColor }: PageTitleProps) => {
    return (
      <div className={`${bgColor} py-8 text-center`}>
        <h1 className="text-dark-blue uppercase font-extrabold text-5xl">{title}</h1>
      </div>
    );
  };
  
  export default PageTitle