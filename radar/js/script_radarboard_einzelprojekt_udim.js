//#region ///---------A Set root, Loading Indicator, Themes, Container, Title, Filter, Buttons----
var root = am5.Root.new("chartdiv");

//#region ///--------A.2 Themes, Container Chart und Text, Title-------------------------
root.setThemes([
  am5themes_Animated.new(root),
  am5themes_Responsive.new(root),
]);

//-------------------------------Container und Radar Chart--------------------------------
var container = root.container.children.push(
  am5.Container.new(root, {
    width: myChartWidthEinzel,
    height: myChartHeightEinzel,
    layout: root.verticalLayout
  })
);

//var textProjektTitel1 = "[#535353] Radarboard - Technologie";
var textProjektTitel1 = "[#535353] Radarboard";
//if (thema == "Fachlich") { textProjektTitel1 = "[#535353] Radarboard - Fachlich & Didaktisch" }
if (thema == "Fachlich") { textProjektTitel1 = "[#535353] Radarboard" }

//var textProjektTitel2 = "[#535353]Projekt_1 - ";
var textProjektTitel2 = ""; //später wird dynamisch Name des projektes zugewiesen
var textProjektTitel3 = ""; //für Umschalten Technisch / Fachlich einzelRadarboard 
var textProjektTitel = textProjektTitel2 + textProjektTitel1;


//------------------title------------------------------------------------
var containerTitle = container.children.push(
  am5.Container.new(root, {
    layout: root.horizontalLayout
  })
);

var title = containerTitle.children.push(am5.Label.new(root, {
  text: "", //wird später über update Title gesetzt
  fontSize: 18,
  fontWeight: 700,
  paddingLeft: 620,
  // x: 450,
}));


//-------------------------------Ende pseudo legend ----------------------------
//---------------------Menu links Hamburger rechts Hilfe Video------------------
var labelMenu = containerTitle.children.push(am5.Label.new(root, {
  paddingTop: 7,
  x: 17,
  text: "[fontWeight: 500 fontSize: 18px #000]☰[fontWeight: 500 fontSize: 13px #000 ]  Menü Visualisierung",
  fontSize: 18,
  fill: ColorBlackYAxisText,
  cursorOverStyle: "pointer",
  tooltip: am5.Tooltip.new(root, { paddingBottom: 5, paddingTop: 3, pointerOrientation:"left" }),
  tooltipX: 28,
  tooltipY: 18,
  tooltipText: "[fontWeight: 500 fontSize: 12px #fff]Menü zur Auswahl\neiner Visualisierung",
  background: am5.Rectangle.new(root, {
    fill: am5.color(0x000000),
    fillOpacity: 0
  })
}));

labelMenu.events.on("click", function (ev) {
  if (labelMenu.get("active")) { //Menu war active -> hide div
    //console.log("Menu active");
    labelMenu.set("active", false);
    document.getElementById('menu-radar').style.display = 'none';
  } else { //Menu war inactive -> div anzeigen
    //console.log("Menu inactive");
    labelMenu.set("active", true);
    document.getElementById('menu-radar').style.display = 'inline-block';
  };
});


function updateTitleText() {
  var counterVisible = 0; var indexSingle = 0;
  for (var udim = 1; udim <= projekteNamen.length; udim++) { //array aller projekte durchgehen
    if (seriesEinzelProjekt[udim].isVisible()) {
      containerTextRadarboardTech.show(0);
      counterVisible = counterVisible + 1;
      indexSingle = udim;
      //textProjektTitel2 = "[#535353]" + projekteNamen[udim - 1]; //array projekteNamen geht ab 0 los
      textProjektTitel2 = "[#535353]" + dataUnterDimensionenEinzelTexte[udim - 1]["name"]; //wegen E365 Maverick ohne bindestrich im Titel aber mit Bindestrich im URL parameter

      
      

    }
    if (counterVisible > 1) { //mehr als 1 projekt in legende visible deshalb text weitere hinzufügen
      textProjektTitel3 = "";


    }
    else if (counterVisible == 1) { //nur 1 projekt visible, text und weitere entfernen

    }
    else if (counterVisible == 0) {
      textProjektTitel3 = ""; textProjektTitel2 = ""; containerTextRadarboardTech.hide(1500);
    } //kein Legendeneintrag visible namen Projekt im Titel entfernen

  };
  textProjektTitel = textProjektTitel2 + textProjektTitel3 + textProjektTitel1;
  title.set("text", textProjektTitel);

};

///-----------------container & bild legende und textRadarboard Links--------------------------------------
var containerTextRadarboardTech = root.container.children.push(
  am5.Container.new(root, {
    width: 370, //war 350
    // height: 340,
    x: 20,
    y: 195,
    layout: root.verticalLayout,
    background: am5.Rectangle.new(root, {
      fill: ColorGrauTextBoxEinzelprojekt,
      fillOpacity: 0.25 //war 0.3
    })
  })
);
var textProjektBeschreibung = "";

