-- DROP TABLE IF EXISTS shipments CASCADE;
-- CREATE TABLE shipments (
-- id SERIAL PRIMARY KEY NOT NULL,
-- user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
-- start_point varchar(255) NOT NULL,
-- end_point varchar(255) NOT NULL,
-- latitude varchar(255) NOT NULL,
-- longitude varchar(255) NOT NULL,
-- distance varchar(255) NOT NULL,
-- price varchar(255) NOT NULL,
-- status boolean
-- );
-- Copied Coordinates:
-- Edmonton: 53.5461° N, 113.4938° W
-- Calgary: 51.0447° N, 114.0719° W
-- Victoria: 48.4284° N, 123.3656° W
-- Vancouver: 49.2827° N, 123.1207° W

-- Useable coordinates: 
-- Edmonton: 53.5461, -113.4938
-- Calgary: 51.0447, -114.0719
-- Victoria: 48.4284, -123.3656
-- Vancouver: 49.2827, -123.1207

INSERT INTO shipments (user_id, start_point, end_point, latitude, longitude, distance, price, status)
VALUES (3, 'starting point', 'end here', '53.5465', '-113.4937', '1342234', '756.65', true),
(3, 'start here', 'end here', '53.5463', '-113.4935', '1348766', '659.34', true),
(3, 'start here', 'end here', '53.5462', '-113.4935', '128766', '553.34', true),
(3, 'start here', 'end here', '53.5464', '-113.4936', '125876', '545.36', true),
(3, 'start here', 'end here', '53.5467', '-113.4935', '5421',  '321.66', true),
(2, 'start here', 'end here', '53.5367', '-113.5935', '96221', '500.22', true),
(2, 'start here', 'end here', '51.0447', '-114.0719', '234987', '100.32', true),
(2, 'start here', 'end here', '51.0446', '-114.0718', '253987', '113.32', true),
(2, 'start here', 'end here', '51.0445', '-114.0759', '64287', '235.32', true),
(2, 'start here', 'end here', '51.0446', '-114.0720', '87255', '115.25', true),
(2, 'start here', 'end here', '51.0447', '-114.0719', '54287', '115.25', true);