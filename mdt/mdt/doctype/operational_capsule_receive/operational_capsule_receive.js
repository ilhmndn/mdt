// Copyright (c) 2019, - and contributors
// For license information, please see license.txt

frappe.ui.form.on('Operational Capsule Receive', {
	refresh: function (frm) {

	}
});

frappe.ui.form.on('Operational Capsule Receive', {
	refresh: function (frm) {
		frm.add_custom_button(__('Joernal Entry'), function () {
			frappe.msgprint("Create Journal Entrty");
		});
	}
});