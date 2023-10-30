

ClassicEditor
	.create( document.querySelector( '.editor' ), {
		// Editor configuration.
	} )
	.then( editor => {
		window.editor = editor;
	} )
	.catch( handleSampleError );

function handleSampleError( error ) {
	const issueUrl = 'https://github.com/ckeditor/ckeditor5/issues';

	const message = [
		'Oops, something went wrong!',
		`Please, report the following error on ${ issueUrl } with the build id "p4tmspmn6ipj-8jzvo71su6cp" and the error stack trace:`
	].join( '\n' );

	console.error( message );
	console.error( error );
}

Object.assign(window.CKEDITOR_TRANSLATIONS['ko'].dictionary, {
	'Upload Video': '동영상 업로드',
	'Original': '원본',
	'Left aligned video': '동영상 왼쪽 정렬',
	'Centered video': '동영상 중앙 정렬',
	'Right aligned video': '동영상 오른쪽 정렬',
});
