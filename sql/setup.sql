-- Use this file to define your SQL tables
-- The SQL in this file will be executed when you run `npm run setup-db`
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS achievements;
DROP TABLE IF EXISTS magic_a;
DROP TABLE IF EXISTS magic_b;
DROP TABLE IF EXISTS magic_c;
DROP TABLE IF EXISTS magic_d;
DROP TABLE IF EXISTS magic_e;
DROP TABLE IF EXISTS magic_f;
DROP TABLE IF EXISTS magic_g;
DROP TABLE IF EXISTS magic_h;
DROP TABLE IF EXISTS magic_i;
DROP TABLE IF EXISTS resistance;
DROP TABLE IF EXISTS weapons;
DROP TABLE IF EXISTS dragons;
DROP TABLE IF EXISTS figurines;
DROP TABLE IF EXISTS weapon_warning;
DROP TABLE IF EXISTS mounts;


CREATE TABLE users (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  email VARCHAR,
  password_hash VARCHAR NOT NULL,
  first_name VARCHAR NOT NULL,
  last_name VARCHAR NOT NULL
);

CREATE TABLE achievements (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY, 
  title VARCHAR NOT NULL, 
  detail VARCHAR NOT NULL,
  reward INT NOT NULL,
  points INT NOT NULL
);

CREATE TABLE magic_a (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  die_value INTEGER NOT NULL,
  item VARCHAR NOT NULL,
  chance VARCHAR NOT NULL
);

CREATE TABLE magic_b (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  die_value INTEGER NOT NULL,
  item VARCHAR NOT NULL,
  chance VARCHAR NOT NULL
);

CREATE TABLE magic_c (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  die_value INTEGER NOT NULL,
  item VARCHAR NOT NULL,
  chance VARCHAR NOT NULL
);

CREATE TABLE magic_d (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  die_value INTEGER NOT NULL,
  item VARCHAR NOT NULL,
  chance VARCHAR NOT NULL
);

CREATE TABLE magic_e (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  die_value INTEGER NOT NULL,
  item VARCHAR NOT NULL,
  chance VARCHAR NOT NULL
);

CREATE TABLE magic_f (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  die_value INTEGER NOT NULL,
  item VARCHAR NOT NULL,
  chance VARCHAR NOT NULL
);

CREATE TABLE magic_g (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  die_value INTEGER NOT NULL,
  item VARCHAR NOT NULL,
  chance VARCHAR NOT NULL
);

CREATE TABLE magic_h (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  die_value INTEGER NOT NULL,
  item VARCHAR NOT NULL,
  chance VARCHAR NOT NULL
);

CREATE TABLE magic_i (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  die_value INTEGER NOT NULL,
  item VARCHAR NOT NULL,
  chance VARCHAR NOT NULL
);

CREATE TABLE resistance (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  die_value INTEGER NOT NULL,
  resistance_type VARCHAR NOT NULL
);

CREATE TABLE weapons (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  die_value INTEGER NOT NULL,
  weapon_type VARCHAR NOT NULL
);

CREATE TABLE dragons (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  die_value INTEGER NOT NULL,
  dragon_type VARCHAR NOT NULL,
  resistance_type VARCHAR NOT NULL
);

CREATE TABLE figurines (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  die_value INTEGER NOT NULL,
  figurine_type VARCHAR NOT NULL
);

CREATE TABLE weapon_warning (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  die_value INTEGER NOT NULL,
  weapon_type VARCHAR NOT NULL
);

CREATE TABLE mounts (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  die_value INTEGER NOT NULL, 
  mount_type VARCHAR NOT NULL
);

INSERT INTO magic_a (
  die_value,
  item,
  chance
)
VALUES
(1, 'Potion of Healing', '01-50'),
(2, 'Spell Scroll (Cantrip)', '51-60'),
(3, 'Potion of Climbing', '61-70'),
(4, 'Spell Scroll (1st Level)', '71-90'),
(5, 'Spell Scroll (2nd Level)', '91-94'),
(6, 'Potion of Greater Healing', '95-98'),
(7, 'Bag of Holding', '99'),
(8, 'Driftglobe', '100');

INSERT INTO magic_b (
  die_value,
  item,
  chance
)
VALUES
(1, 'Potion of Greater Healing', '01-15'),
(2, 'Potion of Fire Breath', '16-22'),
(3, 'Potion of Resistance', '23-29'),
(4, 'Ammunition, +1', '30-34'),
(5, 'Potion of Animal Friendship', '35-39'),
(6, 'Potion of Hill Giant Strength', '40-44'),
(7, 'Potion of Growth', '45-49'),
(8, 'Potion of Water Breathing', '50-54'),
(9, 'Spell Scroll (2nd Level)', '55-59'),
(10, 'Spell Scroll (3rd Level)', '60-64'),
(11, 'Bag of Holding', '65-67'),
(12, 'Keoghtoms Ointment', '68-70'),
(13, 'Oil of Slipperiness', '71-73'),
(14, 'Dust of Disappearance', '74-75'),
(15, 'Dust of Dryness', '76-77'),
(16, 'Dust of Sneezing and Choking', '78-79'),
(17, 'Elemental Gem', '80-81'),
(18, 'Philter of Love', '82-83'),
(19, 'Alchemy Jug', '84'),
(20, 'Cap of Water Breathing', '85'),
(21, 'Cloak of Manta Ray', '86'),
(22, 'Driftglobe', '87'),
(23, 'Goggles of Night', '88'),
(24, 'Helm of Comprehending Languages', '89'),
(25, 'Immovable Rod', '90'),
(26, 'Lantern of Revealing', '91'),
(27, 'Mariners Lantern', '92'),
(28, 'Mithral Armor', '93'),
(29, 'Potion of Poison', '94'),
(30, 'Ring of Swimming', '95'),
(31, 'Robe of Useful Items', '96'),
(32, 'Rope of Climbing', '97'),
(33, 'Saddle of the Cavalier', '98'),
(34, 'Wand of Magic Detection', '99'),
(35, 'Wand of Secrets', '100');

