		var indicador = 0;
		$(document).on('ready', function() {
		  $('.left_mini').on('click', function(e) {
		    e.preventDefault();
		    moveSlider('left_mini');
		  });
		  $('.right_mini').on('click', function(e) {
		    e.preventDefault();
		    moveSlider('right_mini');
		  });

		  function auto() {
		    /*intv = setInterval(function() {
		      $('.right_mini').click();
		    }, 10000);*/
		  }
		  auto(); // start
		  $('.form_container').hover(function(e) {
		    e.type == 'mouseenter' ? clearInterval(intv) : auto();
		  });
		  defineSizes();
		});

		$(window).on('resize', defineSizes);

		function defineSizes() {
		  $('.form_container .slide').each(function(i, el) {
		    $(el).css({
		      'background-image': 'url(' + $(el).data('background') + ')',
		      'height': ($('.form_container').width() * 0.75) + 'px',
		      'width': ($('.form_container').width()) + 'px'
		    });
		  });
		  $('.form_container .slideContainer').css({
		    'margin-left': -(indicador * $('.form_container').width()) + 'px'
		  })
		}

		function moveSlider(direccion) {
		  var limite = $('.form_container .slide').length;
		  indicador = (direccion == 'right_mini') ? indicador + 1 : indicador - 1;
		  indicador = (indicador >= limite) ? 0 : indicador;
		  indicador = (indicador < 0) ? limite - 1 : indicador;
		  $('.form_container .slideContainer').animate({
		    'margin-left': -(indicador * $('.form_container').width()) + 'px'
		  })
		}