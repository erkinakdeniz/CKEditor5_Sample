/**
 * @license Copyright (c) 2003-2021, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import Subscript from '@ckeditor/ckeditor5-basic-styles/src/subscript';
import Superscript from '@ckeditor/ckeditor5-basic-styles/src/superscript';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import LinkImage from '@ckeditor/ckeditor5-link/src/linkimage';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import TodoList from '@ckeditor/ckeditor5-list/src/todolist';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import TableProperties from '@ckeditor/ckeditor5-table/src/tableproperties';
import TableCellProperties from '@ckeditor/ckeditor5-table/src/tablecellproperties';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';
import CloudServices from '@ckeditor/ckeditor5-cloud-services/src/cloudservices';
import SimpleUploadAdapter from '@ckeditor/ckeditor5-upload/src/adapters/simpleuploadadapter';

import Font from '@ckeditor/ckeditor5-font/src/font';
import FontFamily from '@ckeditor/ckeditor5-font/src/fontfamily';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';

import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters';
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	SimpleUploadAdapter,
	Alignment,
	Essentials,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,Underline, Strikethrough, Code, Subscript, Superscript,
	BlockQuote,
	CKFinder,
	CloudServices,
	EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,ImageResize, LinkImage,
	ImageUpload,
	Indent,
	Link,
	List,
	TodoList,
	Font,FontFamily,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,TableProperties, TableCellProperties,
	Highlight,
	SpecialCharacters, SpecialCharactersEssentials,
	HorizontalLine,
	TextTransformation
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'bold',
			'italic','underline', 'strikethrough', 'code','subscript', 'superscript','alignment',
			'link',
			'bulletedList',
			'numberedList','todoList',
			'|',
			'outdent',
			'indent',
			'|','fontSize', 'fontFamily', 'fontColor', 'fontBackgroundColor','highlight','|',
			'uploadImage',
			'blockQuote',
			'insertTable',
			'mediaEmbed','|','horizontalLine','specialCharacters',
			'undo',
			'redo'
		],
		shouldNotGroupWhenFull: true
	},
	fontFamily: {
		
		supportAllValues: true
	},
	fontSize: {
		options: [
			'default',
			9,
			11,
			13,
			17,
			19,
			21
		]
	},
	indentBlock: {
		offset: 1,
		unit: 'em'
	},
	image: {
		resizeUnit: "%",
		isContextPlugin:true,
		isEnabled:true,
		resizeOptions: [
            {
                name: 'resizeImage:original',
                value: null,
                icon: 'original'
            },
            {
                name: 'resizeImage:50',
                value: '50',
                icon: 'medium'
            },
            {
                name: 'resizeImage:75',
                value: '75',
                icon: 'large'
            },
			{
                name: 'resizeImage:25',
                value: '25',
                icon: 'small'
            }
        ],
		toolbar: [
			'imageStyle:alignLeft',
			'imageStyle:alignCenter',
			'imageStyle:alignRight',
			'|',
			'imageTextAlternative','linkImage',
			'resizeImage'
		],
		styles: [
			'full',
			'side',
			'alignLeft',
			'alignCenter',
			'alignRight'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells','tableProperties', 'tableCellProperties'
		]
	},
	simpleUpload: {
		// The URL that the images are uploaded to.
		uploadUrl: 'https://localhost:44375/WebAPI/api/Galleries/addimage',

		
	},
	mediaEmbed: {
        previewsInData: true
    },
	heading: {
		options: [
			{ model: 'paragraph', title: 'Paragraph', class: 'fst-normal' },
			{ model: 'heading1', view: 'h1', title: 'Heading 1', class: 'fs-1' },
			{ model: 'heading2', view: 'h2', title: 'Heading 2', class: 'fs-2' }
		]
	},
	
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'tr'
};
