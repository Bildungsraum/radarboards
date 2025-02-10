//#region ///--------C Set Data------------------------------------------------------------------------------------------------
var projekteNamen = ['ALFA2', 'AMSEL2', 'AVILAB2', 'BIRD', 'BRAINCON2', 'CoCoTeQ2', 'Coding-Labs2', 'CoHaP2', 'CoKoMo2', 'Cor-metasu', 'CuC', 'Di2Design2', 'E365-Maverick', 'EDUvision-2021-2', 'eteachProNBP2', 'EVA-NBP2', 'FSJ2', 'GINI2', 'HPI4NBP2', 'Hybrid-Learn2', 'ICDL-Port2', 'ITs-JOINTLY', 'KoKoN2', 'KUCOBINA', 'LENABI2', 'LernGrammis2', 'LIKE2', 'LO-AK2', 'MIL2', 'MINT_OBadges', 'NELE', 'OpenJupyter2', 'PIM-2-02', 'SCB2', 'Scobees2', 'SHRIMP_PODS2', 'SolVing2', 'Synapse', 'TOERN2', 'TrainSpot2', 'ubiMaster2', 'VE-Collab', 'Vision-Kino-3-2'];


var projekteAuspraegung = ['Dim k.A.', 'Dim in Ansätzen.', 'Dim adressiert.', 'Dim ausgepr.'];

var unterdimensionenNamen = ['Empfehlungen', 'Suchen & Auffinden', 'Lernbilanz', 'Gemeins. Lernen', 'Individualisierung', 'Lernfortschritt', 'Zugang', 'Übergänge & Transfer', 'Schutz & Souveränität', 'Digitale Nachweissysteme', 'Verwaltungssysteme', 'Föderierte Lösungen', 'Weiterverwertung', 'Dezentrale Ansätze', 'Interoperabilität'];

// für Ansicht alle projekte pro UDim
if (thema == "UDim-Fachlich") { projekteNamen=unterdimensionenNamen; }
//projekteNamen=unterdimensionenNamen;

/// Zustand welche Projekte gerade in Einzeplorjektanzeige an sind
var projekteEinzelStatusInLegende = Array(projekteNamen.length).fill(0);
var unterdimensionenEinzelStatusInLegende = Array(unterdimensionenNamen.length).fill(0); // für Ansicht alle projekte pro Unterdimension
//console.log("projekteEinzelStatusInLegende:" + projekteEinzelStatusInLegende);

/// daten und Beschreibung der Oberdimensionen 
var dataDimensionenStandAntrag = [
    
    {id:1, value1:18, value2: 26,value3:56, dimension: "Beraten", nameKurz: "Beraten", name: "Beraten", textLang: "In der Dimension „Beraten“ steht das Individuum im Mittelpunkt. \nHier werden Ansätze beziehungsweise Instrumente zusammengefasst,\ndie es ermöglichen, Bildungsinteressierte zu beraten und ihnen\nmögliche, auf ihre Bedürfnisse zugeschnittene Bildungswege aufzuzeigen."},
    {id:2, value1:26, value2: 34,value3:40, dimension: "Lernen", nameKurz: "Lernen", name: "Lernen", textLang: "In der Dimension „Lernen“ ist das Individuum von zentraler\nBedeutung. Lernende sollen durch Instrumente in ihrem individu-\nellen Lernprozess unterstützt werden."},
    {id:3, value1:22, value2: 33,value3:45, dimension: "Teilhaben", nameKurz: "Teilhaben", name: "Teilhaben", textLang: "In der Dimension „Teilhaben“ liegt der Schwerpunkt auf der ethisch-\ngesellschaftlichen Ebene. Es wird auf die besonderen Bedürfnisse\nunterschiedlicher Zielgruppen eingegangen, damit diese sicher und\nbarrierefrei an Bildungsangeboten teilhaben können."},
    {id:4, value1:19, value2: 34,value3:47, dimension: "Organisieren", nameKurz: "Organisieren", name: "Organisieren", textLang: "In der Dimension „Organisieren“ richtet sich der Blick auf die organi-\nsationale Ebene. Es geht um Lösungen für Organisationen, damit diese\nihre Bildungsangebote besser umsetzen können."},
    {id:5, value1:33, value2: 23,value3:44, dimension: "Bereichern", nameKurz: "Bereichern", name: "Bereichern", textLang: "In der Dimension „Bereichern“ liegt der Fokus auf der systemischen\nEbene. In dieser Dimension geht es um Forschungs- und Entwicklungs-\narbeiten sowie um Verwertungsansätze, die das Bildungsökosystem\nbereichern."},
    {id:6, value1:30, value2: 40,value3:30, dimension: "Sonstige Aspekte", nameKurz: "Sonstige Aspekte", name: "Sonstige Aspekte", textLang: "Weitere inhaltliche Merkmale in den Vorhaben die nicht durch die\nanderen Dimensionen abgedeckt sind."},
    
];

var dataDimensionenStandZeitpunktA = dataDimensionenStandAntrag; //in MBR kein Slider !!!
var dataDimensionenStandDezember2022 = dataDimensionenStandAntrag; //Zeitpunkt A ist 1. auf slider
var dataDimensionenStandZeitpunktB = dataDimensionenStandAntrag; 
var dataDimensionenStandAugust2023 = dataDimensionenStandAntrag; //Zeitpunkt A ist 1. auf slider
var dataDimensionenStandZeitpunktC = dataDimensionenStandAntrag;  // 3. Position auf Zeit slider

var dataDimensionen = dataDimensionenStandZeitpunktA;
var dataOhneLetzteDimension = dataDimensionen.slice(0, dataDimensionen.length - 1); //Für Initiale Anzeige Kopie des Datenarray aber ohne das letzte element= Dimension Sontiges

/// Daten für Beschreibung der Unterdimesionen, Prozent und absolut Werte der UnterDim sind jetzt in datensatz Einzeldimension

