// Copyright (c) 2021, Yuvavbe and contributors
// For license information, please see license.txt

frappe.ui.form.on('Budget Request', {
	refresh: function(frm) {
		frm.add_custom_button(__('Upload Students Data'), function(){
			//perform desired action such as routing to new form or fetching etc.
		  }, __("Utilities"));
		  
		  frm.add_custom_button(__('Upload Students Data'), function(){
			//perform desired action such as routing to new form or fetching etc.
		  }, __("Utilities"));

	},

	setup: function (frm) {

		frm.calculate_income = function (frm, row) {
			let total = 0;
			frm.doc.income_and_revenue.forEach(d => {
				total = total + d.amount 
				console.log(total);

			})
			frm.set_value('total_income', total)

		}
		frm.calculate_total_net_balance = function(frm,row){
			let total=0;

			frm.doc.service_net_balance.forEach(d=>{
				total+=d.amount;
			})

			
			frm.set_value('total_net_balance',total)
		}

		frm.calculate_spent=function(frm,row){


		}
		frm.calculate_required=function(frm,row){

		}
	
	
	}
    


	
});

frappe.ui.form.on('Service Income And Revenue Item Table', {
	source_name: function (frm, cdt, cdn) {
		let row = locals[cdt, cdn];


	},
	amount: function (frm, cdt, cdn) {
		let row = locals[cdt, cdn];
		frm.calculate_income(frm, row);

	},
	//remove grid from child table
	income_and_revenue_remove: function(frm,cdt,cdn) {
		let row = locals[cdt, cdn];
		frm.calculate_income(frm, row);
		
        
    }




});


frappe.ui.form.on('Service Net Balance In All Accounts Table',{

	amount: function(frm,cdt,cdn){
		let row=locals[cdt][cdn]
		frm.calculate_total_net_balance(frm,row);
	}
});

frappe.ui.form.on('Expenditure And Request Item Table', {
	item_name: function (frm, cdt, cdn) {
		let row = locals[cdt][cdn];
		console.log(row)
	},
	amount_spent: function (frm, cdt, cdn) {
		let row = locals[cdt][cdn];
		frm.calculate_spent(frm, row);



	},
	amount_required: function (frm, cdt, cdn) {

		let row = locals[cdt][cdn];

		frm.calculate_required(frm, row);

	}



});