function updateProjektBeschreibungText() {
  var counterVisible = 0;
  var indexVisible = -1;

  for (var indexProjekt = 1; indexProjekt <= projekteNamen.length; indexProjekt++) { //array aller projekte durchgehen
    if (seriesEinzelProjekt[indexProjekt].isVisible()) {
      indexVisible = indexProjekt - 1;
    }
  };
  if (indexVisible >= 0) {
    if (dataUnterDimensionenEinzelTexte[indexVisible]["verbundpartner"] == "") {labelProjektVerbundpartner.hide()}
    else { labelProjektVerbundpartner.show()};

    var text1Projekt = "[fontWeight: 700 fontSize: 14px]Titel: [fontSize: 13px]" + dataUnterDimensionenEinzelTexte[indexVisible]["titel"];
    var text2Projekt = "[fontWeight: 700 fontSize: 14px]Zielgruppe: [fontSize: 13px]" + dataUnterDimensionenEinzelTexte[indexVisible]["zielgruppe"];
    var text3Projekt = "[fontWeight: 700 fontSize: 14px]Kurzbeschreibung: [fontSize: 13px]" + dataUnterDimensionenEinzelTexte[indexVisible]["kurzbeschreibung"];
    
   // soll hyperlink sein blau und unterstrichen, docu nachsehen html einfügen
    //var text4Projekt = "[fontWeight: 600 fontSize: 14px]Weitere Projektinformationen\n[fontSize: 13px]" + dataUnterDimensionenEinzelTexte[indexVisible]["weitereprojektinformationen"].substring(0, 35);
    //var text5Projekt = "[fontWeight: 600 fontSize: 14px]Verbundkoordinator: [fontSize: 13px]" + dataUnterDimensionenEinzelTexte[indexVisible]["verbundkoordinator"];

   // textProjektBeschreibung = text1Projekt + "\n[fontSize: 20px][fontSize: 13px]" + text2Projekt + "\n[fontSize: 20px][fontSize: 13px]" + text3Projekt + "\n[fontSize: 20px][fontSize: 13px]" + text4Projekt + "[fontSize: 20px][fontSize: 13px]" + text5Projekt;
   //textProjektBeschreibung = text1Projekt + "\n[fontSize: 20px][fontSize: 13px]" + text2Projekt + "\n[fontSize: 20px][fontSize: 13px]" + text3Projekt;
   //textRadarboardTech.set("text", textProjektBeschreibung);

   textProjektBeschreibung = text1Projekt + "\n[fontSize: 20px][fontSize: 13px]" + text3Projekt;
   textRadarboardTech.set("text", textProjektBeschreibung);


   textVerbundKoordinator = "[fontWeight: 700 fontSize: 14px]Verbundkoordinator:\n[fontSize: 13px]" + dataUnterDimensionenEinzelTexte[indexVisible]["verbundkoordinator"];
   labelVerbundKoordinator.set("text", textVerbundKoordinator);

   textProjektVerbundpartner = "[fontWeight: 700 fontSize: 14px]Verbundpartner:\n[fontSize: 13px]" + dataUnterDimensionenEinzelTexte[indexVisible]["verbundpartner"].substring(0, 35) + "... [fontWeight: 500 fontSize: 12px #000]mehr";

   tooltipTextProjektVerbundpartner = "[fontSize: 13px fontFamily: Arial]" + dataUnterDimensionenEinzelTexte[indexVisible]["verbundpartner"];

   if (dataUnterDimensionenEinzelTexte[indexVisible]["verbundpartner"].includes('\n')) {
    //console.log('Yes');
    textProjektVerbundpartner = "[fontWeight: 700 fontSize: 14px]Verbundpartner:\n[fontSize: 13px]" + dataUnterDimensionenEinzelTexte[indexVisible]["verbundpartner"].substring(0, 35) + "... [fontWeight: 500 fontSize: 12px #000]mehr";
    } else {
    //console.log('No');
    textProjektVerbundpartner = "[fontWeight: 700 fontSize: 14px]Verbundpartner:\n[fontSize: 13px]" + dataUnterDimensionenEinzelTexte[indexVisible]["verbundpartner"];
    tooltipTextProjektVerbundpartner ="";
   }

   labelProjektVerbundpartner.set("text", textProjektVerbundpartner);
   labelProjektVerbundpartner.set("tooltipText", tooltipTextProjektVerbundpartner);

   htmlWeitereProjektInformationen = "<a href=" + dataUnterDimensionenEinzelTexte[indexVisible]["weitereprojektinformationen"] + " target=_blank rel=noopener noreferrer><span style=\"font-size: 13.5px\">Weitere Projektinformationen</span></a>"

   labelWeitereProjektInformationen.set("html",htmlWeitereProjektInformationen);
    
  }
  else {
    // containerTextRadarboardTech.hide(1500); //wird schon in update Title gemacht
  }
};

var textRadarboardTech = containerTextRadarboardTech.children.push(am5.Label.new(root, {
  text: textProjektBeschreibung,
  oversizedBehavior: "wrap",
  maxWidth: 370, // war 350 , war 298

}));

var labelWeitereProjektInformationen = containerTextRadarboardTech.children.push(am5.Label.new(root, {
  interactive: true,
  paddingTop: -2,
  html: "<a href=mbr.html>Weitere Projektinformationen</a>",
  oversizedBehavior: "wrap",
  maxWidth: 320,
  cursorOverStyle: "pointer",
  // tooltip: tooltipVerbundpartner,
  background: am5.Rectangle.new(root, {
    fill: am5.color(0x000000),
    fillOpacity: 0
  })
}));

var labelVerbundKoordinator = containerTextRadarboardTech.children.push(am5.Label.new(root, {
  paddingTop: -2,
  text: "[fontWeight: 600 fontSize: 14px]Verbundkoordinator:[fontSize: 13px]",
  oversizedBehavior: "wrap",
  maxWidth: 320,
  cursorOverStyle: "pointer",
  //tooltip: tooltipVerbundpartner,
  background: am5.Rectangle.new(root, {
    fill: am5.color(0x000000),
    fillOpacity: 0
  })
}));

var tooltipVerbundpartner = am5.Tooltip.new(root, {
  autoTextColor: false, //textfarbe nocht automatisch
 // pointerOrientation: "left",
  //pointerOrientation: "down",
  pointerOrientation: "vertical",
  getFillFromSprite: false,
  //dy: 12,
  dx: 345,
  width: "auto",
 // width: 530,
});
tooltipVerbundpartner.get("background").setAll({ fillOpacity: 0.97, fill: ColorGrauHell });
tooltipVerbundpartner.label.setAll({fill: ColorBlack}); //Textfarbe auf schwarz

var labelProjektVerbundpartner = containerTextRadarboardTech.children.push(am5.Label.new(root, {
  paddingTop: -2,
  text: "[fontWeight: 600 fontSize: 14px]Verbundpartner:[fontSize: 13px]",
  oversizedBehavior: "wrap",
  maxWidth: 320,
  cursorOverStyle: "pointer",
  tooltip: tooltipVerbundpartner,
  background: am5.Rectangle.new(root, {
    fill: am5.color(0x000000),
    fillOpacity: 0
  })
}));

//-----------------ende container & textRadarboard Links-------------------------

