jQuery("#simulation")
  .on("click", ".s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 .click", function(event, data) {
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
    } else if(jFirer.is("#s-Hotspot_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/135922a7-1eb2-4537-8d9b-f6e868d13b4b"
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
    } else if(jFirer.is("#mi-f41b177d-Rectangle_59")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#mi-f41b177d-Rectangle_59" ]
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
    } else if(jFirer.is("#mi-f41b177d-Cell_102")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_102 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_102 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_150 .verticalalign",
                  "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_151 .verticalalign",
                  "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_148 .verticalalign",
                  "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_103 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_150 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_151 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_148 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_103 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-f41b177d-Path_73")) {
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
    } else if(jFirer.is("#mi-f41b177d-Paragraph_27")) {
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
    } else if(jFirer.is("#mi-f41b177d-Cell_103")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_103 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_103 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_150 .verticalalign",
                  "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_151 .verticalalign",
                  "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_102 .verticalalign",
                  "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_148 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_150 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_151 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_102 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_148 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-f41b177d-Cell_148")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_148 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_148 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_150 .verticalalign",
                  "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_151 .verticalalign",
                  "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_102 .verticalalign",
                  "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_103 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_150 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_151 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_102 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_103 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-f41b177d-Cell_150")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_150 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_150 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_151 .verticalalign",
                  "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_102 .verticalalign",
                  "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_148 .verticalalign",
                  "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_103 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_151 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_102 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_148 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_103 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-f41b177d-Path_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_148 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_148 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_150 .verticalalign",
                  "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_151 .verticalalign",
                  "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_102 .verticalalign",
                  "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_103 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_150 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_151 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_102 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_103 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#mi-f41b177d-Rectangle_59" ]
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
    } else if(jFirer.is("#mi-f41b177d-Cell_151")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_151 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_151 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_150 .verticalalign",
                  "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_102 .verticalalign",
                  "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_148 .verticalalign",
                  "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_103 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_150 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_102 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_148 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 #mi-f41b177d-Cell_103 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#mi-f41b177d-Path_149")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimNot",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#mi-f41b177d-Panel_2",
                  "property": "jimIsVisible"
                } ]
              },
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-f41b177d-Dynamic_panel_2" ]
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
                    "target": [ "#mi-f41b177d-Dynamic_panel_2" ],
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
    } else if(jFirer.is("#s-Hotspot_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/572d166d-3b15-463c-b162-7c9de2b8b539"
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
  .on("keyup.jim", ".s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 .keyup", function(event, data) {
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
              "condition": (data.which === 70 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/db7fe671-828e-474f-9cf4-e0b42d825214"
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
              "condition": (data.which === 82 && data.ctrlKey === false && data.shiftKey === false && data.altKey === false),
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5166bae2-4a6c-441a-a8c3-5aec9aa58739"
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
      event.data = data;
      if(!jimUtil.isAndroidDevice() || data.which != 229)
      	jEvent.launchCases(cases);
      if(data.which === 9) {
        return false;
      }
    }
  })
  .on("focusin", ".s-fb5ee259-0987-49d9-bf14-b1c5a81741e8 .focusin", function(event, data) {
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
    }
  });