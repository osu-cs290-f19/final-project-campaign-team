(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['post'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = container.invokePartial(partials.tag,depth0,{"name":"tag","hash":{"text":depth0},"data":data,"indent":"        ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=container.hooks.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"post\">\r\n  <div class=\"post-content\">\r\n    <span class=\"post-title\">"
    + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data,"loc":{"start":{"line":3,"column":29},"end":{"line":3,"column":38}}}) : helper)))
    + "</span>\r\n    <img class=\"post-image\" src=\""
    + alias4(((helper = (helper = helpers.imageURL || (depth0 != null ? depth0.imageURL : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imageURL","hash":{},"data":data,"loc":{"start":{"line":4,"column":33},"end":{"line":4,"column":45}}}) : helper)))
    + "\" alt=\"imageURL\">\r\n    <span class=\"post-summary\">"
    + alias4(((helper = (helper = helpers.summary || (depth0 != null ? depth0.summary : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"summary","hash":{},"data":data,"loc":{"start":{"line":5,"column":31},"end":{"line":5,"column":42}}}) : helper)))
    + "</span>\r\n    <div class=\"post-tags\">\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.tags : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data,"loc":{"start":{"line":7,"column":6},"end":{"line":9,"column":15}}})) != null ? stack1 : "")
    + "    </div>\r\n    <span class=\"array-index\">"
    + alias4(((helper = (helper = helpers.num || (depth0 != null ? depth0.num : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"num","hash":{},"data":data,"loc":{"start":{"line":11,"column":30},"end":{"line":11,"column":37}}}) : helper)))
    + "</span>\r\n  </div>\r\n</div>\r\n";
},"usePartial":true,"useData":true});
templates['tag'] = template({"compiler":[8,">= 4.3.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<span class=\"post-tag\">"
    + container.escapeExpression(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : container.hooks.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}),{"name":"text","hash":{},"data":data,"loc":{"start":{"line":1,"column":23},"end":{"line":1,"column":31}}}) : helper)))
    + "</span>\r\n";
},"useData":true});
})();