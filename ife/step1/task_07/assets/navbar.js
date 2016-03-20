$(document).ready(function ()
{
	$('.navbar-toggle').click(function ()
	{if ($('body').hasClass('animate-show'))
		{$('body').removeAttr('style').removeClass('animate-show').addClass('animate-hide');
		$('.side-nav').removeClass('animate-show').addClass('animate-hide');
		}
	else
		{$('body').attr('style', 'width:' + $(window).width() + 'px;').removeClass('animate-hide').addClass('animate-show');
		$('.side-nav').removeClass('animate-hide').addClass('animate-show');
		}
	});
	$('.side-nav ul li').click(function ()
	{if ($('body').hasClass('animate-show'))
		{$('body').removeAttr('style').removeClass('animate-show').addClass('animate-hide');
		$('.side-nav').removeClass('animate-show').addClass('animate-hide');
		}
	else
		{$('body').attr('style', 'width:' + $(window).width() + 'px;').removeClass('animate-hide').addClass('animate-show');
		$('.side-nav').removeClass('animate-hide').addClass('animate-show');
		}
	});		
	//{var li = $(this).parents('ul').find('li');
	//if (li.is(':visible'))
	//{li.slideUp();}
	//else
	//{li.slideDown();}
	//});
});