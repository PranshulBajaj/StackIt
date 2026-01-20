import React, { useState, useRef } from 'react'
import JoditEditor from 'jodit-react'

const SimpleEditor = ({onContentChange}) => {
  const editor = useRef(null);

  const config = {
    readonly: false, // All editing features are enabled
    height: 400,
    width: 500,
    toolbarSticky: false,
    toolbarAdaptive: false,
    showCharsCounter: true,
    showWordsCounter: true,
    showXPathInStatusbar: false,
    spellcheck: true,
    placeholder: 'Start typing here...',
    buttons: [
      'bold',
      'italic',
      'underline',
      'strikethrough',
      '|',
      'ul',
      'ol'
    ],
  }
  return (
    <div className='text-black'>
        <JoditEditor
            ref={editor}
            config={config}
            onBlur={newContent=>onContentChange(newContent)}
        />
    </div>
  )
}

export default SimpleEditor
