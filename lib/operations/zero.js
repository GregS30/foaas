// TODO: This file was created by bulk-decaffeinate.
// Sanity-check the conversion and remove this comment.
/*
 * decaffeinate suggestions:
 * DS102: Remove unnecessary code created because of implicit returns
 * Full docs: https://github.com/decaffeinate/decaffeinate/blob/master/docs/suggestions.md
 */
module.exports = {
  name: "Zero",
  url: '/zero/:from',
  fields: [
    { name: 'From', field: 'from'}
  ],

  register(app, output) {
    return app.get('/zero/:from', function(req, res) {
      const message = "Zero, thats the number of fucks I give.";
      const subtitle = `- ${req.params.from}`;
      return output(req, res, message, subtitle);
    });
  }
};