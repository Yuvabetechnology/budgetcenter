// Copyright (c) 2021, Yuvavbe and contributors
// For license information, please see license.txt

frappe.ui.form.on('Expenditure And Request Item Table', {
	// refresh: function(frm) {

	// }
});

frappe.ui.form.on("Expenditure And Request Item Table", "comments", function(frm) {
	frm.add_custom_button("comments", function(){
		var myWin = window.open('https://google.com');
});

 });