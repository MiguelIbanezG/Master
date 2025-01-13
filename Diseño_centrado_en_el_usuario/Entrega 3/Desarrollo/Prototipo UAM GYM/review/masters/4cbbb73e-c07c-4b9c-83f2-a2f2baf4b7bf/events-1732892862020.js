jQuery("#simulation")
  .on("click", ".m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf .click,.m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf.click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#Rectangle_58")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#Rectangle_58" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#Cell_100")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_100 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_100 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "rgba(238,238,238,0.5)"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_146 .verticalalign",
                  "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_147 .verticalalign",
                  "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_145 .verticalalign",
                  "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_101 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_146 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_147 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_145 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_101 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#Path_72")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/812e37a9-43d0-4195-8737-a7207c8b01e6",
                    "transition": {
                      "type": "fade",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#Paragraph_25")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/812e37a9-43d0-4195-8737-a7207c8b01e6",
                    "transition": {
                      "type": "fade",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#Cell_101")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_101 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_101 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "rgba(238,238,238,0.5)"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_146 .verticalalign",
                  "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_147 .verticalalign",
                  "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_100 .verticalalign",
                  "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_145 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_146 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_147 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_100 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_145 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#Cell_145")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_145 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_145 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "rgba(238,238,238,0.5)"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_146 .verticalalign",
                  "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_147 .verticalalign",
                  "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_100 .verticalalign",
                  "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_101 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_146 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_147 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_100 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_101 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#Cell_146")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_146 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_146 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "rgba(238,238,238,0.5)"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_147 .verticalalign",
                  "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_100 .verticalalign",
                  "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_145 .verticalalign",
                  "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_101 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_147 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_100 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_145 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_101 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#Path_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_145 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_145 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "rgba(238,238,238,0.5)"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_146 .verticalalign",
                  "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_147 .verticalalign",
                  "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_100 .verticalalign",
                  "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_101 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_146 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_147 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_100 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_101 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#Rectangle_58" ]
                  },
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#Cell_147")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_147 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_147 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "rgba(238,238,238,0.5)"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_146 .verticalalign",
                  "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_100 .verticalalign",
                  "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_145 .verticalalign",
                  "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_101 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_146 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_100 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_145 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#m-4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf #Cell_101 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#Path_147")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNot",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#Panel_1",
                  "property": "jimIsVisible"
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#Dynamic_panel_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#Dynamic_panel_1" ],
                    "effect": {
                      "type": "puff",
                      "duration": 100
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  });