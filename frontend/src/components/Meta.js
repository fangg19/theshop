import React from 'react';
import Helmet from 'react-helmet';

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keyword" content={keywords} />
    </Helmet>
  );
};

Meta.defaultProps = {
  title: 'Welcome to The Shop',
  keywords: 'shop, cheap shop, buy',
  description: 'The best products you cand find on the market.',
};

export default Meta;
