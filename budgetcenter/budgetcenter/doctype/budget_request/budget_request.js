// Copyright (c) 2021, Yuvavbe and contributors
// For license information, please see license.txt

frappe.ui.form.on('Budget Request', {
	refresh: function(frm) {
		frm.add_custom_button(__('Upload Students Data'), function(){
			//perform desired action such as routing to new form or fetching etc.
		  }, __("Utilities"));
		  
	

	}
});
