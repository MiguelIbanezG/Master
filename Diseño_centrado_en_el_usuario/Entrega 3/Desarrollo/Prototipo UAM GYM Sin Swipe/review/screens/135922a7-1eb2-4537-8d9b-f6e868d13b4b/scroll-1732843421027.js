(function(window, undefined) {

    /*********************** START STATIC ACCESS METHODS ************************/

    var older = jimUtil.loadScrollBars;
    jQuery.extend(jimUtil, {
        "loadScrollBars": function() {
        	if (older != undefined)
        		older();
            jQuery(".s-135922a7-1eb2-4537-8d9b-f6e868d13b4b .ui-page").overscroll({ showThumbs:true, direction:'vertical', roundCorners:false, backgroundColor:'#a3a3a3', opacity:'0.75', thickness:'4', scrollSpacing:'0'});
            jQuery(".s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #s-Check_group_1 .scroll").overscroll({ showThumbs:false, direction:'vertical', roundCorners:false, backgroundColor:'#a3a3a3', opacity:'0.75', thickness:'4', scrollSpacing:'0'});
            jQuery(".s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #s-Check_group_2 .scroll").overscroll({ showThumbs:false, direction:'vertical', roundCorners:false, backgroundColor:'#a3a3a3', opacity:'0.75', thickness:'4', scrollSpacing:'0'});
            jQuery(".s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #s-Check_group_3 .scroll").overscroll({ showThumbs:false, direction:'vertical', roundCorners:false, backgroundColor:'#a3a3a3', opacity:'0.75', thickness:'4', scrollSpacing:'0'});
            jQuery(".s-135922a7-1eb2-4537-8d9b-f6e868d13b4b #mi-a9f3df21-Panel_14 .layoutWrapper:first-child").overscroll({ showThumbs:false, direction:'vertical', roundCorners:false, backgroundColor:'#a3a3a3', opacity:'0.75', thickness:'4', scrollSpacing:'0'});
         }
    });

    /*********************** END STATIC ACCESS METHODS ************************/

}) (window);