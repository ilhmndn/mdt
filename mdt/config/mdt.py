from __future__ import unicode_literals
from frappe import _


def get_data():
    return [
        {
            "label": _("Setup"),
            "items": [
                {
                    "type": "doctype",
                    "name": "Operational Posting Setup"
                }
            ]
        },
        {
            "label": _("Product"),
            "items": [
                {
                    "type": "doctype",
                    "name": "Bus"
                },
                {
                    "type": "doctype",
                    "name": "Type Of Payment"
                }
            ]
        },
        {
            "label": _("Transaction"),
            "items": [
                {
                    "type": "doctype",
                    "name": "Operational Capsule Pay"
                },
                {
                    "type": "doctype",
                    "name": "Operational Capsule Receive"
                }
            ]
        }
    ]