jQuery("#simulation")
  .on("click", ".s-8f17b440-8828-4207-a253-a72e914aca97 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8f17b440-8828-4207-a253-a72e914aca97 #s-Button_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#3AB8F8"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/fb5ee259-0987-49d9-bf14-b1c5a81741e8"
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
    } else if(jFirer.is("#mi-b117329e-Rectangle_59")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#mi-b117329e-Rectangle_59" ]
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
    } else if(jFirer.is("#mi-b117329e-Cell_102")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_102 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_102 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_150 .verticalalign",
                  "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_151 .verticalalign",
                  "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_148 .verticalalign",
                  "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_103 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_150 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_151 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_148 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_103 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-b117329e-Path_73")) {
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
    } else if(jFirer.is("#mi-b117329e-Paragraph_27")) {
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
    } else if(jFirer.is("#mi-b117329e-Cell_103")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_103 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_103 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_150 .verticalalign",
                  "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_151 .verticalalign",
                  "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_102 .verticalalign",
                  "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_148 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_150 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_151 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_102 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_148 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-b117329e-Cell_148")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_148 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_148 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_150 .verticalalign",
                  "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_151 .verticalalign",
                  "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_102 .verticalalign",
                  "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_103 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_150 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_151 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_102 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_103 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-b117329e-Cell_150")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_150 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_150 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_151 .verticalalign",
                  "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_102 .verticalalign",
                  "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_148 .verticalalign",
                  "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_103 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_151 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_102 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_148 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_103 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-b117329e-Path_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_148 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_148 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_150 .verticalalign",
                  "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_151 .verticalalign",
                  "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_102 .verticalalign",
                  "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_103 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_150 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_151 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_102 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_103 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#mi-b117329e-Rectangle_59" ]
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
    } else if(jFirer.is("#mi-b117329e-Cell_151")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_151 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_151 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_150 .verticalalign",
                  "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_102 .verticalalign",
                  "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_148 .verticalalign",
                  "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_103 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_150 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_102 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_148 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-8f17b440-8828-4207-a253-a72e914aca97 #mi-b117329e-Cell_103 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-b117329e-Path_149")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNot",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#mi-b117329e-Panel_2",
                  "property": "jimIsVisible"
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-b117329e-Dynamic_panel_2" ]
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
                    "target": [ "#mi-b117329e-Dynamic_panel_2" ],
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