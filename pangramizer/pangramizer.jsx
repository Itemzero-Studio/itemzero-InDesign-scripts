/* ---
 PANGRAMIZER
 version 1.0
 ---
 InDesign script that prints random pangrams.
 ---
 Script by Itemzero.com
 --- */

function insertText() {    
    var pangrams = [
        ['Zəfər, jaketini də papağını da götür, bu axşam hava çox soyuq olacaq.', 'Azeri'],
        ['Yec’hed mat Jakez ! Skarzhit ar gwerennoù-mañ, kavet e vo gwin betek fin ho puhez.', 'Breton'],
        ['«Dóna amor que seràs feliç!». Això, il·lús company geniüt, ja és un lluït rètol blavís d’onze kWh.', 'Catalan'],
        ['Jove xef, porti whisky amb quinze glaçons d’hidrogen, coi!', 'Catalan'],
        ['Aqueix betzol, Jan, comprava whisky de figa.', 'Catalan'],
        ['Zel de grum: quetxup, whisky, cafè, bon vi; ja!', 'Catalan'],
        ['Coi! quinze jans golafres de Xàtiva, beuen whisky a pams.', 'Catalan'],
        ['Gojazni đačić s biciklom drži hmelj i finu vatu u džepu nošnje.', 'Croatian'],
        ['Nechť již hříšné saxofony ďáblů rozezvučí síň úděsnými tóny waltzu, tanga a quickstepu.', 'Czech'],
        ['Příliš žluťoučký kůň úpěl ďábelské ódy.', 'Czech'],
        ['Hleď, toť přízračný kůň v mátožné póze šíleně úpí.', 'Czech'],
        ['Zvlášť zákeřný učeň s ďolíčky běží podél zóny úlů.', 'Czech'],
        ['Loď čeří kýlem tůň obzvlášť v Grónské úžině.', 'Czech'],
        ['Ó, náhlý déšť již zvířil prach a čilá laň teď běží s houfcem gazel k úkrytům.', 'Czech'],
        ['Høj bly gom vandt fræk sexquiz på wc.', 'Danish'],
        ['Quizdeltagerne spiste jordbær med fløde, mens cirkusklovnen Walther spillede på xylofon.', 'Danish'],
        ['A waxy gent chuckled over my fab jazzy quips.', 'English'],
        ['Waxy gents chalked over my fab jazzy quip.', 'English'],
        ['A puny lazy squad jokes of a worthy moving xebec.', 'English'],
        ['Puny lazy squads joke of a worthy moving xebec.', 'English'],
        ['A hot fowl amazed by quacked ravens jinxing a pub.', 'English'],
        ['Jim quickly realized that the beautiful gowns are expensive.', 'English'],
        ['Quirky spud boys can jam after zapping five worthy Polysixes.', 'English'],
        ['Jackie will budget for the most expensive zoology equipment.', 'English'],
        ['Zack Gappow saved the job requirement list for the six boys.', 'English'],
        ['Zelda might fix the job growth plans very quickly on Monday.', 'English'],
        ['The wizard quickly jinxed the gnomes before they vaporized.', 'English'],
        ['The five boxing wizards jump quickly.', 'English'],
        ['The quick brown fox jumps over the lazy dog.', 'English'],
        ['All questions asked by five watched experts amaze the judge.', 'English'],
        ['A quick movement of the enemy will jeopardize six gunboats.', 'English'],
        ['How razorback-jumping frogs can level six piqued gymnasts!', 'English'],
        ['Just keep examining every low bid quoted for zinc etchings.', 'English'],
        ['Grumpy wizards make toxic brew for the evil queen and jack.', 'English'],
        ['A quivering Texas zombie fought republic linked jewelry.', 'English'],
        ['Crazy Frederick bought many very exquisite opal jewels.', 'English'],
        ['Eble ĉiu kvazaŭ-deca fuŝĥoraĵo ĝojigos homtipon.', 'Esperanto'],
        ['Laŭ Ludoviko Zamenhof bongustas freŝa ĉeĥa manĝaĵo kun spicoj.', 'Esperanto'],
        ['Põdur Zagrebi tšellomängija-följetonist Ciqo külmetas kehvas garaažis.', 'Estonian'],
        ['See väike mölder jõuab rongile hüpata.', 'Estonian'],
        ['Törkylempijävongahdus.', 'Estonian'],
        ['Albert osti fagotin ja töräytti puhkuvan melodian.', 'Finnish'],
        ['Lorun sangen pieneksi hyödyksi jäivät suomen kirjaimet.', 'Finnish'],
        ['Hyvän lorun sangen pieneksi hyödyksi jäi suomen kirjaimet.', 'Finnish'],
        ['Fahrenheit ja Celsius yrjösivät Åsan backgammon-peliin, Volkswagenissa, daiquirin ja ZX81:n yhteisvaikutuksesta.', 'Finnish'],
        ['Charles Darwin jammaili Åken hevixylofonilla Qatarin yöpub Zeligissä.', 'Finnish'],
        ['Wieniläinen sioux’ta puhuva ökyzombie diggaa Åsan roquefort-tacoja.', 'Finnish'],
        ['Buvez de ce whisky que le patron juge fameux.', 'French'],
        ['Portez ce vieux whisky au juge blond qui fume.', 'French'],
        ['Portez ce vieux whisky au juge blond qui a fumé.', 'French'],
        ['Bâchez la queue du wagon-taxi avec les pyjamas du fakir.', 'French'],
        ['Voyez le brick géant que j’examine près du wharf.', 'French'],
        ['Voix ambiguë d’un cœur qui au zéphyr préfère les jattes de kiwi.', 'French'],
        ['Monsieur Jack, vous dactylographiez bien mieux que votre ami Wolf.', 'French'],
        ['Alve bazige froulju wachtsje op dyn komst.', 'West Frisian'],
        ['Sylvia wagt quick den Jux bei Pforzheim.', 'German'],
        ['Franz jagt im komplett verwahrlosten Taxi quer durch Bayern.', 'German'],
        ['Victor jagt zwölf Boxkämpfer quer über den großen Sylter Deich.', 'German'],
        ['“Fix, Schwyz!” quäkt Jürgen blöd vom Paß.', 'German'],
        ['Falsches Üben von Xylophonmusik quält jeden größeren Zwerg.', 'German'],
        ['Jó foxim és don Quijote húszwattos lámpánál ülve egy pár bűvös cipőt készít.', 'Hungarian'],
        ['Árvíztűrő tükörfúrógép.', 'Hungarian'],
        ['Kæmi ný öxi hér, ykist þjófum nú bæði víl og ádrepa.', 'Icelandic'],
        ['Svo hölt, yxna kýr þegði jú um dóp í fé á bæ.', 'Icelandic'],
        ['Þú dazt á hnéð í vök og yfir blóm sexý pæju.', 'Icelandic'],
        ['Nne, nna, wepụ he’l’ụjọ dum n’ime ọzụzụ ụmụ, vufesi obi nye Chukwu, ṅụrịanụ, gbakọọnụ kpaa, kwee ya ka o guzoshie ike; ọ ghaghị ito, nwapụta ezi agwa.', 'Igbo'],
        ['Muharjo seorang xenofobia universal yang takut pada warga jazirah, contohnya Qatar.', 'Indonesian'],
        ['Saya lihat foto Hamengkubuwono XV bersama enam zebra purba cantik yang jatuh dari Alquranmu.', 'Indonesian'],
        ['Hafiz mengendarai bajaj payah-payah ke warnet-x untuk mencetak lembar verifikasi dalam kertas quarto.', 'Indonesian'],
        ['D’fhuascail Íosa Úrmhac na hÓighe Beannaithe pór Éava agus Ádhaimh.', 'Irish'],
        ['D’ḟuascail Íosa Úrṁac na hÓiġe Beannaiṫe pór Éaḃa agus Áḋaiṁ.', 'Irish'],
        ['Ċuaiġ bé ṁórṡáċ le dlúṫspád fíorḟinn trí hata mo ḋea-ṗorcáin ḃig.', 'Irish'],
        ['Quel fez sghembo copre davanti.', 'Italian'],
        ['Ma la volpe, col suo balzo, ha raggiunto il quieto Fido.', 'Italian'],
        ['Quel vituperabile xenofobo zelante assaggia il whisky ed esclama: alleluja!', 'Italian'],
        ['Pranzo d’acqua fa volti sghembi.', 'Italian'],
        ['O templi, quarzi, vigne, fidi boschi!', 'Italian'],
        ['Che tempi brevi, zio, quando solfeggi.', 'Italian'],
        ['Qualche notizia pavese mi fa sbadigliare.', 'Italian'],
        ['In quel campo si trovan funghi in abbondanza.', 'Italian'],
        ['Qualche vago ione tipo zolfo, bromo, sodio.', 'Italian'],
        ['Berlusconi? Quiz, tv, paghe da fame.', 'Italian'],
        ['Tv? Quiz, Br, Flm, Dc… Oh, spenga!', 'Italian'],
        ['Sic fugiens, dux, zelotypos, quam Karus haberis.', 'Latin'],
        ['Muļķa hipiji mēģina brīvi nogaršot celofāna žņaudzējčūsku.', 'Latvian'],
        ['Glāžšķūņa rūķīši dzērumā čiepj Baha koncertflīģeļu vākus.', 'Latvian'],
        ['Četri psihi faķīri vēlu vakarā zāģēja guļbūvei durvis, fonā šņācot mežam.', 'Latvian'],
        ['Įlinkdama fechtuotojo špaga sublykčiojusi pragręžė apvalų arbūzą.', 'Lithuanian'],
        ['.o’i mu xagji sofybakni cu zvati le purdi.', 'Lojban'],
        ['Gvxam mincetu apocikvyeh: ñizol ce mamvj ka raq kuse bafkeh mew.', 'Mapudungun'],
        ['Ngütram minchetu apochiküyeṉ: ñidol che mamüll ka rag kushe ḻafkeṉ mew.', 'Mapudungun'],
        ['Gütxam minchetu apochiküyenh: ñizol che mamüll ka raq kushe lhafkenh mew.', 'Mapudungun'],
        ['Vår sære Zulu fra badeøya spilte jo whist og quickstep i min taxi.', 'Norwegian'],
        ['Høvdingens kjære squaw får litt pizza i Mexico by.', 'Norwegian'],
        ['IQ-løs WC-boms uten hørsel skjærer god pizza på xylofon.', 'Norwegian'],
        ['Sær golfer med kølle vant sexquiz på wc i hjemby.', 'Norwegian'],
        ['Jeg begynte å fortære en sandwich mens jeg kjørte taxi på vei til quiz.', 'Norwegian'],
        ['Jeżu klątw, spłódź Finom część gry hańb!', 'Polish'],
        ['Pójdźże, kiń tę chmurność w głąb flaszy!', 'Polish'],
        ['Mężny bądź, chroń pułk twój i sześć flag.', 'Polish'],
        ['Filmuj rzeź żądań, pość, gnęb chłystków!', 'Polish'],
        ['Pchnąć w tę łódź jeża lub ośm skrzyń fig.', 'Polish'],
        ['Dość gróźb fuzją, klnę, pych i małżeństw!', 'Polish'],
        ['Pójdź w loch zbić małżeńską gęś futryn!', 'Polish'],
        ['Chwyć małżonkę, strój bądź pleśń z fugi.', 'Polish'],
        ['Koń i żółw grali w kości z piękną ćmą u źródła.', 'Polish'],
        ['Um pequeno jabuti xereta viu dez cegonhas felizes.', 'Portuguese'],
        ['Blitz prende ex-vesgo com cheque fajuto.', 'Portuguese'],
        ['Gazeta publica hoje no jornal uma breve nota de faxina na quermesse.', 'Portuguese'],
        ['Zebras caolhas de Java querem passar fax para moças gigantes de New York.', 'Portuguese'],
        ['Luís argüia à Júlia que «brações, fé, chá, óxido, pôr, zângão» eram palavras do português.', 'Portuguese'],
        ['À noite, vovô Kowalsky vê o ímã cair no pé do pingüim queixoso e vovó põe açúcar no chá de tâmaras do jabuti feliz.', 'Portuguese'],
        ['Muzicologă în bej vând whisky și tequila, preț fix.', 'Romanian'],
        ['Bând whisky, jazologul șprițuit vomă fix în tequila.', 'Romanian'],
        ['Ex-sportivul își fumează jucăuș țigara bând whisky cu tequila.', 'Romanian'],
        ['Înjurând pițigăiat, zoofobul comandă vexat whisky și tequila.', 'Romanian'],
        ['Mus d’fhàg Cèit-Ùna ròp Ì le ob.', 'Scottish Gaelic'],
        ['Gojazni đačić s biciklom drži hmelj i finu vatu u džepu nošnje.', 'Serbian'],
        ['Fin džip, gluh jež i čvrst konjić dođoše bez moljca.', 'Serbian'],
        ['Ljubazni fenjerdžija čađavog lica hoće da mi pokaže štos.', 'Serbian'],
        ['Ajšo, lepoto i čežnjo, za ljubav srca moga dođi u Hadžiće na kafu.', 'Serbian'],
        ['Kŕdeľ ďatľov učí koňa žrať kôru.', 'Slovak'],
        ['Kŕdeľ šťastných ďatľov učí pri ústí Váhu mĺkveho koňa obhrýzať kôru a žrať čerstvé mäso.', 'Slovak'],
        ['Hišničin bratec vzgaja polže pod fikusom.', 'Slovenian'],
        ['Besni dirkač iz formule žuga cehu poštarjev.', 'Slovenian'],
        ['Fučka se mi hladna goveja žolca brez pršuta.', 'Slovenian'],
        ['Šerif bo za vajo spet kuhal domače žgance.', 'Slovenian'],
        ['Piškur molče grabi fižol z dna cezijeve hoste.', 'Slovenian'],
        ['V kožuščku hudobnega fanta stopiclja mizar.', 'Slovenian'],
        ['Benjamín pidió una bebida de kiwi y fresa; Noé, sin vergüenza, la más exquisita champaña del menú.', 'Spanish'],
        ['José compró una vieja zampoña en Perú. Excusándose, Sofía tiró su whisky al desagüe de la banqueta.', 'Spanish'],
        ['El veloz murciélago hindú comía feliz cardillo y kiwi. La cigüeña tocaba el saxofón detrás del palenque de paja.', 'Spanish'],
        ['El pingüino Wenceslao hizo kilómetros bajo exhaustiva lluvia y frío; añoraba a su querido cachorro.', 'Spanish'],
        ['La niña, viéndose atrapada en el áspero baúl índigo y sintiendo asfixia, lloró de vergüenza; mientras que la frustrada madre llamaba a su hija diciendo: “¿Dónde estás Waleska?”.', 'Spanish'],
        ['Jovencillo emponzoñado de whisky: ¡qué figurota exhibe!', 'Spanish'],
        ['Ese libro explica en su epígrafe las hazañas y aventuras de Don Quijote de la Mancha en Kuwait.', 'Spanish'],
        ['Queda gazpacho, fibra, látex, jamón, kiwi y viñas.', 'Spanish'],
        ['Whisky bueno: ¡excitad mi frágil pequeña vejez!', 'Spanish'],
        ['Es extraño mojar queso en la cerveza o probar whisky de garrafa.', 'Spanish'],
        ['Flygande bäckasiner söka hwila på mjuka tuvor.', 'Swedish'],
        ['Yxskaftbud, ge vår WC-zonmö IQ-hjälp.', 'Swedish'],
        ['Gud hjälpe Zorns mö qvickt få byxa.', 'Swedish'],
        ['Byxfjärmat föl gick på duvshowen.', 'Swedish'],
        ['Ang bawat rehistradong kalahok sa patimpalak ay umaasang magantimpalaan ng ñino.', 'Tagalog'],
        ['Pijamalı hasta yağız şoföre çabucak güvendi.', 'Turkish'],
        ['Saf ve haydut kız çocuğu bin plaj görmüş.', 'Turkish'],
        ['Öküz ajan hapse düştü yavrum, ocağı felç gibi.', 'Turkish'],
        ['Hayvancağız tüfekçide bagaj törpüsü olmuş.', 'Turkish'],
        ['Vakfın çoğu bu huysuz genci plajda görmüştü.', 'Turkish'],
        ['Fahiş bluz güvencesi yağdırma projesi çöktü.', 'Turkish'],
        ['Ìwò̩fà ń yò̩ séji tó gbojúmó̩, ó hàn pákànpò̩ gan-an nis̩é̩ rè̩ bó dò̩la.', 'Yoruba'],
        ['Parciais fy jac codi baw hud llawn dŵr ger tŷ Mabon.', 'Welsh'],
    ];
    
    var numItems = 5;
    
    var i;
    var randNum;
    for(i = 0; i < numItems; i++) {
        randNum = Math.floor(Math.random() * pangrams.length);
        app.selection[0].contents = pangrams[randNum][0] + " ";
        }
    };

insertText();
