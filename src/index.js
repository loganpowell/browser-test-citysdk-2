import census from 'citysdk'

census({
    "vintage" : "2017",
    "geoHierarchy" : {
      "county": "*"
    },
    "sourcePath" : ["acs", "acs5"],
    "values" : ["B19083_001E"],    // GINI index
    "statsKey" : "<your key here>",
    "geoResolution" : "500k"
  },
  (e, r) => console.log(r)
);

