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
    } else if(jFirer.is("#mi-dae1560b-Rectangle_58")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#mi-dae1560b-Rectangle_58" ]
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
    } else if(jFirer.is("#mi-dae1560b-Cell_100")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-812e37a9-43d0-4195-8737-a7207c8b01e6 #mi-dae1560b-Cell_100 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-812e37a9-43d0-4195-8737-a7207c8b01e6 #mi-dae1560b-Cell_100 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-812e37a9-43d0-4195-8737-a7207c8b01e6 #mi-dae1560b-Cell_146 .verticalalign",
                  "#s-812e37a9-43d0-4195-8737-a7207c8b01e6 #mi-dae1560b-Cell_101 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-812e37a9-43d0-4195-8737-a7207c8b01e6 #mi-dae1560b-Cell_146 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-812e37a9-43d0-4195-8737-a7207c8b01e6 #mi-dae1560b-Cell_101 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-dae1560b-Path_72")) {
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
    } else if(jFirer.is("#mi-dae1560b-Paragraph_25")) {
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
    } else if(jFirer.is("#mi-dae1560b-Cell_101")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-812e37a9-43d0-4195-8737-a7207c8b01e6 #mi-dae1560b-Cell_101 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-812e37a9-43d0-4195-8737-a7207c8b01e6 #mi-dae1560b-Cell_101 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-812e37a9-43d0-4195-8737-a7207c8b01e6 #mi-dae1560b-Cell_146 .verticalalign",
                  "#s-812e37a9-43d0-4195-8737-a7207c8b01e6 #mi-dae1560b-Cell_100 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-812e37a9-43d0-4195-8737-a7207c8b01e6 #mi-dae1560b-Cell_146 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-812e37a9-43d0-4195-8737-a7207c8b01e6 #mi-dae1560b-Cell_100 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-dae1560b-Cell_146")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-812e37a9-43d0-4195-8737-a7207c8b01e6 #mi-dae1560b-Cell_146 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-812e37a9-43d0-4195-8737-a7207c8b01e6 #mi-dae1560b-Cell_146 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-812e37a9-43d0-4195-8737-a7207c8b01e6 #mi-dae1560b-Cell_100 .verticalalign",
                  "#s-812e37a9-43d0-4195-8737-a7207c8b01e6 #mi-dae1560b-Cell_101 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-812e37a9-43d0-4195-8737-a7207c8b01e6 #mi-dae1560b-Cell_100 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-812e37a9-43d0-4195-8737-a7207c8b01e6 #mi-dae1560b-Cell_101 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-dae1560b-Path_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-812e37a9-43d0-4195-8737-a7207c8b01e6 #mi-dae1560b-Cell_146 .verticalalign",
                  "#s-812e37a9-43d0-4195-8737-a7207c8b01e6 #mi-dae1560b-Cell_100 .verticalalign",
                  "#s-812e37a9-43d0-4195-8737-a7207c8b01e6 #mi-dae1560b-Cell_101 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-812e37a9-43d0-4195-8737-a7207c8b01e6 #mi-dae1560b-Cell_146 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-812e37a9-43d0-4195-8737-a7207c8b01e6 #mi-dae1560b-Cell_100 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-812e37a9-43d0-4195-8737-a7207c8b01e6 #mi-dae1560b-Cell_101 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#mi-dae1560b-Rectangle_58" ]
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
    } else if(jFirer.is("#mi-dae1560b-Path_147")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNot",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#mi-dae1560b-Panel_1",
                  "property": "jimIsVisible"
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-dae1560b-Dynamic_panel_1" ]
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
                    "target": [ "#mi-dae1560b-Dynamic_panel_1" ],
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
  .on("swipeleft", ".s-812e37a9-43d0-4195-8737-a7207c8b01e6 .swipeleft", function(event, data) {
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
                    "target": "screens/812e37a9-43d0-4195-8737-a7207c8b01e6"
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
  .on("swiperight", ".s-812e37a9-43d0-4195-8737-a7207c8b01e6 .swiperight", function(event, data) {
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
                    "target": "screens/812e37a9-43d0-4195-8737-a7207c8b01e6"
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