jQuery(document).ready(function(i){i(".menu").dropit(),i("#menu-trigger").click(function(){i("#sidebar").show()}),i(".main-navigation").dropdowns(),i(document).on("scroll",function(){i(document).scrollTop()>20?i(".site-header").addClass("small"):i(".site-header").removeClass("small")}),i(".ui-hover li").each(function(){i(this).hover(function(){i(this).find(".hide").fadeIn("slow")},function(){i(this).find(".hide").fadeOut("fast")})}),i("#check-all").click(function(t){this.checked?i(".ck-item").prop("checked",!0):i(".ck-item").prop("checked",!1)}),i(".widget_nav_menu .menu").accordion({accordion:!0,speed:300,closedSign:"▸",openedSign:"▾"}),i(".ui-tab").each(function(){var t=i(this);t.find(".tab-content-pane:first").show()}),i(".tab-title").each(function(){var t=i(this);t.find("li:first").addClass("active")}),i(".ui-tab .tab-title li a").click(function(){var t=i(this),e=t.closest(".ui-tab"),n=t.attr("href");return e.find("li").removeClass("active"),t.closest("li").addClass("active"),e.find(".tab-content-pane").hide(),e.find(n).show(),!1});var t=i(".accordion > dd");t.hide(),i(".accordion > dt > a").click(function(){"#"===i(this).attr("href")&&i(this).click(function(){return!1});var e=i(this).parent().next();return e.is(":visible")?t.slideUp("fast"):(t.slideUp(),e.slideDown("fast")),!1});var e=i(".toggle > dd");e.hide(),i(".toggle > dt > a").click(function(){"#"===i(this).attr("href")&&i(this).click(function(){return!1});var t=i(this).parent().next();return t.is(":visible")?t.slideUp("fast"):t.slideDown("fast"),!1});var n=i(".scroll-to-top");"0"!==i(window).scrollTop()&&n.fadeIn(1200),i(window).scroll(function(){"0"===i(window).scrollTop()?n.fadeOut(350):n.fadeIn(1200)}),n.click(function(){i("html, body").animate({scrollTop:0},600)}),i("#add-row").on("click",function(){var t=i(".repeatable-fieldset:last").clone(!0);return t.addClass("new-row"),t.insertAfter(".repeatable-fieldset:last"),!1}),i(".remove-row").on("click",function(){return i(this).parents("tr.new-row").remove(),!1}),i(function(){i(function(){i(".cs-div").css({top:200+i(window).scrollTop(),right:"0"}),i(window).scroll(function(){var t=200+i(window).scrollTop()+"px";i(".cs-div").animate({top:t,right:"0"},{duration:500,queue:!1})}),i(window).resize(function(){var t=200+i(window).scrollTop()+"px";i(".cs-div").animate({top:t,right:"0"},{duration:500,queue:!1})}),i("#cs-close").click(function(){i(".cs-inner").toggle(),i(".cs-div").toggleClass("cs-bar")})})})});
//# sourceMappingURL=main.js.map
