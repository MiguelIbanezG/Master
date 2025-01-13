jQuery("#simulation")
  .on("click", ".s-572d166d-3b15-463c-b162-7c9de2b8b539 .click", function(event, data) {
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
                    "target": "screens/c61d14aa-8516-461e-99ae-5da368ef911e"
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
    } else if(jFirer.is("#mi-3b0d0d7a-Rectangle_59")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#mi-3b0d0d7a-Rectangle_59" ]
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
    } else if(jFirer.is("#mi-3b0d0d7a-Cell_102")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_102 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_102 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_150 .verticalalign",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_151 .verticalalign",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_148 .verticalalign",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_103 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_150 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_151 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_148 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_103 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-3b0d0d7a-Path_73")) {
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
    } else if(jFirer.is("#mi-3b0d0d7a-Paragraph_27")) {
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
    } else if(jFirer.is("#mi-3b0d0d7a-Cell_103")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_103 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_103 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_150 .verticalalign",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_151 .verticalalign",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_102 .verticalalign",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_148 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_150 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_151 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_102 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_148 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-3b0d0d7a-Cell_148")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_148 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_148 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_150 .verticalalign",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_151 .verticalalign",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_102 .verticalalign",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_103 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_150 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_151 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_102 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_103 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-3b0d0d7a-Cell_150")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_150 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_150 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_151 .verticalalign",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_102 .verticalalign",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_148 .verticalalign",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_103 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_151 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_102 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_148 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_103 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-3b0d0d7a-Path_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_148 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_148 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_150 .verticalalign",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_151 .verticalalign",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_102 .verticalalign",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_103 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_150 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_151 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_102 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_103 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#mi-3b0d0d7a-Rectangle_59" ]
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
    } else if(jFirer.is("#mi-3b0d0d7a-Cell_151")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_151 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_151 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_150 .verticalalign",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_102 .verticalalign",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_148 .verticalalign",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_103 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_150 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_102 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_148 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-3b0d0d7a-Cell_103 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-3b0d0d7a-Path_149")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNot",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#mi-3b0d0d7a-Panel_2",
                  "property": "jimIsVisible"
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-3b0d0d7a-Dynamic_panel_2" ]
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
                    "target": [ "#mi-3b0d0d7a-Dynamic_panel_2" ],
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
  .on("pageunload", ".s-572d166d-3b15-463c-b162-7c9de2b8b539 .pageunload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Category_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "horaSeleccionada" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Category_1",
                      "property": "jimGetSelectedValue"
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
    } else if(jFirer.is("#s-Text_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "precio" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Text_16",
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
  });