var dataBeschreibungUnterDimensionen = [ /// hier nur noch Text beschreibungen für die UDims, GesamtValues absolut und Prozent kommen aus Einzeldatensatz

{dimension: "Empfehlungen", nameKurz: "Empfehlungen", name: "Empfehlungen", oberdimension: "Beraten", textLang: "Empfehlungen zur individuellen Weiterentwicklung: Instrumente zur\nUnterstützung von personalisierten Empfehlungen (zum Beispiel\nRecommender-Systeme, Visualisierung von Lernpfaden und Mapping-\nSysteme)", textZusatzLang: "Hierzu gehören die Integration bzw. das Angebot von textuellen/visuellen bis hin zu intelligenten (algorithmenbasierten) Empfehlungssystemen, um zum Beispiel passende Kurse, Abschlüsse, Lernmaterialien, Lernpfade etc. für ein Individuum vorzuschlagen. Die Nutzenden werden bei der Auswahl geeigneter (Weiter-)Bildungsangebote unterstützt und personalisiert zu passenden Angeboten geführt (zum Beispiel Lernpfaddarstellungen, Mapping-Systeme, Crowd-basierte/Peer-Empfehlungssysteme)."},
{dimension: "Suchen & Auffinden", nameKurz: "Suchen & Auffinden", name: "Suchen & Auffinden", oberdimension: "Beraten", textLang: "Individuelles Suchen und Auffinden von Informationen: Instrumente\n zur Unterstützung des individuellen und insbesondere auch intelligenten\nSuchens und Auffindens (zum Beispiel regelbasierte Suche, semantische\nSuche, maschinelles Lernen und Deep Learning, Integration von Metadaten\nsowie Conversational Agents)", textZusatzLang: "Hier ist wichtig, dass die Nutzenden dabei unterstützt werden, individuelle Informationen passgenau zu suchen und aufzufinden. Die Ansätze reichen von herkömmlichen Suchalgorithmen, die Suchbegriffe regelbasiert verarbeiten, bis hin zu neuartigen Algorithmen, die die menschliche Sprache verstehen und eine semantische Suche mit kontextuellem Verständnis der Suchanfrage ermöglichen. Maschinelles Lernen und Deep Learning können dabei helfen, die Suchanfrage zu konkretisieren. Gleichzeitig wird darauf Wert gelegt, dass Inhalte besser auffindbar sind. Dafür können zum Beispiel „Conversational Agents“ sorgen, die auf einer durchdachten Informationsarchitektur, Informationsdesign, Navigations- und Interaktionsgestaltung sowie Metadatenbeschreibungen basieren."},
{dimension: "Lernbilanz", nameKurz: "Lernbilanz", name: "Lernbilanz", oberdimension: "Beraten", textLang: "Individuelle Lernbilanzen: Instrumente zur Erhebung und Dokumentation\ndes „Lern-Status-quo“ in Bezug auf formal, non-formal und informell\nerworbene Kompetenzen", textZusatzLang: "Hierzu zählen Maßnahmen zur Erhebung der individuellen Lernbilanz, zum Beispiel Tests, (automatisierte) Bewertung und Anrechnung formal erworbener Kompetenzen und Verfahren zur Einbeziehung von non-formal und informell erworbenen Kompetenzen. Dabei kann die Berücksichtigung von Kompetenzstandards/Taxonomien eine Rolle spielen."},
{dimension: "Gemeins. Lernen", nameKurz: "Gemeins. Lernen", name: "Gemeinsames Lernen", oberdimension: "Lernen", textLang: "Unterstützung von Kooperation, Kollaboration und Partizipation beim Lernen:\nInstrumente zur Unterstützung kooperativer, kollaborativer und partizipativer\nLernprozesse, neue technisch oder didaktisch innovative Lernarrangements\noder Lehr-/Lernkonzepte", textZusatzLang: "Im Mittelpunkt steht einerseits die Unterstützung kooperativer, kollaborativer und partizipativer Lern- und Arbeitsprozesse (zum Beispiel durch virtuelle Räume, Peer-Support, Train-the-Trainer-Support, Matching-Instrumente) zur Erreichung eines gemeinsamen Ergebnisses in didaktisch und technisch innovativen Lernarrangements. Andererseits spielen die Unterstützung des gemeinsamen Lernens und die Mitgestaltung von Lerninhalten einschließlich der Integration neuer Lehr-/Lernkonzepte eine wichtige Rolle."},
{dimension: "Individualisierung", nameKurz: "Individualisierung", name: "Individualisierung", oberdimension: "Lernen", textLang: "Individuelles Lernen ermöglichen: Instrumente zur Unterstützung der\nIndividualisierung von Lerninhalten. Zum Beispiel durch adaptive Ansätze,\nEinsatz von Learning Analytics sowie Augmented Reality (AR) und Virtual\nReality (VR)", textZusatzLang: "Lerninhalte und Lernprozesse werden an das Individuum bzw. die jeweiligen Kompetenzen und Ziele angepasst. Dazu gehören automatisierte Mechanismen wie Learning Analytics, adaptive Lerninhalte und Lernpfade, aber auch Maßnahmen, die dem Individuum eine besondere Qualität des Lernens vermitteln können (zum Beispiel individuelle Erfahrbarkeit durch Einsatz von AR oder VR)."},
{dimension: "Lernfortschritt", nameKurz: "Lernfortschritt", name: "Lernfortschritt", oberdimension: "Lernen", textLang: "Dokumentation des individuellen Lernfortschritts: Instrumente zur\nDokumentation und Sichtbarmachung von Lernerfolgen, non-formale\nNachweise sowie Generierung verlässlicher und standardisierter Daten\nals Basis für die Vergabe von Digital Credentials", textZusatzLang: "Im Mittelpunkt steht die Dokumentation und grafisch-technische Darstellung des individuellen Lernfortschritts, zum Beispiel durch Badges. Dies geschieht möglichst auf Basis gängiger Kompetenzmodelle. Die Dokumentation ist Voraussetzung für die Vergabe von formalen Nachweisen (zum Beispiel Zertifikate, Digital Credentials). Adressaten können die Lernenden selbst sein, aber auch die Sichtbarkeit für andere Lernende und Lehrende kann angestrebt werden."},
{dimension: "Zugang", nameKurz: "Zugang", name: "Zugang", oberdimension: "Teilhaben", textLang: "Barrierefreier Zugang zu Beratungs- und Bildungsangeboten für Menschen\naller Fähigkeiten, Altersgruppen und sozialer Herkunft", textZusatzLang: "Im Mittelpunkt steht der barrierefreie Zugang zu Beratungs- und Lernangeboten. Die Definition umfasst neben der Teilhabe von Menschen mit Behinderungen auch Menschen verschiedener Altersgruppen. Zentrale Anliegen sind daneben die Überwindung sprachlicher Barrieren (einfache Sprache, Vorlesemechanismen, anpassbare Sprechgeschwindigkeit, Übersetzungen), die Überwindung sozialer Barrieren (Anwendungen sind über Desktop, Laptop und Mobiltelefon zugänglich) und die Berücksichtigung verschiedener Darstellungsmöglichkeiten von Lernmaterialien (visuell und textuell). Technische Umsetzungen finden sich vor allem in den Bereichen Usability und Utility."},
{dimension: "Übergänge & Transfer", nameKurz: "Übergänge & Transfer", name: "Übergänge & Transfer", oberdimension: "Teilhaben", textLang: "Gestaltung von Übergängen zwischen, Übertragbarkeit auf und Unabhängigkeit\nvon anderen Bildungsbereichen: Gestaltung von Übergängen zwischen und die\nVerzahnung von Bildungsbereichen, Übertragbarkeit auf und Anpassbarkeit an\nandere Bildungsbereiche sowie Anrechnung/Anerkennung von Leistungen\nzwischen unterschiedlichen Bildungsbereichen", textZusatzLang: "Die Gestaltung von Übergängen und der Transfer zwischen Bildungsbereichen können unterschiedliche Formen annehmen. Hierfür werden Verfahren und Standards zur Anerkennung und Anrechnung der Übergänge entwickelt (zum Beispiel Übergang von der beruflichen zur hochschulischen Bildung). Angebote müssen übertragbar sein bzw. auf andere Bildungsbereiche ausgeweitet werden können (zum Beispiel von der Hochschulbildung in die Sekundarstufe II der schulischen Bildung). Ebenso ist die Entwicklung von bildungsbereichsunabhängigen Instrumenten, Standards etc. zu fördern (inkl. Erprobung/Nachweis der generellen Anwendbarkeit)."},
{dimension: "Schutz & Souveränität", nameKurz: "Schutz & Souverän.", name: "Schutz & Souveränität", oberdimension: "Teilhaben", textLang: "Maßnahmen zum Schutz sowie zur Sicherheit und Souveränität von Daten:\nMaßnahmen zu bzw. Umsetzung von Datenschutz, Datensicherheit, Datenethik,\nDatensouveränität, Pseudonymisierung, Vertrauen, Datensparsamkeit sowie\nPrivacy by Design und Default", textZusatzLang: "Im Mittelpunkt stehen die sichere und souveräne Nutzung bzw. Erhebung von Bildungsdaten und das Management digitaler Identitäten. Die Auseinandersetzung mit Informationssicherheit und Datensouveränität ist auch vor dem Hintergrund besonderer Schutzbedürfnisse bestimmter Zielgruppen (zum Beispiel Schülerinnen und Schüler) wichtig. Darüber hinaus sind Themen wie Grundsätze sicherer Softwareentwicklung, Datenschutz, Privacy, Anonymisierung, Pseudonymisierung, Datensouveränität und Datenethik relevant."},
{dimension: "Digitale Nachweissysteme", nameKurz: "Digitale Nachweissyst.", name: "Digitale Nachweissysteme", oberdimension: "Organisieren", textLang: "Erstellung formaler Bildungsnachweise sowie Speicherung und Verwaltung\ndigitaler Identitäten: Systeme zur Speicherung und Verwaltung digitaler\nIdentitäten (zum Beispiel in Zusammenhang mit der Verwaltung von Digital\nCredentials), Speicherung von technisch weiterverarbeitbaren Lernergebnissen\nund Lernständen, Erstellung und Speicherung formaler Bildungsnachweise\n(zum Beispiel Zeugnisse, Zertifikate etc.) sowie Bereitstellung rechtssicherer\nProzesse für Prüfungen, Anrechnungen, Anerkennungen", textZusatzLang: "Für die formale Dokumentation, Überprüfung, Anrechnung und Anerkennung von formalen, informellen und non-formalen Lernergebnissen bzw. Kompetenzen sind rechtssichere Prozesse für die Ausstellung einheitlicher Bildungsnachweise zu definieren und (automatisiert) umzusetzen. Dadurch kann die Wiederverwendbarkeit der Bildungsnachweise erhöht werden. Standards für den Austausch digitaler Bildungsnachweise sind hier relevant, zum Beispiel Europass oder EDCI. Mit Hilfe digitaler Identitäten sollen Zeugnisse und Leistungsnachweise durch kryptografische Verfahren und Wallet-Anwendungen sicher dokumentiert und verwaltet werden. Dazu zählen Authentifizierung, eID, Learning Record Store oder Blockchain zur fälschungssicheren Ablage."},
{dimension: "Verwaltungssysteme", nameKurz: "Verwaltungssyst.", name: "Verwaltungssysteme", oberdimension: "Organisieren", textLang: "Systeme zur Verwaltung von Rollen und/oder Inhalten: Systeme zur\nVerwaltung von Rollen und/oder Inhalten, Content-Management-\nSysteme (CMS), Learning-Management-Systeme (LMS) sowie Lösungen\nzur Vernetzung von Plattformen", textZusatzLang: "Im Mittelpunkt stehen die Anbindung von, Verknüpfung zwischen und/oder Erweiterung/Weiterentwicklung von Content-Management-Systemen (System zur Erstellung und Verwaltung von Inhalten wie Texten, Bildern, Videos, anderen Medienformaten etc.) und/oder Learning-Management-Systemen (System zur Bereitstellung und Verwaltung von Lernmaterialien, zur Organisation von Lernprozessen und der Verwaltung von Kursen und Teilnehmenden). Dazu gehören auch die Definition und Verwaltung von Rollen und Inhalten unter Berücksichtigung größtmöglicher Interoperabilität und Kohärenz."},
{dimension: "Föderierte Lösungen", nameKurz: "Föderierte Lösungen", name: "Föderierte Lösungen", oberdimension: "Organisieren", textLang: "Lösungen zur Integration und zum Management externer Funktionen\nund Daten in Organisationen: Systeme wie Hubs, Middleware und\nServiceprovider, um die Nutzung externer Systeme, Funktionen und\nDaten im IT-System einer Organisation zu ermöglichen", textZusatzLang: "Im Mittelpunkt stehen Hubs und Middleware-Ansätze. Sie werden von Dienstleistern wie Bildungsanbietern betrieben. Hubs- und Middleware-Ansätze ermöglichen die verlässliche Integration und Anbindung von Angeboten anderer (zum Beispiel Funktionen und Daten) an das eigene IT-System, um eigene Angebote/Mehrwerte zu generieren. Mit solchen Ansätzen sind besondere Herausforderungen an vertragliche Regelungen, Anforderungen an die Datenhoheit, Umgang mit besonderen Schutzbedürfnissen, Details zur notwendigen Interoperabilität, Umgang mit Systemupdates etc. verbunden. Der Fokus liegt auf organisatorischen und rechtlichen Aspekten bis hin zu Geschäftsmodellen."},
{dimension: "Weiterverwertung", nameKurz: "Weiterverwertung", name: "Weiterverwertung", oberdimension: "Bereichern", textLang: "Technische und inhaltliche Entwicklungen, die von Dritten genutzt werden\nkönnen: Ermöglichung der Weiterverwertung von Entwicklungen durch\nDritte (zum Beispiel durch Modularisierung von Funktionalitäten oder\nGeneralisierung von Konzepten in Verbindung mit der Veröffentlichung\nunter einer geeigneten OSS-/OER-Lizenz)", textZusatzLang: "Erstellt werden modularisierte Funktionalitäten, Konzepte, Komponenten, Modelle, KI-Bibliotheken (zum Beispiel Keras, pytorch, TensorFlow) inkl. Veröffentlichung des trainierten Modells (etwa in binärer Form), einzelne Funktionalitäten/Module von Lern-Management-Systemen (LMS), Lerninhalte etc. Veröffentlicht werden diese auf geeigneten Medien (zum Beispiel GitHub, GitLab, OER-Drittplattform) und unter entsprechender Lizenz zur Nachnutzung für Open-Source-Software (OSS) bzw. Open Educational Resources (OER) Dritter. Dabei muss deutlich werden, dass eine Weiterverwendung möglich ist (zum Beispiel durch Implementierung eines entsprechenden Plug-ins und der Dokumentation der Integration)."},
{dimension: "Dezentrale Ansätze ", nameKurz: "Dezentrale Ansätze ", name: "Dezentrale Ansätze ", oberdimension: "Bereichern", textLang: "Entwicklung und Bereitstellung dezentraler Funktionen und Dienste:\nEntwicklung neuer (innovativer) oder Zusammenführung bestehender\nFunktionen, Dienste und Angebote, die selbst genutzt oder anderen ohne\ngroßen Aufwand zur Weiterverwendung zur Verfügung gestellt werden\nkönnen.", textZusatzLang: "Durch neue, kreative technische Zusammenführungen von Funktionen/Diensten (eigenen wie auch solchen, die durch andere zur Verfügung gestellt werden) können Mehrwerte, zum Beispiel in Form neuer Angebote und (innovativer) Funktionalitäten im Bildungsökosystem, generiert werden. Der Fokus liegt auf der technischen Umsetzung dieser kreativen Ideen, mit der auch Forschungs- und Entwicklungsarbeiten (zum Beispiel Nachweis der generellen Machbarkeit) verbunden sein können. Bei erfolgreicher Entwicklung können diese Ansätze dezentral zur Verfügung gestellt und dann selbst oder durch andere wirtschaftlich und/oder wissenschaftlich verwertet werden."},
{dimension: "Interoperabilität", nameKurz: "Interoperabilität", name: "Interoperabilität", oberdimension: "Bereichern", textLang: "Förderung der technischen Interoperabilität: Arbeiten zu standardisierten\nSchnittstellen/API-Zugriff/Prozessen/Metadaten, strukturierten maschinen-\nlesbaren Daten, Ontologien/Datenmodellen/Wissensgraphen, standardisierten\nLerninhalten", textZusatzLang: "Im Mittelpunkt stehen Maßnahmen, die die Voraussetzung dafür sind, dass (neue) Lösungen entwickelt, verknüpft und weiterverwertet werden können. Denn: Die Förderung der technischen Interoperabilität von Systemen und Funktionalitäten auf Basis standardisierter Schnittstellen ist die Grundlage für die (innovative) Verknüpfung auf verschiedenen Ebenen (zum Beispiel auf der Ebene von Bildungsplattformen, Anwendungen, Daten). Dazu gehören der sichere und valide Zugriff auf Daten oder Funktionalitäten anderer ebenso wie die technische Interpretierbarkeit der Daten und Funktionalitäten, um eigene Angebote/Mehrwerte zu schaffen. Operationalisiert umfasst dies Interpretationsmöglichkeiten der Daten durch Ontologien/Datenmodelle/Wissensgraphen, definierte Prozesse im Umgang mit Daten und Metadaten und die Generierung bzw. Verarbeitung maschinenlesbarer Daten."},

];

