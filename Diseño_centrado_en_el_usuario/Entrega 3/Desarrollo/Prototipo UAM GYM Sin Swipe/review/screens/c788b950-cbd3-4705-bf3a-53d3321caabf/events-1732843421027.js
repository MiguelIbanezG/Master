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
    } else if(jFirer.is("#mi-dce3c5f5-Rectangle_59")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#mi-dce3c5f5-Rectangle_59" ]
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
    } else if(jFirer.is("#mi-dce3c5f5-Cell_102")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_102 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_102 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_150 .verticalalign",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_151 .verticalalign",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_148 .verticalalign",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_103 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_150 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_151 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_148 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_103 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-dce3c5f5-Path_73")) {
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
    } else if(jFirer.is("#mi-dce3c5f5-Paragraph_27")) {
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
    } else if(jFirer.is("#mi-dce3c5f5-Cell_103")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_103 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_103 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_150 .verticalalign",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_151 .verticalalign",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_102 .verticalalign",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_148 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_150 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_151 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_102 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_148 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-dce3c5f5-Cell_148")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_148 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_148 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_150 .verticalalign",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_151 .verticalalign",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_102 .verticalalign",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_103 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_150 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_151 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_102 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_103 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-dce3c5f5-Cell_150")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_150 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_150 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_151 .verticalalign",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_102 .verticalalign",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_148 .verticalalign",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_103 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_151 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_102 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_148 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_103 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-dce3c5f5-Path_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_148 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_148 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_150 .verticalalign",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_151 .verticalalign",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_102 .verticalalign",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_103 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_150 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_151 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_102 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_103 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#mi-dce3c5f5-Rectangle_59" ]
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
    } else if(jFirer.is("#mi-dce3c5f5-Cell_151")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_151 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_151 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_150 .verticalalign",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_102 .verticalalign",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_148 .verticalalign",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_103 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_150 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_102 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_148 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-c788b950-cbd3-4705-bf3a-53d3321caabf #mi-dce3c5f5-Cell_103 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-dce3c5f5-Path_149")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNot",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#mi-dce3c5f5-Panel_2",
                  "property": "jimIsVisible"
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-dce3c5f5-Dynamic_panel_2" ]
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
                    "target": [ "#mi-dce3c5f5-Dynamic_panel_2" ],
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
  });