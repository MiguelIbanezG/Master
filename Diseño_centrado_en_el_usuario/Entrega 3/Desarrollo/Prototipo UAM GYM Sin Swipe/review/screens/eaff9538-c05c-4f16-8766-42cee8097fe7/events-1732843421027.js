jQuery("#simulation")
  .on("click", ".s-eaff9538-c05c-4f16-8766-42cee8097fe7 .click", function(event, data) {
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
    } else if(jFirer.is("#mi-5dfca300-Rectangle_58")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-5dfca300-Panel_106" ],
                    "transition": {
                      "type": "fade",
                      "duration": 400
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#mi-5dfca300-Rectangle_58" ]
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
    } else if(jFirer.is("#mi-5dfca300-Path_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-5dfca300-Panel_106" ],
                    "transition": {
                      "type": "fade",
                      "duration": 400
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#mi-5dfca300-Rectangle_58" ]
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
    } else if(jFirer.is("#mi-5dfca300-Cell_100")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-eaff9538-c05c-4f16-8766-42cee8097fe7 #mi-5dfca300-Cell_100 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-eaff9538-c05c-4f16-8766-42cee8097fe7 #mi-5dfca300-Cell_100 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-eaff9538-c05c-4f16-8766-42cee8097fe7 #mi-5dfca300-Cell_146 .verticalalign",
                  "#s-eaff9538-c05c-4f16-8766-42cee8097fe7 #mi-5dfca300-Cell_101 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-eaff9538-c05c-4f16-8766-42cee8097fe7 #mi-5dfca300-Cell_146 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-eaff9538-c05c-4f16-8766-42cee8097fe7 #mi-5dfca300-Cell_101 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-5dfca300-Paragraph_25")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-eaff9538-c05c-4f16-8766-42cee8097fe7 #mi-5dfca300-Cell_100 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-eaff9538-c05c-4f16-8766-42cee8097fe7 #mi-5dfca300-Cell_100 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-eaff9538-c05c-4f16-8766-42cee8097fe7 #mi-5dfca300-Cell_146 .verticalalign",
                  "#s-eaff9538-c05c-4f16-8766-42cee8097fe7 #mi-5dfca300-Cell_101 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-eaff9538-c05c-4f16-8766-42cee8097fe7 #mi-5dfca300-Cell_146 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-eaff9538-c05c-4f16-8766-42cee8097fe7 #mi-5dfca300-Cell_101 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#mi-5dfca300-Rectangle_58" ]
                  },
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-5dfca300-Panel_106" ],
                    "transition": {
                      "type": "fade",
                      "duration": 400
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
    } else if(jFirer.is("#mi-5dfca300-Cell_101")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-eaff9538-c05c-4f16-8766-42cee8097fe7 #mi-5dfca300-Cell_101 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-eaff9538-c05c-4f16-8766-42cee8097fe7 #mi-5dfca300-Cell_101 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-eaff9538-c05c-4f16-8766-42cee8097fe7 #mi-5dfca300-Cell_146 .verticalalign",
                  "#s-eaff9538-c05c-4f16-8766-42cee8097fe7 #mi-5dfca300-Cell_100 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-eaff9538-c05c-4f16-8766-42cee8097fe7 #mi-5dfca300-Cell_146 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-eaff9538-c05c-4f16-8766-42cee8097fe7 #mi-5dfca300-Cell_100 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-5dfca300-Paragraph_26")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-eaff9538-c05c-4f16-8766-42cee8097fe7 #mi-5dfca300-Cell_101 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-eaff9538-c05c-4f16-8766-42cee8097fe7 #mi-5dfca300-Cell_101 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-eaff9538-c05c-4f16-8766-42cee8097fe7 #mi-5dfca300-Cell_146 .verticalalign",
                  "#s-eaff9538-c05c-4f16-8766-42cee8097fe7 #mi-5dfca300-Cell_100 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-eaff9538-c05c-4f16-8766-42cee8097fe7 #mi-5dfca300-Cell_146 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-eaff9538-c05c-4f16-8766-42cee8097fe7 #mi-5dfca300-Cell_100 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#mi-5dfca300-Rectangle_58" ]
                  },
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-5dfca300-Panel_106" ],
                    "transition": {
                      "type": "fade",
                      "duration": 400
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
    } else if(jFirer.is("#mi-5dfca300-Cell_146")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-eaff9538-c05c-4f16-8766-42cee8097fe7 #mi-5dfca300-Cell_146 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-eaff9538-c05c-4f16-8766-42cee8097fe7 #mi-5dfca300-Cell_146 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-eaff9538-c05c-4f16-8766-42cee8097fe7 #mi-5dfca300-Cell_100 .verticalalign",
                  "#s-eaff9538-c05c-4f16-8766-42cee8097fe7 #mi-5dfca300-Cell_101 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-eaff9538-c05c-4f16-8766-42cee8097fe7 #mi-5dfca300-Cell_100 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-eaff9538-c05c-4f16-8766-42cee8097fe7 #mi-5dfca300-Cell_101 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-5dfca300-Path_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-eaff9538-c05c-4f16-8766-42cee8097fe7 #mi-5dfca300-Cell_146 .verticalalign",
                  "#s-eaff9538-c05c-4f16-8766-42cee8097fe7 #mi-5dfca300-Cell_100 .verticalalign",
                  "#s-eaff9538-c05c-4f16-8766-42cee8097fe7 #mi-5dfca300-Cell_101 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-eaff9538-c05c-4f16-8766-42cee8097fe7 #mi-5dfca300-Cell_146 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-eaff9538-c05c-4f16-8766-42cee8097fe7 #mi-5dfca300-Cell_100 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-eaff9538-c05c-4f16-8766-42cee8097fe7 #mi-5dfca300-Cell_101 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#mi-5dfca300-Rectangle_58" ]
                  },
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-5dfca300-Panel_106" ],
                    "transition": {
                      "type": "fade",
                      "duration": 400
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
    } else if(jFirer.is("#mi-5dfca300-Paragraph_37")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-eaff9538-c05c-4f16-8766-42cee8097fe7 #mi-5dfca300-Cell_146 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-eaff9538-c05c-4f16-8766-42cee8097fe7 #mi-5dfca300-Cell_146 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-eaff9538-c05c-4f16-8766-42cee8097fe7 #mi-5dfca300-Cell_100 .verticalalign",
                  "#s-eaff9538-c05c-4f16-8766-42cee8097fe7 #mi-5dfca300-Cell_101 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-eaff9538-c05c-4f16-8766-42cee8097fe7 #mi-5dfca300-Cell_100 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-eaff9538-c05c-4f16-8766-42cee8097fe7 #mi-5dfca300-Cell_101 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#mi-5dfca300-Rectangle_58" ]
                  },
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-5dfca300-Panel_106" ],
                    "transition": {
                      "type": "fade",
                      "duration": 400
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
    } else if(jFirer.is("#mi-5dfca300-Path_41")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-5dfca300-Panel_12" ],
                    "transition": {
                      "type": "fade",
                      "duration": 400
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-5dfca300-Rectangle_58" ]
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
    } else if(jFirer.is("#mi-5dfca300-Path_147")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-5dfca300-Dynamic_panel_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#mi-5dfca300-Path_147" ]
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
  .on("focusin", ".s-eaff9538-c05c-4f16-8766-42cee8097fe7 .focusin", function(event, data) {
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
    }
  });