INSERT INTO magic_c (
  die_value,
  item,
  chance
)
VALUES 
(1, 'Potion of Superior Healing', '01-15'),
(2, 'Spell Scroll (4th Level)', '16-22'),
(3, 'Ammunition, +2', '23-27'),
(4, 'Potion of Clairvoyance', '28-32'),
(5, 'Potion of Diminution', '33-37'),
(6, 'Potion of Gaseous Form', '38-42'),
(7, 'Potion of Frost Giant Strength', '43-47'),
(8, 'Potion of Stone Giant Strength', '48-52'),
(9, 'Potion of Heroism', '53-57'),
(10, 'Potion of Invulnerability', '58-62'),
(11, 'Potion of Mind Reading', '63-67'),
(12, 'Spell Scroll (5th Level)', '68-72'),
(13, 'Elixir of Health', '73-75'),
(14, 'Oil of Etherealness', '76-78'),
(15, 'Potion of Fire Giant Strength', '79-81'),
(16, 'Quaals Feather Token', '82-84'),
(17, 'Scroll of Protection', '85-87'),
(18, 'Bag of Beans', '88-89'),
(19, 'Bead of Force', '90-91'),
(20, 'Chime of Opening', '92'),
(21, 'Decanter of Endless Water', '93'),
(22, 'Eyes of Minute Seeing', '94'),
(23, 'Folding Boat', '95'),
(24, 'Hewards Handy Haversack', '96'),
(25, 'Horseshoes of Speed', '97'),
(26, 'Necklace of Fireballs', '98'),
(27, 'Periapt of Health', '99'),
(28, 'Sending Stones', '100');

INSERT INTO magic_d (
  die_value,
  item,
  chance
)
VALUES
(1, 'Potion of Supreme Healing', '01-20'),
(2, 'Potion of Invisibility', '21-30'),
(3, 'Potion of Speed', '31-40'),
(4, 'Spell Scroll (6th Level)', '41-50'),
(5, 'Spell Scroll (7th Level)', '51-57'),
(6, 'Ammunition, +3', '58-62'),
(7, 'Oil of Sharpness', '63-67'),
(8, 'Potion of Flying', '68-72'),
(9, 'Potion of Cloud Giant Strength', '73-77'),
(10, 'Potion of Longevity', '78-82'),
(11, 'Potion of Vitality', '83-87'),
(12, 'Spell Scroll (8th Level)', '88-92'),
(13, 'Horseshoes of Zephyr', '93-95'),
(14, 'Nolzurs Marvelous Pigments', '96-98'),
(15, 'Bag of Devouring', '99'),
(16, 'Portable Hole', '100');

INSERT INTO magic_e (
  die_value,
  item,
  chance
)
VALUES
(1, 'Spell Scroll (8th Level)', '01-30'),
(2, 'Potion of Storm Giant Strength', '31-55'),
(3, 'Potion of Supreme Healing', '56-70'),
(4, 'Spell Scroll (9th Level)', '71-85'),
(5, 'Universal Solvent', '86-93'),
(6, 'Arrow of Slaying', '94-98'),
(7, 'Sovereign Glue', '99-100');

INSERT INTO magic_f (
  die_value,
  item,
  chance
)
VALUES
-- //TODO Roll from Weapons Table
(1, 'Weapon, +1', '01-15'),
(2, 'Shield, +1', '16-18'),
(3, 'Sentinal Shield', '19-21'),
(4, 'Amulet of Proof Against Detection and Location', '22-23'),
(5, 'Boots of Elvenkind', '24-25'),
(6, 'Boots of Striding and Springing', '26-27'),
(7, 'Bracers of Archery', '28-29'),
(8, 'Brooch of Shielding', '30-31'),
(9, 'Broom of Flying', '32-33'),
(10, 'Cloak of Elvenkind', '34-35'),
(11, 'Cloak of Protection', '36-37'),
(12, 'Gauntlets of Ogre Power', '38-39'),
(13, 'Hat of Disguise', '40-41'),
(14, 'Javelin of Lightning', '42-43'),
(15, 'Pearl of Power', '44-45'),
(16, 'Rod of Pact Keeper, +1', '46-47'),
(17, 'Slippers of Spider Climbing', '48-49'),
(18, 'Staff of the Adder', '50-51'),
(19, 'Staff of the Python', '52-53'),
(20, 'Sword of Vengeance', '54-55'),
(21, 'Trident of Fish Command', '56-57'),
(22, 'Wand of Magic Missiles', '58-59'),
(23, 'Wand of the War Mage, +1', '60-61'),
(24, 'Wand of Web', '62-63'),
-- //TODO Add Table for Weapons of Warning
(25, 'Weapon of Warning', '64-65'),
(26, 'Adamantine Armor (Chain Mail)', '66'),
(27, 'Adamantine Armor (Chain Shirt)', '67'),
(28, 'Adamantine Armor (Scale Mail)', '68'),
(29, 'Bag of Tricks (Grey)', '69'),
(30, 'Bag of Tricks (Rust)', '70'),
(31, 'Bag of Tricks (Tan)', '71'),
(32, 'Boots of the Winterlands', '72'),
(33, 'Circlet of Blasting', '73'),
(34, 'Deck of Illusions', '74'),
(35, 'Eversmoking Bottle', '75'),
(36, 'Eyes of Charming', '76'),
(37, 'Eyes of the Eagle', '77'),
(38, 'Figurine of Wondrous Power (Silver Raven)', '78'),
(39, 'Gem of Brightness', '79'),
(40, 'Gloves of Missile Snaring', '80'),
(41, 'Gloves of Swimming and Climbing', '81'),
(42, 'Gloves of Thievery', '82'),
(43, 'Headband of Intellect', '83'),
(44, 'Helm of Telepathy', '84'),
(45, 'Instrument of the Bards (Doss Lute)', '85'),
(46, 'Instrument of the Bards (Fochlucan Bandore)', '86'),
(47, 'Instrument of the Bards (Mac-Fuimidh Cittern)', '87'),
(48, 'Medallion of Thoughts', '88'),
(49, 'Necklace of Adaptation', '89'),
(50, 'Periapt of Wound Closure', '90'),
(51, 'Pipes of Haunting', '91'),
(52, 'Pipes of the Sewers', '92'),
(53, 'Ring of Jumping', '93'),
(54, 'Ring of Mind Shielding', '94'),
(55, 'Ring of Warmth', '95'),
(56, 'Ring of Water Walking', '96'),
(57, 'Quiver of Ehlonna', '97'),
(58, 'Stone of Good Luck', '98'),
(59, 'Wind Fan', '99'),
(60, 'Winged Boots', '100');

