(function(window, undefined) {
  var dictionary = {
    "572d166d-3b15-463c-b162-7c9de2b8b539": "Detalles_Actividad",
    "c788b950-cbd3-4705-bf3a-53d3321caabf": "Confirmar",
    "135922a7-1eb2-4537-8d9b-f6e868d13b4b": "Filtro",
    "db7fe671-828e-474f-9cf4-e0b42d825214": "Actividades_futbol",
    "c61d14aa-8516-461e-99ae-5da368ef911e": "Reserva_tarjeta",
    "5166bae2-4a6c-441a-a8c3-5aec9aa58739": "Actividades_rugby",
    "812e37a9-43d0-4195-8737-a7207c8b01e6": "Inicio",
    "eaff9538-c05c-4f16-8766-42cee8097fe7": "Login",
    "8f17b440-8828-4207-a253-a72e914aca97": "InicioSesionIniciada",
    "fb5ee259-0987-49d9-bf14-b1c5a81741e8": "Actividades",
    "38a121bc-d3fa-4507-9ab5-ab5e509e10e9": "Actividades_tenis",
    "11a5b772-fd90-44b1-a192-02f5b4e781f9": "Template 2",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "4cbbb73e-c07c-4b9c-83f2-a2f2baf4b7bf": "Menú",
    "1e000438-07d4-4680-9599-132422ef3aef": "MenúNoIniciado",
    "49bf4ec5-154e-4d68-b63d-df31a53ce4f8": "Header",
    "62d08b3d-3c10-42a4-b03b-c898c7047597": "MenúNoIniciado253",
    "c3a5fa41-70da-4c97-bebb-cfe2956ccbec": "Footer",
    "fbc0d0a9-8e3f-4f23-b604-7a7cb4887ec3": "Buscar",
    "4175d222-ff93-4208-87a0-713c85ec4c4c": "HeaderIniciado",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);