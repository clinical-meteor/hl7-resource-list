import { Meteor } from 'meteor/meteor';
import { assert } from 'meteor/practicalmeteor:chai';
import { chai } from 'meteor/practicalmeteor:chai';
import { expect } from 'meteor/practicalmeteor:chai';

describe('clinical:hl7-resource-list', function () {
  beforeEach(function () {
    //console.log('beforeEach');
  });
  afterEach(function () {
    //console.log('afterEach');
  });
  it('exists globally', function () {
    expect(Lists).to.exist;
  });
});