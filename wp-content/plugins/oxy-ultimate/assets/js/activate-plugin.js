function ActivateOUPlugin( id, action, nonce ) {
  var key = jQuery( '#' + id).val();   
  var data = {
    "action"      : "ouc_" + action + "_plugin",
    "license_key" : key,
    "security"    : nonce
 };
 
 jQuery('#actplug').css('visibility', 'inherit');
 
 jQuery.post(ajaxurl, data, function( response ) {
    jQuery('#actplug').removeAttr('style');
    if( response != '200' ) {
      jQuery('.ouc-response').addClass('error').text(response);
    }else {
      jQuery('#btn-' + action + '-license').hide();
      jQuery('.ouc-response').text('');
      jQuery('.ouc-response').removeClass('error');
      if( action == 'reactivate' ) {
        jQuery('td .update-nag').hide();
      }
    }   
    
    jQuery('.ouc-response').show();
 });
}

function activateComponents() {
	var data = {
			"action" 	: "ou_activate_components",
			"modules" 	: jQuery('input[name="active_components"]').val(),
			"security" 	: jQuery('input[name="ouuc_nonce"]').val()
	};

	jQuery('.div-button .spinner').css('visibility', 'visible');

	jQuery.post(ajaxurl, data, function( response ) {
		jQuery('.div-button .spinner').removeAttr('style');
		if( response == 200 || response == '200' ) {
			jQuery('.ou-comp-notice').css('display', 'block');
		}
	});
}

(function($){
	$(function(){
		$(".section-cb").click(function(){
			var parent = $(this).closest('.ou-acrd-item');
			parent.find('input:checkbox').not(this).prop('checked', this.checked).trigger('change');
		});

		Array.prototype.remove = function(x) { 
			var i;
			for(i in this){
				if(this[i].toString() == x.toString()){
					this.splice(i,1)
				}
			}
		};

		$('.check-column').on('change', function() {
			var comps = $('input[name="active_components"]').val(),
			active_components = comps.split(","),
			ckb = $(this);
			val =  ckb.val();

			if( ckb.prop("checked") ) {
				active_components.push( val );
			} 

			if( ! ckb.prop("checked") ) {
				active_components.remove( val );
			}

			$('input[name="active_components"]').val(active_components.join(",").toString());
	    });
	});
})(jQuery);