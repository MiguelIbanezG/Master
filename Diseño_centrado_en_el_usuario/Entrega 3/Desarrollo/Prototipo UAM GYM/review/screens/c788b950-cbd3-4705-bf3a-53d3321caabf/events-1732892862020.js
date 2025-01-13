jQuery("#simulation")
  .on("click", ".s-c788b950-cbd3-4705-bf3a-53d3321caabf .click", function(event, data) {
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
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/8f17b440-8828-4207-a253-a72e914aca97"
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
    } else if(jFirer.is("#s-Hotspot_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
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
    } else if(jFirer.is("#s-Rectangle_29")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/eaff9538-c05c-4f16-8766-42cee8097fe7"
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
    } else if(jFirer.is("#mi-c7daef0e-Rectangle_58")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#mi-c7daef0e-Rectangle_58" ]
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
    } else if(jFirer.is("#mi-c7daef0e-Cell_100")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_100 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_100 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_146 .verticalalign",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_147 .verticalalign",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_145 .verticalalign",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_101 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_146 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_147 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_145 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_101 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-c7daef0e-Path_72")) {
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
    } else if(jFirer.is("#mi-c7daef0e-Paragraph_25")) {
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
    } else if(jFirer.is("#mi-c7daef0e-Cell_101")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_101 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_101 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_146 .verticalalign",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_147 .verticalalign",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_100 .verticalalign",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_145 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_146 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_147 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_100 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_145 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-c7daef0e-Cell_145")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_145 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_145 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_146 .verticalalign",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_147 .verticalalign",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_100 .verticalalign",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_101 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_146 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_147 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_100 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_101 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-c7daef0e-Cell_146")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_146 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_146 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_147 .verticalalign",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_100 .verticalalign",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_145 .verticalalign",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_101 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_147 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_100 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_145 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_101 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-c7daef0e-Path_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_145 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_145 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_146 .verticalalign",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_147 .verticalalign",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_100 .verticalalign",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_101 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_146 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_147 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_100 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_101 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#mi-c7daef0e-Rectangle_58" ]
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
    } else if(jFirer.is("#mi-c7daef0e-Cell_147")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_147 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_147 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_146 .verticalalign",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_100 .verticalalign",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_145 .verticalalign",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_101 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_146 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_100 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_145 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-c7daef0e-Cell_101 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-c7daef0e-Path_147")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNot",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#mi-c7daef0e-Panel_1",
                  "property": "jimIsVisible"
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-c7daef0e-Dynamic_panel_1" ]
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
                    "target": [ "#mi-c7daef0e-Dynamic_panel_1" ],
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
  })
  .on("pageload", ".s-c788b950-cbd3-4705-bf3a-53d3321caabf .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_1" ],
                    "value": {
                      "datatype": "variable",
                      "element": "Nombre"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_1" ],
                    "value": {
                      "datatype": "variable",
                      "element": "Nombre"
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
    } else if(jFirer.is("#s-Input_text_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_text_1" ],
                    "value": {
                      "datatype": "variable",
                      "element": "Nombre"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_text_1" ],
                    "value": {
                      "datatype": "variable",
                      "element": "Apellido"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_text_1" ],
                    "value": {
                      "datatype": "variable",
                      "element": "Apellido"
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
  })
  .on("focusin", ".s-c788b950-cbd3-4705-bf3a-53d3321caabf .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #s-Input_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "2.0px",
                      "border-top-color": "#6750A4",
                      "border-right-width": "2.0px",
                      "border-right-color": "#6750A4",
                      "border-bottom-width": "2.0px",
                      "border-bottom-color": "#6750A4",
                      "border-left-width": "2.0px",
                      "border-left-color": "#6750A4"
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
    } else if(jFirer.is("#s-Input_text_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #s-Input_text_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "2.0px",
                      "border-top-color": "#6750A4",
                      "border-right-width": "2.0px",
                      "border-right-color": "#6750A4",
                      "border-bottom-width": "2.0px",
                      "border-bottom-color": "#6750A4",
                      "border-left-width": "2.0px",
                      "border-left-color": "#6750A4"
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
    }
  })
  .on("focusout", ".s-c788b950-cbd3-4705-bf3a-53d3321caabf .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #s-Input_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#79747E",
                      "border-right-width": "1.0px",
                      "border-right-color": "#79747E",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#79747E",
                      "border-left-width": "1.0px",
                      "border-left-color": "#79747E"
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
    } else if(jFirer.is("#s-Input_text_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #s-Input_text_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#79747E",
                      "border-right-width": "1.0px",
                      "border-right-color": "#79747E",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#79747E",
                      "border-left-width": "1.0px",
                      "border-left-color": "#79747E"
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
    }
  })
  .on("swipeleft", ".s-c788b950-cbd3-4705-bf3a-53d3321caabf .swipeleft", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Hotspot_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isbackward": true
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
  })
  .on("swiperight", ".s-c788b950-cbd3-4705-bf3a-53d3321caabf .swiperight", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Hotspot_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isbackward": true
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