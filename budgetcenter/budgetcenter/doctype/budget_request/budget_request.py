# Copyright (c) 2021, Yuvavbe and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document

class BudgetRequest(Document):
	pass


@frappe.whitelist()
def get_applicant(applicant):
	result=frappe.get_doc('Budget Applicant',applicant)
	return result

@frappe.whitelist()
def get_maintanence_list(data):
	doc=frappe.get_doc('Maintenance Master List',data)
	return doc