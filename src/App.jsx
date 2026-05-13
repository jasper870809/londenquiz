import React, { useMemo, useState } from "react";

const rondes = [
  {
    titel: "Start en uitleg",
    kleur: "#111827",
    dias: [
      { titel: "Benodigdheden", tekst: "Voor deze quiz hebben we nodig: geluidsinstallatie en afspeellijst voor de muziekronde, emoji's om door te sturen, antwoordbladen per groepje, verbeterblad voor de jury, vijf dassen voor de extra opdracht van meneer Van Huffelen, en een timer of gsm.", nota: "Scores worden genoteerd door de jury en achteraf mondeling meegedeeld." },
      { titel: "Overzicht", tekst: "De quiz bestaat uit vijf rondes: gidsingen, ABBA uitbeelden, emoji-ronde musicals, muziekronde en weetjes crew. Daarna volgt de eindtelling en prijsuitreiking.", nota: "Bij gelijke stand gebruiken we een schiftingsvraag." }
    ]
  },
  {
    titel: "Ronde 1: gidsingen",
    kleur: "#1d4ed8",
    dias: [
      { titel: "Werkwijze", tekst: "Lees elke meerkeuzevraag voor. De groepjes noteren alleen A, B, C of D. Laat de jury na de ronde alle antwoordbladen ophalen.", nota: "Een punt per juist antwoord. Maximum: 13 punten." },
      q("Vraag 1", "Houses of Parliament: Wanneer begon de bouw van het huidige Palace of Westminster, zoals we het vandaag grotendeels kennen?", ["A) 1666, na de Grote Brand van Londen", "B) 1789, na de Franse Revolutie", "C) 1840, na de brand van 1834", "D) 1945, na de Tweede Wereldoorlog"], "C"),
      q("Vraag 2", "Elizabeth Tower: Hoe heet de grote klokkentoren aan het Palace of Westminster officieel?", ["A) Big Ben", "B) Elizabeth Tower", "C) Westminster Tower", "D) Victoria Clock Tower"], "B"),
      q("Vraag 3", "Westminster School: Westminster School is een van de hoogst aangeschreven middelbare scholen in Engeland. Welke school wordt vaak nog hoger aangeschreven?", ["A) Oxford", "B) Eton", "C) Cambridge", "D) London School"], "B"),
      q("Vraag 4", "Buckingham Palace: Hoeveel kamers telt Buckingham Palace ongeveer?", ["A) 175 kamers", "B) 375 kamers", "C) 775 kamers", "D) 1775 kamers"], "C"),
      q("Vraag 5", "Britse tabloids: Vroeger hadden Britse tabloids zoals The Sun een beruchte rubriek met een topless vrouw op de derde pagina. Hoe heette die rubriek?", ["A) The London Girl", "B) Page 3 girl", "C) Royal Beauty", "D) The Sun Lady"], "B"),
      q("Vraag 6", "St James's Park: Welke grote, opvallende watervogels leven al sinds de zeventiende eeuw in St James's Park?", ["A) Zwarte zwanen", "B) Flamingo's", "C) Pelikanen", "D) Kraanvogels"], "C"),
      q("Vraag 7", "Trafalgar Square: Volgens een populaire legende is het metaal voor de vier bronzen leeuwen aan Nelson's Column deels afkomstig van welke bron?", ["A) Omgesmolten Britse munten uit de achttiende eeuw", "B) Kanonnen van buitgemaakte vijandelijke schepen", "C) Bronzen deuren van een afgebroken kathedraal", "D) Gevonden metaalschroot uit de Theems na de Grote Brand"], "B"),
      q("Vraag 8", "Guards: Van welk dier is de vacht die traditioneel voor de hoge zwarte bearskins wordt gebruikt?", ["A) Europese bever", "B) Russische zwarte wolf", "C) Noord-Amerikaanse zwarte beer", "D) Schotse hooglandkoe"], "C"),
      q("Vraag 9", "Covent Garden: Welke producten werden voornamelijk verhandeld op de oorspronkelijke markt van Covent Garden?", ["A) Bloemen en planten", "B) Antiek", "C) Fruit en groenten", "D) Kledij"], "C"),
      q("Vraag 10", "Multicultureel Londen: Hoeveel talen worden er ongeveer gesproken in Londen?", ["A) Meer dan 50", "B) Meer dan 100", "C) Meer dan 200", "D) Meer dan 300"], "D"),
      q("Vraag 11", "London Eye: De London Eye heeft precies evenveel capsules als Groot-Londen officiële boroughs telt. Hoeveel zijn dat er?", ["A) 24", "B) 28", "C) 32", "D) 36"], "C"),
      q("Vraag 12", "Fourth Plinth: Wat stelt het kunstwerk op de Fourth Plinth op Trafalgar Square voor?", ["A) Afgietsels van gezichten van trans, non-binaire en gender-non-conforme personen", "B) Schedels van oude Londenaars", "C) Maskers uit toneelstukken van Shakespeare", "D) Keramieken schotels"], "A"),
      q("Vraag 13", "Piccadilly Circus: Waarom heet Piccadilly Circus eigenlijk 'Circus'?", ["A) Omdat hier vroeger straatartiesten en acrobaten optraden", "B) Omdat er ooit een groot circusgebouw stond", "C) Omdat 'circus' in Londen verwijst naar een rond verkeersplein", "D) Omdat de plek genoemd werd naar een beroemde clown"], "C")
    ]
  },
  {
    titel: "Ronde 2: ABBA uitbeelden",
    kleur: "#be185d",
    dias: [
      { titel: "Concept", tekst: "Telkens beelden twee groepsleden een ABBA-nummer uit. De groep die het nummer als eerste raadt, gaat door. De quizmaster fluistert of toont de titel aan twee groepsleden tegelijk. Zij mogen niet spreken, zingen of letters vormen.", nota: "Bij twaalf groepjes: vier reeksen van drie, daarna twee halve finales en een finale." },
      { titel: "Bij negen groepjes", tekst: "Bij negen groepjes gebruiken we vooraf de schiftingsvraag. Hoeveel weken stond ABBA Gold al in de UK top 100 albums charts? Wie het verst van het antwoord zit, valt af.", antwoord: "1208" },
      { titel: "Puntentelling", tekst: "Doorgaan na ronde één is één punt. Finale halen is twee punten in totaal. Finale winnen is drie punten in totaal.", nota: "De ABBA-punten zijn niet cumulatief." },
      abba("Ronde 1, reeks 1", "Dancing Queen"),
      abba("Ronde 1, reeks 2", "Money, Money, Money"),
      abba("Ronde 1, reeks 3", "Gimme! Gimme! Gimme!"),
      abba("Ronde 1, reeks 4", "Take a Chance on Me"),
      abba("Ronde 2, reeks 1", "Thank You for the Music"),
      abba("Ronde 2, reeks 2", "Lay All Your Love on Me"),
      abba("Finale", "Waterloo"),
      { titel: "Extra opdracht", tekst: "Bind zo snel mogelijk een das zoals in een Engelse kostschool. Er zijn maar vijf dassen, dus werk per vijf groepjes en time elke poging. Snelste groep: drie punten. Tweede snelste groep: twee punten. Derde snelste groep: één punt." }
    ]
  },
  {
    titel: "Ronde 3: emoji-ronde musicals",
    kleur: "#b45309",
    dias: [
      { titel: "Werkwijze", tekst: "Ik stuur telkens een emoji-reeks door via WhatsApp. De groepjes noteren telkens de musical. Spelling hoeft niet perfect te zijn zolang het antwoord duidelijk herkenbaar is. Verboden info op te zoeken op gsm.", nota: "Maximum: 10 punten." },
      r("Emoji 1", "Emoji één: 🦁👑", "The Lion King"), r("Emoji 2", "Emoji twee: 💚🧙‍♀️🧹", "Wicked"), r("Emoji 3", "Emoji drie: 🇫🇷⚔️😢", "Les Misérables"), r("Emoji 4", "Emoji vier: 👻🎭🏛️", "The Phantom of the Opera"), r("Emoji 5", "Emoji vijf: 👰‍♀️👩👨👨‍🦱👨‍🦰🇬🇷", "Mamma Mia!"), r("Emoji 6", "Emoji zes: 👧📚🏫", "Matilda"), r("Emoji 7", "Emoji zeven: 🇺🇸⚔️🔫", "Hamilton"), r("Emoji 8", "Emoji acht: 🇫🇷🎡💃🎩", "Moulin Rouge!"), r("Emoji 9", "Emoji negen: 🇺🇸📖⛪", "The Book of Mormon"), r("Emoji 10", "Emoji tien: 😈👠👜", "The Devil Wears Prada")
    ]
  },
  {
    titel: "Ronde 4: muziekronde",
    kleur: "#6d28d9",
    dias: [
      { titel: "Werkwijze", tekst: "Speel per fragment ongeveer twintig tot dertig seconden. Zeg vooraf wat de groepjes moeten noteren: band, zangeres, titel of combinatie. Geef na elk fragment kort tijd om te schrijven.", nota: "Fragment zes is twee punten. Maximum: 11 punten." },
      r("Fragment 1", "Fragment één. We zoeken de naam van de band. Dit iconische nummer heeft Londen letterlijk in de titel en verwijst naar de beroemde opening van de BBC World Service: 'This is London calling'. Noteer de naam van de band.", "The Clash"),
      r("Fragment 2", "Fragment twee. We zoeken de naam van de zangeres. Deze wereldster is geboren en getogen in Tottenham, Noord-Londen. Noteer de naam van de zangeres.", "Adele"),
      r("Fragment 3", "Fragment drie. We zoeken de naam van de band. Dit nummer ademt de sfeer van het Londense West End. Noteer de naam van de band.", "Pet Shop Boys"),
      r("Fragment 4", "Fragment vier. We zoeken de naam van het nummer. De titel verwijst naar een wereldberoemde straat in Marylebone, Londen. Noteer de naam van het nummer.", "Baker Street"),
      r("Fragment 5", "Fragment vijf. We zoeken de naam van het nummer. De zangeres is geboren in Westminster en groeide grotendeels op in Camden. Noteer de naam van het nummer.", "Levitating"),
      r("Fragment 6", "Fragment zes. We zoeken de naam van de groep én de zanger. Eén punt voor de groep en één punt voor de zanger.", "Queen en David Bowie"),
      r("Fragment 7", "Fragment zeven. We zoeken de naam van de band. Deze band werd gevormd in Londen en werd een grote naam van de Britpop. Noteer de naam van de band.", "Blur"),
      r("Fragment 8", "Fragment acht. We zoeken de naam van de zangeres. Ze werd geboren in Londen en wordt sterk verbonden met Camden Town. Noteer de naam van de zangeres.", "Amy Winehouse"),
      r("Fragment 9", "Fragment negen. We zoeken de naam van de band. De leden leerden elkaar kennen aan University College London. Noteer de naam van de band.", "Coldplay"),
      r("Fragment 10", "Fragment tien. We zoeken de naam van de band. Deze band komt uit Camden Town. Noteer de naam van de band.", "Madness")
    ]
  },
  {
    titel: "Ronde 5: weetjes crew",
    kleur: "#047857",
    dias: [
      { titel: "Werkwijze", tekst: "Lees per crewlid de drie stellingen voor. De groepjes kiezen A, B of C. Er is per crewlid precies één juiste stelling.", nota: "Maximum: 7 punten." },
      q("Jan Verding", "Welke stelling is juist?", ["A) Meneer Verding figureerde als reiziger in een Harry Potter-film bij King's Cross Station.", "B) Meneer Verding liep de London Marathon uit in minder dan 3 uur 30.", "C) Meneer Verding is sterspeler bij een zaalvoetbalploeg. Hij werd met zijn ploeg, Atletico Osschot, regionaal kampioen in 2012."], "C"),
      q("Jean De Deygere", "Welke stelling is juist?", ["A) Meneer De Deygere heeft in zijn hele leven maar een sigaret gerookt, en dat was in Walibi.", "B) Meneer De Deygere werkte een zomer lang als vrijwilliger in Shakespeare's Globe Theatre in Londen.", "C) Meneer De Deygere heeft ooit Beat It van Michael Jackson gezongen op de playbackshow van de lagere school, maar greep nipt naast de hoofdprijs."], "A"),
      q("Jasper Van Lommel", "Welke stelling is juist?", ["A) Meneer Van Lommel schreef een gastartikel voor RunningBE over de mooiste hardlooproutes in Vlaams-Brabant.", "B) Meneer Van Lommel heeft een tattoo van het logo van de Londense metro op zijn schouder.", "C) Meneer Van Lommel poseerde als leerling ooit naakt met het standbeeld van Sint-Jozef als grap voor Chrysostomos."], "C"),
      q("Lies Van Passel", "Welke stelling is juist?", ["A) Mevrouw Van Passel werkte als stagehand op Rock Werchter en scoorde backstage een foto met de zanger van Muse.", "B) Mevrouw Van Passel is toen ze 15 was ooit vermist geweest tijdens een nachtdropping met de Chiro.", "C) Mevrouw Van Passel kan meer dan 200 Engelse woordcombinaties maken bij het letterspel dat jullie vandaag speelden."], "B"),
      q("Luc Van Huffelen", "Welke stelling is juist?", ["A) Meneer Van Huffelen heeft sinds zijn studententijd maar liefst 23 verschillende musicals bekeken in de Londense West End.", "B) Meneer Van Huffelen was ooit assistent-coach van een groep Dansmariekes uit Westerlo en toerde daarmee door Ierland en de Verenigde Staten.", "C) Meneer Van Huffelen werd ooit geselecteerd voor het kortfilmfestival van Leuven met een door hem geregisseerde kortfilm."], "B"),
      q("Filip Mas", "Welke stelling is juist?", ["A) Meneer Mas was ooit Brabants kampioen tafeltennis.", "B) Meneer Mas was ooit een gespreksonderwerp in een Nederlandse wielerpodcast.", "C) Meneer Mas kwam in Hyde Park ooit de bekende Australische zanger Nick Cave tegen en hield er tien minuten lang een gesprek mee."], "B"),
      q("Klaar Buvens", "Welke stelling is juist?", ["A) Mevrouw Buvens heeft een bruin en een blauw oog.", "B) Mevrouw Buvens is als fervent reiziger al op elk continent geweest, behalve Antarctica.", "C) Mevrouw Buvens had haar eerste rijervaring met de wagen op veertienjarige leeftijd samen met enkele vriendinnen. Zonder rijbewijs welteverstaan."], "C")
    ]
  },
  {
    titel: "Eindtelling en prijsuitreiking",
    kleur: "#111827",
    dias: [
      { titel: "Eindtelling", tekst: "De jury telt nu alle punten samen. We maken zo meteen de eindstand mondeling bekend.", nota: "Controleer fragment zes van de muziekronde, de ABBA-punten en de dasopdracht." },
      { titel: "Prijsuitreiking", tekst: "We maken nu de winnaars bekend. Bedankt om enthousiast mee te spelen, en een applaus voor alle groepjes en voor de jury." }
    ]
  }
];