var dataUnterDimensionenEinzelStandAntrag = [ /// --------------------------------------------------------Stand Antrag--------------------------------

{id:"1", dimension: "Empfehlungen", value1:12, valueProzentGesamt1:12, value2: 28, valueProzentGesamt2: 28,value3:61,valueProzentGesamt3:61, valueGesamt1:26, valueGesamt2: 12,valueGesamt3:5, value1:3, value2: 0,value3:1, value4:2, value5: 1,value6:1, value7:2, value8: 0,value9:2, value10:0, value11: 0,value12:3, value13:3, value14: 1,value15:2, value16:2, value17: 1,value18:0, value19:2, value20: 0,value21:2, value22:1, value23: 2,value24:1, value25:1, value26:0, value27: 2,value28:1, value29:0, value30: 2,value31:2, value32:0, value33: 0,value34:3, value35: 3, value36: 0, value37: 0, value38: 0, value39: 0, value40: 2, value41: 1, value42: 1, value43: 1},
{id:"2", dimension: "Suchen & Auffinden", value1:28, valueProzentGesamt1:28, value2: 33, valueProzentGesamt2: 33,value3:40,valueProzentGesamt3:40, valueGesamt1:17, valueGesamt2: 14,valueGesamt3:12, value1:0, value2: 0,value3:2, value4:3, value5: 0,value6:2, value7:1, value8: 3,value9:2, value10:3, value11: 2,value12:1, value13:3, value14: 3,value15:2, value16:3, value17: 3,value18:0, value19:3, value20: 0,value21:1, value22:3, value23: 2,value24:1, value25:1, value26:3, value27: 2,value28:2, value29:1, value30: 3,value31:2, value32:0, value33: 1,value34:2, value35: 1, value36: 0, value37: 2, value38: 2, value39: 3, value40: 2, value41: 0, value42: 2, value43: 1},
{id:"3", dimension: "Lernbilanz", value1:14, valueProzentGesamt1:14, value2: 19, valueProzentGesamt2: 19,value3:67,valueProzentGesamt3:67, valueGesamt1:29, valueGesamt2: 8,valueGesamt3:6, value1:3, value2: 0,value3:1, value4:1, value5: 1,value6:2, value7:3, value8: 1,value9:3, value10:1, value11: 0,value12:2, value13:0, value14: 2,value15:0, value16:0, value17: 0,value18:0, value19:0, value20: 0,value21:3, value22:0, value23: 3,value24:0, value25:1, value26:0, value27: 1,value28:1, value29:1, value30: 2,value31:2, value32:2, value33: 0,value34:2, value35: 0, value36: 0, value37: 2, value38: 0, value39: 0, value40: 3, value41: 1, value42: 1, value43: 1},
{id:"4", dimension: "Gemeins. Lernen", value1:28, valueProzentGesamt1:28, value2: 21, valueProzentGesamt2: 21,value3:51,valueProzentGesamt3:51, valueGesamt1:22, valueGesamt2: 9,valueGesamt3:12, value1:1, value2: 0,value3:3, value4:3, value5: 3,value6:0, value7:2, value8: 2,value9:0, value10:0, value11: 1,value12:3, value13:0, value14: 2,value15:0, value16:0, value17: 0,value18:2, value19:0, value20: 2,value21:1, value22:1, value23: 1,value24:2, value25:3, value26:1, value27: 1,value28:1, value29:3, value30: 0,value31:3, value32:2, value33: 0,value34:2, value35: 0, value36: 3, value37: 3, value38: 0, value39: 2, value40: 0, value41: 3, value42: 3, value43: 3},
{id:"5", dimension: "Individualisierung", value1:26, valueProzentGesamt1:26, value2: 44, valueProzentGesamt2: 44,value3:30,valueProzentGesamt3:30, valueGesamt1:13, valueGesamt2: 19,valueGesamt3:11, value1:3, value2: 2,value3:3, value4:2, value5: 3,value6:1, value7:0, value8: 2,value9:2, value10:2, value11: 2,value12:3, value13:3, value14: 2,value15:2, value16:1, value17: 2,value18:3, value19:1, value20: 1,value21:2, value22:1, value23: 1,value24:1, value25:2, value26:2, value27: 0,value28:2, value29:2, value30: 0,value31:2, value32:0, value33: 0,value34:3, value35: 2, value36: 2, value37: 1, value38: 2, value39: 3, value40: 3, value41: 3, value42: 2, value43: 3},
{id:"6", dimension: "Lernfortschritt", value1:23, valueProzentGesamt1:23, value2: 37, valueProzentGesamt2: 37,value3:40,valueProzentGesamt3:40, valueGesamt1:17, valueGesamt2: 16,valueGesamt3:10, value1:3, value2: 2,value3:2, value4:2, value5: 3,value6:2, value7:2, value8: 0,value9:2, value10:1, value11: 0,value12:2, value13:0, value14: 3,value15:2, value16:0, value17: 3,value18:1, value19:0, value20: 1,value21:3, value22:1, value23: 0,value24:0, value25:1, value26:1, value27: 2,value28:3, value29:2, value30: 3,value31:2, value32:2, value33: 0,value34:3, value35: 3, value36: 2, value37: 2, value38: 0, value39: 2, value40: 3, value41: 2, value42: 1, value43: 1},
{id:"7", dimension: "Zugang", value1:19, valueProzentGesamt1:19, value2: 35, valueProzentGesamt2: 35,value3:47,valueProzentGesamt3:47, valueGesamt1:20, valueGesamt2: 15,valueGesamt3:8, value1:3, value2: 3,value3:2, value4:1, value5: 1,value6:3, value7:2, value8: 2,value9:0, value10:2, value11: 2,value12:1, value13:2, value14: 2,value15:0, value16:0, value17: 2,value18:0, value19:0, value20: 2,value21:2, value22:1, value23: 0,value24:2, value25:3, value26:1, value27: 1,value28:3, value29:2, value30: 0,value31:3, value32:1, value33: 2,value34:1, value35: 0, value36: 1, value37: 1, value38: 3, value39: 3, value40: 1, value41: 2, value42: 1, value43: 2},
{id:"8", dimension: "Übergänge & Transfer", value1:21, valueProzentGesamt1:21, value2: 35, valueProzentGesamt2: 35,value3:44,valueProzentGesamt3:44, valueGesamt1:19, valueGesamt2: 15,valueGesamt3:9, value1:2, value2: 0,value3:1, value4:3, value5: 1,value6:3, value7:0, value8: 3,value9:2, value10:3, value11: 2,value12:2, value13:3, value14: 2,value15:0, value16:1, value17: 2,value18:0, value19:2, value20: 3,value21:2, value22:2, value23: 1,value24:2, value25:3, value26:0, value27: 0,value28:0, value29:2, value30: 2,value31:1, value32:1, value33: 3,value34:0, value35: 0, value36: 1, value37: 0, value38: 3, value39: 2, value40: 1, value41: 1, value42: 2, value43: 2},
{id:"9", dimension: "Schutz & Souveränität", value1:26, valueProzentGesamt1:26, value2: 28, valueProzentGesamt2: 28,value3:47,valueProzentGesamt3:47, valueGesamt1:20, valueGesamt2: 12,valueGesamt3:11, value1:3, value2: 3,value3:2, value4:3, value5: 1,value6:2, value7:3, value8: 3,value9:0, value10:2, value11: 2,value12:1, value13:1, value14: 3,value15:0, value16:2, value17: 2,value18:1, value19:0, value20: 1,value21:2, value22:3, value23: 0,value24:3, value25:1, value26:0, value27: 2,value28:1, value29:1, value30: 2,value31:1, value32:0, value33: 1,value34:0, value35: 0, value36: 3, value37: 3, value38: 1, value39: 2, value40: 2, value41: 3, value42: 2, value43: 1},
{id:"10", dimension: "Digitale Nachweissysteme", value1:12, valueProzentGesamt1:12, value2: 28, valueProzentGesamt2: 28,value3:61,valueProzentGesamt3:61, valueGesamt1:26, valueGesamt2: 12,valueGesamt3:5, value1:0, value2: 3,value3:3, value4:3, value5: 2,value6:2, value7:2, value8: 1,value9:2, value10:1, value11: 2,value12:2, value13:0, value14: 1,value15:0, value16:0, value17: 1,value18:1, value19:2, value20: 2,value21:3, value22:0, value23: 0,value24:0, value25:1, value26:0, value27: 2,value28:2, value29:1, value30: 1,value31:1, value32:1, value33: 3,value34:0, value35: 0, value36: 0, value37: 0, value38: 0, value39: 2, value40: 2, value41: 0, value42: 0, value43: 1},
{id:"11", dimension: "Verwaltungssysteme", value1:23, valueProzentGesamt1:23, value2: 40, valueProzentGesamt2: 40,value3:37,valueProzentGesamt3:37, valueGesamt1:16, valueGesamt2: 17,valueGesamt3:10, value1:2, value2: 3,value3:3, value4:2, value5: 2,value6:3, value7:2, value8: 3,value9:2, value10:1, value11: 3,value12:1, value13:0, value14: 2,value15:2, value16:2, value17: 3,value18:0, value19:1, value20: 0,value21:3, value22:3, value23: 1,value24:1, value25:2, value26:0, value27: 2,value28:0, value29:2, value30: 2,value31:2, value32:2, value33: 3,value34:0, value35: 1, value36: 2, value37: 0, value38: 3, value39: 2, value40: 0, value41: 2, value42: 1, value43: 0},
{id:"12", dimension: "Föderierte Lösungen", value1:23, valueProzentGesamt1:23, value2: 35, valueProzentGesamt2: 35,value3:42,valueProzentGesamt3:42, valueGesamt1:18, valueGesamt2: 15,valueGesamt3:10, value1:2, value2: 2,value3:2, value4:2, value5: 0,value6:0, value7:1, value8: 3,value9:3, value10:2, value11: 3,value12:3, value13:3, value14: 2,value15:1, value16:3, value17: 2,value18:1, value19:1, value20: 0,value21:1, value22:2, value23: 1,value24:2, value25:3, value26:0, value27: 1,value28:1, value29:0, value30: 2,value31:2, value32:3, value33: 2,value34:0, value35: 2, value36: 0, value37: 1, value38: 3, value39: 3, value40: 2, value41: 2, value42: 0, value43: 0},
{id:"13", dimension: "Weiterverwertung", value1:33, valueProzentGesamt1:33, value2: 30, valueProzentGesamt2: 30,value3:37,valueProzentGesamt3:37, valueGesamt1:16, valueGesamt2: 13,valueGesamt3:14, value1:1, value2: 1,value3:1, value4:3, value5: 2,value6:3, value7:3, value8: 3,value9:3, value10:3, value11: 2,value12:2, value13:3, value14: 2,value15:2, value16:0, value17: 1,value18:1, value19:2, value20: 3,value21:1, value22:3, value23: 3,value24:2, value25:3, value26:2, value27: 1,value28:1, value29:0, value30: 3,value31:3, value32:2, value33: 2,value34:0, value35: 0, value36: 1, value37: 0, value38: 2, value39: 2, value40: 2, value41: 0, value42: 3, value43: 1},
{id:"14", dimension: "Dezentrale Ansätze ", value1:23, valueProzentGesamt1:23, value2: 19, valueProzentGesamt2: 19,value3:58,valueProzentGesamt3:58, valueGesamt1:25, valueGesamt2: 8,valueGesamt3:10, value1:0, value2: 2,value3:3, value4:3, value5: 0,value6:1, value7:0, value8: 2,value9:3, value10:2, value11: 2,value12:3, value13:3, value14: 2,value15:0, value16:2, value17: 1,value18:1, value19:0, value20: 0,value21:1, value22:3, value23: 1,value24:1, value25:3, value26:0, value27: 0,value28:0, value29:0, value30: 3,value31:1, value32:3, value33: 1,value34:0, value35: 0, value36: 0, value37: 2, value38: 2, value39: 3, value40: 1, value41: 0, value42: 1, value43: 1},
{id:"15", dimension: "Interoperabilität", value1:42, valueProzentGesamt1:42, value2: 21, valueProzentGesamt2: 21,value3:37,valueProzentGesamt3:37, valueGesamt1:16, valueGesamt2: 9,valueGesamt3:18, value1:2, value2: 3,value3:3, value4:3, value5: 1,value6:3, value7:3, value8: 3,value9:3, value10:3, value11: 2,value12:3, value13:3, value14: 2,value15:1, value16:3, value17: 1,value18:0, value19:3, value20: 2,value21:0, value22:3, value23: 2,value24:1, value25:3, value26:0, value27: 1,value28:1, value29:0, value30: 3,value31:1, value32:3, value33: 2,value34:0, value35: 2, value36: 2, value37: 1, value38: 3, value39: 2, value40: 3, value41: 1, value42: 0, value43: 0},

];


