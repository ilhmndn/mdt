// Copyright (c) 2019, - and contributors
// For license information, please see license.txt

frappe.ui.form.on('Operational Capsule Pay', {
	refresh: function (frm) {

	}
});

frappe.ui.form.on('Operational Capsule Pay', {
	refresh: function (frm) {
		frm.add_custom_button(__('Make Joernal Entry'), function () {
			frappe.msgprint("Make Journal Entrty");
		});
	}
});

frappe.ui.form.on('Operational Capsule Pay', {
	refresh: function (frm) {
		frm.add_custom_button(__('Generate Operational'), function () {
			frappe.msgprint("General Operational");
		});
	}
});