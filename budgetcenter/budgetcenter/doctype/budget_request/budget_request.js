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

		},
	    frm.calculate_service_net_balance = function (frm, row) {
			let total = 0;
			frm.doc.service_net_balance.forEach(d => {
				
				total = total + d.amount 
				console.log(total);

			})
			frm.set_value('total_net_balance', total)

		},

		frm.getapplicantinfo = function (frm, applicant) {
			if(!applicant){

				console.log("no applicant create new ")

			}else{
				frappe.call({
					method: "budgetcenter.budgetcenter.doctype.budget_request.budget_request.get_applicant",
					args: {
						applicant: applicant,
					},//dotted path to server method
					callback: function (r) {
						console.log(r)

						$('#applicant_name').html(r.message.service_name);
						$('#applicant_sector').html(r.message.sector_category);
						$('#applicant_email').html(r.message.office_email);
						$('#applicant_phone').html(r.message.office_phone_number);
						//$('#cus_info3').html(r.message.community);
						//$('#cus_info4').html(r.message.info);
						//$('#cus_info5').html(r.message.customer_type);
						// code snippet
					
						
					}
				})

			}

		},
		frm.getmaintenanceinfo = function(frm,row,cdt,cdn){

			console.log(row.person_name)

			frappe.call({
			 	method: "budgetcenter.budgetcenter.doctype.budget_request.budget_request.get_maintanence_list",
			 	args: {
			 		data:row.person_name,
			 	},//dotted path to server method
			 	callback: function (r) {
					console.log(r)
					console.log(r.message.av_status)
					frappe.model.set_value(cdt,cdn,'auroville_status',r.message.av_status)
				
				}
				
				
			 })
			
			// frappe.call({

			// 	method:"budgetcenter.budgetcenter.doctype.budget_request.budget_request.get_maintanence_list",
			// 	args:{"data":"Mariya"},
			// 	callback: function(r){
			// 		console.log(r)

			// 	}
			// })
		}

	}
	
   
	//add new function

	
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

frappe.ui.form.on('Service Net Balance In All Accounts Table', {
	
	amount: function (frm, cdt, cdn) {
		let row = locals[cdt, cdn];
		frm.calculate_service_net_balance(frm, row);
		

	},
	service_net_balance_remove: function(frm,cdt,cdn){
		let row=locals[cdt,cdn]
		frm.calculate_service_net_balance(frm,row);
	}

});


frappe.ui.form.on('Budget Request', 'applicant', function (frm, cdt, cdn) {
	
	frm.getapplicantinfo(frm, cur_frm.doc.applicant)
	

	
});

frappe.ui.form.on('Auroville Maintenance Item Table',{

	person_name : function(frm,cdt,cdn){
	//console.log("hello")
	let row=locals[cdt][cdn]
	console.log(row)
	
	frm.getmaintenanceinfo(frm,row,cdt,cdn)
	}


});