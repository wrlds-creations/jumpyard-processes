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
      "widthPx": 6400,
      "heightPx": 230
    },
    "draggable": true,
    "selectable": true,
    "zIndex": -3,
    "measured": {
      "width": 6400,
      "height": 230
    }
  },
  {
    "id": "pool-staff",
    "type": "pool",
    "position": {
      "x": 56,
      "y": 270
    },
    "data": {
      "label": "Staff / parkpersonal",
      "color": "#fb7185",
      "widthPx": 6400,
      "heightPx": 180
    },
    "draggable": true,
    "selectable": true,
    "zIndex": -3,
    "measured": {
      "width": 6400,
      "height": 180
    }
  },
  {
    "id": "pool-webapp",
    "type": "pool",
    "position": {
      "x": 56,
      "y": 490
    },
    "data": {
      "label": "WebApp",
      "color": "#38bdf8",
      "widthPx": 6400,
      "heightPx": 300
    },
    "draggable": true,
    "selectable": true,
    "zIndex": -3,
    "measured": {
      "width": 6400,
      "height": 300
    }
  },
  {
    "id": "pool-cloud",
    "type": "pool",
    "position": {
      "x": 56,
      "y": 850
    },
    "data": {
      "label": "JumpYard Cloud",
      "color": "#22c55e",
      "widthPx": 6400,
      "heightPx": 410
    },
    "draggable": true,
    "selectable": true,
    "zIndex": -3,
    "measured": {
      "width": 6400,
      "height": 410
    }
  },
  {
    "id": "pool-roller",
    "type": "pool",
    "position": {
      "x": 56,
      "y": 1310
    },
    "data": {
      "label": "Roller",
      "color": "#8b5cf6",
      "widthPx": 6400,
      "heightPx": 170
    },
    "draggable": true,
    "selectable": true,
    "zIndex": -3,
    "measured": {
      "width": 6400,
      "height": 170
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
      "width": "6400px",
      "heightPx": 230,
      "index": 0,
      "poolId": "pool-guest"
    },
    "draggable": true,
    "selectable": true,
    "zIndex": -2,
    "measured": {
      "width": 6400,
      "height": 230
    },
    "selected": true
  },
  {
    "id": "lane-staff",
    "type": "lane",
    "position": {
      "x": 56,
      "y": 270
    },
    "data": {
      "label": "Staff / parkpersonal",
      "width": "6400px",
      "heightPx": 180,
      "index": 1,
      "poolId": "pool-staff"
    },
    "draggable": true,
    "selectable": true,
    "zIndex": -2,
    "measured": {
      "width": 6400,
      "height": 180
    },
    "selected": true
  },
  {
    "id": "lane-webapp",
    "type": "lane",
    "position": {
      "x": 56,
      "y": 490
    },
    "data": {
      "label": "WebApp",
      "width": "6400px",
      "heightPx": 300,
      "index": 2,
      "poolId": "pool-webapp"
    },
    "draggable": true,
    "selectable": true,
    "zIndex": -2,
    "measured": {
      "width": 6400,
      "height": 300
    },
    "selected": true
  },
  {
    "id": "lane-cloud-ops",
    "type": "lane",
    "position": {
      "x": 56,
      "y": 1130
    },
    "data": {
      "label": "Ops jobs",
      "width": "6400px",
      "heightPx": 130,
      "index": 4,
      "poolId": "pool-cloud"
    },
    "draggable": true,
    "selectable": true,
    "zIndex": -2,
    "measured": {
      "width": 6400,
      "height": 130
    },
    "selected": true
  },
  {
    "id": "lane-cloud-aws",
    "type": "lane",
    "position": {
      "x": 56,
      "y": 850
    },
    "data": {
      "label": "AWS + Aurora",
      "width": "6400px",
      "heightPx": 280,
      "index": 3,
      "poolId": "pool-cloud"
    },
    "draggable": true,
    "selectable": true,
    "zIndex": -2,
    "measured": {
      "width": 6400,
      "height": 280
    },
    "selected": true
  },
  {
    "id": "lane-roller",
    "type": "lane",
    "position": {
      "x": 56,
      "y": 1310
    },
    "data": {
      "label": "Roller API",
      "width": "6400px",
      "heightPx": 170,
      "index": 5,
      "poolId": "pool-roller"
    },
    "draggable": true,
    "selectable": true,
    "zIndex": -2,
    "measured": {
      "width": 6400,
      "height": 170
    },
    "selected": true
  },
  {
    "id": "guest-start",
    "type": "event",
    "position": {
      "x": 140,
      "y": 98.51058240127703
    },
    "data": {
      "label": "Besök planeras",
      "type": "start",
      "lane": "Gäst",
      "details": "Resan börjar antingen hemma på befintlig webbplats eller på plats i parken.",
      "viewTags": ["journey"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 48,
      "height": 48
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "guest-booked",
    "type": "gateway",
    "position": {
      "x": 267.1537326206614,
      "y": 90.8462673793386
    },
    "data": {
      "label": "Bokat hemma redan?",
      "lane": "Gäst",
      "details": "Piloten ska tydligt skilja mellan bokning hemma as-is och on-site-ingång i parken.",
      "viewTags": ["journey"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 64,
      "height": 64
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "guest-home-book",
    "type": "task",
    "position": {
      "x": 430,
      "y": 34
    },
    "data": {
      "label": "Boka hemma as-is på webbplatsen",
      "lane": "Gäst",
      "details": "Bokningen sker fortsatt på befintlig webbplats hemma. Efteråt kan gästen antingen använda SMS-länken eller starta på plats via QR eller kiosk.",
      "viewTags": ["journey"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 230,
      "height": 59
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "guest-sms",
    "type": "task",
    "position": {
      "x": 778.6854798244925,
      "y": 30.496472532907653
    },
    "data": {
      "label": "Få SMS 30 minuter före starttid",
      "lane": "Gäst",
      "details": "Gästen får ett sms cirka 30 minuter före starttid. Länken öppnar snabbt check-in, men gästen kan fortfarande välja parkens QR eller kiosk i stället.",
      "viewTags": ["journey"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 230,
      "height": 59
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "guest-onsite-entry",
    "type": "task",
    "position": {
      "x": 781.4500398564182,
      "y": 160.18900729158486
    },
    "data": {
      "label": "Skanna park-QR på ställning eller välj kiosk",
      "lane": "Gäst",
      "details": "Samma on-site-ingång används både för gäster utan bokning och för gäster som redan bokat hemma men väljer QR eller kiosk i stället för SMS-länken.",
      "viewTags": ["journey"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 230,
      "height": 59
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "guest-onsite-choice",
    "type": "task",
    "position": {
      "x": 1079.3371609094631,
      "y": 167.1960622257695
    },
    "data": {
      "label": "Hitta bokning eller köp på plats",
      "lane": "Gäst",
      "details": "På plats kan gästen hitta en befintlig bokning eller köpa en närliggande tid direkt i parkflödet.",
      "viewTags": ["journey"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 230,
      "height": 59
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "guest-entry-choice",
    "type": "gateway",
    "position": {
      "x": 1155.9803111288475,
      "y": 31.007054934184687
    },
    "data": {
      "label": "Öppna check-in hur?",
      "lane": "Gäst",
      "details": "Gästen kan ha bokat hemma och ändå välja att använda parkens QR eller kiosk i stället för SMS-länken.",
      "viewTags": ["journey"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 64,
      "height": 64
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "guest-open",
    "type": "task",
    "position": {
      "x": 1282.1128789469549,
      "y": 98.01410986836936
    },
    "data": {
      "label": "Gå in i check-in-flödet",
      "lane": "Gäst",
      "details": "Flödet kan starta via personlig SMS-länk, via QR eller kiosk med befintlig bokning, eller efter köp på plats.",
      "viewTags": ["journey"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 182,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "guest-review",
    "type": "task",
    "position": {
      "x": 1535.1058240127702,
      "y": 99.18195235740015
    },
    "data": {
      "label": "Granska bokning",
      "lane": "Gäst",
      "details": "När bokning finns ser gästen deltagare och vad som redan ingår.",
      "viewTags": ["journey"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 149,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "guest-safety",
    "type": "task",
    "position": {
      "x": 1772.9168167211853,
      "y": 99.18195235740016
    },
    "data": {
      "label": "Slutför safety",
      "lane": "Gäst",
      "details": "Säkerhetsflödet i piloten: (1) kort safety-video, (2) generella parkregler, (3) bokningsnivå-intygande, (4) attraktionsspecifik bekräftelse där relevant. Slutförs innan tillägg och handoff.",
      "why": "JumpYard Cloud äger safety-steget. Alla gäster genomför samma sekvens oavsett kanal.",
      "viewTags": ["journey"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 136,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "guest-addons",
    "type": "task",
    "position": {
      "x": 2010.2172270283236,
      "y": 89.85332231352328
    },
    "data": {
      "label": "Välj tillägg och connected",
      "lane": "Gäst",
      "details": "Samma huvudsteg oavsett om gästen kommer via mobil eller kiosk.",
      "viewTags": ["journey"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 220,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "guest-pay",
    "type": "gateway",
    "position": {
      "x": 2384.7842489030777,
      "y": 87.85332231352328
    },
    "data": {
      "label": "Betalning krävs?",
      "lane": "Gäst",
      "details": "Efter tillägg och connected avgörs om bokningen behöver betalas eller kan gå direkt vidare till bekräftelsen.",
      "viewTags": ["journey"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 64,
      "height": 64
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "guest-payment-step",
    "type": "task",
    "position": {
      "x": 2554.9944209972173,
      "y": 15.825102576784538
    },
    "data": {
      "label": "Betala",
      "lane": "Gäst",
      "details": "Gästen betalar bara om totalen inte redan är 0 efter tillägg, connected eller tidigare betalning.",
      "viewTags": ["journey"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 79,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "guest-confirm",
    "type": "task",
    "position": {
      "x": 2698.7560291663394,
      "y": 95.69253475867718
    },
    "data": {
      "label": "Se bekräftelse + QR + kod",
      "lane": "Gäst",
      "details": "Bekräftelsen används sedan vid handoff hos staff.",
      "why": "Gästens perspektiv: check-in-flödet sammanfattas. I mobilflödet är detta samma skärm som guest-present.",
      "viewTags": ["journey"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 198,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "guest-output-choice",
    "type": "gateway",
    "position": {
      "x": 3242.4429849222333,
      "y": 85.51763733546171
    },
    "data": {
      "label": "Skriv ut eller visa i mobilen?",
      "lane": "Gäst",
      "details": "I slutet skiljer sig bara utlämningen mellan kiosk och mobil: kiosk kan skriva ut ett kvitto eller confirmation, medan mobilen visar QR eller bokningskod direkt.",
      "viewTags": ["journey"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 64,
      "height": 64
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "guest-print",
    "type": "task",
    "position": {
      "x": 3519.912713649804,
      "y": 20.49647253290766
    },
    "data": {
      "label": "Skriv ut kvitto / confirmation",
      "lane": "Gäst",
      "channel": "kiosk-only",
      "details": "Det här görs bara vid kiosk på plats när ett utskrivet kvitto eller confirmation behövs inför utlämningen hos staff.",
      "viewTags": ["journey"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 230,
      "height": 59
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "guest-present",
    "type": "task",
    "position": {
      "x": 3770.4288750538644,
      "y": 105.02116480255405
    },
    "data": {
      "label": "Visa bekräftelse hos staff",
      "lane": "Gäst",
      "details": "I mobilflödet: samma bekräftelseskärm som guest-confirm, nu i handoff-kontext hos staff. I kioskflödet: gästen har redan skrivit ut och visar kvitto/confirmation fysiskt.",
      "why": "Överlämningspunkten hos staff. Mobil = samma data som guest-confirm. Kiosk = utskrivet kvitto.",
      "givesGuest": [
        "Tydlig QR-kod",
        "Kort bokningskod som reservväg",
        "Utskriven confirmation eller kvitto vid kiosk"
      ],
      "staffVerifies": [
        "QR-kod",
        "Bokningskod",
        "Utskriven confirmation eller kvitto"
      ],
      "viewTags": ["journey"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 230,
      "height": 59
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "guest-end",
    "type": "event",
    "position": {
      "x": 4314.445000178185,
      "y": 85
    },
    "data": {
      "label": "Redo för park",
      "type": "end",
      "lane": "Gäst",
      "details": "Parkresan fortsätter efter att staff har slutfört handoff.",
      "viewTags": ["journey"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 48,
      "height": 48
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "app-start",
    "type": "task",
    "position": {
      "x": 180,
      "y": 592
    },
    "data": {
      "label": "VY: Start / länk",
      "lane": "WebApp",
      "details": "Gemensam ingång för SMS-länk, park-QR och kiosk på plats.",
      "reads": [
        "checkin_token",
        "channel_hint",
        "venue context"
      ],
      "shownWhen": [
        "SMS-länk öppnas",
        "Parkens QR-ställning skannas",
        "Kiosk startas på plats"
      ],
      "givesGuest": [
        "Tydlig startpunkt för samma check-in- eller köpflöde"
      ],
      "viewTags": ["journey"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 136,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "gw-channel",
    "type": "gateway",
    "position": {
      "x": 390,
      "y": 582
    },
    "data": {
      "label": "Hur öppnas flödet?",
      "lane": "WebApp",
      "details": "SMS-länk är snabbspåret. Park-QR och kiosk går in i samma on-site-logik.",
      "viewTags": ["journey"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 64,
      "height": 64
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "app-mobile",
    "type": "task",
    "position": {
      "x": 610,
      "y": 516
    },
    "data": {
      "label": "SMS-länk med token",
      "lane": "WebApp",
      "channel": "primary",
      "details": "Personlig länk som skickas cirka 30 min före och öppnar bokningsvyn direkt när gästen redan bokat hemma.",
      "shownWhen": [
        "Gästen har redan bokat hemma och öppnar sin personliga länk"
      ],
      "skippedWhen": [
        "Gästen startar i parken via QR eller kiosk"
      ],
      "givesGuest": [
        "Direkt väg in i bokningen utan extra lookup"
      ],
      "viewTags": ["journey"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 168,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "gw-mobile-entry",
    "type": "task",
    "position": {
      "x": 610,
      "y": 604
    },
    "data": {
      "label": "Park-QR på ställning",
      "lane": "WebApp",
      "channel": "primary",
      "details": "Bekvämt entrypoint i parken för gäster som inte bokat hemma eller inte checkat in ännu.",
      "shownWhen": [
        "Gästen skannar parkens QR-ställning"
      ],
      "givesGuest": [
        "Tydlig on-site-start för samma boknings- eller köpflöde"
      ],
      "viewTags": ["journey"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 174,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "kiosk-entry",
    "type": "task",
    "position": {
      "x": 610,
      "y": 692
    },
    "data": {
      "label": "Kiosk på plats",
      "lane": "WebApp",
      "channel": "fallback",
      "details": "Alternativ on-site-ingång till samma WebApp-flöde för gäster som redan är i parken.",
      "shownWhen": [
        "Gästen väljer kiosk i parken"
      ],
      "skippedWhen": [
        "Gästen använder egen telefon"
      ],
      "viewTags": ["journey"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 128,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "gw-kiosk-existing",
    "type": "gateway",
    "position": {
      "x": 930,
      "y": 640
    },
    "data": {
      "label": "Har du befintlig bokning?",
      "lane": "WebApp",
      "details": "Park-QR och kiosk delar samma on-site-val: hitta befintlig bokning eller köpa en närliggande tid i parken.",
      "viewTags": ["journey"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 64,
      "height": 64
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "kiosk-lookup",
    "type": "task",
    "position": {
      "x": 1135,
      "y": 592
    },
    "data": {
      "label": "Hitta befintlig bokning",
      "lane": "WebApp",
      "details": "Gemensam lookup för Park-QR och kiosk när gästen redan har bokning.",
      "reads": [
        "booking_ref (primär)",
        "QR-matchning (primär)",
        "telefon + efternamn (sekundär)"
      ],
      "shownWhen": [
        "Gästen skannar parkens QR-ställning",
        "Kiosk används och gästen redan har bokning"
      ],
      "skippedWhen": [
        "SMS-länk med token går direkt till bokningen"
      ],
      "viewTags": ["journey"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 189,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "kiosk-buy",
    "type": "task",
    "position": {
      "x": 1144.7314819273001,
      "y": 708.0565850061002
    },
    "data": {
      "label": "Köp biljett på plats",
      "lane": "WebApp",
      "channel": "fallback",
      "details": "Detta ersätter inte bokning hemma på webbplatsen. Steget är bara för gäster som redan är i parken, visar lediga tider cirka 1–2 timmar framåt och måste skapa en ny booking i Roller. Webappen ber om e-post och/eller telefonnummer vid köp på plats, så att gästen kan få bekräftelse, SMS 30 min före start och påminnelse om förlängning.",
      "writes": [
        "walk_in_purchase",
        "nya deltagare",
        "provisorisk operativ state",
        "booking payload till Roller",
        "guest_contact_email",
        "guest_contact_phone"
      ],
      "shownWhen": [
        "Ingen befintlig bokning hittas på plats",
        "Gästen vill köpa en tid som snart startar i parken"
      ],
      "givesGuest": [
        "Ny bokning som går vidare in i samma gemensamma check-in-flöde"
      ],
      "endpoints": [
        "Create a booking"
      ],
      "viewTags": ["journey"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 164,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "app-booking",
    "type": "task",
    "position": {
      "x": 1377.5957653396656,
      "y": 589.2223757422418
    },
    "data": {
      "label": "VY: Bokning & deltagare",
      "lane": "WebApp",
      "details": "Gemensamt huvudsteg när bokningen hittats via SMS eller lookup, eller skapats på plats i parken.",
      "reads": [
        "bokningssammanfattning",
        "deltagare",
        "produkter",
        "betalningsstatus"
      ],
      "shownWhen": [
        "Bokning finns eller har skapats"
      ],
      "viewTags": ["journey"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 191,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "app-safety-video",
    "type": "task",
    "position": {
      "x": 1617.748190512085,
      "y": 588.760189365936
    },
    "data": {
      "label": "VY: Safety-video",
      "lane": "WebApp",
      "details": "Gästen tittar på safety-videon innan intyget kan bockas i.",
      "writes": [
        "safety_video_seen_at"
      ],
      "viewTags": ["journey"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 142,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "app-safety-attest",
    "type": "task",
    "position": {
      "x": 1811.918492339435,
      "y": 589.4363015675441
    },
    "data": {
      "label": "VY: Safety-intygande",
      "lane": "WebApp",
      "details": "Gästen bockar i att hen tagit del av safety-reglerna. Intygande krävs för att gå vidare.",
      "writes": [
        "safety_attested_at",
        "safety_status",
        "safety_completed_at"
      ],
      "shownWhen": [
        "Safety-videon är sedd"
      ],
      "givesGuest": [
        "Klart safety-läge inför resten av check-in-resan"
      ],
      "viewTags": ["journey"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 175,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "app-addons",
    "type": "task",
    "position": {
      "x": 2025.9961686915517,
      "y": 588.313096677631
    },
    "data": {
      "label": "VY: Tillägg",
      "lane": "WebApp",
      "details": "Gästen ser tillägg som redan lagts till (från bokning eller tidigare steg) och kan lägga till fler eller nya. Tillgängliga tillägg: SkyRider, Connected, kaffe, extra person, hänglås.",
      "reads": [
        "produktkatalog",
        "prisregler",
        "befintliga_tillägg"
      ],
      "writes": [
        "valda tillägg",
        "connected_selected",
        "tillägg_uppdaterade"
      ],
      "viewTags": ["journey"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 105,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "gw-app-connected",
    "type": "gateway",
    "position": {
      "x": 2417.9267648844916,
      "y": 589.8949129568651
    },
    "data": {
      "label": "Connected valt?",
      "lane": "WebApp",
      "details": "Connected-profiler visas bara om produkten valts.",
      "viewTags": ["journey"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 64,
      "height": 64
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "app-connected",
    "type": "task",
    "position": {
      "x": 2495.724219267691,
      "y": 513.7660320684965
    },
    "data": {
      "label": "VY: Connected-profiler",
      "lane": "WebApp",
      "details": "Lätta profiler med namn och ikonval — antalet följer bokningen. Skapas i pilotens operativa state.",
      "writes": [
        "connected_profiles[]",
        "ikonval",
        "connected_profile_status"
      ],
      "shownWhen": [
        "Connected-produkt är vald"
      ],
      "skippedWhen": [
        "Ingen connected-produkt är vald"
      ],
      "givesGuest": [
        "Profiler redo för bandkoppling hos staff (antal följer bokningen)"
      ],
      "viewTags": ["journey"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 191,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "gw-app-payment",
    "type": "gateway",
    "position": {
      "x": 2752.963328158134,
      "y": 590.3638868916635
    },
    "data": {
      "label": "Betalning krävs?",
      "lane": "WebApp",
      "details": "No-payment-vägen är explicit i pilotflödet.",
      "viewTags": ["journey"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 64,
      "height": 64
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "app-payment",
    "type": "task",
    "position": {
      "x": 3012.725526813734,
      "y": 502.08688337806433
    },
    "data": {
      "label": "VY: Betalning",
      "lane": "WebApp",
      "details": "Gemensamt betalsteg när totalen är större än 0.",
      "writes": [
        "payment_status",
        "payment_reference",
        "pending_writeback"
      ],
      "shownWhen": [
        "Totalen är större än 0"
      ],
      "skippedWhen": [
        "Inga nya tillägg valdes eller totalen är 0"
      ],
      "viewTags": ["journey"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 122,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "app-confirm",
    "type": "task",
    "position": {
      "x": 3048.7342762586813,
      "y": 591.089044334972
    },
    "data": {
      "label": "VY: Bekräftelse + QR + kod",
      "lane": "WebApp",
      "details": "Gemensam slutskärm med QR och kort bokningskod för handoff hos staff.",
      "why": "WebApp-vyn som implementerar bekräftelseskärmen. Genererar QR och kort bokningskod.",
      "reads": [
        "confirmation_code",
        "token_payload",
        "payment_status"
      ],
      "givesGuest": [
        "QR-kod",
        "Kort bokningskod",
        "Bekräftelse att check-in-flödet är klart"
      ],
      "viewTags": ["journey"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 203,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "kiosk-print",
    "type": "task",
    "position": {
      "x": 3486.21598120339,
      "y": 494.6029193832943
    },
    "data": {
      "label": "Skriv ut kvitto / confirmation",
      "lane": "WebApp",
      "channel": "kiosk-only",
      "details": "Valfri kioskavvikelse efter avslutat flöde. Mobilen behöver normalt inte detta steg.",
      "why": "Kiosk-specifikt steg. Finns bara i kioskflödet — mobilen hoppar direkt till present.",
      "shownWhen": [
        "Kanal = kiosk och utskrift behövs"
      ],
      "skippedWhen": [
        "Kanal = mobil eller ingen utskrift behövs"
      ],
      "givesGuest": [
        "Utskriven confirmation eller kvitto"
      ],
      "viewTags": ["journey"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 230,
      "height": 59
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "app-present",
    "type": "task",
    "position": {
      "x": 3616.536445509017,
      "y": 601.6538450520646
    },
    "data": {
      "label": "VY: Visa QR / bokningskod",
      "lane": "WebApp",
      "details": "Sista WebApp-vyn före staff-handoff.",
      "why": "WebApp-vyn för handoff-skärm. I mobil: samma ConfirmationScreen som app-confirm. Sista vyn före staff-handoff.",
      "reads": [
        "QR payload",
        "booking code",
        "connected_profile_status"
      ],
      "givesGuest": [
        "Det som ska visas upp hos staff"
      ],
      "staffVerifies": [
        "QR-kod",
        "Bokningskod"
      ],
      "viewTags": ["journey"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 201,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "job-daily",
    "type": "service",
    "position": {
      "x": 978.6037383177238,
      "y": 1120.2728629779208
    },
    "data": {
      "label": "Daglig seed",
      "lane": "Ops jobs",
      "details": "Seedar dagens bokningar, tickets, payments och customers till lokal snapshot och kundcache innan parken öppnar.",
      "why": "Kärnjobbet i piloten. Seedar all data för dagen. Webhook delta/enrichment kompletterar med realtidsuppdateringar under dagen.",
      "viewTags": ["ops"],
      "cadence": "05:00 daily",
      "jobs": [
        "Hämtar bokningar",
        "Hämtar tickets",
        "Hämtar payments",
        "Hämtar customers",
        "Upsertar snapshot"
      ],
      "endpoints": [
        "Get bookings",
        "Get tickets",
        "Get payments",
        "Get customers"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 220,
      "height": 137
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "job-delta",
    "type": "service",
    "position": {
      "x": 1308.2210174093395,
      "y": 1119.3707320045678
    },
    "data": {
      "label": "Booking webhook intake",
      "lane": "Ops jobs",
      "details": "Delta-intake under dagen. Tar emot booking-webhooks och skapar enrich-underlag. Kompletterar daglig seed — inte ersättning.",
      "viewTags": ["ops"],
      "cadence": "On event",
      "jobs": [
        "Ta emot Created / Updated / Cancelled",
        "Spara webhook-event",
        "Markera pending enrichment"
      ],
      "endpoints": [
        "Booking webhook"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 220,
      "height": 121
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "job-enrich",
    "type": "service",
    "position": {
      "x": 1639.3633788934721,
      "y": 1128.25334669714
    },
    "data": {
      "label": "Webhook enrichment",
      "lane": "Ops jobs",
      "details": "Enrichment efter delta-intake. Berikar sena bokningar med exakt state och kundkontakt. Daglig seed är kärnan, detta är kompletterande realtidslager.",
      "viewTags": ["ops"],
      "cadence": "On event",
      "jobs": [
        "Hämta booking detail",
        "Hämta customer detail",
        "Upserta snapshot + kundkontakt"
      ],
      "endpoints": [
        "Get detail of a booking",
        "Get customer detail"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 220,
      "height": 121
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "job-sms",
    "type": "service",
    "position": {
      "x": 1942.2978320501904,
      "y": 1137.0842389549334
    },
    "data": {
      "label": "SMS-trigger",
      "lane": "Ops jobs",
      "details": "Skapar token och skickar länk inför ankomst.",
      "cadence": "Every 1 min",
      "jobs": [
        "Hitta bokningar om 30 min",
        "Skapa token",
        "Skriv sms_outbox"
      ],
      "viewTags": ["ops"],
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
    "id": "job-refresh",
    "type": "service",
    "position": {
      "x": 2275.9088951825333,
      "y": 1138.1126459329614
    },
    "data": {
      "label": "Refresh vid länköppning",
      "lane": "Ops jobs",
      "details": "Kör live-refresh när länk eller på plats-lookup kräver färsk detalj.",
      "cadence": "On demand",
      "endpoints": [
        "Get detail of a booking"
      ],
      "viewTags": ["ops"],
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
    "id": "job-retry",
    "type": "service",
    "position": {
      "x": 2611.780508066142,
      "y": 1137.8616947776407
    },
    "data": {
      "label": "Retry för writeback",
      "lane": "Ops jobs",
      "details": "Tar om writeback och redeem om externa anrop fallerar.",
      "cadence": "Retry queue",
      "endpoints": [
        "Create a booking",
        "Edit booking",
        "Add transaction record",
        "Redeem tickets"
      ],
      "viewTags": ["ops"],
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
    "id": "aws-rdb",
    "type": "service",
    "position": {
      "x": 180,
      "y": 866
    },
    "data": {
      "label": "Aurora PostgreSQL",
      "lane": "AWS + Aurora",
      "details": "Primär operativ databas för JumpYard Cloud.",
      "viewTags": ["architecture"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 220,
      "height": 81
    }
  },
  {
    "id": "aws-redis",
    "type": "service",
    "position": {
      "x": 430,
      "y": 866
    },
    "data": {
      "label": "Redis (valfri i V1)",
      "lane": "AWS + Aurora",
      "details": "Kortlivade tokens, sessionscache och rate limiting vid behov.",
      "viewTags": ["architecture"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 220,
      "height": 81
    },
    "selected": false
  },
  {
    "id": "aws-s3",
    "type": "service",
    "position": {
      "x": 180,
      "y": 976
    },
    "data": {
      "label": "S3 rå-payloads",
      "lane": "AWS + Aurora",
      "details": "Rå Roller-payloads, exportfiler och senare analysdump.",
      "viewTags": ["architecture"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 220,
      "height": 81
    }
  },
  {
    "id": "aws-sqs",
    "type": "service",
    "position": {
      "x": 430,
      "y": 976
    },
    "data": {
      "label": "SQS / EventBridge",
      "lane": "AWS + Aurora",
      "details": "Köar SMS, retryjobb och andra asynkrona steg.",
      "viewTags": ["architecture"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 220,
      "height": 81
    },
    "selected": false
  },
  {
    "id": "store-snapshot",
    "type": "database",
    "position": {
      "x": 1177.316811143001,
      "y": 899.2385363365615
    },
    "data": {
      "label": "Aurora / Roller Snapshot",
      "lane": "AWS + Aurora",
      "collapsed": true,
      "expandLabel": "Expandera databas",
      "collapseLabel": "Fäll ihop databas",
      "systems": ["Aurora PostgreSQL", "S3 rå-payloads"],
      "summary": "Lokal snapshot av Roller-bokningar, tickets, produkter och betalningar för dagens operativa flöde.",
      "summaryItems": [
        "bookings",
        "booking_tickets",
        "booking_products"
      ],
      "tables": [
        "bookings",
        "booking_tickets",
        "booking_products",
        "booking_payments"
      ],
      "keyFields": [
        "booking_status",
        "booking_modified_date",
        "ticket_ids",
        "payload_hash",
        "last_seen_from_roller_at"
      ],
      "writePattern": "Upsertas av daily seed, webhook enrichment och link-open refresh. Daily seed bygger basen, webhooken fyller på sena bokningar.",
      "reads": [
        "WebApp: VY: Bokning & deltagare",
        "WebApp: Hitta befintlig bokning"
      ],
      "writes": [
        "Ops jobs: daily seed",
        "Ops jobs: webhook enrichment",
        "Ops jobs: link-open refresh"
      ],
      "usedBy": [
        "WebApp bokningsvy",
        "Kiosk lookup",
        "Staff validering"
      ],
      "endpoints": [
        "Get bookings",
        "Get tickets",
        "Get payments",
        "Get detail of a booking",
        "Booking webhook"
      ],
      "contains": [
        "Bokning",
        "Tickets per booking",
        "Produktsammanfattning",
        "Betalningssnapshot"
      ],
      "viewTags": ["architecture"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 250,
      "height": 156
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "store-operational",
    "type": "database",
    "position": {
      "x": 1953.592023449551,
      "y": 889.1700546181888
    },
    "data": {
      "label": "Aurora / Operativ state",
      "lane": "AWS + Aurora",
      "collapsed": true,
      "expandLabel": "Expandera databas",
      "collapseLabel": "Fäll ihop databas",
      "systems": ["Aurora PostgreSQL", "Redis (valfri i V1)", "SQS / EventBridge"],
      "summary": "Pilotens egen state för safety, token, check-in, connected-profiler, handoff och kundkontakt.",
      "summaryItems": [
        "booking_operational_state",
        "checkin_tokens",
        "connected_profile_drafts"
      ],
      "tables": [
        "booking_operational_state",
        "checkin_tokens",
        "sms_outbox",
        "guest_profiles",
        "connected_profile_drafts"
      ],
      "keyFields": [
        "local_checkin_status",
        "confirmation_code",
        "token_hash",
        "safety_status",
        "connected_profile_status"
      ],
      "writePattern": "Skrivs av WebApp, webhook enrichment, staff-handoff och SMS-jobb. Läser inför SMS, redeem och utlämning.",
      "reads": [
        "WebApp: VY: Safety-intygande",
        "WebApp: VY: Tillägg",
        "WebApp: VY: Betalning",
        "Staff: Utlämning hos staff"
      ],
      "writes": [
        "Ops jobs: daily seed",
        "Ops jobs: webhook enrichment",
        "WebApp: Safety-intygande",
        "WebApp: Connected-profiler",
        "WebApp: Betalning",
        "Staff: Handoff"
      ],
      "ownedState": [
        "Safety completion",
        "Confirmation code",
        "Connected-profiler",
        "Handoff-status"
      ],
      "usedBy": [
        "SMS-trigger",
        "WebApp huvudflöde",
        "Utlämning hos staff"
      ],
      "endpoints": [
        "Get customers",
        "Get customer detail",
        "Create a booking",
        "Get products",
        "Booking costs",
        "Edit booking",
        "Add transaction record",
        "Redeem tickets"
      ],
      "contains": [
        "Operativ status",
        "Tokens",
        "SMS-logg",
        "Kundkontakt för SMS",
        "Lätta profilutkast för connected"
      ],
      "viewTags": ["architecture"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 250,
      "height": 156
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "store-events",
    "type": "database",
    "position": {
      "x": 2713.9183912765634,
      "y": 889.4346484856403
    },
    "data": {
      "label": "Aurora / Event & observability",
      "lane": "AWS + Aurora",
      "collapsed": true,
      "expandLabel": "Expandera databas",
      "collapseLabel": "Fäll ihop databas",
      "systems": ["Aurora PostgreSQL", "S3 rå-payloads", "SQS / EventBridge"],
      "summary": "Append-only eventspår, webhook-intake och sync-observability för pilotens drift.",
      "summaryItems": [
        "booking_events",
        "sync_runs",
        "error_summary"
      ],
      "tables": [
        "booking_events",
        "sync_runs"
      ],
      "keyFields": [
        "event_type",
        "event_source",
        "booking_id",
        "status",
        "error_summary"
      ],
      "writePattern": "Append-only från WebApp, staff och ops jobs. Webhook-events och driftspår synkas hit för felsökning och support.",
      "usedBy": [
        "Support",
        "Drift",
        "Felsökning"
      ],
      "jobs": [
        "Daglig seed",
        "Booking webhook intake",
        "Webhook enrichment",
        "Retry för writeback"
      ],
      "contains": [
        "Visit events",
        "Webhook-events",
        "Sync-resultat",
        "Felspår"
      ],
      "viewTags": ["architecture"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 250,
      "height": 156
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "store-future",
    "type": "database",
    "position": {
      "x": 3185.758132978323,
      "y": 894.63092783827
    },
    "data": {
      "label": "Connected experience senare",
      "lane": "AWS + Aurora",
      "collapsed": true,
      "expandLabel": "Expandera databas",
      "collapseLabel": "Fäll ihop databas",
      "future": true,
      "statusTag": "Senare",
      "systems": ["Aurora PostgreSQL"],
      "viewTags": ["architecture", "future"],
      "why": "Fullständig session- och device-modell för Connected Experience. Pilotens lätta profilutkast ligger i store-operational, inte här.",
      "summary": "Framtida full session- och device-modell, skild från pilotens lätta profilutkast.",
      "summaryItems": [
        "connected_sessions",
        "device_pairings",
        "live session state"
      ],
      "tables": [
        "connected_sessions",
        "device_pairings"
      ],
      "keyFields": [
        "session_started_at",
        "band_assigned",
        "device_id"
      ],
      "writePattern": "Senare scope. Inte aktivt i pilotens check-in.",
      "contains": [
        "Bandkoppling",
        "Session state",
        "Device pairing"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 250,
      "height": 140
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "roller-bulk",
    "type": "service",
    "position": {
      "x": 1114.3869058589235,
      "y": 1318.8773811717847
    },
    "data": {
      "label": "Get bookings / Get tickets / Get payments / Get customers",
      "lane": "Roller API",
      "details": "Daglig seed för bokningssnapshot, betalningsledger och lokal kundcache.",
      "endpoints": [
        "Get bookings",
        "Get tickets",
        "Get payments",
        "Get customers"
      ],
      "viewTags": ["architecture"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 220,
      "height": 112
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "roller-webhook",
    "type": "service",
    "position": {
      "x": 1413.8118776528447,
      "y": 1356.0392132540355
    },
    "data": {
      "label": "Booking webhook",
      "lane": "Roller API",
      "details": "Skickar Created, Updated och Cancelled för bokningar under dagen.",
      "endpoints": [
        "Booking webhook"
      ],
      "viewTags": ["architecture"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 220,
      "height": 82
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "roller-booking",
    "type": "service",
    "position": {
      "x": 1691.3965398282976,
      "y": 1333.793199780394
    },
    "data": {
      "label": "Get detail of a booking",
      "lane": "Roller API",
      "details": "Live-detail när bokning eller lookup behöver en färsk källa.",
      "endpoints": [
        "Get detail of a booking"
      ],
      "viewTags": ["architecture"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 220,
      "height": 82
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "roller-customer",
    "type": "service",
    "position": {
      "x": 1972.75498090804,
      "y": 1337.5008686926676
    },
    "data": {
      "label": "Get customer detail",
      "lane": "Roller API",
      "details": "Hämtar telefon, e-post och övrig kundkontakt för sena bokningar efter webhook.",
      "endpoints": [
        "Get customer detail"
      ],
      "viewTags": ["architecture"],
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
    "id": "roller-products",
    "type": "service",
    "position": {
      "x": 2256.75498090804,
      "y": 1335.2277563233536
    },
    "data": {
      "label": "Get products / Booking costs",
      "lane": "Roller API",
      "details": "Produktkatalog och kostnadsberäkning för tillägg och connected.",
      "endpoints": [
        "Get products",
        "Booking costs"
      ],
      "viewTags": ["architecture"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 220,
      "height": 97
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "roller-create",
    "type": "service",
    "position": {
      "x": 2545.8564033726075,
      "y": 1324.414486510783
    },
    "data": {
      "label": "Create a booking",
      "lane": "Roller API",
      "details": "Skapar en ny booking i Roller för on-site-köp, inklusive booking owner, items och eventuell initial betalning.",
      "endpoints": [
        "Create a booking"
      ],
      "viewTags": ["architecture"],
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
    "id": "roller-writeback",
    "type": "service",
    "position": {
      "x": 2832.642936856419,
      "y": 1334.7505718551874
    },
    "data": {
      "label": "Edit booking / Add transaction record",
      "lane": "Roller API",
      "details": "Writeback till Roller efter betalning och tillägg.",
      "endpoints": [
        "Edit booking",
        "Add transaction record"
      ],
      "viewTags": ["architecture"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 220,
      "height": 97
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "roller-redeem",
    "type": "service",
    "position": {
      "x": 3141.644700622636,
      "y": 1342.2877157002097
    },
    "data": {
      "label": "Redeem tickets",
      "lane": "Roller API",
      "details": "Kritisk slutpunkt när staff slutför handoff i piloten.",
      "endpoints": [
        "Redeem tickets"
      ],
      "viewTags": ["architecture"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 220,
      "height": 82
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "staff-assist",
    "type": "task",
    "position": {
      "x": 3309.365614684786,
      "y": 337.6922386487423
    },
    "data": {
      "label": "Assisterad fallback",
      "lane": "Staff / parkpersonal",
      "details": "Används vid mismatch, saknad kod eller andra undantag.",
      "viewTags": ["journey", "ops"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 172,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "staff-manual",
    "type": "task",
    "position": {
      "x": 3641.9071537680243,
      "y": 274.8772348244092
    },
    "data": {
      "label": "Manuell kontroll",
      "lane": "Staff / parkpersonal",
      "details": "Staff kan kontrollera bokning manuellt innan utlämning eller alternativ hantering.",
      "viewTags": ["journey", "ops"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 156,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "staff-handoff",
    "type": "task",
    "position": {
      "x": 4095.5712243958405,
      "y": 274.7526672549376
    },
    "data": {
      "label": "Utlämning hos staff",
      "lane": "Staff / parkpersonal",
      "details": "Normal utlämning hos staff när check-in-flödet är klart.",
      "why": "Staff verifierar QR-kod eller bokningskod, lämnar ut tillägg och kopplar Connected Experience-band. Om något strular kan staff falla tillbaka till dagens manuella check-in.",
      "reads": [
        "Bekräftad bokning",
        "QR-kod eller bokningskod",
        "Connected-profiler från operativ state"
      ],
      "writes": [
        "Redeem-status",
        "visit event",
        "utlämning klar",
        "bandkoppling slutförd"
      ],
      "givesGuest": [
        "Tillägg",
        "Connected Experience-band",
        "Klartecken att gå vidare"
      ],
      "staffVerifies": [
        "QR-kod",
        "Bokningskod"
      ],
      "endpoints": [
        "Redeem tickets"
      ],
      "viewTags": ["journey", "ops"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 172,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "staff-api-end",
    "type": "event",
    "position": {
      "x": 4284.518270182921,
      "y": 335.93930806135495
    },
    "data": {
      "label": "Manuell åtgärd klar",
      "type": "end",
      "lane": "Staff / parkpersonal",
      "details": "Fallbackgrenen avslutas här när normalen inte kunde användas.",
      "viewTags": ["journey", "ops"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 48,
      "height": 48
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "gw-skyrider",
    "type": "gateway",
    "position": {
      "x": 2170.8296147568362,
      "y": 579.1382985779139
    },
    "data": {
      "label": "SkyRider valt?",
      "lane": "WebApp",
      "details": "SkyRider-höjdintyg krävs bara om SkyRider är valt som tillägg (befintligt eller nytt).",
      "viewTags": ["journey"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 64,
      "height": 64
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "app-skyrider-attest",
    "type": "task",
    "position": {
      "x": 2247.3037191832755,
      "y": 721.836341792247
    },
    "data": {
      "label": "VY: SkyRider-höjdkrav",
      "lane": "WebApp",
      "details": "SkyRider-biljetter får endast användas av personer som är minst 100 cm långa. Visas bara om SkyRider är valt som tillägg.",
      "writes": [
        "skyrider_height_confirmed"
      ],
      "shownWhen": [
        "SkyRider är valt som tillägg"
      ],
      "viewTags": ["journey"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 189,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "guest-extend-open",
    "type": "task",
    "position": {
      "x": 4754.458568286254,
      "y": 27.222375742241894
    },
    "data": {
      "label": "Öppna förlängning i webappen",
      "lane": "Gäst",
      "details": "Länken öppnar en dedikerad förlängningsvy i samma webapp.",
      "viewTags": ["journey"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 230,
      "height": 60
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "guest-extend-pay",
    "type": "task",
    "position": {
      "x": 5079.99998139304,
      "y": 36.00000058758822
    },
    "data": {
      "label": "Betala 50 kr för +30 min",
      "lane": "Gäst",
      "details": "Gästen genomför betalningen direkt i webappen (Swish/kort).",
      "viewTags": ["journey"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 191,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "guest-extend-qr",
    "type": "task",
    "position": {
      "x": 5351.99998354753,
      "y": 38.00000078345096
    },
    "data": {
      "label": "Få QR-kod för bandbyte",
      "lane": "Gäst",
      "details": "Efter betalning visas en QR-kod som används vid kassan för att hämta nytt band.",
      "viewTags": ["journey"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 190,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "guest-extend-walk",
    "type": "task",
    "position": {
      "x": 5598.500084220977,
      "y": 37.99999020686308
    },
    "data": {
      "label": "Gå till kassan/staff",
      "lane": "Gäst",
      "details": "Gästen tar med QR-koden till kassan eller närmaste staff.",
      "viewTags": ["journey"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 170,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "guest-extend-band",
    "type": "task",
    "position": {
      "x": 6105.327710616821,
      "y": 36.765836220747005
    },
    "data": {
      "label": "Hämta nytt band till besökaren/barnet",
      "lane": "Gäst",
      "details": "Staff scannar QR och delar ut ett nytt band med uppdaterad sluttid.",
      "viewTags": ["journey"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 230,
      "height": 60
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "app-extend-view",
    "type": "task",
    "position": {
      "x": 5052.141904811604,
      "y": 540
    },
    "data": {
      "label": "VY: Förlängning",
      "lane": "WebApp",
      "details": "Fast pris 50 kr för 30 min extra. Visar nuvarande sluttid och ny sluttid.",
      "reads": [
        "booking_end_time",
        "extension_price_fixed"
      ],
      "viewTags": ["journey"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 142,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "app-extend-pay",
    "type": "task",
    "position": {
      "x": 5250.893450145093,
      "y": 540
    },
    "data": {
      "label": "VY: Betalning förlängning",
      "lane": "WebApp",
      "details": "Swish eller kort. När betalningen lyckats genereras en QR-kod för bandutbyte.",
      "writes": [
        "extension_payment_status"
      ],
      "viewTags": ["journey"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 211,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "app-extend-qr",
    "type": "task",
    "position": {
      "x": 5520,
      "y": 540
    },
    "data": {
      "label": "VY: QR för bandbyte",
      "lane": "WebApp",
      "details": "QR-kod visas tillsammans med instruktion: Gå till kassan/staff för att hämta nytt band.",
      "reads": [
        "extension_qr_token"
      ],
      "viewTags": ["journey"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 165,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "staff-extend-scan",
    "type": "task",
    "position": {
      "x": 5830.208657030996,
      "y": 36.517745265784825
    },
    "data": {
      "label": "Scanna förlängnings-QR",
      "lane": "Staff / parkpersonal",
      "details": "Staff scannar gästens QR vid kassan, ser betalningsstatus och bandets ID.",
      "reads": [
        "extension_payment_status",
        "current_band_id"
      ],
      "viewTags": ["journey", "ops"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 204,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "staff-extend-band",
    "type": "task",
    "position": {
      "x": 6080.129287973779,
      "y": 282.20236603543793
    },
    "data": {
      "label": "Dela ut nytt band",
      "lane": "Staff / parkpersonal",
      "details": "Staff aktiverar ett nytt band med den nya sluttiden och kopplar det till profilen/bokningen i Roller.",
      "writes": [
        "new_band_id",
        "booking_end_time_new"
      ],
      "viewTags": ["journey", "ops"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 153,
      "height": 43
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "note-extension-flow",
    "type": "note",
    "position": {
      "x": 4963.973520779546,
      "y": -117.12894769554362
    },
    "data": {
      "label": "Under vistelse — förlängning",
      "lane": "Gäst",
      "tone": "guide",
      "details": "Delflöde efter check-in: gästen får påminnelse, betalar i webappen, får QR, hämtar nytt band hos staff.",
      "viewTags": ["journey", "ops"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "measured": {
      "width": 280,
      "height": 102
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "note-1775561450067",
    "type": "note",
    "position": {
      "x": 79.80617461005176,
      "y": -191.3643412337454
    },
    "data": {
      "label": "Scope-avgränsning",
      "lane": "JumpYard Cloud",
      "tone": "warning",
      "details": "Gruppbokning / kalas: identifierat scope-område, hanteras inte i pilotens check-in-flöde. Kräver separat discovery och designfas.",
      "scopeStatus": "out-of-scope",
      "viewTags": ["journey", "future"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "measured": {
      "width": 280,
      "height": 67
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "event-1775807705215",
    "type": "event",
    "position": {
      "x": 4633.816678030457,
      "y": 35.77012104999213
    },
    "data": {
      "label": "Få SMS/mail 15 min före sluttid",
      "type": "start",
      "tags": [
        "main"
      ],
      "viewTags": ["journey"],
      "edgeHighlighted": false,
      "dimmed": false,
      "lane": "Gäst"
    },
    "measured": {
      "width": 48,
      "height": 48
    },
    "selected": false,
    "dragging": false
  },
  {
    "id": "event-1775807990618",
    "type": "event",
    "position": {
      "x": 4955.021112998415,
      "y": 537.1819425182513
    },
    "data": {
      "label": "Få SMS/mail 15 min före sluttid",
      "type": "start",
      "tags": [
        "main"
      ],
      "viewTags": ["journey"],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "measured": {
      "width": 48,
      "height": 48
    },
    "selected": false,
    "dragging": false
  }
] as any[];

export const pilotEdges = [
  {
    "id": "g16",
    "source": "guest-output-choice",
    "target": "guest-present",
    "type": "step",
    "label": "Ingen utskrift / visa i mobilen",
    "labelStyle": {
      "fill": "#fff",
      "fontWeight": 700
    },
    "labelBgStyle": {
      "fill": "#1a1a1a"
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left-top",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "g15",
    "source": "guest-confirm",
    "target": "guest-output-choice",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
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
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "g14",
    "source": "guest-pay",
    "target": "guest-payment-step",
    "type": "step",
    "label": "Ja",
    "labelStyle": {
      "fill": "#fff",
      "fontWeight": 700
    },
    "labelBgStyle": {
      "fill": "#1a1a1a"
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "top",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "g14b",
    "source": "guest-pay",
    "target": "guest-confirm",
    "type": "smoothstep",
    "label": "Nej",
    "labelStyle": {
      "fill": "#fff",
      "fontWeight": 700
    },
    "labelBgStyle": {
      "fill": "#1a1a1a"
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
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
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "g14c",
    "source": "guest-payment-step",
    "target": "guest-confirm",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "top-left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
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
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "g15b",
    "source": "guest-output-choice",
    "target": "guest-print",
    "type": "step",
    "label": "Kiosk / skriv ut",
    "labelStyle": {
      "fill": "#fff",
      "fontWeight": 700
    },
    "labelBgStyle": {
      "fill": "#1a1a1a"
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "top",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "g15c",
    "source": "guest-print",
    "target": "guest-present",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "top-left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
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
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "g13",
    "source": "guest-addons",
    "target": "guest-pay",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
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
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "g12",
    "source": "guest-safety",
    "target": "guest-addons",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
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
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "g11",
    "source": "guest-review",
    "target": "guest-safety",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
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
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "g10",
    "source": "guest-open",
    "target": "guest-review",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
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
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "g9",
    "source": "guest-onsite-choice",
    "target": "guest-open",
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "bottom-left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "g8",
    "source": "guest-onsite-entry",
    "target": "guest-onsite-choice",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
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
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "g7",
    "source": "guest-booked",
    "target": "guest-onsite-entry",
    "type": "step",
    "label": "Nej",
    "labelStyle": {
      "fill": "#fff",
      "fontWeight": 700
    },
    "labelBgStyle": {
      "fill": "#1a1a1a"
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "bottom",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "g6",
    "source": "guest-entry-choice",
    "target": "guest-onsite-entry",
    "type": "step",
    "label": "Skanna QR / kiosk",
    "labelStyle": {
      "fill": "#fff",
      "fontWeight": 700
    },
    "labelBgStyle": {
      "fill": "#1a1a1a"
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "bottom",
    "targetHandle": "top-right",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "g5",
    "source": "guest-entry-choice",
    "target": "guest-open",
    "type": "step",
    "label": "SMS-länk",
    "labelStyle": {
      "fill": "#fff",
      "fontWeight": 700
    },
    "labelBgStyle": {
      "fill": "#1a1a1a"
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "top-left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "g4",
    "source": "guest-sms",
    "target": "guest-entry-choice",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
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
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "g3",
    "source": "guest-home-book",
    "target": "guest-sms",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
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
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "g2",
    "source": "guest-booked",
    "target": "guest-home-book",
    "type": "step",
    "label": "Ja",
    "labelStyle": {
      "fill": "#fff",
      "fontWeight": 700
    },
    "labelBgStyle": {
      "fill": "#1a1a1a"
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "top",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "g1",
    "source": "guest-start",
    "target": "guest-booked",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
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
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "w11",
    "source": "kiosk-buy",
    "target": "app-booking",
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "bottom-left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "w10",
    "source": "kiosk-lookup",
    "target": "app-booking",
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "w9",
    "source": "gw-kiosk-existing",
    "target": "kiosk-buy",
    "type": "step",
    "label": "Nej",
    "labelStyle": {
      "fill": "#fff",
      "fontWeight": 700
    },
    "labelBgStyle": {
      "fill": "#1a1a1a"
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "bottom",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "w8",
    "source": "gw-kiosk-existing",
    "target": "kiosk-lookup",
    "type": "step",
    "label": "Ja",
    "labelStyle": {
      "fill": "#fff",
      "fontWeight": 700
    },
    "labelBgStyle": {
      "fill": "#1a1a1a"
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "top",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "w6",
    "source": "gw-mobile-entry",
    "target": "gw-kiosk-existing",
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "w5",
    "source": "app-mobile",
    "target": "app-booking",
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "top-left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "w4",
    "source": "gw-channel",
    "target": "kiosk-entry",
    "type": "step",
    "label": "Kiosk",
    "labelStyle": {
      "fill": "#fff",
      "fontWeight": 700
    },
    "labelBgStyle": {
      "fill": "#1a1a1a"
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "bottom",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "w3",
    "source": "gw-channel",
    "target": "gw-mobile-entry",
    "type": "step",
    "label": "Park-QR",
    "labelStyle": {
      "fill": "#fff",
      "fontWeight": 700
    },
    "labelBgStyle": {
      "fill": "#1a1a1a"
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "w2",
    "source": "gw-channel",
    "target": "app-mobile",
    "type": "step",
    "label": "SMS-länk",
    "labelStyle": {
      "fill": "#fff",
      "fontWeight": 700
    },
    "labelBgStyle": {
      "fill": "#1a1a1a"
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "top",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "w1",
    "source": "app-start",
    "target": "gw-channel",
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "w12",
    "source": "app-booking",
    "target": "app-safety-video",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
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
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "w13",
    "source": "app-safety-attest",
    "target": "app-addons",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
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
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "w14",
    "source": "app-addons",
    "target": "gw-skyrider",
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "w15",
    "source": "gw-app-connected",
    "target": "app-connected",
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "label": "Ja",
    "labelStyle": {
      "fill": "#fff",
      "fontWeight": 700
    },
    "labelBgStyle": {
      "fill": "#1a1a1a"
    },
    "sourceHandle": "top",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "w18",
    "source": "gw-app-payment",
    "target": "app-payment",
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "label": "Ja",
    "labelStyle": {
      "fill": "#fff",
      "fontWeight": 700
    },
    "labelBgStyle": {
      "fill": "#1a1a1a"
    },
    "sourceHandle": "top",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "w19",
    "source": "gw-app-payment",
    "target": "app-confirm",
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "label": "Nej",
    "labelStyle": {
      "fill": "#fff",
      "fontWeight": 700
    },
    "labelBgStyle": {
      "fill": "#1a1a1a"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "w20",
    "source": "app-payment",
    "target": "app-confirm",
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "top",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "w22",
    "source": "app-confirm",
    "target": "app-present",
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "label": "mobil / ingen utskrift",
    "labelStyle": {
      "fill": "#fff",
      "fontWeight": 700
    },
    "labelBgStyle": {
      "fill": "#1a1a1a"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "w23",
    "source": "kiosk-print",
    "target": "app-present",
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "top",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "o1",
    "source": "job-daily",
    "target": "job-delta",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
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
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "o2",
    "source": "job-delta",
    "target": "job-enrich",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
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
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "o3",
    "source": "job-enrich",
    "target": "job-sms",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
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
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "o3b",
    "source": "job-sms",
    "target": "job-refresh",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
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
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "o4",
    "source": "job-refresh",
    "target": "job-retry",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
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
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "d9",
    "source": "app-confirm",
    "target": "store-operational",
    "type": "step",
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Bekräftelsevyn läser token, QR och bokningskod från operativ state.",
      "operation": "Läsning",
      "fields": [
        "confirmation_code",
        "token_payload",
        "payment_status"
      ],
      "why": "Samma slutbild måste fungera för både mobil och kiosk.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "bottom-left",
    "targetHandle": "top-right",
    "zIndex": 0,
    "selected": false,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "d9b",
    "source": "app-confirm",
    "target": "store-events",
    "type": "step",
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "WebApp-flödet skriver centrala händelser när check-in når bekräftat läge.",
      "operation": "Skrivning",
      "fields": [
        "booking_loaded",
        "safety_completed",
        "payment_recorded",
        "confirmation_ready"
      ],
      "why": "Eventspåret ska visa vad som faktiskt hände i WebApp-flödet, inte bara i staff och bakgrundsjobb.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "bottom-left",
    "targetHandle": "top",
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "d16",
    "source": "roller-webhook",
    "target": "job-delta",
    "type": "step",
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Roller pushar Created, Updated och Cancelled till webhook-intake under dagen.",
      "operation": "Webhook",
      "fields": [
        "bookingReference",
        "bookingUniqueId",
        "eventType",
        "channel"
      ],
      "why": "Sena bokningar och uppdateringar ska fångas utan att belasta Data API med tät polling.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "top",
    "targetHandle": "bottom",
    "zIndex": 0,
    "selected": false,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "d19",
    "source": "job-refresh",
    "target": "roller-booking",
    "type": "step",
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Refresh vid länköppning hämtar färsk booking detail.",
      "operation": "Läsning",
      "fields": [
        "booking detail",
        "produktstatus",
        "betalningsstatus",
        "tickets"
      ],
      "why": "Behövs när länk öppnas eller på plats-lookup kräver färsk data.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "d22",
    "source": "job-retry",
    "target": "roller-writeback",
    "type": "step",
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Retryjobbet tar om writeback när betalning eller bokningsändring inte gick igenom.",
      "operation": "Writeback",
      "fields": [
        "Create booking payload",
        "Edit booking payload",
        "transaction record payload",
        "retry context"
      ],
      "why": "Externa Roller-anrop behöver ett separat återförsöksspår.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "a1",
    "source": "aws-rdb",
    "target": "store-snapshot",
    "type": "step",
    "style": {
      "strokeWidth": 1.75,
      "stroke": "#94a3b8",
      "strokeDasharray": "6,6"
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#94a3b8"
    },
    "data": {
      "edgeStyle": "arch",
      "baseStyle": {
        "strokeWidth": 1.75,
        "stroke": "#94a3b8",
        "strokeDasharray": "6,6"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#94a3b8"
      },
      "pathMode": "step",
      "details": "Aurora bär de operativa tabellgrupperna.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "a2",
    "source": "aws-rdb",
    "target": "store-operational",
    "type": "step",
    "style": {
      "strokeWidth": 1.75,
      "stroke": "#94a3b8",
      "strokeDasharray": "6,6"
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#94a3b8"
    },
    "data": {
      "edgeStyle": "arch",
      "baseStyle": {
        "strokeWidth": 1.75,
        "stroke": "#94a3b8",
        "strokeDasharray": "6,6"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#94a3b8"
      },
      "pathMode": "step",
      "details": "Aurora bär pilotens egen operativa state.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "a3",
    "source": "aws-rdb",
    "target": "store-events",
    "type": "step",
    "style": {
      "strokeWidth": 1.75,
      "stroke": "#94a3b8",
      "strokeDasharray": "6,6"
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#94a3b8"
    },
    "data": {
      "edgeStyle": "arch",
      "baseStyle": {
        "strokeWidth": 1.75,
        "stroke": "#94a3b8",
        "strokeDasharray": "6,6"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#94a3b8"
      },
      "pathMode": "step",
      "details": "Aurora bär observability och eventlogg.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "a4",
    "source": "aws-rdb",
    "target": "store-future",
    "type": "step",
    "style": {
      "strokeWidth": 1.75,
      "stroke": "#94a3b8",
      "strokeDasharray": "6,6"
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#94a3b8"
    },
    "data": {
      "edgeStyle": "arch",
      "baseStyle": {
        "strokeWidth": 1.75,
        "stroke": "#94a3b8",
        "strokeDasharray": "6,6"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#94a3b8"
      },
      "pathMode": "step",
      "details": "Aurora kan senare bära full connected session state.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "a5",
    "source": "aws-redis",
    "target": "store-operational",
    "type": "step",
    "style": {
      "strokeWidth": 1.75,
      "stroke": "#94a3b8",
      "strokeDasharray": "6,6"
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#94a3b8"
    },
    "data": {
      "edgeStyle": "arch",
      "baseStyle": {
        "strokeWidth": 1.75,
        "stroke": "#94a3b8",
        "strokeDasharray": "6,6"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#94a3b8"
      },
      "pathMode": "step",
      "details": "Redis kan cachea tokens och aktiv sessionstate i V1.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "a6",
    "source": "aws-s3",
    "target": "store-snapshot",
    "type": "step",
    "style": {
      "strokeWidth": 1.75,
      "stroke": "#94a3b8",
      "strokeDasharray": "6,6"
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#94a3b8"
    },
    "data": {
      "edgeStyle": "arch",
      "baseStyle": {
        "strokeWidth": 1.75,
        "stroke": "#94a3b8",
        "strokeDasharray": "6,6"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#94a3b8"
      },
      "pathMode": "step",
      "details": "S3 kan lagra rå payloads och exportfiler vid behov.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "a7",
    "source": "aws-sqs",
    "target": "job-sms",
    "type": "step",
    "style": {
      "strokeWidth": 1.75,
      "stroke": "#94a3b8",
      "strokeDasharray": "6,6"
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#94a3b8"
    },
    "data": {
      "edgeStyle": "arch",
      "baseStyle": {
        "strokeWidth": 1.75,
        "stroke": "#94a3b8",
        "strokeDasharray": "6,6"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#94a3b8"
      },
      "pathMode": "step",
      "details": "Asynkrona utskick och retryjobb kan gå via kö.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "a8",
    "source": "aws-sqs",
    "target": "job-retry",
    "type": "step",
    "style": {
      "strokeWidth": 1.75,
      "stroke": "#94a3b8",
      "strokeDasharray": "6,6"
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#94a3b8"
    },
    "data": {
      "edgeStyle": "arch",
      "baseStyle": {
        "strokeWidth": 1.75,
        "stroke": "#94a3b8",
        "strokeDasharray": "6,6"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#94a3b8"
      },
      "pathMode": "step",
      "details": "Retryjobbet kan drivas via kö eller events.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "selected": false,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "f1",
    "source": "guest-present",
    "target": "staff-assist",
    "type": "step",
    "label": "saknar kod / mismatch",
    "labelStyle": {
      "fill": "#fff",
      "fontWeight": 700
    },
    "labelBgStyle": {
      "fill": "#1a1a1a"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#8b5cf6",
      "strokeDasharray": "6,6"
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#8b5cf6"
    },
    "data": {
      "edgeStyle": "dashed",
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#8b5cf6",
        "strokeDasharray": "6,6"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#8b5cf6"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "zIndex": 0,
    "selected": false,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "f3",
    "source": "staff-manual",
    "target": "staff-handoff",
    "type": "step",
    "style": {
      "strokeWidth": 2,
      "stroke": "#8b5cf6",
      "strokeDasharray": "6,6"
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#8b5cf6"
    },
    "data": {
      "edgeStyle": "dashed",
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#8b5cf6",
        "strokeDasharray": "6,6"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#8b5cf6"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "f5",
    "source": "staff-assist",
    "target": "staff-api-end",
    "type": "step",
    "label": "manuell väg",
    "labelStyle": {
      "fill": "#fff",
      "fontWeight": 700
    },
    "labelBgStyle": {
      "fill": "#1a1a1a"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#8b5cf6",
      "strokeDasharray": "6,6"
    },
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#8b5cf6"
    },
    "data": {
      "edgeStyle": "dashed",
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#8b5cf6",
        "strokeDasharray": "6,6"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#8b5cf6"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "zIndex": 0,
    "selected": false,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "source": "app-connected",
    "target": "gw-app-payment",
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "selected": false,
    "id": "xy-edge__app-connectedright-gw-app-paymentleft",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "source": "app-confirm",
    "target": "kiosk-print",
    "label": "kiosk / utskrift",
    "labelStyle": {
      "fill": "#fff",
      "fontWeight": 700
    },
    "labelBgStyle": {
      "fill": "#1a1a1a"
    },
    "sourceHandle": "top-right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "id": "xy-edge__app-confirmtop-right-kiosk-printleft",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#8b5cf6"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#8b5cf6",
      "strokeDasharray": "6,6"
    },
    "source": "job-retry",
    "target": "staff-assist",
    "label": "kritisk avvikelse",
    "labelStyle": {
      "fill": "#fff",
      "fontWeight": 700
    },
    "labelBgStyle": {
      "fill": "#1a1a1a"
    },
    "data": {
      "edgeStyle": "dashed",
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#8b5cf6",
        "strokeDasharray": "6,6"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#8b5cf6"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "top",
    "targetHandle": "bottom-right",
    "zIndex": 0,
    "id": "xy-edge__job-retrytop-staff-assistbottom-right",
    "selected": false,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#8b5cf6"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#8b5cf6",
      "strokeDasharray": "6,6"
    },
    "source": "staff-assist",
    "target": "staff-manual",
    "data": {
      "edgeStyle": "dashed",
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#8b5cf6",
        "strokeDasharray": "6,6"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#8b5cf6"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "zIndex": 0,
    "id": "xy-edge__staff-assistright-staff-manualleft",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "source": "staff-handoff",
    "target": "guest-end",
    "sourceHandle": "right-top",
    "targetHandle": "bottom",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
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
    "id": "xy-edge__staff-handoffright-top-guest-endbottom",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "source": "job-daily",
    "target": "roller-bulk",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Daglig seed hämtar bokningar, tickets, payments och customers som behövs inför dagens SMS och check-in.",
      "operation": "Sync",
      "fields": [
        "bookings",
        "tickets",
        "payment rows",
        "customers"
      ],
      "why": "Bygger dagens operativa snapshot och kundcache före SMS och check-in, i stället för att utgå från redan redeemade arrivals.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "bottom-left",
    "targetHandle": "top-left",
    "zIndex": 0,
    "id": "xy-edge__job-dailybottom-left-roller-bulktop-left",
    "selected": false,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "source": "job-daily",
    "target": "store-operational",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Daglig seed fyller gästprofiler och kontaktcache som SMS-flödet behöver senare under dagen.",
      "operation": "Skrivning",
      "fields": [
        "guest_profiles",
        "contactNumber",
        "email",
        "customerId"
      ],
      "why": "Telefonnummer och kundkontakt ska finnas lokalt innan SMS-triggern börjar jobba mot dagens bokningar.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "top-right",
    "targetHandle": "bottom-left",
    "zIndex": 0,
    "id": "xy-edge__job-dailytop-right-store-operationalbottom-left",
    "selected": false,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "source": "app-booking",
    "target": "store-snapshot",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Bokningsvyn läser den senaste snapshoten för gemensam visning.",
      "operation": "Läsning",
      "fields": [
        "bokningssammanfattning",
        "deltagare",
        "produktlista",
        "betalningsstatus"
      ],
      "why": "Både mobil och kiosk ska visa samma bokningsbild efter att bokningen hittats.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "bottom",
    "targetHandle": "top-right",
    "zIndex": 0,
    "id": "xy-edge__app-bookingbottom-store-snapshottop-right",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "source": "kiosk-lookup",
    "target": "store-snapshot",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Gemensam lookup läser en matchbar bokning från snapshoten.",
      "operation": "Läsning",
      "fields": [
        "booking_ref",
        "telefon + efternamn",
        "QR-matchning",
        "sessionstid"
      ],
      "why": "Samma lookup ska fungera för mobil via Park-QR och kiosk med befintlig bokning.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "zIndex": 0,
    "id": "xy-edge__kiosk-lookupbottom-store-snapshottop",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "source": "store-operational",
    "target": "roller-redeem",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Operativ state driver redeem till Roller när staff har verifierat QR-kod eller bokningskod.",
      "operation": "Writeback",
      "fields": [
        "ticket_ids",
        "redeem readiness",
        "redeem request per ticket",
        "verified handoff context",
        "handoff_completed"
      ],
      "why": "Staff triggar redeem, men cloud ska gå via operativ state innan check-in slutförs i Roller.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "bottom",
    "targetHandle": "top-right",
    "zIndex": 0,
    "selected": false,
    "id": "xy-edge__store-operationalbottom-roller-redeemtop-right",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "source": "app-connected",
    "target": "store-future",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Connected-profiler skickas vidare till connected experience som aktiv pilotdata.",
      "operation": "Skrivning",
      "fields": [
        "connected_profile_1..4",
        "ikonval",
        "profilslotar",
        "connected_profile_status"
      ],
      "why": "Connected experience ska vara en tydlig del av piloten och inte bara dold bakom operativ state.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "bottom-right",
    "targetHandle": "top-left",
    "zIndex": 0,
    "id": "xy-edge__app-connectedbottom-right-store-futuretop-left",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "source": "staff-handoff",
    "target": "store-future",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Staff slutför connected-delen genom att koppla band till profilerna vid utlämning.",
      "operation": "Läsning + skrivning",
      "fields": [
        "connected-profiler",
        "band assignment",
        "pairing_status",
        "handoff_completed"
      ],
      "why": "Bandkopplingen är en aktiv pilotdel och ska därför synas som eget dataflöde till connected experience.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "bottom-left",
    "targetHandle": "right",
    "zIndex": 0,
    "id": "xy-edge__staff-handoffbottom-left-store-futureright",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "source": "store-operational",
    "target": "roller-writeback",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Operativ state driver writeback till Roller efter tillägg och betalning.",
      "operation": "Writeback",
      "fields": [
        "selected_addons",
        "payment_status",
        "transaction reference"
      ],
      "why": "Cloud äger ordningen mellan lokal state och extern skrivning.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "bottom-right",
    "targetHandle": "top-left",
    "zIndex": 0,
    "selected": false,
    "id": "xy-edge__store-operationalbottom-right-roller-writebacktop-left",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "source": "staff-handoff",
    "target": "store-operational",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Staff läser och uppdaterar operativ state när handoff slutförs.",
      "operation": "Läsning + skrivning",
      "fields": [
        "QR-kod eller bokningskod",
        "connected-profiler",
        "utlämning klar",
        "bandkoppling"
      ],
      "why": "Piloten avslutas hos staff, inte i self-service.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "bottom",
    "targetHandle": "right-bottom",
    "zIndex": 0,
    "selected": false,
    "id": "xy-edge__staff-handoffbottom-store-operationalright-bottom",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "source": "app-present",
    "target": "store-operational",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Slutvyn läser det som gästen ska visa upp hos staff.",
      "operation": "Läsning",
      "fields": [
        "QR-kod",
        "bokningskod",
        "connected_profile_status"
      ],
      "why": "Staff-handoff behöver en tydlig och stabil slutvy oavsett kanal.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "bottom",
    "targetHandle": "right",
    "zIndex": 0,
    "id": "xy-edge__app-presentbottom-store-operationalright",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "source": "kiosk-print",
    "target": "store-operational",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Kiosk läser confirmation-data inför eventuell utskrift.",
      "operation": "Läsning",
      "fields": [
        "confirmation_code",
        "QR payload",
        "print status"
      ],
      "why": "Kioskens utskrift är ett litet sidospår efter det delade flödet.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "bottom-left",
    "targetHandle": "right-top",
    "zIndex": 0,
    "id": "xy-edge__kiosk-printbottom-left-store-operationalright-top",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "source": "store-operational",
    "target": "roller-products",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Cloud använder produkts- och kostnadsendpoints för tilläggssteget.",
      "operation": "Läsning",
      "fields": [
        "produktkatalog",
        "prisberäkning",
        "connected-produkt"
      ],
      "why": "Tillägg och connected måste räknas innan betalningsbeslutet tas.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "zIndex": 0,
    "id": "xy-edge__store-operationalbottom-roller-productstop",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "source": "job-sms",
    "target": "store-operational",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "SMS-jobbet läser bokningar redo för utskick och skriver token/outbox-status.",
      "operation": "Läsning + skrivning",
      "fields": [
        "checkin_tokens",
        "sms_outbox",
        "checkin_link_sent_at"
      ],
      "why": "Unik länk måste skapas och spåras innan gästen öppnar flödet.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "top-left",
    "targetHandle": "bottom-left",
    "zIndex": 0,
    "id": "xy-edge__job-smstop-left-store-operationalbottom-left",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "source": "app-safety-attest",
    "target": "store-operational",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Safetyresultat skrivs till operativ state.",
      "operation": "Skrivning",
      "fields": [
        "safety_status",
        "safety_completed_at"
      ],
      "why": "Safety ägs lokalt i JumpYard Cloud under piloten.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "bottom",
    "targetHandle": "left",
    "zIndex": 0,
    "selected": false,
    "id": "xy-edge__app-safetybottom-store-operationalleft",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "source": "app-addons",
    "target": "store-operational",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Tilläggsval och connected-flagga sparas inför betalningsbeslut och writeback.",
      "operation": "Skrivning",
      "fields": [
        "selected_addons",
        "connected_selected",
        "pricing_context"
      ],
      "why": "WebApp behöver en lokal operativ state innan Roller-writeback sker.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "bottom",
    "targetHandle": "left-top",
    "zIndex": 0,
    "id": "xy-edge__app-addonsbottom-store-operationalleft-top",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "source": "app-connected",
    "target": "store-operational",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Connected-profiler sparas som lätta profilutkast i piloten.",
      "operation": "Skrivning",
      "fields": [
        "4 profilnamn",
        "ikonval",
        "connected_profile_status"
      ],
      "why": "Staff ska kunna koppla band till profilerna som skapades i check-in-flödet.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "bottom",
    "targetHandle": "top",
    "zIndex": 0,
    "selected": false,
    "id": "xy-edge__app-connectedbottom-store-operationaltop",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "source": "app-payment",
    "target": "store-operational",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Betalningsresultat skrivs innan writeback och bekräftelse.",
      "operation": "Skrivning",
      "fields": [
        "payment_status",
        "payment_reference",
        "writeback_pending"
      ],
      "why": "No-payment- och betalningsspåret behöver mötas i samma lokala state.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "bottom",
    "targetHandle": "top-left",
    "zIndex": 0,
    "selected": false,
    "id": "xy-edge__app-paymentbottom-store-operationaltop-left",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "source": "job-refresh",
    "target": "store-snapshot",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Färsk booking detail skrivs tillbaka till snapshoten.",
      "operation": "Skrivning",
      "fields": [
        "raw_payload_json",
        "payload_hash",
        "updated booking snapshot"
      ],
      "why": "WebApp ska fortsätta läsa lokal snapshot även efter live-refresh.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "top-left",
    "targetHandle": "right-top",
    "zIndex": 0,
    "id": "xy-edge__job-refreshtop-left-store-snapshotright-top",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "source": "kiosk-buy",
    "target": "store-operational",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "On-site-köp skriver första operativa state innan det gemensamma huvudflödet fortsätter.",
      "operation": "Skrivning",
      "fields": [
        "walk_in_purchase",
        "nya deltagare",
        "channel = onsite",
        "preliminary confirmation"
      ],
      "why": "Park-QR och kiosk ska kunna skapa samma lokala operativa grund innan writeback och bekräftelse.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "right-bottom",
    "targetHandle": "left-bottom",
    "zIndex": 0,
    "selected": false,
    "id": "xy-edge__kiosk-buyright-bottom-store-operationalleft-bottom",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "source": "store-operational",
    "target": "roller-create",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Cloud använder operativ state för att skapa en ny booking i Roller när gästen köper på plats.",
      "operation": "Skapande",
      "fields": [
        "customer.firstName",
        "customer.lastName",
        "customer.email",
        "customer.phone",
        "items",
        "payments"
      ],
      "why": "On-site-köp måste skapa själva bokningen i Roller och kan samtidigt skapa eller uppdatera booking owner som guest record.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "bottom-right",
    "targetHandle": "top-left",
    "zIndex": 0,
    "id": "xy-edge__store-operationalbottom-right-roller-createtop-left",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "source": "roller-create",
    "target": "store-snapshot",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Create a booking returnerar bookingReference och uniqueId som gör den nya bokningen sökbar direkt i lokal snapshot.",
      "operation": "Skrivning",
      "fields": [
        "bookingReference",
        "uniqueId",
        "booking owner",
        "items",
        "payments"
      ],
      "why": "On-site-köp måste bli synligt direkt i samma WebApp-flöde utan att vänta på nästa seed eller webhook.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "bottom-left",
    "targetHandle": "left-top",
    "zIndex": 0,
    "id": "xy-edge__roller-createbottom-left-store-snapshotleft-top",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "source": "staff-handoff",
    "target": "store-events",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Staff skriver visit event och utlämningsspår.",
      "operation": "Skrivning",
      "fields": [
        "handoff_completed",
        "redeem_succeeded",
        "band_paired"
      ],
      "why": "Append-only eventspår behövs för drift, analys och felsökning.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "bottom-left",
    "targetHandle": "right-top",
    "zIndex": 0,
    "id": "xy-edge__staff-handoffbottom-left-store-eventsright-top",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "source": "job-delta",
    "target": "store-events",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Webhook-intake skriver råa booking-events och enrich-status till eventlagret.",
      "operation": "Skrivning",
      "fields": [
        "bookingReference",
        "eventType",
        "payload_hash",
        "pending_enrichment"
      ],
      "why": "Cloud behöver spåra sena bokningar och uppdateringar innan de berikas till lokal state.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "top-left",
    "targetHandle": "bottom-right",
    "zIndex": 0,
    "id": "xy-edge__job-deltatop-left-store-eventsbottom-right",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "source": "job-enrich",
    "target": "roller-booking",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Webhook enrichment hämtar exakt booking-state direkt efter webhooken.",
      "operation": "Läsning",
      "fields": [
        "bookingReference",
        "bookingUniqueId",
        "items",
        "payments"
      ],
      "why": "Webhooken är en signal, men booking detail är den auktoritativa sanningen för den sena bokningen.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "bottom-left",
    "targetHandle": "top",
    "zIndex": 0,
    "id": "xy-edge__job-enrichbottom-left-roller-bookingtop",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "source": "job-enrich",
    "target": "roller-customer",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Webhook enrichment hämtar kundkontakt för att få telefonnummer och SMS-beredskap på sena bokningar.",
      "operation": "Läsning",
      "fields": [
        "customerId",
        "contactNumber",
        "email",
        "acceptMarketingSms"
      ],
      "why": "Sena bokningar behöver kundkontakt även om kunden inte fanns i morgonens seed.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "bottom-right",
    "targetHandle": "top",
    "zIndex": 0,
    "id": "xy-edge__job-enrichbottom-right-roller-customertop",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "source": "job-enrich",
    "target": "store-snapshot",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Webhook enrichment skriver den sena bokningen tillbaka till Roller-snapshoten.",
      "operation": "Skrivning",
      "fields": [
        "bookings",
        "booking_tickets",
        "booking_payments",
        "last_seen_from_roller_at"
      ],
      "why": "Sena bokningar ska bli sökbara i lookup och bokningsvyn utan att vänta till nästa dag.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "top-left",
    "targetHandle": "bottom-right",
    "zIndex": 0,
    "id": "xy-edge__job-enrichtop-left-store-snapshotbottom-right",
    "selected": false,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "source": "job-enrich",
    "target": "store-operational",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Webhook enrichment skriver kundkontakt, sms-beredskap och senaste bookingkontext till operativ state.",
      "operation": "Skrivning",
      "fields": [
        "guest_profiles",
        "contactNumber",
        "sms_ready",
        "latest booking context"
      ],
      "why": "SMS-triggern ska kunna jobba helt mot Aurora även för bokningar som kommit in efter daily seed.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "top-right",
    "targetHandle": "bottom-right",
    "zIndex": 0,
    "id": "xy-edge__job-enrichtop-right-store-operationalbottom-right",
    "selected": false,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "source": "job-daily",
    "target": "store-snapshot",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Daglig seed skriver dagens boknings-, ticket- och payment-snapshot till Aurora.",
      "operation": "Skrivning",
      "fields": [
        "bookings",
        "booking_tickets",
        "booking_products",
        "booking_payments"
      ],
      "why": "WebApp och lookup ska börja från ett lokalt snapshot av väntade gäster, inte från attendance-data.",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "sourceHandle": "top-left",
    "targetHandle": "left-bottom",
    "zIndex": 0,
    "selected": false,
    "id": "xy-edge__job-dailytop-left-store-snapshotleft-bottom",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "source": "kiosk-entry",
    "target": "gw-kiosk-existing",
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "id": "xy-edge__kiosk-entryright-gw-kiosk-existingleft",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "source": "gw-app-connected",
    "target": "gw-app-payment",
    "label": "No",
    "labelStyle": {
      "fill": "#fff",
      "fontWeight": 700
    },
    "labelBgStyle": {
      "fill": "#1a1a1a"
    },
    "sourceHandle": "bottom",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "selected": false,
    "id": "xy-edge__gw-app-connectedbottom-gw-app-paymentleft",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "source": "guest-present",
    "target": "staff-handoff",
    "sourceHandle": "right",
    "targetHandle": "top",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "id": "xy-edge__guest-presentright-staff-handofftop",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "w-extend-2",
    "source": "guest-extend-notice",
    "target": "guest-extend-open",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
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
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "w-extend-6",
    "source": "app-extend-pay",
    "target": "app-extend-qr",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
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
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "w-extend-10",
    "source": "staff-extend-scan",
    "target": "staff-extend-band",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
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
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "id": "w-extend-11",
    "source": "staff-extend-band",
    "target": "guest-extend-band",
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "sourceHandle": "top",
    "targetHandle": "bottom",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
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
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "source": "app-safety-video",
    "target": "app-safety-attest",
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
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
    "id": "xy-edge__app-safety-videoright-app-safety-attestleft",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "source": "app-extend-view",
    "sourceHandle": "right",
    "target": "app-extend-pay",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "edgeStyle": "solid",
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "id": "xy-edge__app-extend-viewright-app-extend-payleft",
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "source": "event-1775807705215",
    "sourceHandle": "right",
    "target": "guest-extend-open",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "edgeStyle": "solid",
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "id": "xy-edge__event-1775807705215right-guest-extend-openleft",
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "source": "guest-extend-open",
    "sourceHandle": "right",
    "target": "guest-extend-pay",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "edgeStyle": "solid",
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "id": "xy-edge__guest-extend-openright-guest-extend-payleft",
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "source": "guest-extend-pay",
    "sourceHandle": "right",
    "target": "guest-extend-qr",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "edgeStyle": "solid",
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "id": "xy-edge__guest-extend-payright-guest-extend-qrleft",
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "source": "guest-extend-qr",
    "target": "guest-extend-walk",
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
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
    "id": "xy-edge__guest-extend-qrright-guest-extend-walkleft",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "source": "guest-extend-walk",
    "target": "staff-extend-scan",
    "sourceHandle": "right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
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
    "id": "xy-edge__guest-extend-walkright-staff-extend-scanleft",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "smoothstep",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "source": "event-1775807990618",
    "sourceHandle": "right",
    "target": "app-extend-view",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "edgeStyle": "solid",
      "pathMode": "smoothstep",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "id": "xy-edge__event-1775807990618right-app-extend-viewleft",
    "zIndex": 0,
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "source": "app-skyrider-attest",
    "target": "gw-app-connected",
    "sourceHandle": "top-right",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "id": "xy-edge__app-skyrider-attesttop-right-gw-app-connectedleft",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "source": "gw-skyrider",
    "target": "app-skyrider-attest",
    "label": "SkyRider valt",
    "labelStyle": {
      "fill": "#fff",
      "fontWeight": 700
    },
    "labelBgStyle": {
      "fill": "#1a1a1a"
    },
    "sourceHandle": "bottom",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "id": "xy-edge__gw-skyriderbottom-app-skyrider-attestleft",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#ff8e7d"
    },
    "style": {
      "strokeWidth": 2,
      "stroke": "#ff8e7d"
    },
    "source": "gw-skyrider",
    "target": "gw-app-connected",
    "label": "SkyRider ej valt",
    "labelStyle": {
      "fill": "#fff",
      "fontWeight": 700
    },
    "labelBgStyle": {
      "fill": "#1a1a1a"
    },
    "sourceHandle": "top",
    "targetHandle": "left",
    "data": {
      "baseStyle": {
        "strokeWidth": 2,
        "stroke": "#ff8e7d"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#ff8e7d"
      },
      "pathMode": "step",
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "selected": false,
    "id": "xy-edge__gw-skyridertop-gw-app-connectedleft",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  },
  {
    "type": "step",
    "markerEnd": {
      "type": "arrowclosed",
      "color": "#22d3ee"
    },
    "style": {
      "strokeWidth": 1.5,
      "stroke": "#22d3ee",
      "strokeDasharray": "3,5"
    },
    "source": "app-extend-pay",
    "target": "store-operational",
    "sourceHandle": "bottom",
    "targetHandle": "right",
    "data": {
      "edgeKind": "data",
      "edgeStyle": "data",
      "baseStyle": {
        "strokeWidth": 1.5,
        "stroke": "#22d3ee",
        "strokeDasharray": "3,5"
      },
      "baseMarkerEnd": {
        "type": "arrowclosed",
        "color": "#22d3ee"
      },
      "pathMode": "step",
      "details": "Ny sluttid och nytt band-id skrivs till operativ state och vidare till Roller.",
      "operation": "Skrivning",
      "fields": [
        "new_band_id",
        "booking_end_time_new"
      ],
      "edgeHighlighted": false,
      "dimmed": false
    },
    "zIndex": 0,
    "selected": false,
    "id": "xy-edge__app-extend-paybottom-store-operationalright",
    "pathOptions": {
      "offset": 0,
      "borderRadius": 0
    }
  }
] as any[];