INSERT INTO magic_g (
  die_value,
  item, 
  chance
)
VALUES
(1, 'Weapon, +2', '01-11'),
-- //TODO Create table for Figurine of Wondrous Power
(2, 'Figurine of Wondrous Power', '12-14'),
(3, 'Adamantine Armor (Breastplate)', '15'),
(4, 'Adamantine Armor (Splint)', '16'),
(5, 'Amulet of Health', '17'),
(6, 'Armor of Vulnerability', '18'),
(7, 'Arrow-Catching Shield', '19'),
(8, 'Belt of Dwarvenkind', '20'),
(9, 'Belt of Hill Giant Strength', '21'), 
(10, 'Berserker Axe', '22'),
(11, 'Boots of Levitation', '23'),
(12, 'Boots of Speed', '24'),
(13, 'Bowl of Commanding Water Elementals', '25'), 
(14, 'Bracers of Defense', '26'),
(15, 'Brazier of Commanding Fire Elementals', '27'),
(16, 'Cape of the Mountebank', '28'),
(17, 'Censor of Controlling Air Elementals', '29'),
(18, 'Armor, +1 Chain Mail', '30'),
-- //TODO Roll from Resistance Table
(19, 'Armor of Resistance (Chain Mail)', '31'),
(20, 'Armor of Resistance (Chain Shirt)', '32'),
(21, 'Armor, +1 Chain Shirt', '33'),
(22, 'Cloak of Displacement', '34'),
(23, 'Cloak of the Bat', '35'),
(24, 'Cube of Force', '36'),
(25, 'Daerns Instant Fortress', '37'),
(26, 'Dagger of Venom', '38'),
(27, 'Dimensional Shackles', '39'),
(28, 'Dragon Slayer', '40'),
(29, 'Elven Chain', '41'),
(30, 'Flame Tongue', '42'),
(31, 'Gem of Seeing', '43'), 
(32, 'Giant Slayer', '44'), 
(33, 'Clamoured Studded Leather', '45'),
(34, 'Helm of Teleportation', '46'),
(35, 'Horn of Blasting', '47'),
(36, 'Horn of Valhalla (Silver or Brass)', '48'),
(37, 'Instrument of the Bards (Canaithmandolin)', '49'),
(38, 'Instrument of the Bards (Cii Lyre)', '50'),
(39, 'Ioun Stone (Awareness)', '51'),
(40, 'Ioun Stone (Protection)', '52'),
(41, 'Ioun Stone (Reserve)', '53'),
(42, 'Ioun Stone (Sustenance)', '54'),
(43, 'Iron Bands of Bilarro', '55'),
(44, 'Armor, +1 Leather', '56'), 
(45, 'Armor of Resistance (Leather)', '57'),
(46, 'Mace of Disruption', '58'),
(47, 'Mace of Smiting', '59'),
(48, 'Mace of Terror', '60'), 
(49, 'Mantle of Spell Resistance', '61'),
(50, 'Necklace of Prayer Beads', '62'), 
(51, 'Periapt of Proof against Poison', '63'),
(52, 'Ring of Animal Influence', '64'),
(53, 'Ring of Evasion', '65'),
(54, 'Ring of Feather Falling', '66'),
(55, 'Ring of Free Action', '67'),
(56, 'Ring of Protection', '68'),
-- //TODO Roll from Resistance Table 
(57, 'Ring of Resistance', '69'),
(58, 'Ring of Spell Storing', '70'),
(59, 'Ring of the Ram', '71'),
(60, 'Ring of X-Ray Vision', '72'),
(61, 'Robe of Eyes', '73'),
(62, 'Rod of Rulership', '74'),
(63, 'Rod of the Pact Keeper, +2', '75'),
(64, 'Rope of Entanglement', '76'),
(65, 'Armor, +1 Scale Mail', '77'),
-- //TODO Roll from Resistance Table
(66, 'Armor of Resistance (Scale Mail)', '78'),
(67, 'Shield, +2', '79'),
(68, 'Shield of Missile Attraction', '80'),
(69, 'Staff of Charming', '81'),
(70, 'Staff of Healing', '82'),
(71, 'Staff of Swarming Insects', '83'),
(72, 'Staff of Woodlands', '84'),
(73, 'Staff of Withering', '85'),
(74, 'Stone of Controlling Earth Elementals', '86'),
(75, 'Sun Blade', '87'),
(76, 'Sword of Life Stealing', '88'),
(77, 'Sword of Wounding', '89'),
(78, 'Tentacle Rod', '90'),
-- //TODO Roll from Weapon Table
(79, 'Vicious Weapon', '91'),
(80, 'Wand of Binding', '92'),
(81, 'Wand of Enemy Detection', '93'),
(82, 'Wand of Fear', '94'),
(83, 'Wand of Fireballs', '95'),
(84, 'Wand of Lightning Bolts', '96'),
(85, 'Wand of Paralysis', '97'),
(86, 'Wand of the War Mage', '98'),
(87, 'Wand of Wonder', '99'),
(88, 'Wings of Flying', '100');

