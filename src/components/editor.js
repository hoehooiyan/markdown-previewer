import React from 'react';
import Title from './title';

const Editor = ({ handleMarkdown, markdown }) => {
  return (
    <section className='container container__editor'>
      <Title title='editor' />
      <textarea
        id='editor'
        className='container__content container__editor--content'
        defaultValue={markdown}
        onChange={handleMarkdown}
      />
    </section>
  );
};

export default Editor;
