import InlineEditor from '@ckeditor/ckeditor5-editor-inline/src/inlineeditor';
import CKEditorInspector from '@ckeditor/ckeditor5-inspector';

// app.js


import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import Clipboard from '@ckeditor/ckeditor5-clipboard/src/clipboard';
import Enter from '@ckeditor/ckeditor5-enter/src/enter';
import ShiftEnter from '@ckeditor/ckeditor5-enter/src/shiftenter';
import Typing from '@ckeditor/ckeditor5-typing/src/typing';
import Undo from '@ckeditor/ckeditor5-undo/src/undo';

//Blocks to Support
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';

import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import List from '@ckeditor/ckeditor5-list/src/list';


//Inline to Support
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Link from '@ckeditor/ckeditor5-link/src/link';

//UI

import HeadingButtonsUI from '@ckeditor/ckeditor5-heading/src/headingbuttonsui';
import ParagraphButtonUI from '@ckeditor/ckeditor5-paragraph/src/paragraphbuttonui';

//Other

import InlineItems from './src/InlineItems.js';
import IndentTextPlugin from 'ckeditor5-indent-text/src/indent-text'

window.IncCKEditorFeatures = {
    //The editor
    InlineEditor,
    CKEditorInspector,
    //Essentials package includes the five underneath, but I want to do them seperately because I don't want all editors to allow Enter (and maybe other customizations)
    //Essentials,
    Clipboard,
    Enter,
    ShiftEnter,
    Typing,
    Undo,
    //Blocks to Support
    Paragraph,
    Heading,
    BlockQuote,
    Link,
    //Inline to support
    Bold,
    Italic,
    List,
    //UI
    HeadingButtonsUI,
    ParagraphButtonUI,
    //Other
    InlineItems,
    IndentTextPlugin
}
