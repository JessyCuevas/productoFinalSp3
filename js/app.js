function loadPage() {
	$("#share").click(showPost)
}

function showPost(e) {
	e.preventDefault()
	var $container = $("#posts_container")
	var $divPost =  $("<div />")
	var $user =  users[0]['nickname']
	var $pUser = $("<p />")
	$pUser.text($user)
	var $date = new Date();
	var $hour = $date.getHours();
	var $minutes = $date.getMinutes();
	var $finalHour = $hour + ':'+ $minutes;
	var $input = $("#input")
	var post = $input.val()
	
	$divPost.append($pUser)
	$divPost.append($finalHour)
	$divPost.append(post)
	$container.prepend($divPost)
	$input.val("Compartir el dia de hoy")
}


$(document).ready(loadPage)

