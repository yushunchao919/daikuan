$(".registerform").Validform({
		tiptype:function(msg,o,cssctl){
			if(!o.obj.is("form")){
				var objtip=o.obj.siblings(".Validform_checktip");
				cssctl(objtip,o.type);
				objtip.text(msg);
			}
		}
});
	$(function(){
	$(".registerform input").focus(function(){
	var b = $(this).removeAttr("placeholder");
	$(this).removeAttr("placeholder").addClass('a');
	})
})
/*form js*/
