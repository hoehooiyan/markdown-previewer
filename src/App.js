import React, { useState } from 'react';
import Editor from './components/editor';
import Previewer from './components/previewer';

const App = () => {
  const initialMarkdown = `
# Welcome!

## Heading 2

### Heading 3

#### Heading 4

##### Heading 5

###### Heading 6

---
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!

Or _italic_.

Or... wait for it... **_both!_**

And feel free to go crazy ~~crossing stuff out~~.

---

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
- Some are bulleted.
- With different indentation levels.
- That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;

  const [markdown, setMarkdown] = useState(initialMarkdown);

  const handleMarkdown = (e) => {
    setMarkdown(e.target.value);
  };

  return (
    <main className='app'>
      <Editor handleMarkdown={handleMarkdown} markdown={markdown} />
      <Previewer text={markdown} />
    </main>
  );
};

export default App;
