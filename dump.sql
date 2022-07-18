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

COPY public.characters (id, user_id, name, level, race, class, class_lvl, max_hp, current_hp, ac, speed, strength, dexterity, constitution, intelligence, wisdom, charisma, copper_pieces, silver_pieces, electrum_pieces, gold_pieces, platinum_pieces) FROM stdin;
1	5	Grog Strongjaw	4	dragonborn	barbarian	4	32	32	16	30	13	14	17	15	8	10	0	0	0	0	0
2	5	Keyleth of the Air Ashari	3	elf	druid	3	24	24	16	30	12	14	14	15	12	16	0	0	0	0	0
3	5	Percival de Rolo	3	human	fighter	3	31	31	16	30	14	15	15	15	15	15	0	0	0	0	0
4	5	Pike Trickfoot	3	dwarf	paladin	3	33	33	17	25	15	15	15	15	15	15	0	0	0	0	0
5	5	Belkas	3	half-elf	paladin	3	34	34	16	30	16	14	19	13	15	14	0	0	0	0	0
\.


--
-- Data for Name: characters_items; Type: TABLE DATA; Schema: public; Owner: joeylundquist
--

COPY public.characters_items (id, character_id, name, url) FROM stdin;
1	5	Chain Mail	/api/equipment/chain-mail
2	5	Dagger	/api/equipment/dagger
3	5	Greataxe	/api/equipment/greataxe
4	5	Greatsword	/api/equipment/greatsword
5	5	Bedroll	/api/equipment/bedroll
6	5	Mess Kit	/api/equipment/mess-kit
7	5	Rope, hempen (50 feet)	/api/equipment/rope-hempen-50-feet
8	5	Potion of Healing	/api/magic-items/potion-of-healing-common
\.


--
-- Data for Name: characters_spells; Type: TABLE DATA; Schema: public; Owner: joeylundquist
--

COPY public.characters_spells (id, character_id, name, url) FROM stdin;
1	5	Command	/api/spells/command
2	5	Detect Magic	/api/spells/detect-magic
3	5	Cure Wounds	/api/spells/cure-wounds
4	5	Find Steed	/api/spells/find-steed
5	5	Aid	/api/spells/aid
\.


--
-- Name: characters_id_seq; Type: SEQUENCE SET; Schema: public; Owner: joeylundquist
--

SELECT pg_catalog.setval('public.characters_id_seq', 5, true);


--
-- Name: characters_items_id_seq; Type: SEQUENCE SET; Schema: public; Owner: joeylundquist
--

SELECT pg_catalog.setval('public.characters_items_id_seq', 8, true);


--
-- Name: characters_spells_id_seq; Type: SEQUENCE SET; Schema: public; Owner: joeylundquist
--

SELECT pg_catalog.setval('public.characters_spells_id_seq', 5, true);


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: joeylundquist
--

SELECT pg_catalog.setval('public.user_id_seq', 5, true);


--
-- PostgreSQL database dump complete
--