function q(titel, tekst, opties, antwoord) { return { titel, tekst, opties, antwoord }; }
function r(titel, tekst, antwoord) { return { titel, tekst, antwoord }; }
function abba(titel, geheim) { return { titel, tekst: "Twee leerlingen per groepje komen naar voren. Toon het geheime nummer alleen aan de uitbeelders.", geheim, antwoord: geheim }; }

function getDias() {
  return rondes.flatMap((ronde, rondeIndex) => ronde.dias.map((dia, diaIndex) => ({ ...dia, rondeIndex, diaIndex, rondeTitel: ronde.titel, kleur: ronde.kleur, totaal: ronde.dias.length })));
}

export default function App() {
  const dias = useMemo(getDias, []);
  const [index, setIndex] = useState(0);
  const [toonAntwoord, setToonAntwoord] = useState(false);
  const [toonGeheim, setToonGeheim] = useState(false);
  const dia = dias[index];

  function ga(nieuw) {
    const veilig = Math.max(0, Math.min(nieuw, dias.length - 1));
    setIndex(veilig);
    setToonAntwoord(false);
    setToonGeheim(false);
  }

  function rondeNaam(titel) {
    return titel.replace("Start en uitleg", "Start").replace("Ronde 1: gidsingen", "R1").replace("Ronde 2: ABBA uitbeelden", "R2").replace("Ronde 3: emoji-ronde musicals", "R3").replace("Ronde 4: muziekronde", "R4").replace("Ronde 5: weetjes crew", "R5").replace("Eindtelling en prijsuitreiking", "Einde");
  }

  return (
    <div style={styles.app}>
      <nav style={styles.top}>
        <div style={styles.brand}>Londenquiz</div>
        <div style={styles.counter}>{index + 1}/{dias.length}</div>
        <div style={styles.rounds}>{rondes.map((ronde, i) => {
          const first = dias.findIndex(d => d.rondeIndex === i);
          const active = dia.rondeIndex === i;
          return <button key={ronde.titel} onClick={() => ga(first)} style={{ ...styles.roundButton, background: active ? ronde.kleur : "white", color: active ? "white" : "#111827" }}>{rondeNaam(ronde.titel)}</button>;
        })}</div>
      </nav>

      <main style={styles.main}>
        <header style={{ ...styles.header, background: dia.kleur }}>
          <div style={styles.roundLabel}>{dia.rondeTitel}</div>
          <h1 style={styles.title}>{dia.titel}</h1>
        </header>

        <section style={styles.card}>
          <div style={styles.label}>Letterlijk voorlezen</div>
          <p style={styles.readText}>{dia.tekst}</p>
        </section>

        {dia.opties && <section style={styles.options}>{dia.opties.map(optie => <div key={optie} style={styles.option}>{optie}</div>)}</section>}

        {dia.geheim && <section style={styles.secretBox}><div style={styles.row}><strong>Alleen voor uitbeelders</strong><button style={styles.smallButton} onClick={() => setToonGeheim(!toonGeheim)}>{toonGeheim ? "Verberg" : "Toon geheim"}</button></div><div style={styles.secret}>{toonGeheim ? dia.geheim : "••••••••"}</div></section>}

        {dia.nota && <section style={styles.note}><strong>Praktisch: </strong>{dia.nota}</section>}

        {dia.antwoord && <section style={styles.answerBox}><div style={styles.row}><strong>Antwoord voor jury</strong><button style={styles.smallButton} onClick={() => setToonAntwoord(!toonAntwoord)}>{toonAntwoord ? "Verberg" : "Toon antwoord"}</button></div><div style={styles.answer}>{toonAntwoord ? dia.antwoord : "Antwoord verborgen"}</div></section>}
      </main>

      <footer style={styles.footer}>
        <button style={styles.navButton} onClick={() => ga(index - 1)} disabled={index === 0}>Vorige</button>
        <div style={styles.footerText}>Dia {dia.diaIndex + 1} van {dia.totaal}</div>
        <button style={styles.navButton} onClick={() => ga(index + 1)} disabled={index === dias.length - 1}>Volgende</button>
      </footer>
    </div>
  );
}