var dataUnterDimensionenProUDimProjekteStandAntrag = [ /// Array für Radarboard alle projekte für eine Unterdimensionen

{id:"1", dimension: "ALFA2", value1:3, value2: 0,value3:3, value4:1, value5: 3,value6:3, value7:3, value8: 2,value9:3, value10:0, value11: 2,value12:2, value13:1, value14: 0, value15:2},
{id:"2", dimension: "AMSEL2", value1:0, value2: 0,value3:0, value4:0, value5: 2,value6:2, value7:3, value8: 0,value9:3, value10:3, value11: 3,value12:2, value13:1, value14: 2, value15:3},
{id:"3", dimension: "AVILAB2", value1:1, value2: 2,value3:1, value4:3, value5: 3,value6:2, value7:2, value8: 1,value9:2, value10:3, value11: 3,value12:2, value13:1, value14: 3, value15:3},
{id:"4", dimension: "BIRD", value1:2, value2: 3,value3:1, value4:3, value5: 2,value6:2, value7:1, value8: 3,value9:3, value10:3, value11: 2,value12:2, value13:3, value14: 3, value15:3},
{id:"5", dimension: "BRAINCON2", value1:1, value2: 0,value3:1, value4:3, value5: 3,value6:3, value7:1, value8: 1,value9:1, value10:2, value11: 2,value12:0, value13:2, value14: 0, value15:1},
{id:"6", dimension: "COCOTEQ2", value1:1, value2: 2,value3:2, value4:0, value5: 1,value6:2, value7:3, value8: 3,value9:2, value10:2, value11: 3,value12:0, value13:3, value14: 1, value15:3},
{id:"7", dimension: "Coding-Labs2", value1:2, value2: 1,value3:3, value4:2, value5: 0,value6:2, value7:2, value8: 0,value9:3, value10:2, value11: 2,value12:1, value13:3, value14: 0, value15:3},
{id:"8", dimension: "CoHaP2", value1:0, value2: 3,value3:1, value4:2, value5: 2,value6:0, value7:2, value8: 3,value9:3, value10:1, value11: 3,value12:3, value13:3, value14: 2, value15:3},
{id:"9", dimension: "CoKoMo2", value1:2, value2: 2,value3:3, value4:0, value5: 2,value6:2, value7:0, value8: 2,value9:0, value10:2, value11: 2,value12:3, value13:3, value14: 3, value15:3},
{id:"10", dimension: "Cor-metasu", value1:0, value2: 3,value3:1, value4:0, value5: 2,value6:1, value7:2, value8: 3,value9:2, value10:1, value11: 1,value12:2, value13:3, value14: 2, value15:3},
{id:"11", dimension: "CuC ", value1:0, value2: 2,value3:0, value4:1, value5: 2,value6:0, value7:2, value8: 2,value9:2, value10:2, value11: 3,value12:3, value13:2, value14: 2, value15:2},
{id:"12", dimension: "Di2Design2", value1:3, value2: 1,value3:2, value4:3, value5: 3,value6:2, value7:1, value8: 2,value9:1, value10:2, value11: 1,value12:3, value13:2, value14: 3, value15:3},
{id:"13", dimension: "E365 Maverick", value1:3, value2: 3,value3:0, value4:0, value5: 3,value6:0, value7:2, value8: 3,value9:1, value10:0, value11: 0,value12:3, value13:3, value14: 3, value15:3},
{id:"14", dimension: "EDUvision-2021-2", value1:1, value2: 3,value3:2, value4:2, value5: 2,value6:3, value7:2, value8: 2,value9:3, value10:1, value11: 2,value12:2, value13:2, value14: 2, value15:2},
{id:"15", dimension: "eteachProNBP2", value1:2, value2: 2,value3:0, value4:0, value5: 2,value6:2, value7:0, value8: 0,value9:0, value10:0, value11: 2,value12:1, value13:2, value14: 0, value15:1},
{id:"16", dimension: "EVA-NBP2", value1:2, value2: 3,value3:0, value4:0, value5: 1,value6:0, value7:0, value8: 1,value9:2, value10:0, value11: 2,value12:3, value13:0, value14: 2, value15:3},
{id:"17", dimension: "FSJ2", value1:1, value2: 3,value3:0, value4:0, value5: 2,value6:3, value7:2, value8: 2,value9:2, value10:1, value11: 3,value12:2, value13:1, value14: 1, value15:1},
{id:"18", dimension: "GINI2", value1:0, value2: 0,value3:0, value4:2, value5: 3,value6:1, value7:0, value8: 0,value9:1, value10:1, value11: 0,value12:1, value13:1, value14: 1, value15:0},
{id:"19", dimension: "HPI4NBP2", value1:2, value2: 3,value3:0, value4:0, value5: 1,value6:0, value7:0, value8: 2,value9:0, value10:2, value11: 1,value12:1, value13:2, value14: 0, value15:3},
{id:"20", dimension: "Hybrid-Learn2", value1:0, value2: 0,value3:0, value4:2, value5: 1,value6:1, value7:2, value8: 3,value9:1, value10:2, value11: 0,value12:0, value13:3, value14: 0, value15:2},
{id:"21", dimension: "ICDL-Port2", value1:2, value2: 1,value3:3, value4:1, value5: 2,value6:3, value7:2, value8: 2,value9:2, value10:3, value11: 3,value12:1, value13:1, value14: 1, value15:0},
{id:"22", dimension: "IT's JOINTLY", value1:1, value2: 3,value3:0, value4:1, value5: 1,value6:1, value7:1, value8: 2,value9:3, value10:0, value11: 3,value12:2, value13:3, value14: 3, value15:3},
{id:"23", dimension: "KoKoN2", value1:2, value2: 2,value3:3, value4:1, value5: 1,value6:0, value7:0, value8: 1,value9:0, value10:0, value11: 1,value12:1, value13:3, value14: 1, value15:2},
{id:"24", dimension: "KUCOBINA", value1:1, value2: 1,value3:0, value4:2, value5: 1,value6:0, value7:2, value8: 2,value9:3, value10:0, value11: 1,value12:2, value13:2, value14: 1, value15:1},
{id:"25", dimension: "LENABI2", value1:1, value2: 1,value3:1, value4:3, value5: 2,value6:1, value7:3, value8: 3,value9:1, value10:1, value11: 2,value12:3, value13:3, value14: 3, value15:3},
{id:"26", dimension: "LernGrammis2", value1:0, value2: 3,value3:0, value4:1, value5: 2,value6:1, value7:1, value8: 0,value9:0, value10:0, value11: 0,value12:0, value13:2, value14: 0, value15:0},
{id:"27", dimension: "LIKE2", value1:2, value2: 2,value3:1, value4:1, value5: 0,value6:2, value7:1, value8: 0,value9:2, value10:2, value11: 2,value12:1, value13:1, value14: 0, value15:1},
{id:"28", dimension: "LO-AK2", value1:1, value2: 2,value3:1, value4:1, value5: 2,value6:3, value7:3, value8: 0,value9:1, value10:2, value11: 0,value12:1, value13:1, value14: 0, value15:1},
{id:"29", dimension: "MIL2", value1:0, value2: 1,value3:1, value4:3, value5: 2,value6:2, value7:2, value8: 2,value9:1, value10:1, value11: 2,value12:0, value13:0, value14: 0, value15:0},
{id:"30", dimension: "MINT_OBadges", value1:2, value2: 3,value3:2, value4:0, value5: 0,value6:3, value7:0, value8: 2,value9:2, value10:1, value11: 2,value12:2, value13:3, value14: 3, value15:3},
{id:"31", dimension: "NELE", value1:2, value2: 2,value3:2, value4:3, value5: 2,value6:2, value7:3, value8: 1,value9:1, value10:1, value11: 2,value12:2, value13:3, value14: 1, value15:1},
{id:"32", dimension: "OpenJupyter2", value1:0, value2: 0,value3:2, value4:2, value5: 0,value6:2, value7:1, value8: 1,value9:0, value10:1, value11: 2,value12:3, value13:2, value14: 3, value15:3},
{id:"33", dimension: "PIM-2-02", value1:0, value2: 1,value3:0, value4:0, value5: 0,value6:0, value7:2, value8: 3,value9:1, value10:3, value11: 3,value12:2, value13:2, value14: 1, value15:2},
{id:"34", dimension: "SCB2", value1:3, value2: 2,value3:2, value4:2, value5: 3,value6:3, value7:1, value8: 0,value9:0, value10:0, value11: 0,value12:0, value13:0, value14: 0, value15:0},
{id:"35", dimension: "Scobees2", value1:3, value2: 1,value3:0, value4:0, value5: 2,value6:3, value7:0, value8: 0,value9:0, value10:0, value11: 1,value12:2, value13:0, value14: 0, value15:2},
{id:"36", dimension: "SHRIMP_PODS2", value1:0, value2: 0,value3:0, value4:3, value5: 2,value6:2, value7:1, value8: 1,value9:3, value10:0, value11: 2,value12:0, value13:1, value14: 0, value15:2},
{id:"37", dimension: "SolVing2", value1:0, value2: 2,value3:2, value4:3, value5: 1,value6:2, value7:1, value8: 0,value9:3, value10:0, value11: 0,value12:1, value13:0, value14: 2, value15:1},
{id:"38", dimension: "Synapse", value1:0, value2: 2,value3:0, value4:0, value5: 2,value6:0, value7:3, value8: 3,value9:1, value10:0, value11: 3,value12:3, value13:2, value14: 2, value15:3},
{id:"39", dimension: "TOERN2", value1:0, value2: 3,value3:0, value4:2, value5: 3,value6:2, value7:3, value8: 2,value9:2, value10:2, value11: 2,value12:3, value13:2, value14: 3, value15:2},
{id:"40", dimension: "TrainSpot2", value1:2, value2: 2,value3:3, value4:0, value5: 3,value6:3, value7:1, value8: 1,value9:2, value10:2, value11: 0,value12:2, value13:2, value14: 1, value15:3},
{id:"41", dimension: "ubiMaster2", value1:1, value2: 0,value3:1, value4:3, value5: 3,value6:2, value7:2, value8: 1,value9:3, value10:0, value11: 2,value12:2, value13:0, value14: 0, value15:1},
{id:"42", dimension: "VE-Collab", value1:1, value2: 2,value3:1, value4:3, value5: 2,value6:1, value7:1, value8: 2,value9:2, value10:0, value11: 1,value12:0, value13:3, value14: 1, value15:0},
{id:"43", dimension: "Vision-Kino-3-2", value1:1, value2: 1,value3:1, value4:3, value5: 3,value6:1, value7:2, value8: 2,value9:1, value10:1, value11: 0,value12:0, value13:1, value14: 1, value15:0},


];
if (thema == "UDim-Fachlich") { dataUnterDimensionenEinzelStandAntrag = dataUnterDimensionenProUDimProjekteStandAntrag; }

