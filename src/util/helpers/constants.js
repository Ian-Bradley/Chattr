export const GMT_HOURS = parseInt( new Date().toString().slice(29,31) );
export const GMT_MINUTES = parseInt( new Date().toString().slice(31,33) );
export const GMT_DIRECTION = new Date().toString().slice(28,29);

export const MODE_DEV = true;
export const WS_URL = 'ws://localhost:3001';
export const SERVER_URL = 'http://localhost:3001';

export const PAGE_LOAD_TRANSITION_DELAY = 200;
export const PAGE_LOAD_DELAY = 1000;
export const DEBOUNCE_DELAY = 250;
export const AXIOS_TIMEOUT = 5000;

export const CLASS_ACTIVE = 'active';
export const CLASS_DISABLED = 'disabled';
export const CLASS_HIDDEN = 'hidden';
export const CLASS_FADE = 'fade';

export const REGEX_IMAGE = /\.( gif|jp?g|png|svg|bmp|tiff|bat )$/i;
export const REGEX_ESCAPE_STRING = /[-\/\\^$*+?.()|[\]{}]/g;
export const REGEX_SPECIAL_CHARACTERS = /[^A-Za-z0-9\-\_]+/g;
export const REGEX_ACCENTED_CHARACTERS = /[\u0300-\u036f]/g;

export const ROLE_ADMIN = 'admin';
export const ROLE_MODERATOR = 'moderator';
export const ROLE_REGISTERED = 'registered';

export const MAX_CHARACTERS_NAME = 3;
export const MAX_CHARACTERS_PASSWORD = 3;

export const KEYCODE_ENTER = 13;
export const KEYCODE_ESCAPE = 27;