const styles = {
  app: { minHeight: "100vh", background: "#f3f4f6", color: "#111827", fontFamily: "Arial, sans-serif", paddingBottom: 92 },
  top: { position: "sticky", top: 0, zIndex: 10, background: "#e5e7eb", borderBottom: "1px solid #d1d5db", padding: 10 },
  brand: { fontSize: 22, fontWeight: 900 },
  counter: { position: "absolute", top: 12, right: 10, background: "#111827", color: "white", padding: "6px 10px", borderRadius: 999, fontSize: 13, fontWeight: 800 },
  rounds: { display: "flex", gap: 8, overflowX: "auto", marginTop: 10, paddingBottom: 2 },
  roundButton: { border: "1px solid #d1d5db", borderRadius: 12, padding: "10px 12px", fontWeight: 800, whiteSpace: "nowrap" },
  main: { padding: 10 },
  header: { color: "white", borderRadius: 16, padding: 16 },
  roundLabel: { opacity: 0.85, fontSize: 14, marginBottom: 4 },
  title: { margin: 0, fontSize: 26, lineHeight: 1.1 },
  card: { marginTop: 10, background: "white", borderRadius: 16, padding: 16, border: "1px solid #e5e7eb" },
  label: { color: "#6b7280", fontSize: 12, fontWeight: 900, textTransform: "uppercase", letterSpacing: 0.5 },
  readText: { margin: "10px 0 0", fontSize: 21, lineHeight: 1.35, fontWeight: 650 },
  options: { display: "grid", gap: 10, marginTop: 10 },
  option: { background: "white", border: "1px solid #d1d5db", borderRadius: 14, padding: 13, fontSize: 18, lineHeight: 1.3 },
  note: { marginTop: 10, background: "#fffbeb", border: "1px solid #fcd34d", borderRadius: 14, padding: 14, fontSize: 16, lineHeight: 1.4 },
  secretBox: { marginTop: 10, background: "#fdf2f8", border: "1px solid #f9a8d4", borderRadius: 14, padding: 14 },
  answerBox: { marginTop: 10, background: "#ecfdf5", border: "1px solid #86efac", borderRadius: 14, padding: 14 },
  row: { display: "flex", justifyContent: "space-between", gap: 10, alignItems: "center" },
  smallButton: { border: 0, borderRadius: 10, background: "#111827", color: "white", padding: "9px 12px", fontWeight: 800 },
  secret: { marginTop: 12, fontSize: 34, fontWeight: 900, color: "#831843" },
  answer: { marginTop: 12, fontSize: 22, fontWeight: 900, color: "#064e3b" },
  footer: { position: "fixed", left: 0, right: 0, bottom: 0, zIndex: 20, display: "flex", gap: 10, alignItems: "center", padding: 10, background: "rgba(243,244,246,0.96)", borderTop: "1px solid #d1d5db" },
  navButton: { flex: 1, border: 0, borderRadius: 14, background: "#111827", color: "white", padding: "14px 18px", fontSize: 16, fontWeight: 900 },
  footerText: { width: 74, textAlign: "center", color: "#4b5563", fontSize: 12, fontWeight: 800 }
};
