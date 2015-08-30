--
-- Base de datos: `flexilist`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `phones`
--

CREATE TABLE IF NOT EXISTS `phones` (
  `age` int(11) NOT NULL,
  `carrier` varchar(255) CHARACTER SET latin1 DEFAULT NULL,
  `id` varchar(255) CHARACTER SET latin1 NOT NULL,
  `imageUrl` varchar(255) CHARACTER SET latin1 NOT NULL,
  `name` varchar(255) CHARACTER SET latin1 NOT NULL,
  `snippet` varchar(1000) CHARACTER SET latin1 NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `phones`
--

INSERT INTO `phones` (`age`, `carrier`, `id`, `imageUrl`, `name`, `snippet`) VALUES
(4, NULL, 'dell-streak-7', 'img/phones/dell-streak-7.0.jpg', 'Dell Streak 7', 'Introducing Dell™ Streak 7. Share photos, videos and movies together. It’s small enough to carry around, big enough to gather around.'),
(3, 'Dell', 'dell-venue', 'img/phones/dell-venue.0.jpg', 'Dell Venue', 'The Dell Venue; Your Personal Express Lane to Everything'),
(0, 'Verizon', 'droid-2-global-by-motorola', 'img/phones/droid-2-global-by-motorola.0.jpg', 'DROID™ 2 Global by Motorola', 'The first smartphone with a 1.2 GHz processor and global capabilities.'),
(0, 'Verizon', 'droid-pro-by-motorola', 'img/phones/droid-pro-by-motorola.0.jpg', 'DROID™ Pro by Motorola', 'The next generation of DOES.'),
(2, 'Cellular South', 'lg-axis', 'img/phones/lg-axis.0.jpg', 'LG Axis', 'Android Powered, Google Maps Navigation, 5 Customizable Home Screens'),
(2, 'AT&T', 'motorola-atrix-4g', 'img/phones/motorola-atrix-4g.0.jpg', 'MOTOROLA ATRIX™ 4G', 'MOTOROLA ATRIX 4G the world''s most powerful smartphone.'),
(4, 'AT&T', 'motorola-bravo-with-motoblur', 'img/phones/motorola-bravo-with-motoblur.0.jpg', 'MOTOROLA BRAVO™ with MOTOBLUR™', 'An experience to cheer about.'),
(1, NULL, 'motorola-charm-with-motoblur', 'img/phones/motorola-charm-with-motoblur.0.jpg', 'Motorola CHARM™ with MOTOBLUR™', 'Motorola CHARM fits easily in your pocket or palm.  Includes MOTOBLUR service.'),
(4, 'T-Mobile', 'motorola-defy-with-motoblur', 'img/phones/motorola-defy-with-motoblur.0.jpg', 'Motorola DEFY™ with MOTOBLUR™', 'Are you ready for everything life throws your way?'),
(1, NULL, 'motorola-xoom', 'img/phones/motorola-xoom.0.jpg', 'MOTOROLA XOOM™', 'The Next, Next Generation\\n\\nExperience the future with MOTOROLA XOOM, the world''s first tablet powered by Android 3.0 (Honeycomb).'),
(0, NULL, 'motorola-xoom-with-wi-fi', 'img/phones/motorola-xoom-with-wi-fi.0.jpg', 'Motorola XOOM™ with Wi-Fi', 'The Next, Next Generation\\r\\n\\r\\nExperience the future with Motorola XOOM with Wi-Fi, the world''s first tablet powered by Android 3.0 (Honeycomb).'),
(0, 'Best Buy', 'nexus-s', 'img/phones/nexus-s.0.jpg', 'Nexus S', 'Fast just got faster with Nexus S. A pure Google experience, Nexus S is the first phone to run Gingerbread (Android 2.3), the fastest version of Android yet.'),
(3, NULL, 'samsung-galaxy-tab', 'img/phones/samsung-galaxy-tab.0.jpg', 'Samsung Galaxy Tab™', 'Feel Free to Tab™. The Samsung Galaxy Tab™ brings you an ultra-mobile entertainment experience through its 7” display, high-power processor and Adobe® Flash® Player compatibility.'),
(2, 'Cellular South', 'samsung-gem', 'img/phones/samsung-gem.0.jpg', 'Samsung Gem™', 'The Samsung Gem™ brings you everything that you would expect and more from a touch display smart phone – more apps, more features and a more affordable price.'),
(2, 'US Cellular', 'samsung-mesmerize-a-galaxy-s-phone', 'img/phones/samsung-mesmerize-a-galaxy-s-phone.0.jpg', 'Samsung Mesmerize™ a Galaxy S™ phone', 'The Samsung Mesmerize™ delivers a cinema quality experience like you’ve never seen before. Its innovative 4” touch display technology provides rich picture brilliance,even outdoors'),
(4, 'Cellular South', 'samsung-showcase-a-galaxy-s-phone', 'img/phones/samsung-showcase-a-galaxy-s-phone.0.jpg', 'Samsung Showcase™ a Galaxy S™ phone', 'The Samsung Showcase™ delivers a cinema quality experience like you’ve never seen before. Its innovative 4” touch display technology provides rich picture brilliance, even outdoors'),
(0, NULL, 'samsung-transform', 'img/phones/samsung-transform.0.jpg', 'Samsung Transform™', 'The Samsung Transform™ brings you a fun way to customize your Android powered touch screen phone to just the way you like it through your favorite themed “Sprint ID Service Pack”.'),
(0, 'Sprint', 'sanyo-zio', 'img/phones/sanyo-zio.0.jpg', 'SANYO ZIO', 'The Sanyo Zio by Kyocera is an Android smartphone with a combination of ultra-sleek styling, strong performance and unprecedented value.'),
(1, NULL, 't-mobile-g2', 'img/phones/t-mobile-g2.0.jpg', 'T-Mobile G2', 'The T-Mobile G2 with Google is the first smartphone built for 4G speeds on T-Mobile''s new network. Get the information you need, faster than you ever thought possible.'),
(2, 'T-Mobile', 't-mobile-mytouch-4g', 'img/phones/t-mobile-mytouch-4g.0.jpg', 'T-Mobile myTouch 4G', 'The T-Mobile myTouch 4G is a premium smartphone designed to deliver blazing fast 4G speeds so that you can video chat from practically anywhere, with or without Wi-Fi.');
