import {Plugin} from '@ckeditor/ckeditor5-core';

export default class TableSort extends Plugin {
    init() {
        const editor = this.editor;

        editor.model.schema.extend('table', {allowAttributes: ['data-id']});

        editor.conversion.attributeToAttribute({model: 'data-id', view: 'data-id', converterPriority: 'highest'});

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
    }
}
