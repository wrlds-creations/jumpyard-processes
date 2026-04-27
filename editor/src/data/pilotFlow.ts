// Auto-generated — do not edit by hand
export const pilotNodes = [
  {
    "id": "pool-guest",
    "type": "pool",
    "position": {
      "x": 56,
      "y": 0
    },
    "data": {
      "label": "Gäst",
      "color": "#f59e0b",
      "widthPx": 6100,
      "heightPx": 180,
      "layoutSelected": false,
      "editMode": true
    },
    "draggable": true,
    "selectable": true,
    "zIndex": -3,
    "measured": {
      "width": 6100,
      "height": 180
    }
  },
  {
    "id": "pool-staff",
    "type": "pool",
    "position": {
      "x": 56,
      "y": 220
    },
    "data": {
      "label": "Parkpersonal",
      "color": "#fb7185",
      "widthPx": 6100,
      "heightPx": 220,
      "layoutSelected": false,
      "editMode": true
    },
    "draggable": true,
    "selectable": true,
    "zIndex": -3,
    "measured": {
      "width": 6100,
      "height": 220
    }
  },
  {
    "id": "pool-webbapp",
    "type": "pool",
    "position": {
      "x": 56,
      "y": 490
    },
    "data": {
      "label": "Webbapp",
      "color": "#38bdf8",
      "widthPx": 6100,
      "heightPx": 340,
      "layoutSelected": false,
      "editMode": true
    },
    "draggable": true,
    "selectable": true,
    "zIndex": -3,
    "measured": {
      "width": 6100,
      "height": 340
    }
  },
  {
    "id": "pool-cloud",
    "type": "pool",
    "position": {
      "x": 56,
      "y": 880
    },
    "data": {
      "label": "JumpYard Cloud",
      "color": "#22c55e",
      "widthPx": 6100,
      "heightPx": 750,
      "layoutSelected": false,
      "editMode": true
    },
    "draggable": true,
    "selectable": true,
    "zIndex": -3,
    "measured": {
      "width": 6100,
      "height": 750
    }
  },
  {
    "id": "pool-roller",
    "type": "pool",
    "position": {
      "x": 56,
      "y": 1680
    },
    "data": {
      "label": "Roller API",
      "color": "#8b5cf6",
      "widthPx": 6100,
      "heightPx": 230,
      "layoutSelected": false,
      "editMode": true
    },
    "draggable": true,
    "selectable": true,
    "zIndex": -3,
    "measured": {
      "width": 6100,
      "height": 230
    }
  },
  {
    "id": "lane-guest",
    "type": "lane",
    "position": {
      "x": 56,
      "y": 0
    },
    "data": {
      "label": "Gäst",
      "width": "6100px",
      "heightPx": 180,
      "index": 0,
      "poolId": "pool-guest",
      "layoutSelected": false,
      "editMode": true
    },
    "draggable": true,
    "selectable": true,
    "zIndex": -2,
    "measured": {
      "width": 6100,
      "height": 180
    }
  },
  {
    "id": "lane-staff",
    "type": "lane",
    "position": {
      "x": 56,
      "y": 220
    },
    "data": {
      "label": "Parkpersonal",
      "width": "6100px",
      "heightPx": 220,
      "index": 1,
      "poolId": "pool-staff",
      "layoutSelected": false,
      "editMode": true
    },
    "draggable": true,
    "selectable": true,
    "zIndex": -2,
    "measured": {
      "width": 6100,
      "height": 220
    }
  },
  {
    "id": "lane-webbapp",
    "type": "lane",
    "position": {
      "x": 56,
      "y": 490
    },
    "data": {
      "label": "Webbapp",
      "width": "6100px",
      "heightPx": 340,
      "index": 2,
      "poolId": "pool-webbapp",
      "layoutSelected": false,
      "editMode": true
    },
    "draggable": true,
    "selectable": true,
    "zIndex": -2,
    "measured": {
      "width": 6100,
      "height": 340
    },
    "selected": true
  },
  {
    "id": "lane-aws",
    "type": "lane",
    "position": {
      "x": 56,
      "y": 880
    },
    "data": {
      "label": "Databaser / Aurora",
      "width": "6100px",
      "heightPx": 360,
      "index": 3,
      "poolId": "pool-cloud",
      "layoutSelected": false,
      "editMode": true
    },
    "draggable": true,
    "selectable": true,
    "zIndex": -2,
    "measured": {
      "width": 6100,
      "height": 360
    },
    "selected": true
  },
  {
    "id": "lane-ops",
    "type": "lane",
    "position": {
      "x": 56,
      "y": 1240
    },
    "data": {
      "label": "Driftjobb",
      "width": "6100px",
      "heightPx": 390,
      "index": 4,
      "poolId": "pool-cloud",
      "layoutSelected": false,
      "editMode": true
    },
    "draggable": true,
    "selectable": true,
    "zIndex": -2,
    "measured": {
      "width": 6100,
      "height": 390
    }
  },
  {
    "id": "lane-roller",
    "type": "lane",
    "position": {
      "x": 56,
      "y": 1680
    },
    "data": {
      "label": "Roller API",
      "width": "6100px",
      "heightPx": 230,
      "index": 5,
      "poolId": "pool-roller",
      "layoutSelected": false,
      "editMode": true
    },
    "draggable": true,
    "selectable": true,
    "zIndex": -2,
    "measured": {
      "width": 6100,
      "height": 230
    },
    "selected": true
  },
  {
    "id": "guest-start",
    "type": "event",
    "position": {
      "x": 150,
      "y": 74
    },
    "data": {
      "label": "Start",
      "lane": "Gäst",
      "details": "Gästen kommer via SMS-länk, park-QR eller kiosk.",
      "viewTags": [
        "pilotresa"
      ],
      "type": "start",
      "layoutSelected": false,
      "editMode": true,
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 48,
      "height": 62
    }
  },
  {
    "id": "guest-entry",
    "type": "task",
    "position": {
      "x": 360,
      "y": 64
    },
    "data": {
      "label": "Öppnar SMS, park-QR eller kiosk",
      "lane": "Gäst",
      "details": "SMS går direkt mot bokning. Park-QR och kiosk startar på plats med känd park.",
      "viewTags": [
        "pilotresa"
      ],
      "layoutSelected": false,
      "editMode": true,
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 230,
      "height": 61
    }
  },
  {
    "id": "guest-show-code",
    "type": "task",
    "position": {
      "x": 3920,
      "y": 64
    },
    "data": {
      "label": "Visar QR eller bokningskod",
      "lane": "Gäst",
      "details": "Gästen visar bekräftelsen för parkpersonal vid utlämning.",
      "viewTags": [
        "pilotresa"
      ],
      "layoutSelected": false,
      "editMode": true,
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 219,
      "height": 45
    },
    "selected": false
  },
  {
    "id": "guest-end",
    "type": "event",
    "position": {
      "x": 5260,
      "y": 74
    },
    "data": {
      "label": "Parkresan startar",
      "lane": "Gäst",
      "details": "Utlämningen är klar och gästen kan gå vidare in i parken.",
      "viewTags": [
        "pilotresa"
      ],
      "type": "end",
      "layoutSelected": false,
      "editMode": true,
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 84,
      "height": 62
    }
  },
  {
    "id": "app-entry",
    "type": "task",
    "position": {
      "x": 360,
      "y": 610
    },
    "data": {
      "label": "Startsida: hitta eller köp",
      "lane": "Webbapp",
      "details": "Samma svenska webbapp används för SMS, park-QR och kiosk. Webbappen går alltid via JumpYard Cloud.",
      "viewTags": [
        "pilotresa"
      ],
      "layoutSelected": false,
      "editMode": true,
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 210,
      "height": 45
    },
    "selected": false
  },
  {
    "id": "gw-existing-booking",
    "type": "gateway",
    "position": {
      "x": 680,
      "y": 600.3717077250204
    },
    "data": {
      "label": "Befintlig bokning?",
      "lane": "Webbapp",
      "details": "Val mellan befintlig bokning och köp på plats.",
      "viewTags": [
        "pilotresa"
      ],
      "layoutSelected": false,
      "editMode": true,
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 64,
      "height": 64
    }
  },
  {
    "id": "app-lookup",
    "type": "task",
    "position": {
      "x": 960,
      "y": 540
    },
    "data": {
      "label": "Hitta befintlig bokning",
      "lane": "Webbapp",
      "details": "Sökning med bokningskod, QR eller telefon + efternamn mot lokal bokningskopia.",
      "viewTags": [
        "pilotresa"
      ],
      "layoutSelected": false,
      "editMode": true,
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 191,
      "height": 45
    },
    "selected": false
  },
  {
    "id": "app-booking",
    "type": "task",
    "position": {
      "x": 1240,
      "y": 540
    },
    "data": {
      "label": "Visa bokning och deltagare",
      "lane": "Webbapp",
      "details": "Gästen ser deltagare, tid, produkter, betalstatus och vad som redan ingår.",
      "viewTags": [
        "pilotresa"
      ],
      "layoutSelected": false,
      "editMode": true,
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 220,
      "height": 45
    },
    "selected": false
  },
  {
    "id": "app-addons",
    "type": "task",
    "position": {
      "x": 1540,
      "y": 540
    },
    "data": {
      "label": "Välj tillägg och profilval",
      "lane": "Webbapp",
      "details": "Gästen väljer bara relevanta tillägg. Kaffe, lås, strumpor och armbandsval blir Cloud-rättigheter för utlämning.",
      "viewTags": [
        "pilotresa"
      ],
      "layoutSelected": false,
      "editMode": true,
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 210,
      "height": 45
    },
    "selected": false
  },
  {
    "id": "gw-payment-context",
    "type": "gateway",
    "position": {
      "x": 1905.9581105466193,
      "y": 566.1720143408238
    },
    "data": {
      "label": "Betalningskontext?",
      "lane": "Webbapp",
      "details": "Existerande bokning delas upp i samma bokningskod, länkad bokning eller ingen ny betalning.",
      "viewTags": [
        "pilotresa"
      ],
      "layoutSelected": false,
      "editMode": true,
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 64,
      "height": 64
    }
  },
  {
    "id": "app-payment-link",
    "type": "task",
    "position": {
      "x": 2320,
      "y": 500
    },
    "data": {
      "label": "Betalningslänk på originalbokning",
      "lane": "Webbapp",
      "details": "Primärt mönster för tillägg på befintlig bokning: samma bokningskod behålls och gästen betalar på Rollers betalningssida.",
      "viewTags": [
        "pilotresa"
      ],
      "layoutSelected": false,
      "editMode": true,
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 230,
      "height": 61
    },
    "selected": false
  },
  {
    "id": "app-linked-booking",
    "type": "task",
    "position": {
      "x": 2306.381461607727,
      "y": 678.6229949195736
    },
    "data": {
      "label": "Separat länkad bokning",
      "lane": "Webbapp",
      "details": "Alternativt mönster om betalningen måste stanna helt i webbappen med inbäddad Adyen.",
      "viewTags": [
        "pilotresa"
      ],
      "layoutSelected": false,
      "editMode": true,
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 197,
      "height": 45
    }
  },
  {
    "id": "app-safety",
    "type": "task",
    "position": {
      "x": 3200.8431864316385,
      "y": 569.7631251667765
    },
    "data": {
      "label": "Säkerhet efter tillägg och betalning",
      "lane": "Webbapp",
      "details": "Gemensamt säkerhetssteg efter att tillägg, betalning och bokningsstatus är klara.",
      "viewTags": [
        "pilotresa"
      ],
      "layoutSelected": false,
      "editMode": true,
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 230,
      "height": 61
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "app-confirm",
    "type": "task",
    "position": {
      "x": 3533.4512536634334,
      "y": 617.8584956038801
    },
    "data": {
      "label": "Bekräftelse med QR och kod",
      "lane": "Webbapp",
      "details": "Slutskärm som visar QR, kort bokningskod och status för säkerhet, betalning och utlämning.",
      "viewTags": [
        "pilotresa"
      ],
      "layoutSelected": false,
      "editMode": true,
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 222,
      "height": 45
    },
    "selected": false
  },
  {
    "id": "app-start-time",
    "type": "task",
    "position": {
      "x": 908.384103834908,
      "y": 714.592269801465
    },
    "data": {
      "label": "Välj starttid",
      "lane": "Webbapp",
      "details": "Köp på plats börjar med starttid eftersom park redan är känd från QR eller kiosk.",
      "viewTags": [
        "pilotresa"
      ],
      "layoutSelected": false,
      "editMode": true,
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 125,
      "height": 45
    },
    "selected": false
  },
  {
    "id": "app-product",
    "type": "task",
    "position": {
      "x": 1240,
      "y": 709.1373194188675
    },
    "data": {
      "label": "Välj produkt, längd och antal",
      "lane": "Webbapp",
      "details": "Webbappen visar bara produkter och längder som är köpbara för vald tid.",
      "viewTags": [
        "pilotresa"
      ],
      "layoutSelected": false,
      "editMode": true,
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 230,
      "height": 61
    },
    "selected": false
  },
  {
    "id": "app-contact",
    "type": "task",
    "position": {
      "x": 1540.907073068745,
      "y": 716.3939039688266
    },
    "data": {
      "label": "Ange kontaktuppgift",
      "lane": "Webbapp",
      "details": "E-post eller telefon behövs innan kostnad, utkastbokning och betalning startar.",
      "viewTags": [
        "pilotresa"
      ],
      "layoutSelected": false,
      "editMode": true,
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 178,
      "height": 45
    },
    "selected": false
  },
  {
    "id": "app-pay-new",
    "type": "task",
    "position": {
      "x": 2200.4690940472383,
      "y": 757.2121920623468
    },
    "data": {
      "label": "Betala i webbappen",
      "lane": "Webbapp",
      "details": "Ny bokning använder utkastbokning och inbäddad Roller/Adyen-betalning.",
      "viewTags": [
        "pilotresa"
      ],
      "layoutSelected": false,
      "editMode": true,
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 163,
      "height": 45
    }
  },
  {
    "id": "store-booking",
    "type": "database",
    "position": {
      "x": 960,
      "y": 970
    },
    "data": {
      "label": "Bokningskopia",
      "lane": "Databaser / Aurora",
      "details": "Dagens operativa kopia av bokningar, biljetter, produkter, betalstatus, inlösenstatus och senaste synk.",
      "viewTags": [
        "teknik"
      ],
      "systems": [
        "Aurora PostgreSQL",
        "S3 rådata"
      ],
      "tables": [
        "bokningskopia",
        "biljettkopia",
        "betalstatus",
        "inlösenstatus"
      ],
      "keyFields": [
        "bokningsreferens",
        "park_id",
        "starttid",
        "betalstatus",
        "senast_synkad"
      ],
      "usedBy": [
        "Sökning",
        "Bokningsvy",
        "Parkpersonal"
      ],
      "collapsed": true,
      "expandLabel": "Fäll ut",
      "collapseLabel": "Fäll ihop",
      "expandHint": "Visa lagrad data",
      "layoutSelected": false,
      "editMode": true,
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 230,
      "height": 101
    },
    "selected": false
  },
  {
    "id": "cloud-availability",
    "type": "service",
    "position": {
      "x": 1389.225167094257,
      "y": 1355.3816035681357
    },
    "data": {
      "label": "Hämta tillgänglighet",
      "lane": "Driftjobb",
      "details": "Cloud hämtar tillgänglighet för vald park, datum och starttid innan produktlistan visas.",
      "viewTags": [
        "teknik"
      ],
      "variant": "job",
      "endpoints": [
        "Hämta produkttillgänglighet"
      ],
      "layoutSelected": false,
      "editMode": true,
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 220,
      "height": 98
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "store-commerce",
    "type": "database",
    "position": {
      "x": 1219.6656485714377,
      "y": 1054.180080597861
    },
    "data": {
      "label": "Pris och tillgänglighet",
      "lane": "Databaser / Aurora",
      "details": "Kontrollerad status för tillgänglighet och prisvisning innan betalning.",
      "viewTags": [
        "teknik"
      ],
      "systems": [
        "Aurora PostgreSQL",
        "Kortlivad cache"
      ],
      "tables": [
        "tillgänglighetscache",
        "prisvisningsmodell"
      ],
      "keyFields": [
        "park_id",
        "starttid",
        "produkt_id",
        "visat_pris"
      ],
      "ownedState": [
        "Vald tid",
        "Vald produkt/längd",
        "Pris som visades för gästen"
      ],
      "collapsed": true,
      "expandLabel": "Fäll ut",
      "collapseLabel": "Fäll ihop",
      "expandHint": "Visa lagrad data",
      "layoutSelected": false,
      "editMode": true,
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 230,
      "height": 101
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "cloud-costs",
    "type": "service",
    "position": {
      "x": 1633.9953613740545,
      "y": 1302.7738368138723
    },
    "data": {
      "label": "Beräkna kostnad",
      "lane": "Driftjobb",
      "details": "Cloud validerar slutlig varukorg med Rollers kostnadsberäkning innan utkast eller betalningslänk.",
      "viewTags": [
        "teknik"
      ],
      "variant": "job",
      "endpoints": [
        "Beräkna bokningskostnad"
      ],
      "layoutSelected": false,
      "editMode": true,
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 220,
      "height": 98
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "cloud-existing-payment",
    "type": "service",
    "position": {
      "x": 2792.149603318875,
      "y": 1357.3616525415266
    },
    "data": {
      "label": "Uppdatera bokning och skapa betalningslänk",
      "lane": "Driftjobb",
      "details": "Samma-bokning-mönstret: uppdatera originalbokningen och skapa betalningslänk för återstående belopp.",
      "viewTags": [
        "teknik"
      ],
      "variant": "job",
      "endpoints": [
        "Uppdatera bokning",
        "Skapa betalningslänk"
      ],
      "layoutSelected": false,
      "editMode": true,
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 220,
      "height": 113
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "cloud-draft",
    "type": "service",
    "position": {
      "x": 2046.1323536527298,
      "y": 1314.7325789884746
    },
    "data": {
      "label": "Skapa utkastbokning",
      "lane": "Driftjobb",
      "details": "Ny bokning och länkad bokning använder utkast för att reservera kapacitet under betalning.",
      "viewTags": [
        "teknik"
      ],
      "variant": "job",
      "endpoints": [
        "Skapa utkastbokning"
      ],
      "layoutSelected": false,
      "editMode": true,
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 220,
      "height": 98
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "cloud-linked-booking",
    "type": "service",
    "position": {
      "x": 2300.0662719240313,
      "y": 1402.3414001952376
    },
    "data": {
      "label": "Skapa länkad bokning",
      "lane": "Driftjobb",
      "details": "Alternativ för befintlig bokning när hela betalningen ska ligga kvar i webbappen. Själva Roller-anropet går via gemensamt utkastflöde och länkningen sparas i PaymentSession.",
      "viewTags": [
        "teknik"
      ],
      "variant": "job",
      "endpoints": [
        "Skapa utkastbokning"
      ],
      "layoutSelected": false,
      "editMode": true,
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 220,
      "height": 130
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "store-payment",
    "type": "database",
    "position": {
      "x": 2424.88397555494,
      "y": 1078.2551399161523
    },
    "data": {
      "label": "Betalningssessioner",
      "lane": "Databaser / Aurora",
      "details": "Samlar betalningslänk, inbäddad utkastbetalning, returstatus, utgångstid och avbrutna köp.",
      "viewTags": [
        "teknik"
      ],
      "systems": [
        "Aurora PostgreSQL",
        "SQS / EventBridge"
      ],
      "tables": [
        "betalningssession",
        "utkastbokningssession"
      ],
      "keyFields": [
        "betalningsmönster",
        "originalbokning",
        "länkad_bokning",
        "betalstatus"
      ],
      "ownedState": [
        "Betalningslänk",
        "Inbäddad betalningstoken",
        "Retur från betalning"
      ],
      "collapsed": true,
      "expandLabel": "Fäll ut",
      "collapseLabel": "Fäll ihop",
      "expandHint": "Visa lagrad data",
      "layoutSelected": false,
      "editMode": true,
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 230,
      "height": 101
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "cloud-publish",
    "type": "service",
    "position": {
      "x": 3062.3332302927333,
      "y": 1305.0593034380356
    },
    "data": {
      "label": "Publicera eller avbryt utkast",
      "lane": "Driftjobb",
      "details": "Vid lyckad betalning publiceras bokningen. Vid avbrott släpps utkast och kapacitet.",
      "viewTags": [
        "teknik"
      ],
      "variant": "job",
      "endpoints": [
        "Publicera utkastbokning"
      ],
      "layoutSelected": false,
      "editMode": true,
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 220,
      "height": 113
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "store-operational",
    "type": "database",
    "position": {
      "x": 3265.892375202198,
      "y": 1082.7986786847746
    },
    "data": {
      "label": "Operativ status",
      "lane": "Databaser / Aurora",
      "details": "JumpYard Cloud äger säkerhet, åtkomsttoken, webbappsession, gästidentitet och besökslogg.",
      "viewTags": [
        "teknik"
      ],
      "systems": [
        "Aurora PostgreSQL",
        "EventBridge"
      ],
      "tables": [
        "operativ_bokningsstatus",
        "gästidentitet",
        "checkin_tokens",
        "besökslogg"
      ],
      "keyFields": [
        "säkerhetsstatus",
        "token_hash",
        "sessionsstatus",
        "utlämningsstatus"
      ],
      "ownedState": [
        "Säkerhet",
        "Åtkomsttoken",
        "Webbappsession",
        "Besökslogg"
      ],
      "collapsed": true,
      "expandLabel": "Fäll ut",
      "collapseLabel": "Fäll ihop",
      "expandHint": "Visa lagrad data",
      "layoutSelected": false,
      "editMode": true,
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 230,
      "height": 101
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "store-entitlement",
    "type": "database",
    "position": {
      "x": 1837.8734128457816,
      "y": 1045.7841874803303
    },
    "data": {
      "label": "Rättigheter och profiler",
      "lane": "Databaser / Aurora",
      "details": "Interna rättigheter för tillägg och armbandsval, plus medlems- och flerbesöksindex.",
      "viewTags": [
        "teknik"
      ],
      "systems": [
        "Aurora PostgreSQL"
      ],
      "tables": [
        "tilläggsrättighet",
        "armbandsprofiler",
        "medlemsindex",
        "flerbesök_tillfällig"
      ],
      "keyFields": [
        "bokningsreferens",
        "produktkod",
        "utlämningsstatus",
        "tillfällig_status"
      ],
      "ownedState": [
        "Kaffe/lås/strumpor",
        "Profilval",
        "Medlemsindex",
        "Tillfällig flerbesöksstatus"
      ],
      "collapsed": true,
      "expandLabel": "Fäll ut",
      "collapseLabel": "Fäll ihop",
      "expandHint": "Visa lagrad data",
      "layoutSelected": false,
      "editMode": true,
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 234,
      "height": 101
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "job-seed",
    "type": "service",
    "position": {
      "x": 574.0000000000002,
      "y": 1355
    },
    "data": {
      "label": "Daglig import",
      "lane": "Driftjobb",
      "details": "Bygger dagens bokningskopia innan parken öppnar.",
      "viewTags": [
        "teknik"
      ],
      "variant": "job",
      "cadence": "Dagligen 05:00",
      "endpoints": [
        "Sök bokningar",
        "Hämta bokningsdetalj"
      ],
      "layoutSelected": false,
      "editMode": true,
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 220,
      "height": 105
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "job-webhook",
    "type": "service",
    "position": {
      "x": 834.8861026691646,
      "y": 1301.818348784868
    },
    "data": {
      "label": "Ta emot bokningswebhook under dagen",
      "lane": "Driftjobb",
      "details": "Rollers bokningswebhook tar in nya och ändrade bokningar under dagen efter den dagliga importen. När payloaden innehåller bokningsdetalj och betaldata uppdateras bokningskopian direkt.",
      "viewTags": [
        "teknik"
      ],
      "variant": "job",
      "cadence": "Vid händelse",
      "endpoints": [
        "Bokningswebhook under dagen",
        "Hämta bokningsdetalj vid reservväg"
      ],
      "layoutSelected": false,
      "editMode": true,
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 220,
      "height": 184
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "job-refresh",
    "type": "service",
    "position": {
      "x": 1122.7409438733798,
      "y": 1367.1713630136405
    },
    "data": {
      "label": "Uppdatering vid öppning eller reservväg",
      "lane": "Driftjobb",
      "details": "Hämtar färsk bokningsdetalj när bokningskopian saknar data eller ett kritiskt steg kräver verifiering.",
      "viewTags": [
        "teknik"
      ],
      "variant": "job",
      "cadence": "Vid behov",
      "endpoints": [
        "Hämta bokningsdetalj"
      ],
      "layoutSelected": false,
      "editMode": true,
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 220,
      "height": 136
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "job-payment-return",
    "type": "service",
    "position": {
      "x": 2544.088105309974,
      "y": 1359.9226984986476
    },
    "data": {
      "label": "Betalretur och utgångstid",
      "lane": "Driftjobb",
      "details": "Tar emot retur från Rollers betalningslänk och hanterar timeout/avbrott. Vid behov avbryts betalningslänk eller utkast via Roller API och status sparas i PaymentSession.",
      "viewTags": [
        "teknik"
      ],
      "variant": "job",
      "cadence": "Vid retur / utgångstid",
      "endpoints": [
        "Retur-URL från betalningslänk",
        "Avbryt betalningslänk",
        "Avbryt eller släpp utkastbokning"
      ],
      "layoutSelected": false,
      "editMode": true,
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 220,
      "height": 169
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "job-redemption",
    "type": "service",
    "position": {
      "x": 3652.5370104657927,
      "y": 1285.265303113067
    },
    "data": {
      "label": "Inlösenhändelse och avstämning",
      "lane": "Driftjobb",
      "details": "Uppdaterar lokal inlösenstatus och tillfällig flerbesöksstatus efter Roller-inlösen.",
      "viewTags": [
        "teknik"
      ],
      "variant": "job",
      "cadence": "Vid inlösen",
      "endpoints": [
        "Inlösenhändelse"
      ],
      "layoutSelected": false,
      "editMode": true,
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 220,
      "height": 136
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "roller-search",
    "type": "service",
    "position": {
      "x": 585.0125456407931,
      "y": 1810.9678008691162
    },
    "data": {
      "label": "Sök och hämta bokning",
      "lane": "Roller API",
      "details": "Sanningskälla för bokning, biljetter och betalstatus när Cloud behöver liveuppslag eller fallback.",
      "viewTags": [
        "teknik"
      ],
      "endpoints": [
        "Sök bokningar",
        "Hämta bokningsdetalj"
      ],
      "layoutSelected": false,
      "editMode": true,
      "hideDetailsOnCanvas": true,
      "apiStatus": "confirmed",
      "apiStatusLabel": "✓ Bekräftat",
      "apiPoints": [
        "Search for Bookings / GET /bookings",
        "Get Detail of a Booking / GET /bookings/{uniqueId}"
      ],
      "confirmedByRoller": [
        "Get Detail of a Booking är auktoritativ livehämtning för befintlig bokning.",
        "Search for Bookings är stödd fallback när QR eller bokningskod saknas."
      ],
      "jumpyardHandling": [
        "Driftjobb hämtar bokning vid öppning, reservväg, staff-sökning och daglig seed/reconciliation.",
        "Resultat skrivs till bokningskopia i Databaser / Aurora."
      ],
      "limitations": [],
      "sources": [
        "Roller Response 2, 2026-04-23 F15",
        "V3-sammanställning, 2026-04-24 rad Live booking lookup"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 205,
      "height": 73
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "roller-webhook",
    "type": "service",
    "position": {
      "x": 878.133099772937,
      "y": 1706.415174121901
    },
    "data": {
      "label": "Bokningswebhook under dagen",
      "lane": "Roller API",
      "details": "Skickar nya och ändrade bokningar under dagen efter daglig import när webhooken är rätt konfigurerad.",
      "viewTags": [
        "teknik"
      ],
      "endpoints": [
        "Bokningswebhook under dagen"
      ],
      "layoutSelected": false,
      "editMode": true,
      "hideDetailsOnCanvas": true,
      "apiStatus": "confirmed",
      "apiStatusLabel": "✓ Bekräftat",
      "apiPoints": [
        "Booking Webhook med include.payments: true",
        "Create webhook"
      ],
      "confirmedByRoller": [
        "Booking webhook används för bokningar och ändringar som kommer in under dagen efter daglig import.",
        "Webhooken kan innehålla samma booking-level detail som Get Detail of a Booking.",
        "Payment records kan ingå när include.payments är påslaget."
      ],
      "jumpyardHandling": [
        "Cloud uppdaterar bokningssnapshot direkt under dagen när payloaden är komplett.",
        "Get Detail används bara vid öppning, fallback, kritiska steg eller saknad payload-data."
      ],
      "limitations": [],
      "sources": [
        "Roller Response 2, 2026-04-23 F2",
        "V3-sammanställning, 2026-04-24 rad Booking webhook"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 220,
      "height": 88
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "roller-availability",
    "type": "service",
    "position": {
      "x": 1255.6598134451292,
      "y": 1773.2011469633449
    },
    "data": {
      "label": "Tillgänglighet",
      "lane": "Roller API",
      "details": "Kontrollerar säljbara tider, produkter och antal före utkastbokning.",
      "viewTags": [
        "teknik"
      ],
      "endpoints": [
        "Hämta produkttillgänglighet"
      ],
      "layoutSelected": false,
      "editMode": true,
      "hideDetailsOnCanvas": true,
      "apiStatus": "open",
      "apiStatusLabel": "⚠ Öppet",
      "apiPoints": [
        "Get Product Availability"
      ],
      "confirmedByRoller": [
        "Sky Rider kräver availability check före tillägg.",
        "Jump socks, lockers och coffee kräver ingen availability check som stockprodukter."
      ],
      "jumpyardHandling": [
        "Efter vald starttid anropar Driftjobb Roller och skriver säljbarhet till pris- och tillgänglighetsstate.",
        "Webbapp visar bara produkter/durationer som är säljbara för vald tid."
      ],
      "limitations": [
        "Core jump-produkter och durationer efter vald starttid behöver slutbekräftad rekommenderad display-pattern från Roller."
      ],
      "sources": [
        "Roller Response 2, 2026-04-23 F5",
        "V3-sammanställning, 2026-04-24 F3"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 200,
      "height": 73
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "roller-costs",
    "type": "service",
    "position": {
      "x": 1700,
      "y": 1765
    },
    "data": {
      "label": "Kostnadsberäkning",
      "lane": "Roller API",
      "details": "Slutlig varukorgskontroll före betalning, utkast eller betalningslänk.",
      "viewTags": [
        "teknik"
      ],
      "endpoints": [
        "Beräkna bokningskostnad"
      ],
      "layoutSelected": false,
      "editMode": true,
      "hideDetailsOnCanvas": true,
      "apiStatus": "limited",
      "apiStatusLabel": "⚠ Begränsat",
      "apiPoints": [
        "Booking Costs"
      ],
      "confirmedByRoller": [
        "Booking Costs är rätt endpoint för final pre-payment basket calculation.",
        "Gift cards och medlemskoder kan räknas in i ny draft-booking checkout."
      ],
      "jumpyardHandling": [
        "Driftjobb validerar slutpris innan betalning.",
        "Om Cloud-visat pris skiljer sig från Booking Costs ska flödet stoppas eller uppdateras före betalning."
      ],
      "limitations": [
        "Booking Costs är inte en full produktlist-prisendpoint.",
        "Price Rules kan ge baspris i produktlista men annat slutpris i Booking Costs."
      ],
      "sources": [
        "Roller Response 2, 2026-04-23 F7/F10",
        "V3-sammanställning, 2026-04-24 rad Price calculation"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 200,
      "height": 73
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "roller-draft",
    "type": "service",
    "position": {
      "x": 2047,
      "y": 1788
    },
    "data": {
      "label": "Ny bokning: utkast + inbäddad betalning",
      "lane": "Roller API",
      "details": "Skapar draft, reserverar kapacitet och stödjer inbäddad Roller/Adyen-betalning för ny bokning.",
      "viewTags": [
        "teknik"
      ],
      "endpoints": [
        "Skapa utkastbokning",
        "Publicera utkastbokning",
        "Avbryt eller släpp utkastbokning"
      ],
      "layoutSelected": false,
      "editMode": true,
      "hideDetailsOnCanvas": true,
      "apiStatus": "confirmed",
      "apiStatusLabel": "✓ Bekräftat",
      "apiPoints": [
        "Create Draft Booking",
        "ROLLER Payments / Adyen",
        "Publish Draft Booking / confirm",
        "Publish Draft Booking (No Payment)",
        "Cancel/release Draft Booking vid timeout eller avbrott"
      ],
      "confirmedByRoller": [
        "Create Draft Booking reserverar kapacitet och släpper den vid timeout eller explicit release.",
        "Ny bokning använder draft + embedded Roller Payments/Adyen + publish/confirm.",
        "Fullt gift card-belopp kan publiceras utan betalningssteg."
      ],
      "jumpyardHandling": [
        "Driftjobb skapar draft först efter kontaktuppgift och kostnadskontroll.",
        "Betalningssession sparas i Cloud och publicering sker efter godkänd betalning."
      ],
      "limitations": [],
      "sources": [
        "Roller Response 2, 2026-04-23 F6/F10/F11/F13",
        "V3-sammanställning, 2026-04-24 rad New booking"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 220,
      "height": 88
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "roller-payment-link",
    "type": "service",
    "position": {
      "x": 2600.6885987981245,
      "y": 1708.342834334896
    },
    "data": {
      "label": "Existerande bokning: betalningslänk",
      "lane": "Roller API",
      "details": "Uppdaterar originalbokningen och skapar hosted payment link med samma bokningskod.",
      "viewTags": [
        "teknik"
      ],
      "endpoints": [
        "Uppdatera bokning",
        "Skapa betalningslänk",
        "Avbryt betalningslänk"
      ],
      "layoutSelected": false,
      "editMode": true,
      "hideDetailsOnCanvas": true,
      "apiStatus": "limited",
      "apiStatusLabel": "⚠ Begränsat",
      "apiPoints": [
        "Update a Booking",
        "Create Payment Link / POST /bookings/{uniqueId}/payments/links",
        "Cancel Payment Link / DELETE"
      ],
      "confirmedByRoller": [
        "Update a Booking kan lägga till eller ta bort produkter och behålla originalets bokningskod.",
        "Create Payment Link är rekommenderad route för tilläggsbetalning på befintlig bokning."
      ],
      "jumpyardHandling": [
        "Driftjobb uppdaterar originalbokningen, skapar betalningslänk och sparar PaymentSession.",
        "Gästen skickas till Rollers hostade betalningssida och kommer tillbaka via bekräftad retur när den är fastställd."
      ],
      "limitations": [
        "Retur till PWA efter success/cancel ska bekräftas.",
        "Tender-stöd för gift card, medlemskod och flerbesök i payment-link-flödet är fortfarande gul risk."
      ],
      "sources": [
        "Roller Response 2, 2026-04-23 F3/F8",
        "V3-sammanställning, 2026-04-24 rad Additional payment"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 220,
      "height": 88
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "roller-redeem",
    "type": "service",
    "position": {
      "x": 3281.905095320808,
      "y": 1739.929349695315
    },
    "data": {
      "label": "Lös in biljetter",
      "lane": "Roller API",
      "details": "Ticket-level redemption för biljetter och sessionprodukter.",
      "viewTags": [
        "teknik"
      ],
      "endpoints": [
        "Lös in biljetter"
      ],
      "layoutSelected": false,
      "editMode": true,
      "hideDetailsOnCanvas": true,
      "apiStatus": "confirmed",
      "apiStatusLabel": "✓ Bekräftat",
      "apiPoints": [
        "Redeem Tickets"
      ],
      "confirmedByRoller": [
        "Redeem Tickets är rätt API-action för check-in/redemption.",
        "Ticket-type products kan lösas in individuellt."
      ],
      "jumpyardHandling": [
        "Parkpersonal initierar inlösen i Cloud; Driftjobb gör Roller-anropet.",
        "Endast faktiska biljetter/sessionprodukter löses in i Roller."
      ],
      "limitations": [
        "Kaffe, lockers, socks och andra stock/addons ska inte visas som separat Roller API-redemption i V1."
      ],
      "sources": [
        "Roller Response 2, 2026-04-23 F12/F14",
        "V3-sammanställning, 2026-04-24 rad Redemption/check-in"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 200,
      "height": 73
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "roller-redemption-webhook",
    "type": "service",
    "position": {
      "x": 3663.714585788727,
      "y": 1734.6513180522236
    },
    "data": {
      "label": "Inlösenhändelse",
      "lane": "Roller API",
      "details": "Eventström efter ticket redemption för live counter och operativ status.",
      "viewTags": [
        "teknik"
      ],
      "endpoints": [
        "Inlösenhändelse"
      ],
      "layoutSelected": false,
      "editMode": true,
      "hideDetailsOnCanvas": true,
      "apiStatus": "confirmed",
      "apiStatusLabel": "✓ Bekräftat",
      "apiPoints": [
        "Redemption Webhook"
      ],
      "confirmedByRoller": [
        "Redemption Webhook är rätt eventström för sessionbaserad inlösen.",
        "Stock och addon products är exkluderade från redemption webhook."
      ],
      "jumpyardHandling": [
        "Driftjobb tar emot event, uppdaterar lokal inlösenstatus och kan bygga live counter.",
        "Samma eventström används för interim flerbesök-state tills Roller har dedikerad endpoint."
      ],
      "limitations": [],
      "sources": [
        "Roller Response 2, 2026-04-23 F12/F14/F16",
        "V3-sammanställning, 2026-04-24 rad Multi-visit"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 200,
      "height": 73
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "staff-view",
    "type": "task",
    "position": {
      "x": 3920,
      "y": 295
    },
    "data": {
      "label": "Kontrollera utlämningsvy",
      "lane": "Parkpersonal",
      "details": "Parkpersonal ser bokning, säkerhet, betalning, tilläggsrättigheter, profilval, bandstatus och undantag.",
      "viewTags": [
        "pilotresa"
      ],
      "layoutSelected": false,
      "editMode": true,
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 219,
      "height": 45
    }
  },
  {
    "id": "staff-ticket-redeem",
    "type": "task",
    "position": {
      "x": 4240,
      "y": 295
    },
    "data": {
      "label": "Lös in biljetter i Roller",
      "lane": "Parkpersonal",
      "details": "Bara biljetter och sessionprodukter löses in i Roller.",
      "viewTags": [
        "pilotresa"
      ],
      "layoutSelected": false,
      "editMode": true,
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 192,
      "height": 45
    }
  },
  {
    "id": "staff-handoff",
    "type": "task",
    "position": {
      "x": 4493.744191919742,
      "y": 295.6078514502776
    },
    "data": {
      "label": "Lämna ut tillägg och band",
      "lane": "Parkpersonal",
      "details": "Kaffe, lås, strumpor och armband lämnas ut från Cloud-rättigheter, inte som separat Roller-inlösen.",
      "viewTags": [
        "pilotresa"
      ],
      "layoutSelected": false,
      "editMode": true,
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 213,
      "height": 45
    }
  },
  {
    "id": "staff-log",
    "type": "task",
    "position": {
      "x": 4769.371036049477,
      "y": 293.1764456491672
    },
    "data": {
      "label": "Logga utlämning klar",
      "lane": "Parkpersonal",
      "details": "Cloud loggar att rättigheter och utlämning är hanterade.",
      "viewTags": [
        "pilotresa"
      ],
      "layoutSelected": false,
      "editMode": true,
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 184,
      "height": 45
    }
  },
  {
    "id": "job-ticket-redeem",
    "type": "service",
    "position": {
      "x": 3380.947806566987,
      "y": 1326.5527831599798
    },
    "data": {
      "label": "Lös in biljetter via Cloud",
      "lane": "Driftjobb",
      "details": "Cloud tar emot parkpersonalens inlösenkommando och gör Roller-anropet. Roller är fortsatt sanningskälla för biljettinlösen.",
      "viewTags": [
        "teknik"
      ],
      "variant": "job",
      "endpoints": [
        "Lös in biljetter"
      ],
      "layoutSelected": false,
      "editMode": true,
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 220,
      "height": 129
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "roller-membership-multipass",
    "type": "service",
    "position": {
      "x": 3920.1708247332217,
      "y": 1735.9708259629963
    },
    "data": {
      "lane": "Roller API",
      "viewTags": [
        "teknik"
      ],
      "hideDetailsOnCanvas": true,
      "layoutSelected": false,
      "editMode": true,
      "label": "Medlemskap och flerbesök",
      "apiStatus": "open",
      "apiStatusLabel": "⚠ Öppet",
      "details": "Medlemskap kan identifieras via ticket records; flerbesök saknar ren live REST-read.",
      "endpoints": [
        "Hämta bokningsdetalj",
        "Inlösenhändelse",
        "Flerbesök tillfälligt"
      ],
      "apiPoints": [
        "Membership state på ticket records i GET /bookings/{uniqueId}",
        "Redemption Webhook för interim multi-visit state"
      ],
      "confirmedByRoller": [
        "Membership state ligger på ticket records inom bokningar, inte på guest record.",
        "Multi-visit remaining balance är inte exponerat som förstaklassfält i public REST idag."
      ],
      "jumpyardHandling": [
        "Cloud bygger medlemsindex från bokningsdetalj, Search for Bookings och webhooks.",
        "Cloud håller interim flerbesök-state från redemption events tills dedikerat Roller-stöd finns."
      ],
      "limitations": [
        "Flerbesök ska visas som interim/estimerad Cloud-status, inte som grön live Roller-sanning."
      ],
      "sources": [
        "Roller Response 2, 2026-04-23 F9/F16",
        "V3-sammanställning, 2026-04-24 rad Membership/Multi-visit"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 220,
      "height": 88
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "roller-not-v1",
    "type": "service",
    "position": {
      "x": 4204.3367298039475,
      "y": 1725.414762676813
    },
    "data": {
      "lane": "Roller API",
      "viewTags": [
        "teknik"
      ],
      "hideDetailsOnCanvas": true,
      "layoutSelected": false,
      "editMode": true,
      "label": "Ej V1: gift card admin / stock-redemption",
      "apiStatus": "not-v1",
      "apiStatusLabel": "Ej V1",
      "details": "API-ytor som inte ska modelleras som pilotflöde.",
      "endpoints": [
        "Gift card admin via API",
        "Stock/addon API-inlösen"
      ],
      "apiPoints": [
        "Gift card creation/admin via API",
        "API-redemption för stock/addon products"
      ],
      "confirmedByRoller": [
        "Existing gift cards kan användas som tender i ny draft-booking checkout.",
        "Gift card creation och lifecycle management via API är inte tillgängligt idag.",
        "Stock/addon redemption via public API är inte stödd som ticket redemption."
      ],
      "jumpyardHandling": [
        "Pilotflödet accepterar gift card-tender där Roller stödjer det, men bygger inte adminflöden.",
        "Kaffe, lås, strumpor och band hanteras som Cloud-rättigheter och operativ utlämning."
      ],
      "limitations": [
        "Ska inte ritas som produktionsklart Roller-redemption- eller gift-card-adminflöde i V1."
      ],
      "sources": [
        "Roller Response 2, 2026-04-23 F11/F14",
        "V3-sammanställning, 2026-04-24 röda punkter"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 220,
      "height": 88
    },
    "selected": false,
    "dragging": false
  }
] as any[];

export const pilotEdges = [
  {
    "id": "p-guest-entry-app",
    "source": "guest-entry",
    "target": "app-entry",
    "label": "",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "edgeKind": "process",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0
  },
  {
    "id": "p-payment-none",
    "source": "gw-payment-context",
    "target": "app-safety",
    "label": "Ingen ny betalning",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "edgeKind": "process",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "selected": false
  },
  {
    "id": "p-contact-pay-new",
    "source": "app-contact",
    "target": "app-pay-new",
    "label": "Kostnad och utkast klara",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "edgeKind": "process",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0
  },
  {
    "id": "p-guest-staff-view",
    "source": "guest-show-code",
    "target": "staff-view",
    "label": "",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "data": {
      "edgeKind": "process",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0
  },
  {
    "id": "p-staff-log-end",
    "source": "staff-log",
    "target": "guest-end",
    "label": "",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "top",
    "targetHandle": "bottom",
    "data": {
      "edgeKind": "process",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0
  },
  {
    "id": "d-lookup-store",
    "source": "app-lookup",
    "target": "store-booking",
    "label": "Läser bokningskopia",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#38bdf8"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#38bdf8"
    },
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "data": {
      "edgeKind": "data",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#38bdf8"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#38bdf8"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0
  },
  {
    "id": "d-store-booking-view",
    "source": "store-booking",
    "target": "app-booking",
    "label": "Webhook under dagen",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#38bdf8"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#38bdf8"
    },
    "sourceHandle": "top",
    "targetHandle": "bottom",
    "data": {
      "edgeKind": "data",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#38bdf8"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#38bdf8"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0
  },
  {
    "id": "d-start-availability",
    "source": "app-start-time",
    "target": "cloud-availability",
    "label": "Vald tid",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#38bdf8"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#38bdf8"
    },
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "data": {
      "edgeKind": "data",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#38bdf8"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#38bdf8"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0
  },
  {
    "id": "d-cloud-availability-roller",
    "source": "cloud-availability",
    "target": "roller-availability",
    "label": "Tillgänglighetsanrop",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#38bdf8"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#38bdf8"
    },
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "data": {
      "edgeKind": "data",
      "details": "Driftjobb frågar Roller efter säljbara tider/produkter för vald park och starttid.",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#38bdf8"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#38bdf8"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "selected": false
  },
  {
    "id": "d-roller-availability-store",
    "source": "roller-availability",
    "target": "cloud-availability",
    "label": "Tillgänglighetssvar",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#38bdf8"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#38bdf8"
    },
    "data": {
      "edgeKind": "data",
      "details": "Roller svarar till Driftjobb; Driftjobb skriver vidare till pris och tillgänglighetsstate.",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#38bdf8"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#38bdf8"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "sourceHandle": "top",
    "targetHandle": "bottom",
    "selected": false
  },
  {
    "id": "d-store-commerce-product",
    "source": "store-commerce",
    "target": "app-product",
    "label": "Köpbara produkter",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#38bdf8"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#38bdf8"
    },
    "sourceHandle": "top",
    "targetHandle": "bottom",
    "data": {
      "edgeKind": "data",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#38bdf8"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#38bdf8"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0
  },
  {
    "id": "d-product-store-commerce",
    "source": "app-product",
    "target": "store-commerce",
    "label": "Vald produkt",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#38bdf8"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#38bdf8"
    },
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "data": {
      "edgeKind": "data",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#38bdf8"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#38bdf8"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0
  },
  {
    "id": "d-contact-costs",
    "source": "app-contact",
    "target": "cloud-costs",
    "label": "Kontakt och varukorg",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#38bdf8"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#38bdf8"
    },
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "data": {
      "edgeKind": "data",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#38bdf8"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#38bdf8"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0
  },
  {
    "id": "d-costs-roller",
    "source": "cloud-costs",
    "target": "roller-costs",
    "label": "Kostnadsberäkning",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#38bdf8"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#38bdf8"
    },
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "data": {
      "edgeKind": "data",
      "details": "Driftjobb skickar slutlig varukorg till Roller före betalning.",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#38bdf8"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#38bdf8"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "selected": false
  },
  {
    "id": "d-roller-costs-cloud",
    "source": "roller-costs",
    "target": "cloud-costs",
    "label": "Slutpris",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#38bdf8"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#38bdf8"
    },
    "sourceHandle": "top",
    "targetHandle": "bottom",
    "data": {
      "edgeKind": "data",
      "details": "Roller returnerar slutpris och prisjusteringar till Driftjobb.",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#38bdf8"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#38bdf8"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "selected": false
  },
  {
    "id": "d-costs-draft",
    "source": "cloud-costs",
    "target": "cloud-draft",
    "label": "Godkänd varukorg",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#38bdf8"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#38bdf8"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "edgeKind": "data",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#38bdf8"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#38bdf8"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0
  },
  {
    "id": "d-draft-roller",
    "source": "cloud-draft",
    "target": "roller-draft",
    "label": "Skapa utkast",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#38bdf8"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#38bdf8"
    },
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "data": {
      "edgeKind": "data",
      "details": "Driftjobb skapar draftbokning; Roller reserverar kapacitet under draftens livstid.",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#38bdf8"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#38bdf8"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "selected": false
  },
  {
    "id": "d-store-payment-pay-new",
    "source": "store-payment",
    "target": "app-pay-new",
    "label": "Betalningstoken",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#38bdf8"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#38bdf8"
    },
    "sourceHandle": "top",
    "targetHandle": "bottom",
    "data": {
      "edgeKind": "data",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#38bdf8"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#38bdf8"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0
  },
  {
    "id": "d-pay-publish",
    "source": "app-pay-new",
    "target": "cloud-publish",
    "label": "Betalning godkänd",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#38bdf8"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#38bdf8"
    },
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "data": {
      "edgeKind": "data",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#38bdf8"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#38bdf8"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0
  },
  {
    "id": "d-linked-app-cloud",
    "source": "app-linked-booking",
    "target": "cloud-linked-booking",
    "label": "Länkad bokning",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#38bdf8"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#38bdf8"
    },
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "data": {
      "edgeKind": "data",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#38bdf8"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#38bdf8"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "selected": false
  },
  {
    "id": "d-safety-state",
    "source": "app-safety",
    "target": "store-operational",
    "label": "Säkerhet klar",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#38bdf8"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#38bdf8"
    },
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "data": {
      "edgeKind": "data",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#38bdf8"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#38bdf8"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0
  },
  {
    "id": "d-confirm-state",
    "source": "app-confirm",
    "target": "store-operational",
    "label": "QR och status",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#38bdf8"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#38bdf8"
    },
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "data": {
      "edgeKind": "data",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#38bdf8"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#38bdf8"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0
  },
  {
    "id": "d-operational-staff",
    "source": "store-operational",
    "target": "staff-view",
    "label": "Säkerhet/betalning/status",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#38bdf8"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#38bdf8"
    },
    "sourceHandle": "top",
    "targetHandle": "bottom",
    "data": {
      "edgeKind": "data",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#38bdf8"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#38bdf8"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0
  },
  {
    "id": "d-entitlement-staff",
    "source": "store-entitlement",
    "target": "staff-view",
    "label": "Rättigheter och profiler",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#38bdf8"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#38bdf8"
    },
    "sourceHandle": "top",
    "targetHandle": "bottom",
    "data": {
      "edgeKind": "data",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#38bdf8"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#38bdf8"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0
  },
  {
    "id": "d-staff-redeem-roller",
    "source": "staff-ticket-redeem",
    "target": "job-ticket-redeem",
    "label": "Lös in biljetter",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#38bdf8"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#38bdf8"
    },
    "data": {
      "edgeKind": "data",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#38bdf8"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#38bdf8"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "sourceHandle": "bottom",
    "targetHandle": "top"
  },
  {
    "id": "d-redemption-job",
    "source": "roller-redemption-webhook",
    "target": "job-redemption",
    "label": "Inlösenhändelse",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#38bdf8"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#38bdf8"
    },
    "sourceHandle": "top",
    "targetHandle": "bottom",
    "data": {
      "edgeKind": "data",
      "details": "Roller skickar redemption webhook till Driftjobb efter ticket redemption.",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#38bdf8"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#38bdf8"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "selected": false
  },
  {
    "id": "d-staff-handoff-entitlement",
    "source": "staff-handoff",
    "target": "store-entitlement",
    "label": "Utlämning klar",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#38bdf8"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#38bdf8"
    },
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "data": {
      "edgeKind": "data",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#38bdf8"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#38bdf8"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0
  },
  {
    "id": "d-staff-log-operational",
    "source": "staff-log",
    "target": "store-operational",
    "label": "Utlämning klar",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#38bdf8"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#38bdf8"
    },
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "data": {
      "edgeKind": "data",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#38bdf8"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#38bdf8"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0
  },
  {
    "id": "d-seed-roller",
    "source": "job-seed",
    "target": "roller-search",
    "label": "Daglig import",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#38bdf8"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#38bdf8"
    },
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "data": {
      "edgeKind": "data",
      "details": "Driftjobb hämtar bokningar, biljetter, betalningar och kunddata till lokal snapshot.",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#38bdf8"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#38bdf8"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "selected": false
  },
  {
    "id": "d-roller-webhook-job",
    "source": "roller-webhook",
    "target": "job-webhook",
    "label": "Bokningsdata",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#38bdf8"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#38bdf8"
    },
    "sourceHandle": "top",
    "targetHandle": "bottom",
    "data": {
      "edgeKind": "data",
      "details": "Roller skickar nya och ändrade bokningar under dagen efter daglig import. Driftjobb uppdaterar snapshot direkt när payloaden är komplett.",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#38bdf8"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#38bdf8"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "selected": false
  },
  {
    "id": "a-truth-store-booking",
    "source": "note-truth",
    "target": "store-booking",
    "label": "Roller-data projiceras",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#94a3b8"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#94a3b8",
      "strokeDasharray": "7 5"
    },
    "data": {
      "edgeKind": "arch",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#94a3b8",
        "strokeDasharray": "7 5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#94a3b8"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "selected": false
  },
  {
    "id": "a-truth-operational",
    "source": "note-truth",
    "target": "store-operational",
    "label": "Cloud äger operativ status",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#94a3b8"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#94a3b8",
      "strokeDasharray": "7 5"
    },
    "data": {
      "edgeKind": "arch",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#94a3b8",
        "strokeDasharray": "7 5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#94a3b8"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0
  },
  {
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#ff8e7d"
    },
    "source": "gw-existing-booking",
    "target": "app-lookup",
    "label": "Befintlig bokning",
    "data": {
      "edgeKind": "process",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "id": "xy-edge__gw-existing-bookingtop-app-lookup",
    "sourceHandle": "top"
  },
  {
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#ff8e7d"
    },
    "source": "app-entry",
    "target": "gw-existing-booking",
    "label": "",
    "data": {
      "edgeKind": "process",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "id": "xy-edge__app-entryright-gw-existing-booking",
    "sourceHandle": "right"
  },
  {
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#ff8e7d"
    },
    "source": "gw-existing-booking",
    "target": "app-start-time",
    "label": "Köp på plats",
    "data": {
      "edgeKind": "process",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "sourceHandle": "bottom",
    "targetHandle": "left",
    "id": "xy-edge__gw-existing-bookingbottom-app-start-timeleft"
  },
  {
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#ff8e7d"
    },
    "source": "guest-start",
    "target": "guest-entry",
    "label": "",
    "data": {
      "edgeKind": "process",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "id": "xy-edge__guest-startright-guest-entry",
    "sourceHandle": "right"
  },
  {
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#ff8e7d"
    },
    "source": "gw-payment-context",
    "target": "app-payment-link",
    "label": "Samma bokningskod",
    "data": {
      "edgeKind": "process",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "id": "xy-edge__gw-payment-contexttop-app-payment-link",
    "sourceHandle": "top"
  },
  {
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#ff8e7d"
    },
    "source": "app-addons",
    "target": "gw-payment-context",
    "label": "",
    "data": {
      "edgeKind": "process",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "sourceHandle": "right",
    "targetHandle": "left",
    "id": "xy-edge__app-addonsright-gw-payment-contextleft"
  },
  {
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#8b5cf6"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#8b5cf6",
      "strokeDasharray": "7 5"
    },
    "source": "gw-payment-context",
    "target": "app-linked-booking",
    "label": "Webbapp hela vägen",
    "data": {
      "edgeKind": "fallback",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#8b5cf6",
        "strokeDasharray": "7 5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#8b5cf6"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "sourceHandle": "bottom",
    "id": "xy-edge__gw-payment-contextbottom-app-linked-booking"
  },
  {
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#ff8e7d"
    },
    "source": "app-payment-link",
    "target": "app-safety",
    "label": "Betalning klar",
    "sourceHandle": "right",
    "targetHandle": "top-left",
    "data": {
      "edgeKind": "process",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "id": "xy-edge__app-payment-linkright-app-safetytop-left"
  },
  {
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#ff8e7d"
    },
    "source": "app-pay-new",
    "target": "app-safety",
    "label": "Betalning och publicering klar",
    "sourceHandle": "right",
    "targetHandle": "bottom-left",
    "data": {
      "edgeKind": "process",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "id": "xy-edge__app-pay-newright-app-safetybottom-left"
  },
  {
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#8b5cf6"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#8b5cf6",
      "strokeDasharray": "7 5"
    },
    "source": "app-linked-booking",
    "target": "app-safety",
    "label": "Länkad bokning klar",
    "sourceHandle": "right",
    "targetHandle": "left-bottom",
    "data": {
      "edgeKind": "fallback",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#8b5cf6",
        "strokeDasharray": "7 5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#8b5cf6"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "id": "xy-edge__app-linked-bookingright-app-safetyleft-bottom"
  },
  {
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#ff8e7d"
    },
    "source": "app-safety",
    "target": "app-confirm",
    "label": "",
    "data": {
      "edgeKind": "process",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "sourceHandle": "right",
    "targetHandle": "left",
    "id": "xy-edge__app-safetyright-app-confirmleft"
  },
  {
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#ff8e7d"
    },
    "source": "staff-view",
    "target": "staff-ticket-redeem",
    "label": "",
    "data": {
      "edgeKind": "process",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "sourceHandle": "right",
    "targetHandle": "left",
    "id": "xy-edge__staff-viewright-staff-ticket-redeemleft"
  },
  {
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#ff8e7d"
    },
    "source": "staff-ticket-redeem",
    "target": "staff-handoff",
    "label": "",
    "data": {
      "edgeKind": "process",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "sourceHandle": "right",
    "targetHandle": "left",
    "id": "xy-edge__staff-ticket-redeemright-staff-handoffleft"
  },
  {
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#ff8e7d"
    },
    "source": "staff-handoff",
    "target": "staff-log",
    "label": "",
    "data": {
      "edgeKind": "process",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "sourceHandle": "right",
    "id": "xy-edge__staff-handoffright-staff-logleft",
    "targetHandle": "left"
  },
  {
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#ff8e7d"
    },
    "source": "app-start-time",
    "target": "app-product",
    "label": "Tillgänglighet visas",
    "data": {
      "edgeKind": "process",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "sourceHandle": "right",
    "id": "xy-edge__app-start-timeright-app-productleft",
    "targetHandle": "left"
  },
  {
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#ff8e7d"
    },
    "source": "app-product",
    "target": "app-contact",
    "label": "",
    "data": {
      "edgeKind": "process",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "sourceHandle": "right",
    "targetHandle": "left",
    "id": "xy-edge__app-productright-app-contactleft"
  },
  {
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#ff8e7d"
    },
    "source": "app-booking",
    "target": "app-addons",
    "label": "",
    "data": {
      "edgeKind": "process",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "sourceHandle": "right",
    "id": "xy-edge__app-bookingright-app-addonsleft",
    "targetHandle": "left"
  },
  {
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#ff8e7d"
    },
    "source": "app-lookup",
    "target": "app-booking",
    "label": "",
    "data": {
      "edgeKind": "process",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "sourceHandle": "right",
    "targetHandle": "left",
    "id": "xy-edge__app-lookupright-app-bookingleft"
  },
  {
    "id": "d-availability-store",
    "source": "cloud-availability",
    "target": "store-commerce",
    "label": "Tillgänglighet sparas",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#38bdf8"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#38bdf8"
    },
    "sourceHandle": "top",
    "targetHandle": "bottom",
    "data": {
      "edgeKind": "data",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#38bdf8"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#38bdf8"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "selected": false
  },
  {
    "id": "d-roller-draft-cloud",
    "source": "roller-draft",
    "target": "cloud-draft",
    "label": "Utkast skapat",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#38bdf8"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#38bdf8"
    },
    "sourceHandle": "top",
    "targetHandle": "bottom",
    "data": {
      "edgeKind": "data",
      "details": "Roller returnerar draftstatus och betalningsinformation till Driftjobb.",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#38bdf8"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#38bdf8"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "selected": false
  },
  {
    "id": "d-payment-store-app",
    "source": "store-payment",
    "target": "app-payment-link",
    "label": "Betalningslänk",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#38bdf8"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#38bdf8"
    },
    "sourceHandle": "top",
    "targetHandle": "bottom",
    "data": {
      "edgeKind": "data",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#38bdf8"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#38bdf8"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0
  },
  {
    "id": "d-job-ticket-redeem-roller",
    "source": "job-ticket-redeem",
    "target": "roller-redeem",
    "label": "Roller-inlösen",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#38bdf8"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#38bdf8"
    },
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "data": {
      "edgeKind": "data",
      "details": "Driftjobb löser in faktiska biljetter/sessionprodukter via Roller.",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#38bdf8"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#38bdf8"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "selected": false
  },
  {
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#38bdf8"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#38bdf8"
    },
    "source": "job-payment-return",
    "target": "store-payment",
    "label": "Betalningsstatus",
    "sourceHandle": "top",
    "targetHandle": "bottom-left",
    "data": {
      "edgeKind": "data",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#38bdf8"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#38bdf8"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "id": "xy-edge__job-payment-returntop-store-paymentbottom-left"
  },
  {
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#38bdf8"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#38bdf8"
    },
    "source": "cloud-costs",
    "target": "store-commerce",
    "label": "Slutpris sparas",
    "sourceHandle": "top",
    "targetHandle": "right-bottom",
    "data": {
      "edgeKind": "data",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#38bdf8"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#38bdf8"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "selected": false,
    "id": "xy-edge__cloud-coststop-store-commerceright-bottom"
  },
  {
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#38bdf8"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#38bdf8"
    },
    "source": "job-seed",
    "target": "store-booking",
    "label": "Bokningskopia",
    "sourceHandle": "top",
    "targetHandle": "left-top",
    "data": {
      "edgeKind": "data",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#38bdf8"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#38bdf8"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "id": "xy-edge__job-seedtop-store-bookingleft-top"
  },
  {
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#38bdf8"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#38bdf8"
    },
    "source": "job-refresh",
    "target": "roller-search",
    "label": "Reservväg: bokningsdetalj",
    "sourceHandle": "bottom",
    "targetHandle": "right",
    "data": {
      "edgeKind": "data",
      "details": "Driftjobb hämtar auktoritativ booking detail vid öppning, fallback eller saknad webhookdata.",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#38bdf8"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#38bdf8"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "selected": false,
    "id": "xy-edge__job-refreshbottom-roller-searchright"
  },
  {
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#38bdf8"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#38bdf8"
    },
    "source": "job-refresh",
    "target": "store-booking",
    "label": "Färsk bokningsdetalj",
    "sourceHandle": "top",
    "targetHandle": "bottom",
    "data": {
      "edgeKind": "data",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#38bdf8"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#38bdf8"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "selected": false,
    "id": "xy-edge__job-refreshtop-store-bookingbottom"
  },
  {
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#38bdf8"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#38bdf8"
    },
    "source": "cloud-publish",
    "target": "store-payment",
    "label": "Betalstatus",
    "data": {
      "edgeKind": "data",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#38bdf8"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#38bdf8"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "sourceHandle": "top",
    "targetHandle": "right",
    "id": "xy-edge__cloud-publishtop-store-paymentright"
  },
  {
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#38bdf8"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#38bdf8"
    },
    "source": "roller-draft",
    "target": "cloud-publish",
    "label": "Publiceringsstatus",
    "sourceHandle": "right-bottom",
    "targetHandle": "bottom-left",
    "data": {
      "edgeKind": "data",
      "details": "Roller returnerar publicerad/avbruten draftstatus till Driftjobb.",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#38bdf8"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#38bdf8"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "selected": false,
    "id": "xy-edge__roller-draftright-bottom-cloud-publishbottom-left"
  },
  {
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#38bdf8"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#38bdf8"
    },
    "source": "cloud-publish",
    "target": "store-booking",
    "label": "Bokning bekräftad",
    "sourceHandle": "top-right",
    "targetHandle": "top",
    "data": {
      "edgeKind": "data",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#38bdf8"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#38bdf8"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "selected": false,
    "id": "xy-edge__cloud-publishtop-right-store-bookingtop"
  },
  {
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#38bdf8"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#38bdf8"
    },
    "source": "app-addons",
    "target": "store-entitlement",
    "label": "Tilläggsrättigheter",
    "sourceHandle": "bottom",
    "targetHandle": "left",
    "data": {
      "edgeKind": "data",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#38bdf8"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#38bdf8"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "id": "xy-edge__app-addonsbottom-store-entitlementleft"
  },
  {
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#38bdf8"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#38bdf8"
    },
    "source": "app-payment-link",
    "target": "job-payment-return",
    "label": "Retur / utgångstid",
    "sourceHandle": "bottom",
    "targetHandle": "top-left",
    "data": {
      "edgeKind": "data",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#38bdf8"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#38bdf8"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "id": "xy-edge__app-payment-linkbottom-job-payment-returntop-left"
  },
  {
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#ff8e7d"
    },
    "source": "app-confirm",
    "target": "guest-show-code",
    "label": "",
    "sourceHandle": "top",
    "targetHandle": "left-top",
    "data": {
      "edgeKind": "process",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "id": "xy-edge__app-confirmtop-guest-show-codeleft-top"
  },
  {
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#38bdf8"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#38bdf8"
    },
    "source": "cloud-linked-booking",
    "target": "cloud-draft",
    "label": "Använder utkastflöde",
    "sourceHandle": "left",
    "targetHandle": "bottom-right",
    "data": {
      "edgeKind": "data",
      "details": "Skapa länkad bokning är JumpYard-orchestration. Själva Roller-anropet går via gemensamt utkastflöde.",
      "operation": "Skapa separat draft via Create Draft Booking",
      "fields": [
        "originalBookingId",
        "linkedBookingDraftId",
        "customerRef",
        "selectedAddOns"
      ],
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#38bdf8"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#38bdf8"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "selected": false,
    "id": "xy-edge__cloud-linked-bookingleft-cloud-draftbottom-right"
  },
  {
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#38bdf8"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#38bdf8"
    },
    "source": "cloud-draft",
    "target": "store-payment",
    "label": "Utkastsession sparas",
    "sourceHandle": "top-right",
    "targetHandle": "left-top",
    "data": {
      "edgeKind": "data",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#38bdf8"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#38bdf8"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "id": "xy-edge__cloud-drafttop-right-store-paymentleft-top"
  },
  {
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#38bdf8"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#38bdf8"
    },
    "source": "cloud-linked-booking",
    "target": "store-payment",
    "label": "Länkning sparas",
    "sourceHandle": "top-left",
    "targetHandle": "left-bottom",
    "data": {
      "edgeKind": "data",
      "details": "Cloud sparar sambandet mellan originalbokning, länkad draft/bokning, betalstatus och expiry.",
      "operation": "Spara PaymentSession för länkad bokning",
      "fields": [
        "linkedBookingId",
        "paymentStatus",
        "expiry",
        "publishStatus"
      ],
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#38bdf8"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#38bdf8"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "selected": false,
    "id": "xy-edge__cloud-linked-bookingtop-left-store-paymentleft-bottom"
  },
  {
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#38bdf8"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#38bdf8"
    },
    "source": "app-addons",
    "target": "cloud-existing-payment",
    "label": "Tillägg på originalbokning",
    "sourceHandle": "bottom-right",
    "targetHandle": "top-right",
    "data": {
      "edgeKind": "data",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#38bdf8"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#38bdf8"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "id": "xy-edge__app-addonsbottom-right-cloud-existing-paymenttop-right"
  },
  {
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#38bdf8"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#38bdf8"
    },
    "source": "cloud-publish",
    "target": "roller-draft",
    "label": "Publicera utkast",
    "sourceHandle": "bottom-right",
    "targetHandle": "bottom",
    "data": {
      "edgeKind": "data",
      "details": "Driftjobb publicerar eller avbryter draft efter betalningsstatus.",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#38bdf8"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#38bdf8"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "selected": false,
    "id": "xy-edge__cloud-publishbottom-right-roller-draftbottom"
  },
  {
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#38bdf8"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#38bdf8"
    },
    "source": "job-payment-return",
    "target": "roller-draft",
    "label": "Släpp utkast",
    "sourceHandle": "bottom-left",
    "targetHandle": "top-right",
    "data": {
      "edgeKind": "data",
      "details": "Vid utgångstid eller avbrott släpper Driftjobb draften så reserverad kapacitet inte ligger kvar.",
      "operation": "Cancel/expire draft booking",
      "fields": [
        "draftBookingId",
        "expiry",
        "paymentStatus"
      ],
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#38bdf8"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#38bdf8"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "id": "xy-edge__job-payment-returnbottom-left-roller-drafttop-right"
  },
  {
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#38bdf8"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#38bdf8"
    },
    "source": "roller-payment-link",
    "target": "cloud-existing-payment",
    "label": "Betalningslänk skapad",
    "data": {
      "edgeKind": "data",
      "details": "Roller returnerar betalningslänk och status till Driftjobb.",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#38bdf8"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#38bdf8"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "sourceHandle": "right",
    "targetHandle": "right-bottom",
    "selected": false,
    "id": "xy-edge__roller-payment-linkright-cloud-existing-paymentright-bottom"
  },
  {
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#38bdf8"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#38bdf8"
    },
    "source": "job-payment-return",
    "target": "roller-payment-link",
    "label": "Avbryt betalningslänk",
    "sourceHandle": "bottom-right",
    "targetHandle": "top",
    "data": {
      "edgeKind": "data",
      "details": "Vid timeout eller avbruten hosted payment avbryter Driftjobb betalningslänken i Roller när en aktiv länk finns.",
      "operation": "Cancel Payment Link",
      "fields": [
        "paymentLinkId",
        "originalBookingId",
        "expiry",
        "returnStatus"
      ],
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#38bdf8"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#38bdf8"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "selected": false,
    "id": "xy-edge__job-payment-returnbottom-right-roller-payment-linktop"
  },
  {
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#38bdf8"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#38bdf8"
    },
    "source": "cloud-existing-payment",
    "target": "roller-payment-link",
    "label": "Uppdatera + betalningslänk",
    "sourceHandle": "bottom",
    "targetHandle": "right-top",
    "data": {
      "edgeKind": "data",
      "details": "Driftjobb uppdaterar originalbokningen och skapar hosted payment link.",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#38bdf8"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#38bdf8"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "selected": false,
    "id": "xy-edge__cloud-existing-paymentbottom-roller-payment-linkright-top"
  },
  {
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#38bdf8"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#38bdf8"
    },
    "source": "job-webhook",
    "target": "store-booking",
    "label": "Direkt uppdatering när data räcker",
    "sourceHandle": "top",
    "targetHandle": "bottom-left",
    "data": {
      "edgeKind": "data",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#38bdf8"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#38bdf8"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "selected": false,
    "id": "xy-edge__job-webhooktop-store-bookingbottom-left"
  },
  {
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#38bdf8"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#38bdf8"
    },
    "source": "job-redemption",
    "target": "store-booking",
    "label": "Inlösenstatus",
    "sourceHandle": "top",
    "targetHandle": "right-top",
    "data": {
      "edgeKind": "data",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#38bdf8"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#38bdf8"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "selected": false,
    "id": "xy-edge__job-redemptiontop-store-bookingright-top"
  },
  {
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#38bdf8"
    },
    "style": {
      "strokeWidth": 2.5,
      "stroke": "#38bdf8"
    },
    "source": "cloud-existing-payment",
    "target": "store-payment",
    "label": "Betalningslänk sparas",
    "sourceHandle": "top",
    "targetHandle": "right-bottom",
    "data": {
      "edgeKind": "data",
      "details": "",
      "baseStyle": {
        "strokeWidth": 2.5,
        "stroke": "#38bdf8"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#38bdf8"
      },
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "id": "xy-edge__cloud-existing-paymenttop-store-paymentright-bottom"
  }
] as any[];
