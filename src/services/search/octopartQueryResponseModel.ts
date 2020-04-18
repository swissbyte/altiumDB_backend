export interface octopartQueryResponseModel {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "type": "object",
    "properties": {
        "__class__": {
            "type": "string"
        },
        "msec": {
            "type": "integer"
        },
        "request": {
            "type": "object",
            "properties": {
                "__class__": {
                    "type": "string"
                },
                "exact_only": {
                    "type": "boolean"
                },
                "queries": {
                    "type": "array",
                    "items": {},
                    "additionalItems": true
                }
            },
            "additionalProperties": true
        },
        "results": {
            "type": "array",
            "items": {},
            "additionalItems": true
        }
    },
    "additionalProperties": true
}