INSERT INTO magic_h (
  die_value,
  item,
  chance
)
VALUES
-- //TODO Roll from Weapon Table
(1, 'Weapon, +3', '01-10'),
(2, 'Amulet of Planes', '11-12'),
(3, 'Carpet of Flying', '13-14'),
(4, 'Crystal Ball (Very Rare Version)', '15-16'),
(5, 'Ring of Regeneration', '17-18'),
(6, 'Ring of Shooting Stars', '19-20'),
(7, 'Ring of Telekinesis', '21-22'),
(8, 'Robe of Scintillating Colors', '23-24'),
(9, 'Robe of Stars', '25-26'),
(10, 'Rod of Absorption', '27-28'),
(11, 'Rod of Alertness', '29-30'),
(12, 'Rod of Security', '31-32'),
(13, 'Rod of the Pact Keeper, +3', '33-34'),
(14, 'Scimitar of Speed', '35-36'),
(15, 'Shield, +3', '37-38'),
(16, 'Staff of Fire', '39-40'),
(17, 'Staff of Frost', '41-42'),
(18, 'Staff of Power', '43-44'),
(19, 'Staff of Striking', '45-46'),
(20, 'Staff of Thunder and Lightning', '47-48'),
(21, 'Sword of Sharpness', '49-50'),
(22, 'Wand of Polymorph', '51-52'),
(23, 'Wand of the War Mage, +3', '53-54'),
(24, 'Adamantine Armor (Half Plate)', '55'),
(25, 'Adamantine Armor (Plate)', '56'),
(26, 'Animated Shield', '57'),
(27, 'Belt of Fire Giant Strength', '58'),
(28, 'Belt of Frost (or Stone) Giant Strength', '59'),
(29, 'Armor, +1 Breastplate', '60'),
-- //TODO Roll from Resistance Table
(30, 'Armor of Resistance (Breastplate)', '61'),
(31, 'Candle of Invocation', '62'),
(32, 'Armor, +2 Chainmail', '63'),
(33, 'Armor, +2 Chanshirt', '64'),
(34, 'Cloak of Arachnida', '65'),
(35, 'Dancing Sword', '66'),
(36, 'Demon Armor', '67'),
(37, 'Dragon Scale Mail', '68'),
(38, 'Dwarven Plate', '69'),
(39, 'Dwarven Thrower', '70'),
(40, 'Efreeti Bottle', '71'),
(41, 'Figurine of Wondrous Power (Obsidian Steed)', '72'),
(42, 'Frost Band', '73'),
(43, 'Helm of Brilliance', '74'),
(44, 'Horn of Valhalla (Bronze)', '75'),
(45, 'Instrument of the Bards (Anstruth Harp)', '76'),
(46, 'Ioun Stone (Absorption)', '77'),
(47, 'Ioun Stone (Agility)', '78'),
(48, 'Ioun Stone (Fortitude)', '79'),
(49, 'Ioun Stone (Insight)', '80'),
(50, 'Ioun Stone (Intellect)', '81'),
(51, 'Ioun Stone (Leadership)', '82'),
(52, 'Ioun Stone (Strength)', '83'),
(53, 'Armor, +2 Leather', '84'),
(54, 'Manual of Bodily Health', '85'),
(55, 'Manual of Gainful Exercise', '86'),
(56, 'Manual of Golems', '87'), 
(57, 'Manual of Quickness of Action', '88'),
(58, 'Mirror of Life Trapping', '89'),
(59, 'Nine Lives Stealer', '90'),
(60, 'Oathbow', '91'),
(61, 'Armor, +2 Scale Mail', '92'),
(62, 'Spellguard Shield', '93'),
(63, 'Armor, +1 Splint', '94'),
-- //TODO Roll from Resistance Table
(64, 'Armor of Resistance (Splint)', '95'),
(65, 'Armor, +1 Studded Leather', '96'),
-- //TODO Roll from Resistance Table
(66, 'Armor of Resistance (Studded Leather)', '97'),
(67, 'Tome of Clear Thought', '98'),
(68, 'Tome of Leadership and Influence', '99'),
(69, 'Tome of Understanding', '100');

INSERT INTO magic_i (
  die_value,
  item,
  chance
)
VALUES
(1, 'Defender', '01-05'),
(2, 'Hammer of Thunderbolts', '06-10'),
(3, 'Luck Blade', '11-15'),
(4, 'Sword of Answering', '16-20'),
(5, 'Holy Avenger', '21-23'), 
(6, 'Ring of Djinni Summoning', '24-26'),
(7, 'Ring of Invisibility', '27-29'),
(8, 'Ring of Spell Turning', '30-32'),
(9, 'Rod of Lordly Might', '33-35'),
(10,'Staff of the Magi', '36-38'),
(11, 'Vorpal Sword', '39-41'),
(12, 'Belt of Cloud Giant Strength', '42-43'),
(13, 'Armor, +2 Breastplate', '44-45'),
(14, 'Armor, +3 Chain Mail', '46-47'),
(15, 'Armor, +3 Chain Shirt', '48-49'),
(16, 'Cloak of Invisibility', '50-51'),
(17, 'Crystal Ball (Legendary Version)', '52-53'),
(18, 'Armor, +1 Half Plate', '54-55'),
(19, 'Iron Flask', '56-57'),
(20, 'Armor, +3 Leather', '58-59'),
(21, 'Armor, +1 Plate', '60-61'),
(22, 'Robe of the Archmagi', '62-63'),
(23, 'Rod of Resurrection', '64-65'),
(24, 'Armor, +1 Scale Mail', '66-67'),
(25, 'Scarab of Protection', '68-69'),
(26, 'Armor, +2 Splint', '70-71'),
(27, 'Armor, +2 Studded Leather', '72-73'),
(28, 'Well of Many Worlds', '74-75'),
-- //TODO Roll from a Magic Armor Table d12
(29, 'Magic Armor', '76'),
(30, 'Apparatus of Kwalish', '77'),
(31, 'Armor of Invulnerability', '78'),
(32, 'Belt of Storm Giant Strength', '79'),
(33, 'Cubic Gate', '80'),
(34, 'Deck of Many Things', '81'),
(35, 'Efreeti Chain', '82'),
-- //TODO Roll from Resistance Table
(36, 'Armor of Resistance (Half Plate)', '83'),
(37, 'Horn of Valhalla (Iron)', '84'),
(38, 'Instrument of the Bards (Ollamh Harp)', '85'),
(39, 'Ioun Stone (Greater Absorption)', '86'),
(40, 'Ioun Stone (Mastery)', '87'),
(41, 'Ioun Stone (Regeneration)', '88'),
(42, 'Plate Armor of Etherealness', '89'),
-- //TODO Roll from Resistance Table
(43, 'Plate Armor of Resistance', '90'),
(44, 'Ring of Air Elemental Command', '91'),
(45, 'Ring of Earth Elemental Command', '92'),
(46, 'Ring of Fire Elemental Command', '93'), 
(47, 'Ring of Three Wishes', '94'),
(48, 'Ring of Water Elemental Command', '95'),
(49, 'Sphere of Annihilation', '96'),
(50, 'Talisman of Pure Good', '97'),
(51, 'Talisman of the Sphere', '98'),
(52, 'Talisman of Ultimate Evil', '99'),
(53, 'Tome of the Stilled Tongue', '100');

