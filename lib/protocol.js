
define(["multifn/multifn", "underscore", "matchjs"], function(Multi, underscore, matchjs){
  
  var root = this;
  var _ = underscore._;
  var Match = matchjs.Match;
  
  var Protocol = function(definitions) {
    var self = this == root ? {} : this;
    
    self.__ignore_object__ = true;
    
    _.each(definitions, function(doc, name){
      self[name] = Multi();
      self[name].__docString__ = doc;
    });
          
    if(self !== this)
      return self;
  };
  return Protocol;
});