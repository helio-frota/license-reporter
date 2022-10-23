import js2xmlparser from 'js2xmlparser';

import xml2js from 'xml2js';

// TODO: see if this can be called outside directly.
export async function toJson (xml) {
  return await xml2js.parseStringPromise(xml);
}

const toJsonArray = (xmls) => {
  const jsons = [];
  return new Promise((resolve, reject) => {
    xmls.reduce((seq, xml) => {
      return toJson(xml).then(json => {
        jsons.push(json);
      }).catch(e => {
        reject(e);
      });
    }, Promise.resolve()).then(
      () => resolve(jsons),
      (e) => reject(e)
    );
  });
};

const merge = (productName, licenceXmls) => {
  const product = {
    name: productName,
    projects: {
      project: []
    }
  };
  return new Promise((resolve, reject) => {
    toJsonArray(licenceXmls).then(jsons => {
      jsons.forEach(json => {
        product.projects.project = product.projects.project.concat(json);
      });
    }).then(
      () => resolve(js2xmlparser.parse(productName, product.projects)),
      (e) => reject(e)
    );
  });
};

module.exports = {
  merge,
  toJsonArray
};
