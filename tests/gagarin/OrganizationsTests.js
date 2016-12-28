describe('clinical:hl7-resources-lists', function () {
  var server = meteor();
  var client = browser(server);

  it('Lists should exist on the client', function () {
    return client.execute(function () {
      expect(Lists).to.exist;
    });
  });

  it('Lists should exist on the server', function () {
    return server.execute(function () {
      expect(Lists).to.exist;
    });
  });

});
