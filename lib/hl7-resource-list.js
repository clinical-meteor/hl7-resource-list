
// create the object using our BaseModel
List = BaseModel.extend();


//Assign a collection so the object knows how to perform CRUD operations
List.prototype._collection = Lists;

// Create a persistent data store for addresses to be stored.
// HL7.Resources.Patients = new Mongo.Collection('HL7.Resources.Patients');
Lists = new Mongo.Collection('Lists');

//Add the transform to the collection since Meteor.users is pre-defined by the accounts package
Lists._transform = function (document) {
  return new List(document);
};


if (Meteor.isClient){
  Meteor.subscribe("Lists");
}

if (Meteor.isServer){
  Meteor.publish("Lists", function (argument){
    if (this.userId) {
      return Lists.find();
    } else {
      return [];
    }
  });
}



ListSchema = new SimpleSchema({
  "resourceType" : {
    type: String,
    defaultValue: "List"
  },

  "identifier" : {
    optional: true,
    type: [ IdentifierSchema ]
  },
  "title" :  {
    optional: true,
    type: String
  },
  "code" :  {
    optional: true,
    type: CodeableConceptSchema
  },
  "subject" :  {
    optional: true,
    type: ReferenceSchema
  },
  "source" :  {
    optional: true,
    type: ReferenceSchema
  },
  "encounter" :  {
    optional: true,
    type: ReferenceSchema
  },
  "status" :  {
    optional: true,
    type: Code
  },
  "date" :  {
    optional: true,
    type: Date
  },
  "orderedBy" :  {
    optional: true,
    type: CodeableConceptSchema
  },
  "mode" :  {
    optional: true,
    type: Code
  },
  "note" :  {
    optional: true,
    type: String
  },
  "entry.$.flag" : {
    optional: true,
    type: CodeableConceptSchema
  },
  "entry.$.deleted" : {
    optional: true,
    type: Boolean
  },
  "entry.$.date" : {
    optional: true,
    type: Date
  },
  "entry.$.item" : {
    optional: true,
    type: ReferenceSchema
  },
  "emptyReason" : {
    optional: true,
    type: CodeableConceptSchema
  }
});

Lists.attachSchema(ListSchema);
