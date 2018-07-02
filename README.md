## clinical:hl7-resource-list  

#### Licensing  

![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)

#### Integration & Verification Tests

[![CircleCI](https://circleci.com/gh/clinical-meteor/hl7-resource-list/tree/master.svg?style=svg)](https://circleci.com/gh/clinical-meteor/hl7-resource-list/tree/master)

#### API Reference  

This package implements the FHIR List resource schema provided at  [https://www.hl7.org/fhir/list.html](https://www.hl7.org/fhir/list.html).  


#### Installation  

````bash
# to add hl7 resource schemas and rest routes
meteor add clinical:hl7-resource-list

# to initialize default data
INITIALIZE=true meteor
````

#### Example   

```js
var nyQuill = {
  "resourceType": "List",
  "code": {
    "coding": [
      {
        "system": "http://snomed.info/sct",
        "code": "182836005",
        "display": "Review of medication"
      }
    ],
    "text": "Medication Review"
  },
  "source": {
    "reference": "Patient/example"
  },
  "status": "current",
  "date": "2013-11-20T23:10:23+11:00",
  "mode": "changes",
  "entry": [
    {
      "fhir_comments": [
        "  \n      in a real medications list, we'd actually have medication resources.\n      but this an example to demonstrate a changes list, so we'll just use \n      display  "
      ],
      "flag": {
        "fhir_comments": [
          "  patient was prescribed hydroxocobalamin. the flag marks this \n       as a prescription. Note that healthcare workers will now get into\n       a long debate the exact implication of \"prescribed\". That's why the\n       spec doesn't fix the flag values  "
        ],
        "coding": [
          {
            "system": "http://nehta.gov.au/codes/medications/changetype",
            "code": "01",
            "display": "Prescribed"
          }
        ]
      },
      "item": {
        "display": "hydroxocobalamin"
      }
    },
    {
      "fhir_comments": [
        " \n     on this one, we record that the patient was taken off morphine sulfate.\n     because not every system knows the flags, and the ensure there's no confusion,\n     if the flag implies that something was removed from the list, then the\n     deleted element must also be set \n   "
      ],
      "flag": {
        "coding": [
          {
            "system": "http://nehta.gov.au/codes/medications/changetype",
            "code": "02",
            "display": "Cancelled"
          }
        ]
      },
      "deleted": true,
      "item": {
        "display": "Morphine Sulfate"
      }
    }
  ]
}
Lists.insert(nyQuill);
```

#### Extending the Schema

```js
ExtendedListSchema = new SimpleSchema([
  ListSchema,
  {
    "createdAt": {
      "type": Date,
      "optional": true
    }
  }
]);
Lists.attachSchema( ExtendedListSchema );
```



#### Utilities  

If you're working with HL7 FHIR Resources, we recommend using [Postman](https://chrome.google.com/webstore/detail/postman/fhbjgbiflinjbdggehcddcbncdddomop?hl=en).


