$(window).scroll(function(){
	var sticky = $('.sticky'),
	scroll = $(window).scrollTop(),
	stickyContainer = $('.col-sm-12[name=position-topmenu]'),
	elementOffset = stickyContainer.offset().top;

	if (scroll >= elementOffset) {
		sticky.addClass('fixed');
	} else if (scroll < elementOffset){
		sticky.removeClass('fixed');
	}

});

var materialBoxBottomMargin = $('.material-box');

function materialBoxResize() {
	if ($(window).width() >= 768) {
		$('.red-white-gradient-bg').css({
			'height': $('.yellow-bg').height() + 30,
		});

		$('.blue-white-gradient-bg').css({
			'height': ($('.green-white-gradient-bg').height() + 30) + ($('.blue-bg').height() + 30) + 10,
		});

		$('.yellow-white-gradient-bg').css({
			'height': ($('.blue-bg').height() + 30) + ($('.red-orange-gradient-bg').height() + 30) + 10,
		});

		$('.red-orange-gradient-bg-container').css({
			'top': -(($('.red-orange-gradient-bg').height() + 30) + 10),
		});

		$('.metro-body-top-container .container').css({
			'height': 'auto',
		});
	}else {
		$('.red-white-gradient-bg').css({
			'height': 'auto',
		});

		$('.blue-white-gradient-bg').css({
			'height': 'auto',
		});

		$('.yellow-white-gradient-bg').css({
			'height': 'auto',
		});

		$('.red-orange-gradient-bg-container').css({
			'top': '0px',
		});
	}
}

$(window).load(function () {
	materialBoxResize();
});

$(window).resize(function () {
	materialBoxResize();
});

