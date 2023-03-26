import { useState } from 'react';
import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";

function CodeEditor({ value, onChange }) {
  return (
    <AceEditor
      mode="javascript"
      theme="monokai"
      onChange={onChange}
      name="ide"
      value={value}
      fontSize={12}
      width='100%'
      height='100%'
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

export default CodeEditor;
