const $ = {};
function _createModal() {
	const modal = document.createElement('div');
	modal.classList.add('rmodal');
	modal.insertAdjacentHTML('afterbegin', `
		<div class="over-lay">
			<div class="modal-window">
				<div class="header">
					<div class="title">some text</div>
					<div class="close">&times;</div>
				</div>
				<div class="body">
					<p>Lorem ipsum dolor sit amet</p>
					<p>Lorem ipsum dolor sit amet</p>
				</div>
				<div class="footer">
					<button>Ok</button>
					<button>Close</button>
				</div>
			</div>
		</div>
		`);
	document.body.appendChild(modal);
	return modal;
}

$.modal = function() {
	let closing = false;
	const $modal = _createModal();
	const ANIMATION__SPEED = 200;
	return {
		open() {
			!closing && $modal.classList.add('open')
		},
		close() {
			closing = true;
			$modal.classList.remove('open');
			$modal.classList.add('hide');
			setTimeout(()=>{
				$modal.classList.remove('hide');
				closing = false;
			}, ANIMATION__SPEED)
		},
		destroy() {},
		title(text) {
			let title = document.querySelector(".title");
			title.innerHTML = text;
		},
		content(text) {
			let title = document.querySelector(".body");
			title.appendChild('p');
			title.p.innerHTML = text;
		}
	}
}