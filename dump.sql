--
-- PostgreSQL database dump
--

-- Dumped from database version 14.2
-- Dumped by pg_dump version 14.2

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: joeylundquist
--

COPY public."user" (id, username, password) FROM stdin;
1	inept	$2a$10$Eh3pkOK3WKso.yBTgiBwg./fIxrLcBbQx55MvfeQ7hUNpObBZXAvi
2	grog	$2a$10$/Wko4FkaCpWHeEKiW/upyeDkYQsl6bkookqmMQaEzJ8lUUuwYmmvO
3	fry	$2a$10$my8u3Kle5zuP3n/ZPsxQn.hMiYrCFfvgge.HCwJYis1txR7Rz9O5q
5	joey	$2a$10$pa66mv/nxO2F2KtubCZcNuj/gcQX/0JhEfQEyYFO/vbtMbe93Rx5i
\.


--
-- Data for Name: characters; Type: TABLE DATA; Schema: public; Owner: joeylundquist
--

COPY public.characters (id, user_id, name, level, race, class, class_lvl, hp, ac, speed, strength, dexterity, constitution, intelligence, wisdom, charisma, copper_pieces, silver_pieces, electrum_pieces, gold_pieces, platinum_pieces) FROM stdin;
4	3	Steve Smith	3	dragonborn	bard	3	26	13	30	15	15	15	15	15	15	0	0	0	0	0
6	3	Francine Smith	3	half-elf	paladin	3	14	14	25	14	14	14	14	14	14	0	0	0	0	0
5	3	Hailey Smith	2	gnome	druid	2	13	13	30	13	13	13	13	13	13	23	35	14	90	2
7	3	Tester McBester	0	elf	fighter	9	25	14	30	0	0	0	0	0	0	0	0	0	0	0
1	3	stan smith	3	human	bard	3	30	16	30	15	14	14	15	16	14	70	25	3	27	2
8	5	Grog Strongjaw	0	dragonborn	barbarian	1	24	15	30	0	0	0	0	0	0	0	0	0	0	0
9	5	Keyleth of the Air Ashari	0	elf	druid	2	20	20	25	0	0	0	0	0	0	0	0	0	0	0
10	5	Percival de Rolo	0	human	fighter	3	12	12	30	0	0	0	0	0	0	0	0	0	0	0
11	5	Pike Trickfoot	0	dwarf	paladin	3	24	14	30	0	0	0	0	0	0	0	0	0	0	0
12	5	Belkas	3	half-elf	paladin	3	34	16	30	16	14	19	13	15	14	23	39	46	125	20
\.


--
-- Data for Name: characters_items; Type: TABLE DATA; Schema: public; Owner: joeylundquist
--

COPY public.characters_items (id, character_id, name, url) FROM stdin;
2	1	Sword of Wounding	/api/magic-items/sword-of-wounding
5	1	Barding: Plate	/api/equipment/barding-plate
17	5	Shortsword	/api/equipment/shortsword
18	5	Dagger	/api/equipment/dagger
19	5	Leather Armor	/api/equipment/leather-armor
20	5	Studded Leather Armor	/api/equipment/studded-leather-armor
21	1	Leather Armor	/api/equipment/leather-armor
24	1	Longsword	/api/equipment/longsword
25	1	Leather Armor	/api/equipment/leather-armor
28	1	Potion of Healing	/api/magic-items/potion-of-healing-common
29	1	Potion of Healing	/api/magic-items/potion-of-healing-common
30	12	Chain Mail	/api/equipment/chain-mail
31	12	Dagger	/api/equipment/dagger
32	12	Greataxe	/api/equipment/greataxe
33	12	Greatsword	/api/equipment/greatsword
34	12	Bedroll	/api/equipment/bedroll
35	12	Mess Kit	/api/equipment/mess-kit
36	12	Rope, hempen (50 feet)	/api/equipment/rope-hempen-50-feet
37	12	Potion of Animal Friendship	/api/magic-items/potion-of-animal-friendship
39	12	Potion of Healing	/api/magic-items/potion-of-healing-common
40	12	Potion of Climbing	/api/magic-items/potion-of-climbing
42	12	Potion of Healing	/api/magic-items/potion-of-healing-common
43	12	Greatsword	/api/equipment/greatsword
44	12	Potion of Flying	/api/magic-items/potion-of-flying
\.


--
-- Data for Name: characters_spells; Type: TABLE DATA; Schema: public; Owner: joeylundquist
--

COPY public.characters_spells (id, character_id, url, name) FROM stdin;
1	1	/api/spells/charm-person	Charm Person
2	1	/api/spells/silent-image	Silent Image
3	1	/api/spells/enhance-ability	Enhance Ability
4	1	/api/spells/lesser-restoration	Lesser Restoration
6	1	/api/spells/hypnotic-pattern	Hypnotic Pattern
7	5	/api/spells/faerie-fire	Faerie Fire
8	5	/api/spells/speak-with-animals	Speak with Animals
9	5	/api/spells/darkvision	Darkvision
10	5	/api/spells/protection-from-poison	Protection from Poison
11	5	/api/spells/spike-growth	Spike Growth
12	5	/api/spells/cure-wounds	Cure Wounds
13	1	/api/spells/detect-magic	Detect Magic
16	1	/api/spells/animal-friendship	Animal Friendship
17	12	/api/spells/bless	Bless
18	12	/api/spells/cure-wounds	Cure Wounds
20	12	/api/spells/branding-smite	Branding Smite
22	12	/api/spells/revivify	Revivify
23	12	/api/spells/lesser-restoration	Lesser Restoration
25	12	/api/spells/detect-magic	Detect Magic
\.


--
-- Name: characters_id_seq; Type: SEQUENCE SET; Schema: public; Owner: joeylundquist
--

SELECT pg_catalog.setval('public.characters_id_seq', 12, true);


--
-- Name: characters_items_id_seq; Type: SEQUENCE SET; Schema: public; Owner: joeylundquist
--

SELECT pg_catalog.setval('public.characters_items_id_seq', 44, true);


--
-- Name: characters_spells_id_seq; Type: SEQUENCE SET; Schema: public; Owner: joeylundquist
--

SELECT pg_catalog.setval('public.characters_spells_id_seq', 25, true);


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: joeylundquist
--

SELECT pg_catalog.setval('public.user_id_seq', 5, true);


--
-- PostgreSQL database dump complete
--

