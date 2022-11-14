--
-- PostgreSQL database dump
--

-- Dumped from database version 13.2
-- Dumped by pg_dump version 14.1

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

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: grocery_items; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.grocery_items (
    id integer NOT NULL,
    description character varying(50) NOT NULL,
    created_on timestamp without time zone NOT NULL
);


ALTER TABLE public.grocery_items OWNER TO postgres;

--
-- Name: grocery_items_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.grocery_items_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.grocery_items_id_seq OWNER TO postgres;

--
-- Name: grocery_items_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.grocery_items_id_seq OWNED BY public.grocery_items.id;


--
-- Name: grocery_items id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.grocery_items ALTER COLUMN id SET DEFAULT nextval('public.grocery_items_id_seq'::regclass);


--
-- Data for Name: grocery_items; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.grocery_items (id, description, created_on) FROM stdin;
3	eggs	2022-11-14 00:00:00
4	cheese	2022-11-14 00:00:00
\.


--
-- Name: grocery_items_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.grocery_items_id_seq', 4, true);


--
-- Name: grocery_items grocery_items_description_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.grocery_items
    ADD CONSTRAINT grocery_items_description_key UNIQUE (description);


--
-- Name: grocery_items grocery_items_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.grocery_items
    ADD CONSTRAINT grocery_items_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

