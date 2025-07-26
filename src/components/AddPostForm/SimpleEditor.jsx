import React, { useState, useRef } from 'react'
import JoditEditor from 'jodit-react'

const SimpleEditor = () => {
  const editor = useRef(null);
  const [content, setContent] = useState('');
  // console.log(content)

  const config = {
    readonly: false, // All editing features are enabled
    height: 400,
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
      'ol',
      '|',
      'outdent',
      'indent',
      '|',
      'font',
      'fontsize',
      'brush',
      'paragraph',
      '|',
      'image',
      'table',
      'link',
      '|',
      'align',
      'undo',
      'redo',
      '|',
      'hr',
      'copyformat',
      'fullsize',
      'preview',
      'print',
      'source',
    ],
  }
  return (
    <div className='text-black'>
        <JoditEditor
            ref={editor}
            value={content}
            config={config}
            onChange={()=>{}}
        />
    </div>
  )
}

export default SimpleEditor