export const LOTR_NAMES = [
    'Adalgrim Took','Adanedhel','Adanel','Adrahil','Adrahil II','Aegnor','Ælfwine','Aerin','Agarwaen','Aikanáro','Aiwendil','Alatar','Alatáriel','Aldamir','Aldaron',
    'Aldor','Amandil','Amdír','Amlaith','Amras','Amrod','Amroth','Amrothos','Anairë','Anardil','Anárion','Anborn','Ancalagon','Andrast','Andreth','Andróg','Anfauglir',
    'Angbor','Angrod','Annatar','Ar-Abattârik','Ar-Adûnakhôr','Ar-Gimilzôr','Ar-Inziladûn','Ar-Pharazôn','Ar-Sakalthôr','Ar-Zimraphel','Ar-Zimrathôn','Arador','Araglas',
    'Aragorn I','Aragorn II','Aragost','Arahad','Arahad I','Arahad II','Arahael','Aranarth','Arantar','Aranuir','Araphant','Araphor','Arassuil','Aratan','Aratar',
    'Arathorn I','Arathorn II','Araval','Aravir','Aravorn','Aredhel','Aredhel','Argeleb','Argeleb I','Argeleb II','Argon','Argonui','Arien','Aros','Arthedain','Arvedui',
    'Arvegil','Arveleg I','Arveleg II','Arwen','Atanatar','Atanatar I','Atanatar II','Aulë','Ausir','Avranc','Azaghâl','Azog','Balbo Baggins','Baldor','Balin','Baragund',
    'Barahir','Baran','Bard the Bowman','Barliman Butterbur','Bauglir','Beechbone','Belecthor I','Belecthor II','Beleg','Beleg of Arnor','Belegorn','Belegund','Belemir',
    'Belladonna Took','Bëor','Beorn','Bereg','Beregond','Beren','Bergil','Berúthiel','Berylla Boffin','Bifur','Bilbo Baggins','Bill Ferny','Bill the Pony','Bob','Bofur',
    'Boldog','Bolg','Bombur','Bór','Borin','Boromir','Boron','Borondir','Brand','Brand II','Brandir','Brego','Bregolas','Bregor','Brodda','Brytta Léofa',
    'Bucca of the Marish','Bullroarer Took','Bungo Baggins','Calembel','Calimehtar','Calmacil','Captain of the Haven','Caranthir','Carcharoth','Carl Cotton',
    'Castamir the Usurper','Celeborn','Celebrían','Celebrimbor','Celebrindor','Celegorm','Celepharn','Cemendur','Ceorl','Círdan','Cirion','Ciryaher','Ciryandil',
    'Ciryon','Curufin','Curunír','Daeron','Dáin I','Dáin II Ironfoot','Damrod','Déagol','Denethor','Denethor I','Denethor II','Déor','Deórwine','Déorwine','Dernhelm',
    'Derufin','Dervorin','Diamond of Long Cleeve','Dior','Dís','Dori','Dorlas','Draugluin','Duilin','Duilin son of Duinhir','Duinhir','Dúnhere','Durin','Durin II',
    'Durin III','Durin IV','Durin V','Durin VI','Durin VII','Durin\'s Bane','Dwalin','Eärendil','Eärendil of Gondor','Eärendur of Andúnië','Eärendur of Arnor',
    'Eärendur son of Tar-Amandil','Eärnil I','Eärnil II','Eärnur','Eärwen','Ecthelion','Ecthelion I','Ecthelion II','Ecthelion of the Fountain','Egalmoth','Eiliniel',
    'Elanor the Fair','Elbereth','Eldacar','Eldacar of Arnor','Eldacar of Gondor','Eldarion','Elemmakil','Elendil','Elendor','Elendur of Arnor','Elendur son of Isildur',
    'Elenna','Elenwë','Elessar','Elfhelm','Elfhild','Elfwine','Elladan','Elmo','Elrohir','Elrond','Elros','Elu','Eluréd and Elurín','Elven-king','Elwë','Elwing',
    'Emeldir','Emerië','Enel','Enelyë','Eöl','Éomer','Éomund','Eönwë','Eorl the Young','Éothain','Éothéod','Éowyn','Eradan','Erendis','Erestor','Erkenbrand',
    'Eru Ilúvatar','Estë','Estel','Estelmo','Faniel','Faramir','Faramir Took','Farmer Cotton','Farmer Maggot','Fastred of Greenholm','Fëanor','Felaróf','Fengel',
    'Ferumbras III  Took','Fíli','Finarfin','Findis','Finduilas','Finduilas of Dol Amroth','Fingolfin','Fingon','Finrod Felagund','Finvain','Finwë','Fíriel',
    'Folco Boffin','Folcwine','Forlong the Fat','Fortinbras II  Took','Fréa','Fréaláf Hildeson','Fréawine','Freca','Fredegar Bolger','Frerin','Frodo Baggins',
    'Frór','Fuinur','Fundin','Gaffer Gamgee','Galador','Galadriel','Galdor of Gondolin','Galdor of the Havens','Galdor the Tall','Gamil Zirak','Gamling','Gandalf',
    'Gárulf','Gerontius Took','Ghân-buri-Ghân','Gil-galad','Gildor Inglorion','Gilrain','Gimilkhâd','Gimli','Ginglith','Girion','Glanhír','Glaurung','Gléowine','Glóin',
    'Glóredhel','Glorfindel','Golasgil','Goldberry','Goldwine','Golfimbul','Gollum','Gorbag','Gorlim','Gormadoc Brandybuck','Gorthaur','Gothmog','Gram','Gríma',
    'Grimbold','Grishnákh','Grór','Guthláf','Gwaihir','Gwathir','Gwindor','Hador','Halbarad','Haldad','Haldan','Haldar','Haldir','Haldir of Lórien','Haleth','Hallas',
    'Halmir','Háma','Hamfast Gamgee','Handir','Hardang','Harding','Hareth','Harry Goatleaf','Helm Hammerhand','Herefara','Herion','Herubrand','Herucalmo','Herumor',
    'Hirgon','Hiril','Hirluin','Hob Hayward','Hound of Sauron','Huan','Hundar','Huor','Húrin','Húrin I','Húrin II','Húrin the Tall','Hyarmendacil I','Hyarmendacil II',
    'Ibûn','Idril','Ilmarë','Ilúvatar','Imbar','Imin','Iminyë','Imrahil','Indis','Inglor','Ingold','Ingwë','Inzilbêth','Ioreth','Iorlas','Írildë','Irimë','Irmo',
    'Isildur','Isilmë','Isilmo','Isumbras Took','Ivriniel','Khamûl','Khîm','Kíli','King of the Dead','Lagduf','Lalaith','Landroval','Leaflock','Legolas','Lenwë','Léod',
    'Lindir','Lobelia Sackville-Baggins','Lotho Sackville-Baggins','Lugdush','Lúthien','Mablung','Maedhros','Maeglin','Maglor','Magor','Mahtan','Maiar','Malach',
    'Malbeth the Seer','Mallor','Malvegil','Man in the Moon','Manthor','Manwë','Marach','Mardil Voronwë','Mat Heathertoes','Mauhúr','Meleth','Melian','Meneldil',
    'Meneldor','Meriadoc Brandybuck','Mîm','Minalcar','Minardil','Míriel','Mithrandir','Morgoth','Morwen','Morwen Steelsheen','Mouth of Sauron','Muzgash','Nahar','Náin',
    'Náin I','Náin II','Námo','Narmacil I','Narmacil II','Narvi','Nazgûl','Nerdanel','Nessa','Nienna','Nienor','Nimloth','Nimrodel','Níniel','Nob','Nóm','Nori',
    'Odo Proudfoot','Ohtar','Óin son of Glóin','Óin son of Gróin','Old Man Willow','Old Noakes','Olórin','Olwë','Ondoher','Ori','Ornendil','Orodreth','Oromë','Oropher',
    'Orophin','Ossë','Ostoher','Paladin II Took','Paladin Took','Pallando','Pearl Took','Pelendur','Pengolodh','Peregrin Took','Pervinca Took','Pimpernel Took',
    'Primula Brandybuck','Queen Berúthiel','Quickbeam','Radagast','Radbug','Rían','Robin Smallburrow','Rómendacil I','Rómendacil II','Rosie Cotton','Rowlie Appledore',
    'Rúmil','Sador','Saeros','Salgant','Salmar','Samwise Gamgee','Sancho Proudfoot','Saruman','Sauron','Scatha','Shadowfax','Shagrat','Shelob','Silmariën','Singollo',
    'Siriondil','Skinbark','Smaug','Sméagol','Snaga','Snowmane','Soronto','Strider','Tal-Elmar','Tar-Alcarin','Tar-Aldarion','Tar-Amandil','Tar-Anárion','Tar-Ancalimë',
    'Tar-Ancalimon','Tar-Anducal','Tar-Ardamin','Tar-Atanamir','Tar-Calion','Tar-Calmacil','Tar-Ciryatan','Tar-Elendil','Tar-Falassion','Tar-Herunúmen','Tar-Hostamir',
    'Tar-Meneldur','Tar-Minastir','Tar-Minyatur','Tar-Palantir','Tar-Súrion','Tar-Telemmaitë, ','Tar-Telemnar','Tar-Telperiën','Tar-Vanimeldë','Tarannon Falastur',
    'Tarcil','Targon','Tarondor of Arnor','Tarondor of Gondor','Tata','Tatië','Ted Sandyman','Telchar','Telemnar','Telumehtar','Thengel','Théoden','Théodred','Théodwyn',
    'Thingol','Thorin I','Thorin II Oakenshield','Thorin III Stonehelm','Thorondir','Thorondor','Thráin I','Thráin II','Thranduil','Thrór','Tilion','Tindomiel',
    'Tinúviel','Tom Bombadil','Tom Pickthorn','Treebeard','Trotter','Tulkas','Tuor','Turambar','Turgon','Túrin','Túrin I','Túrin II','Ufthak','Uglúk','Uinen','Uldor',
    'Ulfang','Ulfast','Ulmo','Ulwarth','Umbardacil','Undómiel','Ungoliant','Uolë Kúvion','Urwen','Vairë','Valacar','Valandil of Andúnië','Valandil of Arnor','Valandur',
    'Vána','Varda','Vardamir Nólimon','Vidugavia','Vidumavi','Vinyarion','Vorondil the Hunter','Voronwë','Walda','Watcher in the Water','Wídfara','Will Whitfoot',
    'Witch-king of Angmar','Wormtongue','Wulf','Yavanna','Yávien'
];