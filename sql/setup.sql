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
  item VARCHAR NOT NULL,
  chance VARCHAR NOT NULL
);

CREATE TABLE magic_b (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  item VARCHAR NOT NULL,
  chance VARCHAR NOT NULL
);

CREATE TABLE magic_c (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  item VARCHAR NOT NULL,
  chance VARCHAR NOT NULL
);

CREATE TABLE magic_d (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  item VARCHAR NOT NULL,
  chance VARCHAR NOT NULL
);

CREATE TABLE magic_e (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  item VARCHAR NOT NULL,
  chance VARCHAR NOT NULL
);

CREATE TABLE magic_f (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  item VARCHAR NOT NULL,
  chance VARCHAR NOT NULL
);

CREATE TABLE magic_g (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  item VARCHAR NOT NULL,
  chance VARCHAR NOT NULL
);

CREATE TABLE magic_h (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  item VARCHAR NOT NULL,
  chance VARCHAR NOT NULL
);

CREATE TABLE magic_i (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  item VARCHAR NOT NULL,
  chance VARCHAR NOT NULL
);

CREATE TABLE resistance (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  resistance_type VARCHAR NOT NULL
)

CREATE TABLE weapons (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  weapon_type VARCHAR NOT NULL
)

CREATE TABLE dragons (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  dragon_type VARCHAR NOT NULL,
  resistance_type VARCHAR NOT NULL
)

CREATE TABLE figurines (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  figurine_type VARCHAR NOT NULL
)

CREATE TABLE weapon_warning (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  weapon_type VARCHAR NOT NULL
)

INSERT INTO magic_a (
  item,
  chance
)
VALUES
('Potion of Healing', '01-50'),
('Spell Scroll (Cantrip)', '51-60'),
('Potion of Climbing', '61-70'),
('Spell Scroll (1st Level)', '71-90'),
('Spell Scroll (2nd Level)', '91-94'),
('Potion of Greater Healing', '95-98'),
('Bag of Holding', '99'),
('Driftglobe', '100');

INSERT INTO magic_b (
  item,
  chance
)
VALUES
('Potion of Greater Healing', '01-15'),
('Potion of Fire Breath', '16-22'),
('Potion of Resistance', '23-29'),
('Ammunition, +1', '30-34'),
('Potion of Animal Friendship', '35-39'),
('Potion of Hill Giant Strength', '40-44'),
('Potion of Growth', '45-49'),
('Potion of Water Breathing', '50-54'),
('Spell Scroll (2nd Level)', '55-59'),
('Spell Scroll (3rd Level)', '60-64'),
('Bag of Holding', '65-67'),
('Keoghtoms Ointment', '68-70'),
('Oil of Slipperiness', '71-73'),
('Dust of Disappearance', '74-75'),
('Dust of Dryness', '76-77'),
('Dust of Sneezing and Choking', '78-79'),
('Elemental Gem', '80-81'),
('Philter of Love', '82-83'),
('Alchemy Jug', '84'),
('Cap of Water Breathing', '85'),
('Cloak of Manta Ray', '86'),
('Driftglobe', '87'),
('Goggles of Night', '88'),
('Helm of Comprehending Languages', '89'),
('Immovable Rod', '90'),
('Lantern of Revealing', '91'),
('Mariners Lantern', '92'),
('Mithral Armor', '93'),
('Potion of Poison', '94'),
('Ring of Swimming', '95'),
('Robe of Useful Items', '96'),
('Rope of Climbing', '97'),
('Saddle of the Cavalier', '98'),
('Wand of Magic Detection', '99'),
('Wand of Secrets', '100');

INSERT INTO magic_c (
  item,
  chance
)
VALUES 
('Potion of Superior Healing', '01-15'),
('Spell Scroll (4th Level)', '16-22'),
('Ammunition, +2', '23-27'),
('Potion of Clairvoyance', '28-32'),
('Potion of Diminution', '33-37'),
('Potion of Gaseous Form', '38-42'),
('Potion of Frost Giant Strength', '43-47'),
('Potion of Stone Giant Strength', '48-52'),
('Potion of Heroism', '53-57'),
('Potion of Invulnerability', '58-62'),
('Potion of Mind Reading', '63-67'),
('Spell Scroll (5th Level)', '68-72'),
('Elixir of Health', '73-75'),
('Oil of Etherealness', '76-78'),
('Potion of Fire Giant Strength', '79-81'),
('Quaals Feather Token', '82-84'),
('Scroll of Protection', '85-87'),
('Bag of Beans', '88-89'),
('Bead of Force', '90-91'),
('Chime of Opening', '92'),
('Decanter of Endless Water', '93'),
('Eyes of Minute Seeing', '94'),
('Folding Boat', '95'),
('Hewards Handy Haversack', '96'),
('Horseshoes of Speed', '97'),
('Necklace of Fireballs', '98'),
('Periapt of Health', '99'),
('Sending Stones', '100');

