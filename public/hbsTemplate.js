(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['post'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression, alias5=container.lambda;

  return "<div class=\"post\">\r\n  <div class=\"post-content\">\r\n    <span class=\"post-title\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":3,"column":29},"end":{"line":3,"column":38}}}) : helper)))
    + "</span>\r\n    <img class=\"post-image\" src=\""
    + alias4(((helper = (helper = helpers.imageURL || (depth0 != null ? depth0.imageURL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imageURL","hash":{},"data":data,"loc":{"start":{"line":4,"column":33},"end":{"line":4,"column":45}}}) : helper)))
    + "\" alt=\"imageURL\">\r\n    <span class=\"post-summary\">"
    + alias4(((helper = (helper = helpers.summary || (depth0 != null ? depth0.summary : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"summary","hash":{},"data":data,"loc":{"start":{"line":5,"column":31},"end":{"line":5,"column":42}}}) : helper)))
    + "</span>\r\n    <div class=\"post-tags\">\r\n      \r\n      <span class=\"post-tag\">"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.tags : depth0)) != null ? stack1["0"] : stack1), depth0))
    + "</span>\r\n      <span class=\"post-tag\">"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.tags : depth0)) != null ? stack1["1"] : stack1), depth0))
    + "</span>\r\n      <span class=\"post-tag\">"
    + alias4(alias5(((stack1 = (depth0 != null ? depth0.tags : depth0)) != null ? stack1["2"] : stack1), depth0))
    + "</span>\r\n\r\n      <span class=\"array-index\">"
    + alias4(((helper = (helper = helpers.num || (depth0 != null ? depth0.num : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"num","hash":{},"data":data,"loc":{"start":{"line":12,"column":32},"end":{"line":12,"column":39}}}) : helper)))
    + "</span>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
},"useData":true});
templates['tag'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<span class=\"post-tag\">"
    + container.escapeExpression(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"text","hash":{},"data":data,"loc":{"start":{"line":1,"column":23},"end":{"line":1,"column":31}}}) : helper)))
    + "</span>\r\n";
},"useData":true});
templates['comment'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"comment-container\">\r\n  <div class=\"comment-text-container\">\r\n      <span class=\"post-comment\">"
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data,"loc":{"start":{"line":3,"column":33},"end":{"line":3,"column":41}}}) : helper)))
    + "</span>\r\n      <span class=\"comment-index\">"
    + alias4(((helper = (helper = helpers.index || (depth0 != null ? depth0.index : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"index","hash":{},"data":data,"loc":{"start":{"line":4,"column":34},"end":{"line":4,"column":43}}}) : helper)))
    + "</span>\r\n  </div>\r\n\r\n  <div class=\"comment-votes\">\r\n    <button type=\"button\" class=\"upvote\" name=\"upvote\">Like</button>\r\n    <span class=\"post-value\">Votes: "
    + alias4(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"value","hash":{},"data":data,"loc":{"start":{"line":9,"column":36},"end":{"line":9,"column":45}}}) : helper)))
    + "</span>\r\n    <button type=\"button\" class=\"downvote\"  name=\"downvote\">Dislike</button>\r\n  </div>\r\n</div>\r\n";
},"useData":true});
})();