//#endregion ///-----A.2 End Themes, Container, Title--------------------------

//#region ///--------A.3 Chart-------------------------------------------------

var chartTechUDimEinzel = container.children.push(am5radar.RadarChart.new(root, {
  //scale: scaleChartUDim, ///0.92 intiale size chart etwas reduziren
  scale: 0.90, ///0.92 intiale size chart etwas reduziren
  panX: false,
  panY: false,
  //x: am5.percent(10),
  //dy: 230, //chart nach rechts schieben damit links platz für text box ist
  y: am5.percent(0),
  dy: 38,
  centerX: am5.percent(-11),
  //startAngle: -125,
  //endAngle: 235,
  startAngle: -120,
  endAngle: 240,
}));

var cursor = chartTechUDimEinzel.set("cursor", am5radar.RadarCursor.new(root, {
  behavior: "selectX",
}));
cursor.lineY.set("visible", false);
cursor.lineX.set("visible", false);

//#endregion ///-----A.3 End Chart-------------------------------------------

//#region ///--------A.5 Axes und Legend---------------------------------------
// Create axes and their renderers
var xRendererTechUDimEinzel = am5radar.AxisRendererCircular.new(root, {
  minGridDistance: 30,
});

xRendererTechUDimEinzel.labels.template.setAll({
  fontSize: 0.1,
  textType: "circular",

  // textType: "adjusted",
  // fontSize: fontSizeUDimLabel, //wird direkt in Range festgelegt
  //fontSize: "0.95em", //fontWeight: 0, //fill: ColorBlack,
  fill: ColorWhite, //damit text nicht doppelt erscheint, range druckt auch noch mal text
  radius: radiusUDimValue
});

var tooltip = am5.Tooltip.new(root, {
  //tooltipX: am5.percent(50),
  //tooltipY: am5.percent(100),
  getFillFromSprite: true,
  getLabelFillFromSprite: true,
  autoTextColor: true,
  //pointerOrientation: "up",
  pointerOrientation: "right",
  labelText: "[fontSize: 11px fontWeight: 500]{category}"
});
tooltip.get("background").setAll({
  fillOpacity: 0.82,
  fill: ColorGrauValue3,
});


var xAxisTechUDimEinzel = chartTechUDimEinzel.xAxes.push(am5xy.CategoryAxis.new(root, {
  maxDeviation: 0,
  categoryField: "dimension",
  renderer: xRendererTechUDimEinzel,
  // tooltip: tooltip, //tooltip für categorien x achse nicht benötigt
  /* tooltip: am5.Tooltip.new(root, { 
    autoTextColor: true,
    getLabelFillFromSprite: true,
    pointerOrientation: "up",
    labelText: "[fontSize: 14px fontWeight: 500]Dim:[fontSize: 13px fontWeight: 400]{name}"
   })  */
}));

xRendererTechUDimEinzel.grid.template.setAll({
  stroke: ColorGridEinzelProjekt,
  //stroke: ColorWhite,
  strokeWidth: 0.7 ///Bestimmt dicke und farbe des grids
  //strokeWidth: 2 ///Bestimmt dicke und farbe des grids
});

xRendererTechUDimEinzel.labels.template.setAll({
  oversizedBehavior: "wrap",
  textAlign: "center"
});


var yAxisTechUDimEinzel = chartTechUDimEinzel.yAxes.push(am5xy.ValueAxis.new(root, {
  visible: false,
  min: 0,
  //max: 3.3,
  max: 3.4, //war 3.4 , 3.5, 3.1

  //max: 3.04, //damit bullets bei value=3 komplett sichtbar sind 
  strictMinMax: true,
  renderer: am5radar.AxisRendererRadial.new(root, { minGridDistance: 50 })
}));



var yRendererTechUDimEinzel = yAxisTechUDimEinzel.get("renderer");
yRendererTechUDimEinzel.grid.template.setAll({
  stroke: ColorGridEinzelProjekt,
  //strokeWidth: 0 //funktoniert nicht
});

yRendererTechUDimEinzel.ticks.template.setAll({
  maxPosition: 0.95,
  stroke: ColorBlackYAxis,
  strokeWidth: 0.8,
  visible: true //false für ausblenden ticks
});
yRendererTechUDimEinzel.labels.template.setAll({
  minPosition: 0.05,
  fill: ColorBlackYAxisText,
  fontSize: "0.85em",
  fontWeight: fontWeightUDimSkala,
  visible: true //false für ausblenden beschriftung Y Achse
});


/// legend horizontal
var legendTechUDimEinzel = container.children.push(am5.Legend.new(root, {
  nameField: "categoryX",
  dx: 60,

  useDefaultMarker: true,
  //layout: root.horizontalLayout
  //layout: root.gridLayout

  layout: am5.GridLayout.new(root, {
    maxColumns: 13,
    fixedWidthGrid: false
  })
}));

legendTechUDimEinzel.labels.template.setAll({
  fontSize: fontSizeLegende,
  fontWeight: "500"
});
legendTechUDimEinzel.valueLabels.template.set("forceHidden", true);

legendTechUDimEinzel.markers.template.setup = function (marker) {
  var check = am5.Graphics.new(root, {
    fill: am5.Color.brighten(am5.color(0x000000), 0.3),
    fillOpacity: 0.7,
    layer: 50,
    scale: 0.85,
    svgPath: "M15.75 2.527c-.61-.468-1.46-.328-1.902.32l-6.325 9.255L4.04 8.328a1.3 1.3 0 0 0-1.922-.062 1.505 1.505 0 0 0-.062 2.043s4.234 4.695 4.843 5.168c.61.468 1.457.328 1.903-.32L16.05 4.55c.445-.653.308-1.555-.301-2.024Zm0 0"
  });
  check.states.create("disabled", {
    fillOpacity: 0
  });
  marker.children.push(check);
}

legendTechUDimEinzel.markers.template.setAll({ width: 15, height: 15 });

legendTechUDimEinzel.markerRectangles.template.setAll({
  fillOpacity: 0.3,
  strokeOpacity: 0
});

