(function ($) {
	"use strict";


	$(document).ready(function() {

		// jQuery DemoPanel
		$("#panel_open").click(function(){
			$(".setting_panel").animate({left:"-226px"});
			$(this).hide();
			$("#panel_close").css("display","block");
		});	

		$("#panel_close").click(function(){
			$(".setting_panel").animate({left:"0px"});
			$(this).hide();
			$("#panel_open").css("display","block");
		});	

		// jQuery Custom scrollbar
		$("body").niceScroll({
			cursorcolor: "#57BDDB",
			cursorborderradius: "0px",
			cursorwidth: "10px",
			cursorminheight: 100,
			cursorborder: "0px solid #fff",
			zindex: 9999,
			autohidemode: true,
			horizrailenabled:false
		});

		// jQuery Stick menu		
		$(".navbar").sticky({topSpacing: 0});
		
		// jQuery One page nav
		$(".nav").onePageNav();
		
		// jQuery Portfolio filter
		$("#portfolio_list").isotope({
		  // options
		  itemSelector: '.pitem',
		  layoutMode: 'fitRows'
		});	
		
		
		// jQuery Owl Carousel
		$(".partner-list").owlCarousel({
			pagination : false,
			navigation : true,
			navigationText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"]
		});
		
		
		// jQuery counter
		$('.counter').counterUp({
			delay: 10,
			time: 1000
		});
		
		// jQuery Lightbox
		$(".litebox").liteBox();	
		
		// jQuery Parallax
		$('.home-parallax, .features-bg, .parallax-bg').scrolly({bgParallax: true});
		
		
		
		// jQuery Contact form validation
		$('form').validatr({
			location:"bottom"
		}); 
		
		$("#form-messages").hover(function() {
			$(this).delay(350).fadeOut('slow');
		});
		
		function H$(i) {return document.getElementById(i)}
			function H$$(c, p) {return p.getElementsByTagName(c)}
			var slider = function () {
			 function init (o) {
			  this.id = o.id;
			  this.at = o.auto ? o.auto : 3;
			  this.o = 0;
			  this.pos();
			 }
			 init.prototype = {
			  pos : function () {
			   clearInterval(this.__b);
			   this.o = 0;
			   var el = H$(this.id), li = H$$('li', el), l = li.length;
			   var _t = li[l-1].offsetHeight;
			   var cl = li[l-1].cloneNode(true);
			   cl.style.opacity = 0; cl.style.filter = 'alpha(opacity=0)';
			   el.insertBefore(cl, el.firstChild);
			   el.style.top = -_t + 'px';
			   this.anim();
			  },
			  anim : function () {
			   var _this = this;
			   this.__a = setInterval(function(){_this.animH()}, 20);
			  },
			  animH : function () {
			   var _t = parseInt(H$(this.id).style.top), _this = this;
			   if (_t >= -1) {
				clearInterval(this.__a);
				H$(this.id).style.top = 0;
				var list = H$$('li',H$(this.id));
				H$(this.id).removeChild(list[list.length-1]);
				this.__c = setInterval(function(){_this.animO()}, 20);
				//this.auto();
			   }else {
				var __t = Math.abs(_t) - Math.ceil(Math.abs(_t)*.07);
				H$(this.id).style.top = -__t + 'px';
			   }
			  },
			  animO : function () {
			   this.o += 2;
			   if (this.o == 100) {
				clearInterval(this.__c);
				H$$('li',H$(this.id))[0].style.opacity = 1;
				H$$('li',H$(this.id))[0].style.filter = 'alpha(opacity=100)';
				this.auto();
			   }else {
				H$$('li',H$(this.id))[0].style.opacity = this.o/100;
				H$$('li',H$(this.id))[0].style.filter = 'alpha(opacity='+this.o+')';
			   }
			  },
			  auto : function () {
			   var _this = this;
			   this.__b = setInterval(function(){_this.pos()}, this.at*1000);
			  }
			 }
			 return init;
			}();


		
	});

	/* ==============================================
	 Smooth Scroll To Anchor
	 =============================================== */


	$(window).load(function(){

		$("#send").click(function(){
			var liuyan = $("#slider");
			var name = $("#name").val();
			var talkMessage = $("#talkMessage").val();
			liuyan.append('<li><a class="fl" href="javascript:;">' + name + '</a>'
								+   ' <p>' + talkMessage+ ' </p>'
								+  ' </li>');
			alert("如果你有什么想对我说的话，请把你的祝福发送到邮箱378413072@qq.com，第二天就可以看到你的留言了");
		});
			
		

		// Portfolio Items
		var $container = $('#portfolio_list');
		$container.isotope({
			filter: '*',
			animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false
			}
		});
	 
		$('.portfolio-filters li').click(function(){
			$('.portfolio-filters .active').removeClass('active');
			$(this).addClass('active');
	 
			var selector = $(this).attr('data-filter');
			$container.isotope({
				filter: selector,
				animationOptions: {
					duration: 750,
					easing: 'linear',
					queue: false
				}
			 });
			 return false;
		});
	});

}(jQuery));	