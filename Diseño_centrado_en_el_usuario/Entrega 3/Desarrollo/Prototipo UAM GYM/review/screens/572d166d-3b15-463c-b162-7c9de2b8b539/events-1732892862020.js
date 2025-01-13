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
    } else if(jFirer.is("#mi-f7d81311-Rectangle_58")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#mi-f7d81311-Rectangle_58" ]
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
    } else if(jFirer.is("#mi-f7d81311-Cell_100")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_100 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_100 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_146 .verticalalign",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_147 .verticalalign",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_145 .verticalalign",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_101 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_146 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_147 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_145 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_101 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-f7d81311-Path_72")) {
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
    } else if(jFirer.is("#mi-f7d81311-Paragraph_25")) {
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
    } else if(jFirer.is("#mi-f7d81311-Cell_101")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_101 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_101 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_146 .verticalalign",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_147 .verticalalign",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_100 .verticalalign",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_145 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_146 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_147 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_100 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_145 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-f7d81311-Cell_145")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_145 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_145 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_146 .verticalalign",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_147 .verticalalign",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_100 .verticalalign",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_101 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_146 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_147 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_100 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_101 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-f7d81311-Cell_146")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_146 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_146 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_147 .verticalalign",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_100 .verticalalign",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_145 .verticalalign",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_101 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_147 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_100 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_145 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_101 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-f7d81311-Path_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_145 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_145 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_146 .verticalalign",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_147 .verticalalign",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_100 .verticalalign",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_101 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_146 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_147 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_100 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_101 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#mi-f7d81311-Rectangle_58" ]
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
    } else if(jFirer.is("#mi-f7d81311-Cell_147")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_147 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_147 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_146 .verticalalign",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_100 .verticalalign",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_145 .verticalalign",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_101 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_146 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_100 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_145 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-572d166d-3b15-463c-b162-7c9de2b8b539 #mi-f7d81311-Cell_101 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-f7d81311-Path_147")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNot",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#mi-f7d81311-Panel_1",
                  "property": "jimIsVisible"
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-f7d81311-Dynamic_panel_1" ]
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
                    "target": [ "#mi-f7d81311-Dynamic_panel_1" ],
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
  })
  .on("swipeleft", ".s-572d166d-3b15-463c-b162-7c9de2b8b539 .swipeleft", function(event, data) {
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
  .on("swiperight", ".s-572d166d-3b15-463c-b162-7c9de2b8b539 .swiperight", function(event, data) {
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