var dataUnterDimensionenEinzelStandZeitpunktA = dataUnterDimensionenEinzelStandAntrag; //Datensatz Slider erste position (=links)
var dataUnterDimensionenEinzelStandZB2021 = dataUnterDimensionenEinzelStandAntrag; 
var dataUnterDimensionenProUDimProjekteStandZB2021 = dataUnterDimensionenEinzelStandAntrag; 
if (thema == "UDim-Fachlich") { dataUnterDimensionenEinzelStandZB2021 = dataUnterDimensionenProUDimProjekteStandZB2021; }

var dataUnterDimensionenEinzelStandZeitpunktB = dataUnterDimensionenEinzelStandZB2021; //Datensatz Slider 2. position (=mitte)

var dataUnterDimensionenEinzelStandTagung2022 = dataUnterDimensionenEinzelStandAntrag; 

var dataUnterDimensionenProUDimProjekteStandTagung2022 =dataUnterDimensionenEinzelStandAntrag; 
if (thema == "UDim-Fachlich") { dataUnterDimensionenEinzelStandTagung2022 = dataUnterDimensionenProUDimProjekteStandTagung2022; }

var dataUnterDimensionenEinzelStandZeitpunktC = dataUnterDimensionenEinzelStandTagung2022; //Datensatz Slider 3. position (=rechts) = Stand August 2023


//var dataUnterDimensionenEinzel = dataUnterDimensionenEinzelStandZB2021; ///aktuellen Datensatz auf den letzten Stand setzen, dieser ist dann der inital angezeigte Datensatz
var dataUnterDimensionenEinzel = dataUnterDimensionenEinzelStandAntrag; /// slider steht zu Beginn auf StandAntrag
var dataUnterDimensionen = dataUnterDimensionenEinzel; //values nur noch in Einzelarray enthalten

//#endregion ///-----C END Set Data----------------------------------------------------------------------------------------------

