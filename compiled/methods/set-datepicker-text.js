"use strict";

module.exports = function (column, start, end) {
  var dateFormat = this.dateFormat(column);
  var el = typeof column === 'string' ? $(this.$el).find("#VueTables__".concat(column, "-filter")) : column;
  el.text(start.format(dateFormat) + " - " + end.format(dateFormat));
};