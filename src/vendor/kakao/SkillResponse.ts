export const SkillResponse = function () {
  this.version = '2.0';
  this.template = {
    outputs: [],
    quickReplies: [],
  };
};

SkillResponse.prototype.addOutputComponent = function (component) {
  this.template.outputs.push(component);
  return this;
};

SkillResponse.prototype.addQuickRepliesComponent = function (component) {
  this.template.quickReplies.push(component);
  return this;
};

SkillResponse.prototype.setOutputs = function (outputs) {
  this.template.outputs = outputs;
  return this;
};

SkillResponse.prototype.setQuickReplies = function (quickReplies) {
  this.template.quickReplies = quickReplies;
  return this;
};

SkillResponse.prototype.getResult = function () {
  const result = {
    version: this.version,
    template: this.template,
  };
  return result;
};

export default SkillResponse;
