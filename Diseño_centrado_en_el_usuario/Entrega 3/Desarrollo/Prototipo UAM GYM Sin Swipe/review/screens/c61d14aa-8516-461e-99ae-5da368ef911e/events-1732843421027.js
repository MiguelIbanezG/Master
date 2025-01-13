jQuery("#simulation")
  .on("click", ".s-c61d14aa-8516-461e-99ae-5da368ef911e .click", function(event, data) {
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
                    "target": "screens/c788b950-cbd3-4705-bf3a-53d3321caabf"
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
                    "target": "screens/c788b950-cbd3-4705-bf3a-53d3321caabf"
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
    } else if(jFirer.is("#s-Button_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/c788b950-cbd3-4705-bf3a-53d3321caabf"
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
    } else if(jFirer.is("#s-Input_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_4" ],
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
    } else if(jFirer.is("#s-Input_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_3" ],
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
    } else if(jFirer.is("#s-Radio_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_3" ],
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
    } else if(jFirer.is("#mi-2d48ef1a-Rectangle_59")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#mi-2d48ef1a-Rectangle_59" ]
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
    } else if(jFirer.is("#mi-2d48ef1a-Cell_102")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_102 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_102 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_150 .verticalalign",
                  "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_151 .verticalalign",
                  "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_148 .verticalalign",
                  "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_103 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_150 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_151 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_148 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_103 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-2d48ef1a-Path_73")) {
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
    } else if(jFirer.is("#mi-2d48ef1a-Paragraph_27")) {
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
    } else if(jFirer.is("#mi-2d48ef1a-Cell_103")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_103 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_103 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_150 .verticalalign",
                  "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_151 .verticalalign",
                  "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_102 .verticalalign",
                  "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_148 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_150 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_151 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_102 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_148 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-2d48ef1a-Cell_148")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_148 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_148 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_150 .verticalalign",
                  "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_151 .verticalalign",
                  "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_102 .verticalalign",
                  "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_103 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_150 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_151 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_102 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_103 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-2d48ef1a-Cell_150")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_150 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_150 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_151 .verticalalign",
                  "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_102 .verticalalign",
                  "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_148 .verticalalign",
                  "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_103 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_151 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_102 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_148 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_103 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-2d48ef1a-Path_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_148 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_148 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_150 .verticalalign",
                  "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_151 .verticalalign",
                  "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_102 .verticalalign",
                  "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_103 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_150 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_151 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_102 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_103 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#mi-2d48ef1a-Rectangle_59" ]
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
    } else if(jFirer.is("#mi-2d48ef1a-Cell_151")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_151 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_151 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_150 .verticalalign",
                  "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_102 .verticalalign",
                  "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_148 .verticalalign",
                  "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_103 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_150 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_102 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_148 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-c61d14aa-8516-461e-99ae-5da368ef911e #mi-2d48ef1a-Cell_103 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-2d48ef1a-Path_149")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNot",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#mi-2d48ef1a-Panel_6",
                  "property": "jimIsVisible"
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-2d48ef1a-Dynamic_panel_3" ]
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
                    "target": [ "#mi-2d48ef1a-Dynamic_panel_3" ],
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
  .on("pageload", ".s-c61d14aa-8516-461e-99ae-5da368ef911e .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_3" ],
                    "value": {
                      "datatype": "variable",
                      "element": "horaSeleccionada"
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
                    "target": [ "#s-Input_3" ],
                    "value": {
                      "datatype": "variable",
                      "element": "horaSeleccionada"
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
                    "target": [ "#s-Input_3" ],
                    "value": {
                      "datatype": "variable",
                      "element": "horaSeleccionada"
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
                    "target": [ "#s-Input_3" ],
                    "value": {
                      "datatype": "variable",
                      "element": "horaSeleccionada"
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
    } else if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_4" ],
                    "value": {
                      "datatype": "variable",
                      "element": "precio"
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
  .on("pageunload", ".s-c61d14aa-8516-461e-99ae-5da368ef911e .pageunload", function(event, data) {
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
                    "variable": [ "Nombre" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_1",
                      "property": "jimGetValue"
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
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Apellido" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_2",
                      "property": "jimGetValue"
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
  .on("change", ".s-c61d14aa-8516-461e-99ae-5da368ef911e .change", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_1" ],
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
    } else if(jFirer.is("#s-Radio_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_2" ],
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
    }
  })
  .on("focusin", ".s-c61d14aa-8516-461e-99ae-5da368ef911e .focusin", function(event, data) {
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
                    "value": ""
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
    } else if(jFirer.is("#s-Input_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_2" ],
                    "value": ""
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
    } else if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_3" ],
                    "value": ""
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
    } else if(jFirer.is("#s-Input_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_4" ],
                    "value": ""
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
    } else if(jFirer.is("#s-Input_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_6" ],
                    "value": ""
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
    } else if(jFirer.is("#s-Input_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_7" ],
                    "value": ""
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
    } else if(jFirer.is("#s-Input_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_8" ],
                    "value": ""
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
    } else if(jFirer.is("#s-Input_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_9" ],
                    "value": ""
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
    } else if(jFirer.is("#s-Input_text_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_text_3" ],
                    "value": ""
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