INSERT INTO magic_d (
  item,
  chance
)
VALUES
('Potion of Supreme Healing', '01-20'),
('Potion of Invisibility', '21-30'),
('Potion of Speed', '31-40'),
('Spell Scroll (6th Level)', '41-50'),
('Spell Scroll (7th Level)', '51-57'),
('Ammunition, +3', '58-62'),
('Oil of Sharpness', '63-67'),
('Potion of Flying', '68-72'),
('Potion of Cloud Giant Strength', '73-77'),
('Potion of Longevity', '78-82'),
('Potion of Vitality', '83-87'),
('Spell Scroll (8th Level)', '88-92'),
('Horseshoes of Zephyr', '93-95'),
('Nolzurs Marvelous Pigments', '96-98'),
('Bag of Devouring', '99'),
('Portable Hole', '100');

INSERT INTO magic_e (
  item,
  chance
)
VALUES
('Spell Scroll (8th Level)', '01-30'),
('Potion of Storm Giant Strength', '31-55'),
('Potion of Supreme Healing', '56-70'),
('Spell Scroll (9th Level)', '71-85'),
('Universal Solvent', '86-93'),
('Arrow of Slaying', '94-98'),
('Sovereign Glue', '99-100');

INSERT INTO magic_f (
  item,
  chance
)
VALUES
-- //TODO Roll from Weapons Table
('Weapon, +1', '01-15'),
('Shield, +1', '16-18'),
('Sentinal Shield', '19-21'),
('Amulet of Proof Against Detection and Location', '22-23'),
('Boots of Elvenkind', '24-25'),
('Boots of Striding and Springing', '26-27'),
('Bracers of Archery', '28-29'),
('Brooch of Shielding', '30-31'),
('Broom of Flying', '32-33'),
('Cloak of Elvenkind', '34-35'),
('Cloak of Protection', '36-37'),
('Gauntlets of Ogre Power', '38-39'),
('Hat of Disguise', '40-41'),
('Javelin of Lightning', '42-43'),
('Pearl of Power', '44-45'),
('Rod of Pact Keeper, +1', '46-47'),
('Slippers of Spider Climbing', '48-49'),
('Staff of the Adder', '50-51'),
('Staff of the Python', '52-53'),
('Sword of Vengeance', '54-55'),
('Trident of Fish Command', '56-57'),
('Wand of Magic Missiles', '58-59'),
('Wand of the War Mage, +1', '60-61'),
('Wand of Web', '62-63'),
-- //TODO Add Table for Weapons of Warning
('Weapon of Warning', '64-65'),
('Adamantine Armor (Chain Mail)', '66'),
('Adamantine Armor (Chain Shirt)', '67'),
('Adamantine Armor (Scale Mail)', '68'),
('Bag of Tricks (Grey)', '69'),
('Bag of Tricks (Rust)', '70'),
('Bag of Tricks (Tan)', '71'),
('Boots of the Winterlands', '72'),
('Circlet of Blasting', '73'),
('Deck of Illusions', '74'),
('Eversmoking Bottle', '75'),
('Eyes of Charming', '76'),
('Eyes of the Eagle', '77'),
('Figurine of Wondrous Power (Silver Raven)', '78'),
('Gem of Brightness', '79'),
('Gloves of Missile Snaring', '80'),
('Gloves of Swimming and Climbing', '81'),
('Gloves of Thievery', '82'),
('Headband of Intellect', '83'),
('Helm of Telepathy', '84'),
('Instrument of the Bards (Doss Lute)', '85'),
('Instrument of the Bards (Fochlucan Bandore)', '86'),
('Instrument of the Bards (Mac-Fuimidh Cittern)', '87'),
('Medallion of Thoughts', '88'),
('Necklace of Adaptation', '89'),
('Periapt of Wound Closure', '90'),
('Pipes of Haunting', '91'),
('Pipes of the Sewers', '92'),
('Ring of Jumping', '93'),
('Ring of Mind Shielding', '94'),
('Ring of Warmth', '95'),
('Ring of Water Walking', '96'),
('Quiver of Ehlonna', '97'),
('Stone of Good Luck', '98'),
('Wind Fan', '99'),
('Winged Boots', '100');

