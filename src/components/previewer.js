import React from 'react';
import marked from 'marked';
import DOMPurify from 'dompurify';
import Title from './title';

const Previewer = ({ text }) => {
  marked.setOptions({
    pedantic: false,
    gfm: true,
    breaks: true,
    smartLists: true,
    smartypants: false,
    xhtml: false,
  });

  const renderedText = {
    __html: DOMPurify.sanitize(marked(text)),
  };

  return (
    <>
      <Title title='previewer' />
      <section id='preview' dangerouslySetInnerHTML={renderedText} />
    </>
  );
};

export default Previewer;