//#endregion ///--------A.5 End Axes, Legends----------------------------------------

//#endregion ///-----A End Set root, Loading Indicator, Themes, Container, Title, Filter, Buttons, Legende----

//#region ///--------B Ranges-----------------------------------------------------------------------------

/// Range über Unterdim für Zusatz Beschriftung der UDim mit den Dim Namen Aussen
var rangeTechUDimEinzelLabelOnly = [];
var rangeDataItemTechUDimEinzelLabelOnly = [];

function erstelleRangeTechUDimEinzelLabelOnly(indexRange, colorAchseLabel, radiusLabel, fontSize, labelText, text, startKategorie, endKategorie) { //radius ist abstand des Textlabels in px vom äußeren Kreis
  rangeDataItemTechUDimEinzelLabelOnly[indexRange] = xAxisTechUDimEinzel.makeDataItem({ above: true, category: startKategorie, endCategory: endKategorie });
  rangeTechUDimEinzelLabelOnly[indexRange] = xAxisTechUDimEinzel.createAxisRange(rangeDataItemTechUDimEinzelLabelOnly[indexRange]);

  var tooltip = am5.Tooltip.new(root, { getFillFromSprite: false });
  tooltip.get("background").setAll({ fill: colorAchseLabel, fillOpacity: 0.3 });

  rangeDataItemTechUDimEinzelLabelOnly[indexRange].get("label").setAll({
    fill: colorAchseLabel,
    fontWeight: fontWeightUDimLabelAussen,
    radius: radiusLabel, fontSize: fontSize,
    text: labelText
  });

  rangeTechUDimEinzelLabelOnly[indexRange].get("axisFill").setAll({
    tooltip: tooltip,
    tooltipText: text,
    tooltipX: 450,
    tooltipY: -280,
    visible: true,
    fillOpacity: 0.08, //war 0.15, 0.08
    // fill: colorAchseLabel,
    fill: ColorWhite,
    toggleKey: "active",
    cursorOverStyle: "pointer",
    dRadius: 70, //war 74
    innerRadius: -40 //war -49, -39
  });
}

for (var index = 0; index < dataDimensionen.length - 1; index++) {
  start = index * 4;
  end = start + 3;
  if (thema == "Fachlich") { //wenn fachliches Radarboard dann nur 15 UDim statt 20 UDim
    start = index * 3;
    end = start + 2;
  }
  textDimTooltip = "[fontSize: 13px fontWeight: 700]" + dataDimensionen[index].name + "[/]\n[fontSize: 13px fontWeight: 400]" + dataDimensionen[index].textLang + "[/]";

  erstelleRangeTechUDimEinzelLabelOnly(index, eval('ColorDim' + (index + 1) + 'Value4'), radiusEinzelTechUDimLabelAussen, fontSizeLabelAussen, dataDimensionen[index].dimension, textDimTooltip, dataUnterDimensionenEinzel[start].dimension, dataUnterDimensionenEinzel[end].dimension);
};

/// Range über Unterdim für Beschriftung der Unterdim
var rangeTechUDimEinzel = [];
var rangeDataItemTechUDimEinzel = [];

function erstelleRangeTechUDimEinzel(indexRange, colorAchseLabel, colorAchseFill, radiusLabel, fontWeightLabel, fontSizeLabel, labelText, text, startKategorie, endKategorie) { //radius ist abstand des Textlabels in px vom äußeren Kreis
  rangeDataItemTechUDimEinzel[indexRange] = xAxisTechUDimEinzel.makeDataItem({ above: true, category: startKategorie, endCategory: endKategorie });
  rangeTechUDimEinzel[indexRange] = xAxisTechUDimEinzel.createAxisRange(rangeDataItemTechUDimEinzel[indexRange]);

  var tooltip = am5.Tooltip.new(root, { getFillFromSprite: false });
  tooltip.get("background").setAll({ fill: colorAchseLabel, fillOpacity: 0.3 });

  rangeDataItemTechUDimEinzel[indexRange].get("label").setAll({
    text: labelText,
    fill: colorAchseLabel,
    fontWeight: fontWeightLabel,
    fontSize: fontSizeLabel,
    radius: radiusLabel,

  });
  rangeTechUDimEinzel[indexRange].get("axisFill").setAll({
    tooltip: tooltip,
    tooltipText: text,
    tooltipX: 470,
    tooltipY: -400,
    /*  toggleKey: "active", */
    cursorOverStyle: "pointer",
    visible: true,
    fillOpacity: 0.08,
    fill: colorAchseFill,
    dRadius: 31, //war 21, 31 
    innerRadius: -30, //war -26, war -59, wenn negativ dann pixel distance from outer radius 
  });
}

const fontSizeUDimLabel2 = fontSizeLabelKreis;
for (var udim = 1; udim <= dataUnterDimensionenEinzel.length; udim++) {
  index = udim;
  dim = Math.ceil(udim / 4); //runden auf nächst höheren integer damit dim von 1 bis 5 läuft während udim von 1 bis 20 läuft
  if (thema == "Fachlich") { //wenn fachliches Radarboard dann nur 15 UDim statt 20
    dim = Math.ceil(udim / 3);
  }
  textDimTooltip = "[fontSize: 13px fontWeight: 700]" + dataBeschreibungUnterDimensionen[index - 1].name + "[/]\n[fontSize: 13px fontWeight: 400]" + dataBeschreibungUnterDimensionen[index - 1].textLang + "[/]";

  erstelleRangeTechUDimEinzel(index - 1, eval('ColorDim' + dim + 'Value4'), ColorWhite, radiusEinzelTechUDimLabel, fontWeightUDimLabel, fontSizeUDimLabel2, dataBeschreibungUnterDimensionen[index - 1].nameKurz, textDimTooltip, dataUnterDimensionenEinzel[index - 1].dimension, dataUnterDimensionenEinzel[index - 1].dimension);
};


/// Range über Unterdim für Zusatz-Beschriftung der Gesamtvalues
var rangeTechUDimEinzelGesamtValues = [];
var rangeDataItemTechUDimEinzelGesamtValues = [];

