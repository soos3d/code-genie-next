import { useState } from 'react';
import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";


function CodeEditorOutput() {
  const [code, setCode] = useState("// Paste your code here 👇");

  return (
    <AceEditor
      mode="javascript"
      theme="monokai"
      onChange={(newValue) => setCode(newValue)}
      name="ide"
      value={code}
      fontSize={16}
      height="60%"
      width='100%'
      showPrintMargin={false}
      showGutter={true}
      highlightActiveLine={true}
      setOptions={{
        enableBasicAutocompletion: false,
        enableLiveAutocompletion: false,
        enableSnippets: false,
        showLineNumbers: true,
        tabSize: 4,
      }}
    />
  );
}

export default CodeEditorOutput;
