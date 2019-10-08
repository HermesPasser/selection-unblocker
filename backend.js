document.addEventListener('DOMContentLoaded', () => {
    const selBtn = document.getElementById('textselection');
    selBtn.addEventListener('click', () => { removeBlockingCSS() });
	
	const ctxBtn = document.getElementById('ctxmenu');
    ctxBtn.addEventListener('click', () => { restoreContextMenu() });
});

function removeBlockingCSS() {
	const els = document.querySelectorAll('*')
	const blockingStyles = [
	  '-webkit-user-select',
	  '-khtml-user-select',
	  '-moz-user-select',
	  '-o-user-select',
	  'user-select'
	]

	els.forEach((el) => { 
		blockingStyles.forEach((style) => {
			if (el.style[style] !== void(0))
				el.style[style] = 'auto'
		})
	})
}

function restoreContextMenu() {
	document.oncontextmenu = function(){}
}
