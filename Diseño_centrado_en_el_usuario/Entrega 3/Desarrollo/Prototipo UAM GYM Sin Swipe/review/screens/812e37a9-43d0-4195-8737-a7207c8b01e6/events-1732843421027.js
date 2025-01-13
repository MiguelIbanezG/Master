jQuery("#simulation")
  .on("click", ".s-812e37a9-43d0-4195-8737-a7207c8b01e6 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/fb5ee259-0987-49d9-bf14-b1c5a81741e8",
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
    } else if(jFirer.is("#mi-96dc45d2-Rectangle_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#mi-96dc45d2-Rectangle_1" ]
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
    } else if(jFirer.is("#mi-96dc45d2-Cell_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-812e37a9-43d0-4195-8737-a7207c8b01e6 #mi-96dc45d2-Cell_6 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-812e37a9-43d0-4195-8737-a7207c8b01e6 #mi-96dc45d2-Cell_6 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-812e37a9-43d0-4195-8737-a7207c8b01e6 #mi-96dc45d2-Cell_8 .verticalalign",
                  "#s-812e37a9-43d0-4195-8737-a7207c8b01e6 #mi-96dc45d2-Cell_7 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-812e37a9-43d0-4195-8737-a7207c8b01e6 #mi-96dc45d2-Cell_8 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-812e37a9-43d0-4195-8737-a7207c8b01e6 #mi-96dc45d2-Cell_7 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-96dc45d2-Path_1")) {
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
    } else if(jFirer.is("#mi-96dc45d2-Text_1")) {
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
    } else if(jFirer.is("#mi-96dc45d2-Cell_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-812e37a9-43d0-4195-8737-a7207c8b01e6 #mi-96dc45d2-Cell_7 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-812e37a9-43d0-4195-8737-a7207c8b01e6 #mi-96dc45d2-Cell_7 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-812e37a9-43d0-4195-8737-a7207c8b01e6 #mi-96dc45d2-Cell_8 .verticalalign",
                  "#s-812e37a9-43d0-4195-8737-a7207c8b01e6 #mi-96dc45d2-Cell_6 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-812e37a9-43d0-4195-8737-a7207c8b01e6 #mi-96dc45d2-Cell_8 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-812e37a9-43d0-4195-8737-a7207c8b01e6 #mi-96dc45d2-Cell_6 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-96dc45d2-Cell_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-812e37a9-43d0-4195-8737-a7207c8b01e6 #mi-96dc45d2-Cell_8 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-812e37a9-43d0-4195-8737-a7207c8b01e6 #mi-96dc45d2-Cell_8 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-812e37a9-43d0-4195-8737-a7207c8b01e6 #mi-96dc45d2-Cell_6 .verticalalign",
                  "#s-812e37a9-43d0-4195-8737-a7207c8b01e6 #mi-96dc45d2-Cell_7 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-812e37a9-43d0-4195-8737-a7207c8b01e6 #mi-96dc45d2-Cell_6 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-812e37a9-43d0-4195-8737-a7207c8b01e6 #mi-96dc45d2-Cell_7 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-96dc45d2-Path_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-812e37a9-43d0-4195-8737-a7207c8b01e6 #mi-96dc45d2-Cell_8 .verticalalign",
                  "#s-812e37a9-43d0-4195-8737-a7207c8b01e6 #mi-96dc45d2-Cell_6 .verticalalign",
                  "#s-812e37a9-43d0-4195-8737-a7207c8b01e6 #mi-96dc45d2-Cell_7 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-812e37a9-43d0-4195-8737-a7207c8b01e6 #mi-96dc45d2-Cell_8 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-812e37a9-43d0-4195-8737-a7207c8b01e6 #mi-96dc45d2-Cell_6 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-812e37a9-43d0-4195-8737-a7207c8b01e6 #mi-96dc45d2-Cell_7 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#mi-96dc45d2-Rectangle_1" ]
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
    } else if(jFirer.is("#mi-96dc45d2-Path_3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNot",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#mi-96dc45d2-Panel_1",
                  "property": "jimIsVisible"
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-96dc45d2-Dynamic_panel_1" ]
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
                    "target": [ "#mi-96dc45d2-Dynamic_panel_1" ],
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