INSERT INTO magic_g (
  item, 
  chance
)
VALUES
('Weapon, +2', '01-11'),
-- //TODO Create table for Figurine of Wondrous Power
('Figurine of Wondrous Power', '12-14'),
('Adamantine Armor (Breastplate)', '15'),
('Adamantine Armor (Splint)', '16'),
('Amulet of Health', '17'),
('Armor of Vulnerability', '18'),
('Arrow-Catching Shield', '19'),
('Belt of Dwarvenkind', '20'),
('Belt of Hill Giant Strength', '21'), 
('Berserker Axe', '22'),
('Boots of Levitation', '23'),
('Boots of Speed', '24'),
('Bowl of Commanding Water Elementals', '25'), 
('Bracers of Defense', '26'),
('Brazier of Commanding Fire Elementals', '27'),
('Cape of the Mountebank', '28'),
('Censor of Controlling Air Elementals', '29'),
('Armor, +1 Chain Mail', '30'),
-- //TODO Roll from Resistance Table
('Armor of Resistance (Chain Mail)', '31'),
('Armor of Resistance (Chain Shirt)', '32'),
('Armor, +1 Chain Shirt', '33'),
('Cloak of Displacement', '34'),
('Cloak of the Bat', '35'),
('Cube of Force', '36'),
('Daerns Instant Fortress', '37'),
('Dagger of Venom', '38'),
('Dimensional Shackles', '39'),
('Dragon Slayer', '40'),
('Elven Chain', '41'),
('Flame Tongue', '42'),
('Gem of Seeing', '43'), 
('Giant Slayer', '44'), 
('Clamoured Studded Leather', '45'),
('Helm of Teleportation', '46'),
('Horn of Blasting', '47'),
('Horn of Valhalla (Silver or Brass)', '48'),
('Instrument of the Bards (Canaithmandolin)', '49'),
('Instrument of the Bards (Cii Lyre)', '50'),
('Ioun Stone (Awareness)', '51'),
('Ioun Stone (Protection)', '52'),
('Ioun Stone (Reserve)', '53'),
('Ioun Stone (Sustenance)', '54'),
('Iron Bands of Bilarro', '55'),
('Armor, +1 Leather', '56'), 
('Armor of Resistance (Leather)', '57'),
('Mace of Disruption', '58'),
('Mace of Smiting', '59'),
('Mace of Terror', '60'), 
('Mantle of Spell Resistance', '61'),
('Necklace of Prayer Beads', '62'), 
('Periapt of Proof against Poison', '63'),
('Ring of Animal Influence', '64'),
('Ring of Evasion', '65'),
('Ring of Feather Falling', '66'),
('Ring of Free Action', '67'),
('Ring of Protection', '68'),
-- //TODO Roll from Resistance Table 
('Ring of Resistance', '69'),
('Ring of Spell Storing', '70'),
('Ring of the Ram', '71'),
('Ring of X-Ray Vision', '72'),
('Robe of Eyes', '73'),
('Rod of Rulership', '74'),
('Rod of the Pact Keeper, +2', '75'),
('Rope of Entanglement', '76'),
('Armor, +1 Scale Mail', '77'),
-- //TODO Roll from Resistance Table
('Armor of Resistance (Scale Mail)', '78'),
('Shield, +2', '79'),
('Shield of Missile Attraction', '80'),
('Staff of Charming', '81'),
('Staff of Healing', '82'),
('Staff of Swarming Insects', '83'),
('Staff of Woodlands', '84'),
('Staff of Withering', '85'),
('Stone of Controlling Earth Elementals', '86'),
('Sun Blade', '87'),
('Sword of Life Stealing', '88'),
('Sword of Wounding', '89'),
('Tentacle Rod', '90'),
-- //TODO Roll from Weapon Table
('Vicious Weapon', '91'),
('Wand of Binding', '92'),
('Wand of Enemy Detection', '93'),
('Wand of Fear', '94'),
('Wand of Fireballs', '95'),
('Wand of Lightning Bolts', '96'),
('Wand of Paralysis', '97'),
('Wand of the War Mage', '98'),
('Wand of Wonder', '99'),
('Wings of Flying', '100');