INSERT INTO resistance (
  die_value,
  resistance_type
)
VALUES
(1, 'Acid'),
(2, 'Cold'),
(3, 'Fire'),
(4, 'Force'),
(5, 'Lightning'),
(6, 'Necrotic'),
(7, 'Poison'),
(8, 'Psychic'),
(9, 'Radiance'),
(10, 'Thunder');

INSERT INTO weapons (
  die_value,
  weapon_type
)
VALUES
(1, 'Club'),
(2, 'Dagger'),
(3, 'Greatclub'),
(4, 'Handaxe'),
(5, 'Javelin'),
(6, 'Light Hammer'),
(7, 'Mace'),
(8, 'Quarterstaff'),
(9, 'Sickle'),
(10, 'Spear'),
(11, 'Yklwa'),
(12, 'Boomerang'),
(13, 'Crossbow, Light'),
(14, 'Dart'),
(15, 'Shortbow'),
(16, 'Sling'),
(17, 'Battleaxe'),
(18, 'Flail'),
(19, 'Glaive'),
(20, 'Greatsword'),
(21, 'Halberd'),
(22, 'Lance'),
(23, 'Longsword'),
(24, 'Maul'),
(25, 'Morningstar'),
(26, 'Pike'),
(27, 'Rapier'),
(28, 'Scimitar'),
(29, 'Shortword'),
(30, 'Trident'),
(31, 'War Pick'),
(32, 'Warhammer'),
(33, 'Whip'),
(34, 'Blowgun'),
(35, 'Crossbow, Hand'),
(36, 'Crossbow, Heavy'),
(37, 'Longbow'),
(38, 'Net'),
(39, 'Pistol'),
(40, 'Musket'),
(41, 'Pistol, Automatic'),
(42, 'Revolver'),
(43, 'Rifle, Hunting'),
(44, 'Rifle, Automatic'),
(45, 'Shotgun'),
(46, 'Laser Pistol'),
(47, 'Antimatter Rifle'),
(48, 'Laser Rifle');

INSERT INTO dragons (
  die_value,
  dragon_type,
  resistance_type
)
VALUES
(1, 'Black', 'Acid'),
(2, 'Gold', 'Fire'),
(3, 'Blue', 'Lightning'),
(4, 'Green', 'Poison'),
(5, 'Brass', 'Fire'),
(6, 'Red', 'Fire'),
(7, 'Bronze', 'Lightning'),
(8, 'Silver', 'Cold'),
(9, 'Copper', 'Acid'),
(10, 'White', 'Cold');

INSERT INTO figurines (
  die_value,
  figurine_type
)
VALUES
(1, 'Bronze Griffon'),
(2, 'Ebony Fly'),
(3, 'Golden Lions'),
(4, 'Ivory Goats'),
(5, 'Marble Elephant'),
(6, 'Obsidian Steed'),
(7, 'Onyx Dog'),
(8, 'Serpentine Owl'),
(9, 'Silver Raven');

INSERT INTO weapon_warning (
  die_value,
  weapon_type
)
VALUES
(1, 'Club of Warning'),
(2, 'Dagger of Warning'),
(3, 'Greatclub of Warning'),
(4, 'Handaxe of Warning'),
(5, 'Javelin of Warning'),
(6, 'Light Hammer of Warning'),
(7, 'Mace of Warning'),
(8, 'Quarterstaff of Warning'),
(9, 'Sickle of Warning'),
(10, 'Spear of Warning'),
(11, 'Yklwa of Warning'),
(12, 'Boomerang of Warning'),
(13, 'Crossbow, Light of Warning'),
(14, 'Dart of Warning'),
(15, 'Shortbow of Warning'),
(16, 'Sling of Warning'),
(17, 'Battleaxe of Warning'),
(18, 'Flail of Warning'),
(19, 'Glaive of Warning'),
(20, 'Greatsword of Warning'),
(21, 'Halberd of Warning'),
(22, 'Lance of Warning'),
(23, 'Longsword of Warning'),
(24, 'Maul of Warning'),
(25, 'Morningstar of Warning'),
(26, 'Pike of Warning'),
(27, 'Rapier of Warning'),
(28, 'Scimitar of Warning'),
(29, 'Shortword of Warning'),
(30, 'Trident of Warning'),
(31, 'War Pick of Warning'),
(32, 'Warhammer of Warning'),
(33, 'Whip of Warning'),
(34, 'Blowgun of Warning'),
(35, 'Crossbow, Hand of Warning'),
(36, 'Crossbow, Heavy of Warning'),
(37, 'Longbow of Warning'),
(38, 'Net of Warning'),
(39, 'Pistol of Warning'),
(40, 'Musket of Warning'),
(41, 'Pistol, Automatic of Warning'),
(42, 'Revolver of Warning'),
(43, 'Rifle, Hunting of Warning'),
(44, 'Rifle, Automatic of Warning'),
(45, 'Shotgun of Warning'),
(46, 'Laser Pistol of Warning'),
(47, 'Antimatter Rifle of Warning'),
(48, 'Laser Rifle of Warning');

