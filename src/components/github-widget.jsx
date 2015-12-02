import React from 'react';

const GithubWidget = ({
  user,
  repository,
  type='star',
  width='90px',
  height='20px'
}) => {
  const url = `https://ghbtns.com/github-btn.html?user=${user}&repo=${repository}&type=${type}&count=true`;

  return (
    <iframe
	  src={url}
	  frameborder="0"
	  scrolling="0"
	  width={width}
	  height={height} />
  );
};

export default GithubWidget;