INSERT INTO magic_h (
  item,
  chance
)
VALUES
-- //TODO Roll from Weapon Table
('Weaopon, +3', '01-10'),
('Amulet of Planes', '11-12'),
('Carpet of Flying', '13-14'),
('Crystal Ball (Very Rare Version)', '15-16'),
('Ring of Regeneration', '17-18'),
('Ring of Shooting Stars', '19-20'),
('Ring of Telekinesis', '21-22'),
('Robe of Scintillating Colors', '23-24'),
('Robe of Stars', '25-26'),
('Rod of Absorption', '27-28'),
('Rod of Alertness', '29-30'),
('Rod of Security', '31-32'),
('Rod of the Pact Keeper, +3', '33-34'),
('Scimitar of Speed', '35-36'),
('Shield, +3', '37-38'),
('Staff of Fire', '39-40'),
('Staff of Frost', '41-42'),
('Staff of Power', '43-44'),
('Staff of Striking', '45-46'),
('Staff of Thunder and Lightning', '47-48'),
('Sword of Sharpness', '49-50'),
('Wand of Polymorph', '51-52'),
('Wand of the War Mage, +3', '53-54'),
('Adamantine Armor (Half Plate)', '55'),
('Adamantine Armor (Plate)', '56'),
('Animated Shield', '57'),
('Belt of Fire Giant Strength', '58'),
('Belt of Frost (or Stone) Giant Strength', '59'),
('Armor, +1 Breastplate', '60'),
-- //TODO Roll from Resistance Table
('Armor of Resistance (Breastplate)', '61'),
('Candle of Invocation', '62'),
('Armor, +2 Chainmail', '63'),
('Armor, +2 Chanshirt', '64'),
('Cloak of Arachnida', '65'),
('Dancing Sword', '66'),
('Demon Armor', '67'),
('Dragon Scale Mail', '68'),
('Dwarven Plate', '69'),
('Dwarven Thrower', '70'),
('Efreeti Bottle', '71'),
('Figurine of Wondrous Power (Obsidian Steed)', '72'),
('Frost Band', '73'),
('Helm of Brilliance', '74'),
('Horn of Valhalla (Bronze)', '75'),
('Instrument of the Bards (Anstruth Harp)', '76'),
('Ioun Stone (Absorption)', '77'),
('Ioun Stone (Agility)', '78'),
('Ioun Stone (Fortitude)', '79'),
('Ioun Stone (Insight)', '80'),
('Ioun Stone (Intellect)', '81'),
('Ioun Stone (Leadership)', '82'),
('Ioun Stone (Strength)', '83'),
('Armor, +2 Leather', '84'),
('Manual of Bodily Health', '85'),
('Manual of Gainful Exercise', '86'),
('Manual of Golems', '87'), 
('Manual of Quickness of Action', '88'),
('Mirror of Life Trapping', '89'),
('Nine Lives Stealer', '90'),
('Oathbow', '91'),
('Armor, +2 Scale Mail', '92'),
('Spellguard Shield', '93'),
('Armor, +1 Splint', '94'),
-- //TODO Roll from Resistance Table
('Armor of Resistance (Splint)', '95'),
('Armor, +1 Studded Leather', '96'),
-- //TODO Roll from Resistance Table
('Armor of Resistance (Studded Leather)', '97'),
('Tome of Clear Thought', '98'),
('Tome of Leadership and Influence', '99'),
('Tome of Understanding', '100');

INSERT INTO magic_i (
  item,
  chance
)
VALUES
('Defender', '01-05'),
('Hammer of Thunderbolts', '06-10'),
('Luck Blade', '11-15'),
('Sword of Answering', '16-20'),
('Holy Avenger', '21-23'), 
('Ring of Djinni Summoning', '24-26'),
('Ring of Invisibility', '27-29'),
('Ring of Spell Turning', '30-32'),
('Rod of Lordly Might', '33-35'),
('Staff of the Magi', '36-38'),
('Vorpal Sword', '39-41'),
('Belt of Cloud Giant Strength', '42-43'),
('Armor, +2 Breastplate', '44-45'),
('Armor, +3 Chain Mail', '46-47'),
('Armor, +3 Chain Shirt', '48-49'),
('Cloak of Invisibility', '50-51'),
('Crystal Ball (Legendary Version)', '52-53'),
('Armor, +1 Half Plate', '54-55'),
('Iron Flask', '56-57'),
('Armor, +3 Leather', '58-59'),
('Armor, +1 Plate', '60-61'),
('Robe of the Archmagi', '62-63'),
('Rod of Resurrection', '64-65'),
('Armor, +1 Scale Mail', '66-67'),
('Scarab of Protection', '68-69'),
('Armor, +2 Splint', '70-71'),
('Armor, +2 Studded Leather', '72-73'),
('Well of Many Worlds', '74-75'),
-- //TODO Roll from a Magic Armor Table d12
('Magic Armor', '76'),
('Apparatus of Kwalish', '77'),
('Armor of Invulnerability', '78'),
('Belt of Storm Giant Strength', '79'),
('Cubic Gate', '80'),
('Deck of Many Things', '81'),
('Efreeti Chain', '82'),
-- //TODO Roll from Resistance Table
('Armor of Resistance (Half Plate)', '83'),
('Horn of Valhalla (Iron)', '84'),
('Instrument of the Bards (Ollamh Harp)', '85'),
('Ioun Stone (Greater Absorption)', '86'),
('Ioun Stone (Mastery)', '87'),
('Ioun Stone (Regeneration)', '88'),
('Plate Armor of Etherealness', '89'),
-- //TODO Roll from Resistance Table
('Plate Armor of Resistance', '90'),
('Ring of Air Elemental Command', '91'),
('Ring of Earth Elemental Command', '92'),
('Ring of Fire Elemental Command', '93'), 
('Ring of Three Wishes', '94'),
('Ring of Water Elemental Command', '95'),
('Sphere of Annihilation', '96'),
('Talisman of Pure Good', '97'),
('Talisman of the Sphere', '98'),
('Talisman of Ultimate Evil', '99'),
('Tome of the Stilled Tongue', '100');

