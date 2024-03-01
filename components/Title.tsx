import React from 'react';

type TitleProps = {
  children: React.ReactNode;
};

const Title = ({ children }: TitleProps) => {
  return <h2 className="text-[4rem] mt-10 font-roslindale-display">{children}</h2>;
};

export default Title;
