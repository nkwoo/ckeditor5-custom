import { Observer } from '@ckeditor/ckeditor5-engine';

export default class VideoLoadObserver extends Observer {
	/**
	 * @inheritDoc
	 */
	public observe(domRoot: HTMLElement): void {
		this.listenTo(domRoot, 'loadeddata', (event, domEvent) => {
			const domElement = domEvent.target as HTMLElement;

			if (this.checkShouldIgnoreEventFromTarget(domElement)) {
				return;
			}

			if (domElement.tagName === 'VIDEO') {
				this._fireEvents(domEvent);
			}
			// Use capture phase for better performance (#4504).
		}, { useCapture: true });
	}

	/**
	 * @inheritDoc
	 */
	public override stopObserving(domRoot: HTMLElement): void {
		this.stopListening(domRoot);
	}

	private _fireEvents(domEvent: Event): void {
		if (this.isEnabled) {
			this.document.fire('layoutChanged');
			this.document.fire('videoLoaded', domEvent);
		}
	}
}