INSERT INTO resistance (
  resistance_type
)
VALUES
('Acid'),
('Cold'),
('Fire'),
('Force'),
('Lightning'),
('Necrotic'),
('Poison'),
('Psychic'),
('Radiance'),
('Thunder');

INSERT INTO weapons (
  weapon_type
)
VALUES
('Club'),
('Dagger'),
('Greatclub'),
('Handaxe'),
('Javelin'),
('Light Hammer'),
('Mace'),
('Quarterstaff'),
('Sickle'),
('Spear'),
('Yklwa'),
('Boomerang'),
('Crossbow, Light'),
('Dart'),
('Shortbow'),
('Sling'),
('Battleaxe'),
('Flail'),
('Glaive'),
('Greatsword'),
('Halberd'),
('Lance'),
('Longsword'),
('Maul'),
('Morningstar'),
('Pike'),
('Rapier'),
('Scimitar'),
('Shortword'),
('Trident'),
('War Pick'),
('Warhammer'),
('Whip'),
('Blowgun'),
('Crossbow, Hand'),
('Crossbow, Heavy'),
('Longbow'),
('Net'),
('Pistol'),
('Musket'),
('Pistol, Automatic'),
('Revolver'),
('Rifle, Hunting'),
('Rifle, Automatic'),
('Shotgun'),
('Laser Pistol'),
('Antimatter Rifle'),
('Laser Rifle');

INSERT INTO dragons (
  dragon_type,
  resistance_type
)
VALUES
('Black', 'Acid'),
('Gold', 'Fire'),
('Blue', 'Lightning'),
('Green', 'Poison'),
('Brass', 'Fire'),
('Red', 'Fire'),
('Bronze', 'Lightning'),
('Silver', 'Cold'),
('Copper', 'Acid'),
('White', 'Cold')

INSERT INTO figurines (
  figurine_type
)
VALUES
('Bronze Griffon'),
('Ebony Fly'),
('Golden Lions'),
('Ivory Goats'),
('Marble Elephant'),
('Obsidian Steed'),
('Onyx Dog'),
('Serpentine Owl'),
('Silver Raven');

INSERT INTO weapon_warning (
  weapon_type
)
VALUES
('Club of Warning'),
('Dagger of Warning'),
('Greatclub of Warning'),
('Handaxe of Warning'),
('Javelin of Warning'),
('Light Hammer of Warning'),
('Mace of Warning'),
('Quarterstaff of Warning'),
('Sickle of Warning'),
('Spear of Warning'),
('Yklwa of Warning'),
('Boomerang of Warning'),
('Crossbow, Light of Warning'),
('Dart of Warning'),
('Shortbow of Warning'),
('Sling of Warning'),
('Battleaxe of Warning'),
('Flail of Warning'),
('Glaive of Warning'),
('Greatsword of Warning'),
('Halberd of Warning'),
('Lance of Warning'),
('Longsword of Warning'),
('Maul of Warning'),
('Morningstar of Warning'),
('Pike of Warning'),
('Rapier of Warning'),
('Scimitar of Warning'),
('Shortword of Warning'),
('Trident of Warning'),
('War Pick of Warning'),
('Warhammer of Warning'),
('Whip of Warning'),
('Blowgun of Warning'),
('Crossbow, Hand of Warning'),
('Crossbow, Heavy of Warning'),
('Longbow of Warning'),
('Net of Warning'),
('Pistol of Warning'),
('Musket of Warning'),
('Pistol, Automatic of Warning'),
('Revolver of Warning'),
('Rifle, Hunting of Warning'),
('Rifle, Automatic of Warning'),
('Shotgun of Warning'),
('Laser Pistol of Warning'),
('Antimatter Rifle of Warning'),
('Laser Rifle of Warning');

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


