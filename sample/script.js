ClassicEditor
    .create(document.querySelector('.editor'), {
        // Editor configuration.
    })
    .then(editor => {
        window.editor = editor;

        editor.conversion.for('downcast').add((dispatcher) => {
            dispatcher.on('attribute:tableAlignment:table', (evt, data, conversionApi) => {
                const viewWriter = conversionApi.writer;
                const figure = conversionApi.mapper.toViewElement(data.item);

                viewWriter.removeStyle('float', figure);

                if (data.attributeNewValue !== null) {
                    viewWriter.setAttribute('data-id', data.attributeNewValue, figure);
                } else {
                    viewWriter.removeAttribute('data-id', figure);
                }
            });
        });

    })
    .catch(handleSampleError);

function handleSampleError(error) {
    const issueUrl = 'https://github.com/ckeditor/ckeditor5/issues';

    const message = ['Oops, something went wrong!', `Please, report the following error on ${issueUrl} with the build id "p4tmspmn6ipj-8jzvo71su6cp" and the error stack trace:`].join('\n');

    console.error(message);
    console.error(error);
}