INSERT INTO mounts (
  die_value,
  mount_type
)
VALUES
(1, 'Camel'),
(2, 'Donkey or Mule'),
(3, 'Elephant'),
(4, 'Draft Horse'),
(5, 'Riding Horse'),
(6, 'Mastiff'),
(7, 'Pony'),
(8, 'Warhorse');

INSERT INTO achievements (
  title,
  detail,
  reward,
  points
)
VALUES
  ('You Shall Be Called Tundra!', 'Acquired A Mount', 1, 2),
  ('Hey! I Speak That!', 'Act As The Party Translator', 1, 1),
  ('Raining That Gold', 'Amass 1,000 Gold Pieces', 1, 3),
  ('Why DM God, Why?', 'Argue With The DM Over A Dice Roll', 1, 1),
  ('I Will Pray Always!', 'Ask A Deity For A Favor', 1, 4),
  ('Stun Grenade!', 'Be Deaf And Blind Simultaneously', 1, 2),
  ('Overruled!', 'Be Ignored By The DM When Citing The Rules', 1, 1),
  ('... Checks Watch', 'Be The First Person To The Game', 1, 1),
  ('My Dog Tripped Me', 'Be The Last Person To The Game', 1, 1),
  ('Fate Smiles On Me Alone', 'Be The Only Person To Roll A Nat 20 At A Session', 1, 3),
  ('Yeah, I Can Act', 'Beat A Performance Check While In Disguise', 1, 2),
  ('VICTORY!', 'Beat The Campaign', 2, 0),
  ('Yes, Bow To Me', 'Become Deified', 2, 0),
  ('Well, That Is A Twist!', 'Betray The Party For Your Own Gain', 2, 0),
  ('Homewrecker', 'Break Up An NPC Marriage Or Relationship', 1, 3),
  ('OH YEAH!', 'Burst Through A Wall', 1, 3),
  ('Sorry Professor, I Must Not Tell Lies!', 'Call Out A Lying NPC', 1, 1),
  ('Oh.. My Bad Friends..', 'Cause A Total Party Kill', 2, 0),
  ('I Am Risen', 'Come Back From 0 HP', 1, 1),
  ('We Are Monsters..', 'Commit Genocide', 2, 0),
  ('Missionary Position', 'Convert An NPCs Religion', 1, 4),
  ('I Read The Cards', 'Correctly Predict Another PCs Permanent Death', 1, 5),
  ('Too Much?', 'Deal 20 Overkill Damage To 1 Enemy', 1, 4),
  ('Let Us All Be Friends', 'Deal No Damage In An Encounter', 1, 5),
  ('Sir Guillotine', 'Decapitate 20 Enemies', 2, 0),
  ('Use Your Words!', 'Defeat An Enemy Using Only Social Skills', 1, 5),
  ('FINISH HIM', 'Deliver 10 Killing Blows', 1, 2),
  ('WHOOPSIE!', 'Destroy An Item Necessary For A Quest', 1, 5),
  ('I Forgot Earth Day', 'Destroy The Planet', 2, 0),
  ('Tell My Wife I Love Her', 'Permanently Die For The First Time', 2, 0),
  ('Tell Her Again', 'Permanently Die For The Second Time', 2, 0),
  ('Third Time Is A Charm!', 'Permanently Die For The Third Time', 2, 0),
  ('Umm... Is It Red?', 'Become Downed From A Puzzle', 1, 3),
  ('Butterfingers', 'Disarm An NPC', 1, 1), 
  ('I Brought My Hard Hat', 'Discover A Trap Before It Discovers You', 1, 2),
  ('Like The Wind', 'Do Not Take Damage While Actively Fighting', 2, 0),
  ('Heart Of Ice', 'Enslave A People', 2, 0),
  ('SIMP Alert!', 'Expect Sexual Favors For Saving An NPC', 1, 1),
  ('That Is All She Wrote', 'Experience A Total Party Kill', 2, 0),
  ('Bloody Brilliant Professor!', 'Experience A Transmutation', 1, 4),
  ('Karma Is A Bitch', 'Experience Revenge From An Old Enemy', 1, 2), 
  ('Red Herring', 'Fall For A Red Herring', 1, 3),
  ('Back Into The Light!', 'Finish A Dungeon', 1, 1),
  ('Are You Not Entertained?', 'Finish An Encounter Within 10 Rounds', 1, 1),
  ('Clever Girl', 'Flank And Kill An Unsuspecting Enemy', 1, 3),
  ('Breaker Of Chains', 'Free 20 Captive People', 2, 0),
  ('Ohhh Sexy!', 'Obtain A Better Set Of Armor', 1, 1),
  ('I Solemnly Swear', 'Obtain A Map', 1, 1),
  ('MY LEG!', 'Get A Permanent Deformity', 2, 0),
  ('Wait, Go Back!', 'Get A Worse Result In A Reroll', 1, 2), 
  ('Tis But A Scratch', 'Get Dismembered', 2, 0),
  ('Not Welcome Back!', 'Get Kicked Out Of A Public Establishment', 1, 2),
  ('My Fault, Friends!', 'Get Your Entire Party Dragged Into Trouble', 1, 1),
  ('What Is Even Sleep?', 'Go Three Encounters Without A Long Rest', 2, 0),
  ('Who Needs Em?', 'Go A Full Session Without Touching Your Dice', 1, 5),
  ('Take It All!', 'Go Broke', 1, 1),
  ('BIG HUG!', 'Grapple Enemies Three Times In One Encounter', 1, 4),
  ('Rasputin', 'Have Three Types Of Impairing Conditions At Once', 1, 5), 
  ('Constructive Bullying', 'Have The Party Gang Up On A Single Enemy', 1, 1),
  ('I Was Born In It', 'Hit An Enemy In Complete Darkness', 1, 3),
  ('I Do Not Have Time For That', 'Ignore A Crucial Plot Point', 1, 2),
  ('SPARTA!', 'Kick Someone Off A Ledge To Their Death', 1, 2),
  ('Not Even My Final Form', 'Kill Three Enemies While At Half Health In One Encounter', 1, 3),
  ('Deus Ex', 'Kill A Diety', 2, 0),
  ('Full Scales', 'Kill A Dragon', 2, 0),
  ('Not My President', 'Kill A Loved Political Figure', 2, 0),
  ('SMITE', 'Kill An Enemy Using A Holy Weapon', 1, 5), 
  ('SHOWOFF', 'Kill All Enemies In An Encounter Yourself', 1, 5),
  ('OMG, Shut Up', 'Kill An Annoying NPC', 1, 2),
  ('Brainpower', 'Kill An Enemy Using Only Skill Checks', 1, 4),
  ('Sick Em!', 'Kill An Enemy With An Animal', 1, 3),
  ('Whose Life Is It Anyways?', 'Kill An Enemy With An Improvised Weapon', 1, 3),
  ('PERFECT!', 'Kill An Enemy With Zero Overkill Damage', 1, 5),
  ('From The Shadows', 'Kill An Enemy Without Being Seen Or Heard', 1, 3),
  ('Double Tap!', 'Kill An Undead Enemy With A Headshot', 1, 3),
  ('Long Live The King', 'Kill And Replace A Sovereign Leader', 2, 0),
  ('Ugh.. It Was Him!', 'Kill Someone In A Public Place', 1, 1), 
  ('I Was Told To', 'Kill Someone In The Name Of A God', 1, 1),
  ('Situational Awareness', 'Kill Someone Using The Environment', 1, 2),
  ('Glutton For Punishment', 'Knowingly Activate A Trap', 1, 1),
  ('Vote For Me!', 'Legitimately Achieve A High Political Status', 2, 0),
  ('It Is Just Business..', 'Let A Fellow PC Permanently Die For Your Personal Gain', 2, 0), 
  ('Molotov', 'Lob A Flaming Projectile At An Enemy', 1, 1), 
  ('That Is All She Wrote...', 'Lose The Campaign', 2, 0),
  ('The Power Of One', 'Make A Success / Fail Difference With A +1 Buff', 2, 0), 
  ('I Am BAAAAACK!', 'Meet With A Reccurring Villain', 1, 1),
  ('2+2=5?', 'Miscount Gold While Splitting The Loot', 1, 1),
  ('Psychic', 'Mix Player And Character Knowledge', 1, 1),
  ('CRITorium', 'Open A Shop In A Settlement', 1, 3),
  ('FREEEDOM!', 'Overthrow A Government', 2, 0),
  ('Shake And Bake', 'Perform A Combo With A Fellow PC', 1, 2),
  ('Is This Chicken?', 'Practice Cannabalism', 1, 1),
  ('Stop Hitting Yourself', 'Reach Zero HP From A Fumbled Attack Roll', 2, 0),
  ('Hello Darkness... Again', 'Reach Zero HP Twice In One Encounter', 1, 2),
  ('A Mission From God', 'Receive Divine Direction', 2, 0),
  ('Peace To All', 'Reconcile Differences Between Mortal Enemies', 1, 5), 
  ('Life Alert', 'Remain Prone For Three Consecutive Turns', 1, 2),
  ('Priestly', 'Resolve A Religious Conflict Nonviolently', 1, 4),
  ('French Tactics', 'Retreat From Five Battles', 1, 4),
  ('My Precious!', 'Retrieve A MacGuffin', 1, 3),
  ('Haha, You Thought!', 'Revive An NPC Just To Kill Them Yourself', 1, 1),
  ('Take A Bow!', 'Roleplay A Character Acceptionally Well', 1, 3),
  ('Twisted Ankle', 'Roll A NAT One On An Acrobatics Check', 1, 2),
  ('Bite The Hand That Feeds', 'Roll A NAT One On An Animal Handling Check', 1, 2),
  ('What Magic?', 'Roll A NAT One On An Arcana Check', 1, 2),
  ('Doth Thou Even Hoist?', 'Roll A NAT One On An Athletics Check', 1, 2),
  ('I Will See Myself Out', 'Roll A NAT One On A Deception Check', 1, 2),
  ('No History Buff Here', 'Roll A NAT One On A History Check', 1, 2),
  ('I Just Can Not Tell..', 'Roll A NAT One On An Insight Check', 1, 2),
  ('I Scare Myself', 'Roll A NAT One On An Intimidation Check', 1, 2),
  ('Detective Obvious', 'Roll A NAT One On An Investigation Check', 1, 2),
  ('Dr. Oz', 'Roll A NAT One On A Medicine Check', 1, 2),
  ('Nature Sucks', 'Roll A NAT One On A Nature Check', 1, 2),
  ('Perceive This..', 'Roll A NAT One On A Perception Check', 1, 2),
  ('Bring The Little Blue Pills!', 'Roll A NAT One On A Performance Check', 1, 2),
  ('Because I Said So', 'Roll A NAT One On A Persuasion Check', 1, 2),
  ('On Faith Alone', 'Roll A NAT One On A Religion Check', 1, 2),
  ('I Will Just Put That Back..', 'Roll A NAT One On A Sleight Of Hand Check', 1, 2),
  ('You Can Not See Me!', 'Roll A NAT One On A Stealth Check', 1, 2),
  ('I Survive Nothing', 'Roll A NAT One On A Survival Check', 1, 2),
  ('Gold Medal Gymnast', 'Roll A Nat 20 On An Acrobatics Check', 1, 2),
  ('Call Me Noah', 'Roll A Nat 20 On An Animal Handling Check', 1, 2),
  ('Magic Is My Middle Name', 'Roll A Nat 20 On An Arcana Check', 1, 2),
  ('I Can Do All The Push Ups', 'Roll A Nat 20 On An Athletics Check', 1, 2),
  ('Trust Me', 'Roll A Nat 20 On A Deception Check', 1, 2),
  ('Pretty Sure I Was There', 'Roll A Nat 20 On A History Check', 1, 2),
  ('Try Again Loser, You Can Not Fool Me', 'Roll A Nat 20 On An Insight Check', 1, 2),
  ('Do Not Even Look At Me', 'Roll A Nat 20 On An Intimidation Check', 1, 2),
  ('Sherlock Holmes', 'Roll A Nat 20 On An Investigation Check', 1, 2),
  ('Call Me Dr. Morphine', 'Roll A Nat 20 On A Medicine Check', 1, 2),
  ('Am I Part Druid?', 'Roll A Nat 20 On A Nature Check', 1, 2),
  ('I.. Percieve.. Everything', 'Roll A Nat 20 On A Perception Check', 1, 2),
  ('No Sweat, I Can Do It Again', 'Roll A Nat 20 On A Performance Check', 1, 2),
  ('Believe In Me', 'Roll A Nat 20 On A Persuasion Check', 1, 2),
  ('I Am A Prophet', 'Roll A Nat 20 On A Religion Check', 1, 2),
  ('I Will Take That As Well, Thank You', 'Roll A Nat 20 On A Sleight Of Hand Check', 1, 2),
  ('I Am The Darkness', 'Roll A Nat 20 On A Stealth Check', 1, 2),
  ('Call Me Bear Grylls', 'Roll A Nat 20 On A Survival Check', 1, 2),
  ('It Is LEVI-OH-SAH!', 'Roll A One On A Spell Cast', 1, 1),
  ('I Will Just Be Back Here Then..', 'Roll A NAT One On An Initiative Check', 1, 1),
  ('EVERYONE BEHIND ME!', 'Roll A NAT 20 On An Initiative Check', 1, 1),
  ('All The Luck!', 'Roll Two Oness In A Row', 1, 4),
  ('I AM DONE', 'Roll Two Ones On An Advantaged Roll', 1, 4),
  ('Seriously, Bow To Me', 'Roll Two 20s in A Row', 1, 4),
  ('What Is Disadvantage?', 'Roll Two 20s On A Disadvantaged Roll', 1, 4),
  ('I Volunteer As Tribute!', 'Sacrifice Yourself, Resulting In Permanent Death', 2, 0),
  ('Friendship Is Key', 'Save A PC In Need', 1, 2),
  ('Batting Average Garbage', 'Score 3 Melee Misses In One Encounter', 1, 3),
  ('Storm Trooper Shots', 'Score 3 Ranges Misses In One Encounter', 1, 3),
  ('Sexual Tyrannosaurus', 'Seduce An NPC', 1, 3),
  ('Chaos Is A Ladder', 'Shift Your Alignment To Chaotic', 1, 5),
  ('No Turning Back...', 'Shift Your Alignment To Evil', 1, 5),
  ('Suck It, Boromir', 'Simply Walk Into A Well Guarded Place', 1, 1),
  ('That Still Only Counts As One', 'Solo A Large Monster', 2, 0),
  ('I Scratch My Head', 'Spend More Than Thirty Minutes On A Puzzle', 1, 1),
  ('I Will Go Left, You Go Right!', 'Split The Party', 1, 1),
  ('Live, Damn You!', 'Stabilize A Dying Character', 1, 1),
  ('99 Red Balloons', 'Start A War Between Two Or More Countries', 2, 0),
  ('Like Glue', 'Steal More Than 100 Gold', 1, 2),
  ('Never Tell Me The Odds', 'Succeed Only Because You Rolled A NAT 20', 1, 2),
  ('For King And Country', 'Successfully Defend A Royal Life', 2, 0),
  ('Does He Look Like A Bitch?', 'Successfully Interrogate An NPC', 1, 1),
  ('Stop, Drop, And Roll!', 'Survive Three Rounds Of Ongoing Fire Damage', 1, 2), 
  ('How Many Snakes On This Plane?!', 'Survive 50 points of Poison Damage', 1, 5),
  ('I Am Okay', 'Survive A Crit', 1, 1),
  ('Bring Me My Larger Ship!', 'Survive A Fight With A Sea Monster', 2, 0),
  ('Nice Warm Sand', 'Experience A Ship Wreck', 1, 3),
  ('25% And A Dream', 'Survive An Encounter With A Quarter Health', 1, 2), 
  ('It Is In The Pipes', 'Survive Being Petrified', 1, 5),
  ('You Talk Too Much', 'Take Advantage Of A Talkative Villain', 1, 2),
  ('Donate It!', 'Take An Artifact From A Dungeon', 1, 1),
  ('Move Along, Nothing To See Here', 'Take And/Or Give Ten Bribes', 1, 4),
  ('Backwoods Shannanigans', 'Take Drugs In The Campaign', 1, 1),
  ('Get On With It!', 'Talk Out Of Character For Longer Than One Minute', 1, 1),
  ('Insert Your Mom Joke Here', 'Taunt An Enemy To Get Their Attention', 1, 1),
  ('Dobby Is Free!', 'Team Up With An NPC Sidekick', 1, 3),
  ('It Is SUUUUPER Effective!', 'Trigger An Enemies Vulnerability', 1, 1),
  ('It Makes Sense In My Head...', 'Use Poor Logic In A Persuasion Check', 1, 1),
  ('Shut Up Donnie!', 'Verbally Abuse A Fellow PC', 1, 1), 
  ('A Farewell To Arms', 'Willingly Remove A Limb', 2, 0),
  ('Bottoms Up!', 'Win A Drinking Contest', 1, 1),
  ('Objection!', 'Win A Legal Case', 1, 5);