function erstelleRangeTechUDimEinzelGesamtValues(indexRange, colorAchseLabel, radiusLabel, fontWeightLabel, fontSize, labelText, tooltipText, startKategorie, endKategorie) { //radius ist abstand des Textlabels in px vom äußeren Kreis
  var tooltip = am5.Tooltip.new(root, {
    pointerOrientation: "down",
    getFillFromSprite: true,
    //keepTargetHover: true
  });
  tooltip.get("background").setAll({ fillOpacity: 0.85 });

  // ändern und 2 dim array machen für datesatz 0,1,2 um später .set label text machen zu können wenn slider bewegt wird
  rangeDataItemTechUDimEinzelGesamtValues[indexRange] = xAxisTechUDimEinzel.makeDataItem({ category: startKategorie, endCategory: endKategorie });
  rangeTechUDimEinzelGesamtValues[indexRange] = xAxisTechUDimEinzel.createAxisRange(rangeDataItemTechUDimEinzelGesamtValues[indexRange]);

  rangeDataItemTechUDimEinzelGesamtValues[indexRange].get("axisFill").setAll({
    visible: true,
    fill: colorAchseLabel,
    fillOpacity: 0.9,
    dRadius: 7,
    innerRadius: -29,
    tooltip: tooltip,
    tooltipText: tooltipText,
    tooltipX: 400,
    tooltipY: -220,
    cursorOverStyle: "pointer"
  }); //innerRadius dicke farbiger streifen

  rangeDataItemTechUDimEinzelGesamtValues[indexRange].get("label").setAll({ fill: ColorWhite /* colorAchseLabel */, fontWeight: fontWeightLabel, radius: radiusLabel, fontSize: fontSize, text: labelText });

}

function updateLabelGesamtValues() {
  for (var udim = 1; udim <= dataUnterDimensionenEinzel.length; udim++) {
    index = udim;
    rangeDataItemTechUDimEinzelGesamtValues[index - 1].get("label").setAll({ text: "" });

    var labelText = "[fontWeight:300]" + dataUnterDimensionenEinzel[index - 1].valueGesamt3 + "[/]" + " | " + dataUnterDimensionenEinzel[index - 1].valueGesamt2  + " | " + dataUnterDimensionenEinzel[index - 1].valueGesamt1;
    var tooltipText = "[fontSize: 14px fontWeight: 600]MBR Gesamtprogramm:\n" + "[fontSize: 13px fontWeight: 400]" + dataUnterDimensionenEinzel[index - 1].valueGesamt3 + " Vorhaben: Merkmal ausgeprägt[/]\n" + "[fontSize: 13px fontWeight: 400]" + dataUnterDimensionenEinzel[index - 1].valueGesamt2 + " Vorhaben: Merkmal vorhanden[/]\n" + "[fontSize: 13px fontWeight: 400]" + dataUnterDimensionenEinzel[index - 1].valueGesamt1 + " Vorhaben: Merkmal in Ansätzen/nicht relevant";

    rangeDataItemTechUDimEinzelGesamtValues[index - 1].get("label").setAll({ text: labelText });
    rangeDataItemTechUDimEinzelGesamtValues[index - 1].get("axisFill").setAll({ tooltipText: tooltipText, });

  };
};

/// Hilsfunktion für Aufruf der Gesamtvalue Beschriftung um aufruf aus series hide/show event zu ermöglichen
function generiereRangesGesamtValues() {
  var radius = -19; var fontWeight = 300; var fontSize = "0.8em"; var color = ColorBlackYAxisText;
  for (var udim = 1; udim <= dataUnterDimensionenEinzel.length; udim++) {
    index = udim;
    dim = Math.ceil(udim / 4); //runden auf nächst höheren integer damit dim von 1 bis 5 läuft während udim von 1 bis 20 läuft
    if (thema == "Fachlich") { //wenn facjliches Radarboard dann nur 15 UDim statt 20
      dim = Math.ceil(udim / 3);
    }
    // var labelText = "[bold]" + dataUnterDimensionenEinzel[index - 1].valueGesamt1 + " | " + dataUnterDimensionenEinzel[index - 1].valueGesamt2 + " | " + dataUnterDimensionenEinzel[index - 1].valueGesamt3;
    //var labelText = "[fontWeight:300]" + dataUnterDimensionenEinzel[index - 1].valueGesamt3 + "[/]" + " | " + dataUnterDimensionenEinzel[index - 1].valueGesamt2 + " | " + dataUnterDimensionenEinzel[index - 1].valueGesamt1;
    var labelText = "[fontWeight:300]" + dataUnterDimensionenEinzel[index - 1].valueGesamt3 + "[/]" + " | " + dataUnterDimensionenEinzel[index - 1].valueGesamt2  + " | " + dataUnterDimensionenEinzel[index - 1].valueGesamt1;

    var tooltipText = "[fontSize: 14px fontWeight: 600]MBR Gesamtprogramm:\n" + "[fontSize: 13px fontWeight: 400]" + dataUnterDimensionenEinzel[index - 1].valueGesamt3 + " Vorhaben: Merkmal ausgeprägt[/]\n" + "[fontSize: 13px fontWeight: 400]" + dataUnterDimensionenEinzel[index - 1].valueGesamt2 + " Vorhaben: Merkmal vorhanden[/]\n" + "[fontSize: 13px fontWeight: 400]" + dataUnterDimensionenEinzel[index - 1].valueGesamt1 + " Vorhaben: Merkmal in Ansätzen/nicht relevant";
    var color = am5.Color.brighten(eval('ColorDim' + dim + 'Value4'), 0.1);
    erstelleRangeTechUDimEinzelGesamtValues(index - 1, color, radius, fontWeight, fontSize, labelText, tooltipText, dataUnterDimensionenEinzel[index - 1].dimension, dataUnterDimensionenEinzel[index - 1].dimension);
  };
};

var rangeCircleAussen = [];
var rangeDataItemCircleAussen = [];

