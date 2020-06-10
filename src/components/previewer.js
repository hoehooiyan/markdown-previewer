import React from 'react';
import marked from 'marked';
import DOMPurify from 'dompurify';
import Title from './title';

const Previewer = ({ text }) => {
  marked.setOptions({
    breaks: true,
    gfm: true,
    pedantic: false,
    smartLists: true,
    smartypants: false,
    xhtml: true,
  });

  const renderedText = {
    __html: DOMPurify.sanitize(marked(text)),
  };

  return (
    <section className='container container__previewer'>
      <Title title='preview' />
      <article
        id='preview'
        className='container__content container__previewer--content'
        dangerouslySetInnerHTML={renderedText}
      />
    </section>
  );
};

export default Previewer;
