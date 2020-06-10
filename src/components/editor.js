import React from 'react';
import Title from './title';

const Editor = ({ handleMarkdown, markdown }) => {
  return (
    <>
      <Title title='editor' />
      <textarea id='editor' defaultValue={markdown} onChange={handleMarkdown} />
    </>
  );
};

export default Editor;