/// Hilsfunktion für Aufruf der Gesamtvalue Beschriftung um aufruf aus series hide/show event zu ermöglichen
function erstelleRangeCircleAussen(indexRange, colorAchseLabel, radiusLabel, fontWeightLabel, fontSize, labelText, tooltipText, startKategorie, endKategorie) { //radius ist abstand des Textlabels in px vom äußeren Kreis
  var tooltip = am5.Tooltip.new(root, { getFillFromSprite: true });
  rangeDataItemCircleAussen[indexRange] = xAxisTechUDimEinzel.makeDataItem({ category: startKategorie, endCategory: endKategorie });
  rangeCircleAussen[indexRange] = xAxisTechUDimEinzel.createAxisRange(rangeDataItemCircleAussen[indexRange]);
  rangeDataItemCircleAussen[indexRange].get("axisFill").setAll({ visible: true, fill: colorAchseLabel, fillOpacity: 1, dRadius: -18, innerRadius: -72, tooltip: tooltip, tooltipText: tooltipText }); //innerRadius -55 ist dicker dicke farbiger streifen
}

function generiereRangesCircleAussen() {
  var radius = -23; var fontWeight = 300; var fontSize = "0.8em"; //radius war -23
  // var color = am5.Color.lighten(ColorGrauValue3, -0.04); 

  for (var udim = 1; udim <= dataUnterDimensionenEinzel.length; udim++) {
    index = udim;
    dim = Math.ceil(udim / 4); //runden auf nächst höheren integer damit dim von 1 bis 5 läuft während udim von 1 bis 20 läuft
    if (thema == "Fachlich") { dim = Math.ceil(udim / 3) }
    var labelText = "";
    var tooltipText = "";
    var color = am5.Color.brighten(eval('ColorDim' + dim + 'Value3'), -0.05);
    //  erstelleRangeCircleAussen(index - 1, color, radius, fontWeight, fontSize, labelText, tooltipText, dataUnterDimensionenEinzel[index - 1].dimension, dataUnterDimensionenEinzel[index - 1].dimension);
    erstelleRangeCircleAussen(index - 1, color, radius, fontWeight, fontSize, labelText, tooltipText, dataUnterDimensionenEinzel[index - 1].dimension, dataUnterDimensionenEinzel[index - 1].dimension);

  };
};

var rangeCircleMitte = [];
var rangeDataItemCircleMitte = [];

function erstelleRangeCircleMitte(indexRange, colorAchseLabel, radiusLabel, fontWeightLabel, fontSize, labelText, tooltipText, startKategorie, endKategorie) { //radius ist abstand des Textlabels in px vom äußeren Kreis
  var tooltip = am5.Tooltip.new(root, { getFillFromSprite: true });
  rangeDataItemCircleMitte[indexRange] = xAxisTechUDimEinzel.makeDataItem({ category: startKategorie, endCategory: endKategorie });
  rangeCircleMitte[indexRange] = xAxisTechUDimEinzel.createAxisRange(rangeDataItemCircleMitte[indexRange]);
  rangeDataItemCircleMitte[indexRange].get("axisFill").setAll({ visible: true, fill: colorAchseLabel, fillOpacity: 0.9, dRadius: -89, innerRadius: -72, tooltip: tooltip, tooltipText: tooltipText }); //innerRadius -55 ist dicker dicke farbiger streifen
}

function generiereRangesCircleMitte() {
  var radius = -23; var fontWeight = 300; var fontSize = "0.8em"; var color = am5.Color.lighten(ColorGrauValue2, -0.04);//war radius = -23;
  for (var udim = 1; udim <= dataUnterDimensionenEinzel.length; udim++) {
    index = udim;
    dim = Math.ceil(udim / 4); //runden auf nächst höheren integer damit dim von 1 bis 5 läuft während udim von 1 bis 20 läuft
    if (thema == "Fachlich") { dim = Math.ceil(udim / 3) }
    var labelText = "";
    var tooltipText = "";
    var color = am5.Color.lighten(eval('ColorDim' + dim + 'Value2'), 0.0);
    erstelleRangeCircleMitte(index - 1, color, radius, fontWeight, fontSize, labelText, tooltipText, dataUnterDimensionenEinzel[index - 1].dimension, dataUnterDimensionenEinzel[index - 1].dimension);
  };
};


var rangeCircleInnen = [];
var rangeDataItemCircleInnen = [];

function erstelleRangeCircleInnen(indexRange, colorAchseLabel, radiusLabel, fontWeightLabel, fontSize, labelText, tooltipText, startKategorie, endKategorie) { //radius ist abstand des Textlabels in px vom äußeren Kreis
  var tooltip = am5.Tooltip.new(root, { getFillFromSprite: true });
  rangeDataItemCircleInnen[indexRange] = xAxisTechUDimEinzel.makeDataItem({ category: startKategorie, endCategory: endKategorie });
  rangeCircleInnen[indexRange] = xAxisTechUDimEinzel.createAxisRange(rangeDataItemCircleInnen[indexRange]);
  rangeDataItemCircleInnen[indexRange].get("axisFill").setAll({ visible: true, fill: colorAchseLabel, fillOpacity: 0.9, dRadius: -162, innerRadius: 0, tooltip: tooltip, tooltipText: tooltipText }); //innerRadius -55 ist dicker dicke farbiger streifen
}

function generiereRangesCircleInnen() {
  var radius = -23; var fontWeight = 300; var fontSize = "0.8em"; var color = am5.Color.lighten(ColorGrauValue1, -0.04); //war radius = -23;
  for (var udim = 1; udim <= dataUnterDimensionenEinzel.length; udim++) {
    index = udim;
    dim = Math.ceil(udim / 4); //runden auf nächst höheren integer damit dim von 1 bis 5 läuft während udim von 1 bis 20 läuft
    if (thema == "Fachlich") { dim = Math.ceil(udim / 3) }
    var labelText = "";
    var tooltipText = "";
    var color = am5.Color.lighten(eval('ColorDim' + dim + 'Value1'), 0.2); //war 1.7
    erstelleRangeCircleInnen(index - 1, color, radius, fontWeight, fontSize, labelText, tooltipText, dataUnterDimensionenEinzel[index - 1].dimension, dataUnterDimensionenEinzel[index - 1].dimension);
  };
};

