function loadPage() {
	$("#post").click(showPostSection);
}

function showPostSection() {
	$("#share, #file").css('display', 'inline-block');
}


$(document).ready(loadPage);

