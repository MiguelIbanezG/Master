jQuery("#simulation")
  .on("click", ".s-135922a7-1eb2-4537-8d9b-f6e868d13b4b .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Hotspot_4")) {
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
    } else if(jFirer.is("#s-Button_1")) {
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
    } else if(jFirer.is("#s-Hotspot_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetSelection",
                  "parameter": {
                    "target": [ "#s-Check_group_1" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetSelection",
                  "parameter": {
                    "target": [ "#s-Check_group_3" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetSelection",
                  "parameter": {
                    "target": [ "#s-Check_group_2" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetSelection",
                  "parameter": {
                    "target": [ "#s-Select_1" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetSelection",
                  "parameter": {
                    "target": [ "#s-Select_2" ],
                    "value": ""
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_text_1" ],
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
    } else if(jFirer.is("#s-Hotspot_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/38a121bc-d3fa-4507-9ab5-ab5e509e10e9"
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
    } else if(jFirer.is("#mi-a9f3df21-Rectangle_59")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#mi-a9f3df21-Rectangle_59" ]
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
    } else if(jFirer.is("#mi-a9f3df21-Cell_102")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_102 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_102 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_150 .verticalalign",
                  "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_151 .verticalalign",
                  "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_148 .verticalalign",
                  "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_103 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_150 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_151 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_148 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_103 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-a9f3df21-Path_73")) {
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
    } else if(jFirer.is("#mi-a9f3df21-Paragraph_27")) {
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
    } else if(jFirer.is("#mi-a9f3df21-Cell_103")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_103 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_103 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_150 .verticalalign",
                  "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_151 .verticalalign",
                  "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_102 .verticalalign",
                  "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_148 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_150 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_151 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_102 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_148 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-a9f3df21-Cell_148")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_148 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_148 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_150 .verticalalign",
                  "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_151 .verticalalign",
                  "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_102 .verticalalign",
                  "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_103 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_150 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_151 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_102 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_103 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-a9f3df21-Cell_150")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_150 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_150 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_151 .verticalalign",
                  "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_102 .verticalalign",
                  "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_148 .verticalalign",
                  "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_103 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_151 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_102 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_148 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_103 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-a9f3df21-Path_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_148 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_148 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_150 .verticalalign",
                  "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_151 .verticalalign",
                  "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_102 .verticalalign",
                  "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_103 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_150 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_151 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_102 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_103 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#mi-a9f3df21-Rectangle_59" ]
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
    } else if(jFirer.is("#mi-a9f3df21-Cell_151")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_151 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_151 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_150 .verticalalign",
                  "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_102 .verticalalign",
                  "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_148 .verticalalign",
                  "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_103 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_150 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_102 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_148 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Cell_103 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-a9f3df21-Path_149")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNot",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#mi-a9f3df21-Panel_2",
                  "property": "jimIsVisible"
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-a9f3df21-Dynamic_panel_2" ]
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
                    "target": [ "#mi-a9f3df21-Dynamic_panel_2" ],
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