//#endregion ///-----B Ranges------------------------------------------------------

//#region ///--------C Series-----------------------------------------------------------------------------

var seriesEinzelProjekt = [];
function erstelleSeriesEinzelTechUDimEinzel(index) { /// index= Index für Projekt geht von 1..34
  //var auspraegung = projekteAuspraegung[{ valueY }];
  color = colorSetKoordinatoren[index]; color = am5.Color.lighten(am5.color(color), -0.65); //war 0.1

  seriesEinzelProjekt[index] = chartTechUDimEinzel.series.push(am5radar.RadarLineSeries.new(root, {
    name: projekteNamen[index - 1], //projekteNamen Array läuft von 0..33 deshalb index-1
    xAxis: xAxisTechUDimEinzel,
    yAxis: yAxisTechUDimEinzel,
    valueYField: "value" + index,
    categoryXField: "dimension",
    stroke: color,
    fill: color,

  }));

  seriesEinzelProjekt[index].strokes.template.setAll({ strokeWidth: 2.3, fillOpacity: 0, fill: color }); //war fillOpacity: 0.2 weg wegen grau zonen
  seriesEinzelProjekt[index].bullets.push(function () {
    return am5.Bullet.new(root, {
      sprite: am5.Circle.new(root, {
        radius: 5,
        fillOpacity: 0.9,
        //fill: color
        fill: am5.Color.lighten(seriesEinzelProjekt[index].get("fill"), 0)
      })
    });
  });
};

// series automatisch für alle 34 Projekte erstellen
for (var index = 1; index <= projekteNamen.length; index++) {
  erstelleSeriesEinzelTechUDimEinzel(index);
};

/// pseudo series für Anzeige der Gesamtvalues erstellen
seriesGesamtValues = chartTechUDimEinzel.series.push(am5radar.RadarLineSeries.new(root, {
  name: "Infos Gesamtprogramm", //projekteNamen Array läuft von 0..33 deshalb index-1
  xAxis: xAxisTechUDimEinzel,
  yAxis: yAxisTechUDimEinzel,
  fill: ColorDim6Value1, //irgendeine Farbe für Legendeneintrag wählen
  //valueYField: "value" + index,
  valueYField: undefined,
  categoryXField: "dimension",
}));

seriesGesamtValues.on("visible", function (visible, target) { //Dim1
  if (visible) {
    yAxisTechUDimEinzel.setAll({ max: 3.4 });
    for (var udim = 1; udim <= dataUnterDimensionenEinzel.length; udim++) {
      index = udim - 1;
      rangeDataItemCircleAussen[index].get("axisFill").setAll({ dRadius: -18, innerRadius: -82, });
      rangeDataItemCircleMitte[index].get("axisFill").setAll({ dRadius: -99, innerRadius: -72, });
      rangeDataItemCircleInnen[index].get("axisFill").setAll({ dRadius: -170, innerRadius: 0, });
    };
    generiereRangesGesamtValues();
  }
  else {
    for (var index = 1; index <= dataUnterDimensionenEinzel.length; index++) {
      range = rangeTechUDimEinzelGesamtValues[index - 1];
      xAxisTechUDimEinzel.axisRanges.removeValue(range);
    };
    //dynmisch range ausgeprägt nach oben erweitern wenn dunkler krei snicht sichtbar

    yAxisTechUDimEinzel.setAll({ max: 3.1 });
    for (var udim = 1; udim <= dataUnterDimensionenEinzel.length; udim++) {
      index = udim - 1;
      rangeDataItemCircleAussen[index].get("axisFill").setAll({ dRadius: 0, innerRadius: -90, });
      rangeDataItemCircleMitte[index].get("axisFill").setAll({ dRadius: -86, innerRadius: -75, });
      rangeDataItemCircleInnen[index].get("axisFill").setAll({ dRadius: -160, innerRadius: 0, });

    };



  }
});

/// pseudo series für Umschalten Radarboard Fachlich <-> Technologisch
seriesUmschaltenFachlich = chartTechUDimEinzel.series.push(am5radar.RadarLineSeries.new(root, {
  name: "Fachlich-Didaktisch",
  xAxis: xAxisTechUDimEinzel,
  yAxis: yAxisTechUDimEinzel,
  fill: ColorGrauDunkel,
  valueYField: undefined,
  categoryXField: "dimension",
}));


seriesUmschaltenTechnologisch = chartTechUDimEinzel.series.push(am5radar.RadarLineSeries.new(root, {
  name: "Technologisch",
  xAxis: xAxisTechUDimEinzel,
  yAxis: yAxisTechUDimEinzel,
  fill: ColorGrauDunkel,
  valueYField: undefined,
  categoryXField: "dimension",
}));


seriesUmschaltenFachlich.on("visible", function (visible, target) {
  if (visible) {
    seriesUmschaltenTechnologisch.hide();
    window.location.href = "mbr.html?p=" + nameProjekt.toLowerCase();
  }
  
});

seriesUmschaltenTechnologisch.on("visible", function (visible, target) {
  if (visible) {
    seriesUmschaltenFachlich.hide();
    window.location.href = "radar-broschuere-t.html?p=" + nameProjekt.toLowerCase();
  }

});

seriesCircleAussen = chartTechUDimEinzel.series.push(am5radar.RadarLineSeries.new(root, {
  //name: "G3", //projekteNamen Array läuft von 0..33 deshalb index-1
  xAxis: xAxisTechUDimEinzel,
  yAxis: yAxisTechUDimEinzel,
  fill: ColorGrauValue3,
  valueYField: undefined,
  categoryXField: "dimension",
}));
generiereRangesCircleAussen();

seriesCircleMitte = chartTechUDimEinzel.series.push(am5radar.RadarLineSeries.new(root, {
  //name: "G2", //projekteNamen Array läuft von 0..33 deshalb index-1
  xAxis: xAxisTechUDimEinzel,
  yAxis: yAxisTechUDimEinzel,
  fill: ColorGrauValue2,
  valueYField: undefined,
  categoryXField: "dimension",
}));
generiereRangesCircleMitte();

seriesCircleInnen = chartTechUDimEinzel.series.push(am5radar.RadarLineSeries.new(root, {
  //name: "G1", //projekteNamen Array läuft von 0..33 deshalb index-1
  xAxis: xAxisTechUDimEinzel,
  yAxis: yAxisTechUDimEinzel,
  fill: ColorGrauValue1,
  valueYField: undefined,
  categoryXField: "dimension",
}));
generiereRangesCircleInnen();


function erstelleLegendEventsTechUDimEinzel(index) {
  seriesEinzelProjekt[index].on("visible", function (visible, target) {
    updateTitleText();
    updateProjektBeschreibungText();

    if (visible) {
      //console.log("visible: ",index)

      for (var i = 1; i <= projekteNamen.length; i++) {
        if (i == index) {
          // console.log("i==index show", i, index)
          seriesEinzelProjekt[i].show();
          nameProjekt = projekteNamen[i - 1];
          //console.log("on.visible p=" + nameProjekt);
        }
        else {
          //console.log("i<>index hide", i, index)
          seriesEinzelProjekt[i].hide();
        }
      };

    }
    else {
      // console.log("not visible: ",index)

    }
  });
};

/// series events automatisch für alle 34 Projekte erstellen
for (var index = 1; index <= projekteNamen.length; index++) {
  erstelleLegendEventsTechUDimEinzel(index);
};

//#endregion ///--------C End Series-------------------------------------------------------

function updateValuesDatensatz(datensatz, indexDatensatz) { ///update der value1..34 in series 1..34 bei slider bewegeung
  dataUnterDimensionenEinzel = datensatz;
  //* alte version geht aber sehr langsam, slider kann nur schwer bewegt werden
  //* for (var index = 1; index <= projekteNamen.length; index++) {
  //*   seriesEinzelProjekt[index].data.setAll(dataUnterDimensionenEinzel);
  //* };

  for (var index = 1; index <= projekteNamen.length; index++) {
    var counterDatensatz = 0;
    am5.array.each(seriesEinzelProjekt[index].dataItems, function (dataItem) {
      var newValue = dataUnterDimensionenEinzel[counterDatensatz]['value' + index]; //alle 34 series (34Projekte) durchgehen und value1..34 updaten

      //*console.log("newvalue1:" + newValue);
      counterDatensatz = counterDatensatz + 1;
      dataItem.set("valueY", newValue);
      dataItem.animate({ key: "valueYWorking", to: newValue, duration: 500 });
    });
  };
  var newLabelGesamtValues = "";
};

function updateSliderDatensatz(sliderWert) { /// bei slider move updatevalues funktion aufrufen
  // console.log("slider wert:" + sliderWert);
  if (sliderWert == 0 || sliderWert == 1) {
    updateValuesDatensatz(dataUnterDimensionenEinzelStandAntrag, indexDatensatz = 0);
    updateLabelGesamtValues();

  }
  else if (sliderWert == 4 || sliderWert == 5 || sliderWert == 6) {
    updateValuesDatensatz(dataUnterDimensionenEinzelStandZB2021, indexDatensatz = 1);
    updateLabelGesamtValues();

  }
  else if (sliderWert == 9 || sliderWert == 10 || sliderWert == 11) {
    updateValuesDatensatz(dataUnterDimensionenEinzelStandTagung2022, indexDatensatz = 2);
    updateLabelGesamtValues();

  }
};

//#endregion ///-----------D End Slider-------------------------------------------------------
function changeProjekt(name) {
  // change Auswahlbox Projekte zu nameProjekt
  for (var i = 0; i < projekteNamen.length; i++) {
    //console.log("i,projekteNamen[i],nameProjekt=", i, projekteNamen[i].toLowerCase(), nameProjekt)
    if (name.toLowerCase() == projekteNamen[i].toLowerCase()) {
      seriesEinzelProjekt[i + 1].show();
      nameProjekt = projekteNamen[i].toLowerCase();
      //console.log("p=" + nameProjekt);
    }
    else {
      //console.log("i<>index hide", i, index)
      seriesEinzelProjekt[i + 1].hide();
    }
  };
}
//#region ///--------E Main Init Chart Data, Hide Series at startup etc-----------------------------------

//chartTechUDimEinzel.set("scale", 0.95); /// intial chart herunterskalieren da evtl. schriften zu gross

///series mit neuem datensatz initialisieren
for (var index = 1; index <= projekteNamen.length; index++) {
  seriesEinzelProjekt[index].data.setAll(dataUnterDimensionenEinzel);
};


///series ab Projekt 2 hide damit nur erstes sichtbar ist
for (var index = 2; index <= projekteNamen.length; index++) {
  seriesEinzelProjekt[index].hide();
};

generiereRangesGesamtValues(); ///Anzeige Gesamtvalues beim start aktivieren, wird schon an anderer stelle gemacht
//seriesGesamtValues.show();
seriesGesamtValues.hide(); ///Anzeige Gesamtvalues beim start deaktivieren

xAxisTechUDimEinzel.data.setAll(dataUnterDimensionenEinzel);

//legendTechUDimEinzel.data.setAll(chartTechUDimEinzel.series.values);

for (var index = 1; index <= projekteNamen.length; index++) {
  legendTechUDimEinzel.data.push(seriesEinzelProjekt[index]);
};


if (thema == "Fachlich") {
  seriesUmschaltenTechnologisch.hide();
}

if (thema == "Technologisch") {
  seriesUmschaltenFachlich.hide();
}
/* legendUmschaltenFachlichTechnologisch.data.push(seriesUmschaltenFachlich);
legendUmschaltenFachlichTechnologisch.data.push(seriesUmschaltenTechnologisch); */


legendTechUDimEinzel.data.push(seriesGesamtValues); //bug bei einausblenden, 

legendTechUDimEinzel.appear(2000, 10);

//seriesEinzelProjekt[1].appear(2000); //erstes Projekt anzeigen, die anderen ausgeblendet lassen

chartTechUDimEinzel.appear(300, 10);

//#endregion ///-----------E End Main Init Chart Data, Hide Series at startup etc---------------------------

