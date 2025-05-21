-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 19, 2025 at 06:27 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hotel-booking`
--
CREATE DATABASE IF NOT EXISTS `hotel-booking` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `hotel-booking`;

-- --------------------------------------------------------

--
-- Table structure for table `addons`
--

CREATE TABLE `addons` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `addon_name` varchar(255) NOT NULL,
  `price` decimal(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `bed_type`
--

CREATE TABLE `bed_type` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `bed_type_name` varchar(80) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `guest_id` bigint(20) UNSIGNED NOT NULL,
  `payment_status_id` bigint(20) UNSIGNED NOT NULL,
  `checkin_date` date NOT NULL,
  `checkout_date` date NOT NULL,
  `num_adults` int(11) NOT NULL,
  `num_children` int(11) NOT NULL,
  `booking_amount` decimal(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `booking_addon`
--

CREATE TABLE `booking_addon` (
  `booking_id` bigint(20) UNSIGNED NOT NULL,
  `addon_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `booking_room`
--

CREATE TABLE `booking_room` (
  `booking_id` bigint(20) UNSIGNED NOT NULL,
  `room_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache`
--

CREATE TABLE `cache` (
  `key` varchar(255) NOT NULL,
  `value` mediumtext NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `cache_locks`
--

CREATE TABLE `cache_locks` (
  `key` varchar(255) NOT NULL,
  `owner` varchar(255) NOT NULL,
  `expiration` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(255) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `features`
--

CREATE TABLE `features` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `feature_name` varchar(80) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `floors`
--

CREATE TABLE `floors` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `floor_number` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `guests`
--

CREATE TABLE `guests` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `fullname` varchar(80) NOT NULL,
  `email_address` varchar(80) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `facebook_id` varchar(255) DEFAULT NULL,
  `google_id` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `guests`
--

INSERT INTO `guests` (`id`, `fullname`, `email_address`, `email_verified_at`, `password`, `remember_token`, `created_at`, `updated_at`, `facebook_id`, `google_id`) VALUES
(40, 'Mr. Kay Schneider', 'hp110333@gmail.com', NULL, '$2y$12$ZoD78Ye4yKSSYQg8KR31luCdzCqkATBvtuRcvxUtOXci1b/CUZojm', NULL, NULL, '2025-05-18 01:11:08', NULL, NULL),
(41, 'Thad Gerlach DVM', 'hiennhi305@gmail.com', NULL, 'Pham Minh Hieu', NULL, NULL, '2025-05-17 19:54:18', NULL, NULL),
(42, 'Curt Towne', 'abshire.catharine@example.net', NULL, '$2y$12$3g.ZOkmX8q50kQCPXUdUweGgtq.mq.xpVPpWnhbqRZJFuQ0ZsQL8S', NULL, NULL, NULL, NULL, NULL),
(43, 'Marley Schmidt', 'homenick.eldora@example.org', NULL, '$2y$12$Dm8DNN/7ATy456LRDaX3lu15i7D2.oezmWAjBqWEcbkcP7td9wJlG', NULL, NULL, NULL, NULL, NULL),
(44, 'Mrs. Florence Schuppe', 'pshanahan@example.net', NULL, '$2y$12$aH3O9pzIVT3JTX/vxlucre9FZsiCMka/uJOGDLpq4FlHEQ6hO9y1q', NULL, NULL, NULL, NULL, NULL),
(45, 'Kip O\'Connell', 'zander48@example.com', NULL, '$2y$12$ohSHuXm5Zvuw/IXKnjPVoOzY0Rrfp0ibE1TKOLNGlyUTJz/Hr99na', NULL, NULL, NULL, NULL, NULL),
(46, 'Sidney Murazik', 'albin.schroeder@example.org', NULL, '$2y$12$jND50MkmEEf/11NHis3ao.0Y3exRuhRY.vPzzshvQC4bhMEkGfebO', NULL, NULL, NULL, NULL, NULL),
(47, 'Lewis Treutel', 'hazel.kshlerin@example.org', NULL, '$2y$12$acK/RIRaTBnd7qSZNaDd5OXBuXa13z2A/BM/5IrlwaCIp6qmma1Hy', NULL, NULL, NULL, NULL, NULL),
(48, 'Ebba Miller', 'iparisian@example.org', NULL, '$2y$12$3PJZhOsiaPoEHc4wTjjhB.834hGA2nfTLXZnOLq62lBa1ayoXEIgW', NULL, NULL, NULL, NULL, NULL),
(49, 'Dr. Waylon Pacocha', 'uriel.padberg@example.org', NULL, '$2y$12$.o1X5/BeSFKj6qC6NfO/8Oup5HYnqTgNGN7DFfZ5Rdx.vsRCf3wZO', NULL, NULL, NULL, NULL, NULL),
(50, 'Arianna Wiegand', 'reba26@example.org', NULL, '$2y$12$BymE1p/lhKpwXRPOwwxVe.edQgJMU2tzzpg4VjOzbCSKmLkU6vSv6', NULL, NULL, NULL, NULL, NULL),
(51, 'Claudine Lang', 'eulalia.collier@example.net', NULL, '$2y$12$oCHxzRjYkbmyKa/LJmwJbeW4.QxnDo7HhjexWg3FJXf0ADGKecLdm', NULL, NULL, NULL, NULL, NULL),
(52, 'Kevin Goldner', 'pgerhold@example.com', NULL, '$2y$12$HiB7aa92idhHdHY7qLbPF.aJH5GfDdZhO7ok5xdQi6NODn97xC6Bm', NULL, NULL, NULL, NULL, NULL),
(53, 'Miss Ophelia Emmerich Sr.', 'flavio.turner@example.com', NULL, '$2y$12$LBnb0kqI.bQNFxmfM34Kee23KhhZh09ZIEQuRrNFCu6IRkp7Qf.Y2', NULL, NULL, NULL, NULL, NULL),
(54, 'Prof. Coy Runte V', 'rey59@example.com', NULL, '$2y$12$1bB3y1r.9Z8hzL5bSPoY0eTCG9A9uIFCNtGu3IT1DtmtOl1zxgBEu', NULL, NULL, NULL, NULL, NULL),
(55, 'Allison Hudson', 'zromaguera@example.com', NULL, '$2y$12$IIo1ChEf9CheMmfDy2xj2uGf3acnKBCBnqmu8CKXDsiD3.sjuCpEC', NULL, NULL, NULL, NULL, NULL),
(56, 'Flossie Cole Sr.', 'ypfeffer@example.com', NULL, '$2y$12$01MjkcsjVQ9t1Vm6qNjaD.BGq97RT9M5PStOVCniJtmc2pQHjh5hW', NULL, NULL, NULL, NULL, NULL),
(57, 'Daisy Koch', 'drake.graham@example.com', NULL, '$2y$12$jW3pBMhb9TmEDKsIyL2U4OtNRetfY3aPlIO.mw8oDUlIYARSyTzeu', NULL, NULL, NULL, NULL, NULL),
(58, 'Cathrine Smitham', 'vickie.parisian@example.net', NULL, '$2y$12$QftF.GDEudkYuttFcM0RF.hwY8/mWhdxQPfcE70qMStZnn4VpN3fO', NULL, NULL, NULL, NULL, NULL),
(59, 'Rocky Jenkins', 'qgoodwin@example.org', NULL, '$2y$12$oLdYwVphkWhDtnSJ4za/.eo/mNQ4RtqruDzuzxkbYPpFflBNaqS.S', NULL, NULL, NULL, NULL, NULL),
(60, 'Bud Funk MD', 'witting.laurie@example.com', NULL, '$2y$12$ep9J8xeg1Ynnea8dZIF3y.swAvo1Prh0qLt6bHkK9W9GUXJP8px4a', NULL, NULL, NULL, NULL, NULL),
(61, 'Luis Wilderman', 'carroll.kenneth@example.com', NULL, '$2y$12$V8bBhK4VuomZ1fSw8dtSre.EMk/OVUlAcWQh2MJsXtWzZTEVVTEva', NULL, NULL, NULL, NULL, NULL),
(62, 'Amya Abshire PhD', 'annabel.swift@example.net', NULL, '$2y$12$SUR9RgrSHKbK.Zvtmbk.G.dGLpTRpGqbrukCJ/9/VmMWymdAXdW0u', NULL, NULL, NULL, NULL, NULL),
(63, 'Skylar Leffler', 'beth52@example.com', NULL, '$2y$12$aNcEZj8/QPHZ7jfiJZ8N.OlkkuGBtWx.qAuS.jS9UeXSUNdaYWtAq', NULL, NULL, NULL, NULL, NULL),
(64, 'Ubaldo Gleichner I', 'carolyne.weimann@example.net', NULL, '$2y$12$Jo6saaDPz.AUsg86E0BA0eJGyOkTz.JIB4xrSinZDW25PiRalU42u', NULL, NULL, NULL, NULL, NULL),
(65, 'Daija Haag', 'bertha04@example.net', NULL, '$2y$12$1bYeyxukoOmg8cQ/QZklHOvtK6Dgltp136Nds3Z167a5V4GydM8Pe', NULL, NULL, NULL, NULL, NULL),
(66, 'Marianna Rowe', 'ywehner@example.net', NULL, '$2y$12$Mx1mUXQzC6l7y90f5TCsteTHCtKDqzUhsEkkmr7g0MkNgGWQH5SMy', NULL, NULL, NULL, NULL, NULL),
(67, 'Dr. Ezra Gusikowski DVM', 'ramona.eichmann@example.org', NULL, '$2y$12$HCsaclOMWGrzoBDXjUO2r.OfhpZBtmxzUFfQUPGfSordj9qFsl016', NULL, NULL, NULL, NULL, NULL),
(68, 'Skylar Stamm', 'lempi95@example.net', NULL, '$2y$12$t3wKzJ1okjJsAUeJsdGS4uwwNt97mUy0FjuVGfCSN5A97ePtC8Cmq', NULL, NULL, NULL, NULL, NULL),
(69, 'Mariane Bauch', 'tillman.ewald@example.org', NULL, '$2y$12$TdAxQnmI8m7q15ReABgawebyd9B1R/hxjX6qIM0pLLpadqOk/eMQK', NULL, NULL, NULL, NULL, NULL),
(70, 'Mr. Nathan Keebler MD', 'beatrice.botsford@example.com', NULL, '$2y$12$rid19VZzid4HdENqgdHvtet3/SM3iX3/mHKhE.Eo/WjA08Gl2OiP.', NULL, NULL, NULL, NULL, NULL),
(71, 'Miss Elaina Murray', 'jodie70@example.com', NULL, '$2y$12$N93yGO9JCiSoZ5nZvR3zQeGDO6DcqmmDSoJpjog01Rf/csFBTnove', NULL, NULL, NULL, NULL, NULL),
(72, 'Moses Corwin Jr.', 'chaley@example.com', NULL, '$2y$12$/GsHwH6BYeRxql4C/x8IHecyQUW72xZowBbByGzDxJk9g6xDXEymW', NULL, NULL, NULL, NULL, NULL),
(73, 'Prof. Hobart Torp II', 'hrohan@example.com', NULL, '$2y$12$XpzSbDqd/iIXQh1iSlkJJORB4GJvaf4OPCRGa2iDQYWsDUkS8XwxO', NULL, NULL, NULL, NULL, NULL),
(74, 'Mr. Eleazar Moen', 'lgoodwin@example.com', NULL, '$2y$12$Ec9d/6eB8NVD6Kg1eNmJJOHu514/zwu7gUnStKXWMT1c7wf//wqcq', NULL, NULL, NULL, NULL, NULL),
(75, 'Prof. Casper Sanford', 'schmidt.marty@example.org', NULL, '$2y$12$oBA5q3mlFgPXF3Rz0G.5IedynKO8.s585x0Bgza.0FebzY3XbmXBq', NULL, NULL, NULL, NULL, NULL),
(76, 'Prof. Susanna Corwin I', 'nmante@example.com', NULL, '$2y$12$v6wPcDcoStnIn49t7vGQJOZCWB/w53J7CehaKoKKYr6H5mVZFObm2', NULL, NULL, NULL, NULL, NULL),
(77, 'Carolanne McCullough', 'kevin61@example.net', NULL, '$2y$12$wzvmmtCcUzQ5ZAt7sN2ZMevG/as92xwv4wuYMtu/Gb2Sr8b7qscrS', NULL, NULL, NULL, NULL, NULL),
(78, 'Arlie Bosco III', 'bergstrom.garnett@example.com', NULL, '$2y$12$XaBJz4X6iYBSngpqmhkuFeZoKc/BEeJPP3/VEgaf8laqjGsPgJhpe', NULL, NULL, NULL, NULL, NULL),
(79, 'Dr. Randi Mertz IV', 'gulgowski.jaren@example.net', NULL, '$2y$12$/11oYyWDr6XTcFw2uKVT7O7JJTpEow7fmwE2bTpr7CjmCbCpl5AXG', NULL, NULL, NULL, NULL, NULL),
(80, 'Kaya Bashirian', 'elsa11@example.com', NULL, '$2y$12$f42LnIEgjYOvXtwtjKAAb.r54nyG.g32IEhRhgQYoyWyhEHv6e4TG', NULL, NULL, NULL, NULL, NULL),
(81, 'Monty Jast', 'luettgen.caitlyn@example.org', NULL, '$2y$12$tKUkvQj4Q2mxuQiqIviDK.xJDhUpsLQmAr79wFIriAhB9icmwxyKK', NULL, NULL, NULL, NULL, NULL),
(82, 'Giles Oberbrunner', 'alarson@example.com', NULL, '$2y$12$Fad2/.5GFv76VUjyKpzwXONLQO41qWJUSBShaLYeE1x17cyEli/ce', NULL, NULL, NULL, NULL, NULL),
(83, 'Mervin Ankunding', 'anne.bartell@example.com', NULL, '$2y$12$WKH4P.S./r0qWF8VNfGUZuSPd/M1Uns37DlumuaMPYfZyTphOzQoi', NULL, NULL, NULL, NULL, NULL),
(84, 'Damien Spencer Jr.', 'aubree83@example.net', NULL, '$2y$12$ua4boa0wlcZYogkFcskdZOpWrro.48NLxwQLPdjuR/Nck/iSiu7DC', NULL, NULL, NULL, NULL, NULL),
(85, 'Dr. Carlos Kautzer DDS', 'mossie49@example.com', NULL, '$2y$12$4mGWHrIYcg9J2rywkYQV2ujWj3KAw0ba9yfaJYCksFbf3JV7z3ix.', NULL, NULL, NULL, NULL, NULL),
(86, 'Rosanna Strosin I', 'zmoen@example.com', NULL, '$2y$12$gob7Bf7NWYFg/.7rI44UPugJ9x1ph7FwRJR25tbcKbOYR1pjPwwiW', NULL, NULL, NULL, NULL, NULL),
(87, 'Mrs. Isobel Haley', 'okutch@example.org', NULL, '$2y$12$VuXCIGV8eYd8m6GCM8YdXuN9ZbgGu9YIjSOj8ZFRt26UMkRXs4JXO', NULL, NULL, NULL, NULL, NULL),
(88, 'Laura Considine', 'cleta75@example.org', NULL, '$2y$12$gqaPj4/GrNT9dOGGSOYu5.CnOZ1FVM8.iu7sHyVxvz5Hw/cdYqD.6', NULL, NULL, NULL, NULL, NULL),
(89, 'Shemar Bins Jr.', 'obrakus@example.com', NULL, '$2y$12$4wV19sIqQq5/wrSVwavRcO73xbrKu2tuo87wGkF9P25mCFlQg0I7O', NULL, NULL, NULL, NULL, NULL),
(90, 'Frederic Kuhn', 'colt.johnston@example.com', NULL, '$2y$12$H9jSyX2f9I1jloYHqRxgxO2Zo4fHL8pNpvAcaRZM.nSDjZNgwTEDe', NULL, NULL, NULL, NULL, NULL),
(91, 'Makenzie Ferry', 'agutkowski@example.org', NULL, '$2y$12$cLts8g3e7nZUvMDh1cwgtOfnUT5.td797V8Pz9bkoCgvLTjdjLUny', NULL, NULL, NULL, NULL, NULL),
(92, 'Caleb Ondricka', 'dario75@example.com', NULL, '$2y$12$ltY0.T3NvVdBplqpIx5fSO5kCPM6jlSm4EFLGhl.d6qEwVSJZPvzi', NULL, NULL, NULL, NULL, NULL),
(93, 'Corene Langworth MD', 'theodora02@example.org', NULL, '$2y$12$3u.IcBF2boVBtATl7e1bP.U.9hmCh9YEPqyFNQi8EYGMUB88YOSXu', NULL, NULL, NULL, NULL, NULL),
(94, 'Torey Gutmann', 'sondricka@example.org', NULL, '$2y$12$kXuLOQFdHoNI18hpzox3AuG8uusEK8koJh.4We.IRcoUQCqlX.tqO', NULL, NULL, NULL, NULL, NULL),
(95, 'Mr. Agustin Shields', 'deon.schiller@example.org', NULL, '$2y$12$y/zmbPEthxS8tCKULk4gM.W0fo45oWC38nIBnmFgg6JVeAZDXPxCy', NULL, NULL, NULL, NULL, NULL),
(96, 'Freida Franecki', 'mernser@example.com', NULL, '$2y$12$exayy4Io4cuKcTeBlTRWL.PqkpEw3iFuomghLpjbwUcObAjLDw916', NULL, NULL, NULL, NULL, NULL),
(97, 'Reed Huels', 'dylan10@example.org', NULL, '$2y$12$d6jqF9R4wTlTuTIvc.KF3uTJ6BrVwkBieJrRg40F1odDUV61.oOGC', NULL, NULL, NULL, NULL, NULL),
(98, 'Prof. Nicole Maggio V', 'mozelle47@example.org', NULL, '$2y$12$OzkLK.3a6QPyaIPAQKI1FeNJJZvhwORRPQuInkidnm9Qf9wXij3lC', NULL, NULL, NULL, NULL, NULL),
(99, 'Daniela Bartoletti', 'jswift@example.org', NULL, '$2y$12$zr9NKRbx.hmu83WQLnHKl.MXIOTX5BcIPfB6x9rhIPlajKcnBmBLi', NULL, NULL, NULL, NULL, NULL),
(100, 'Cristal Prohaska', 'uriel.hand@example.net', NULL, '$2y$12$320VbSEw61Isn5JNgz.5rOou30OgRar4uvyHY7ODCd1F5sWtWWEZW', NULL, NULL, NULL, NULL, NULL),
(101, 'Fiona Cremin', 'emmett25@example.org', NULL, '$2y$12$KLndWXhx/pon2qDMzMYwQO/muXul7dEKNSQdQh1cH9NtZu5V/syAu', NULL, NULL, NULL, NULL, NULL),
(102, 'Eleonore Maggio', 'adrain77@example.org', NULL, '$2y$12$witCKzW/SadMxYj.qVwnbuSbYilOQQtbY3DfRW9xItfTZS6E1ihha', NULL, NULL, NULL, NULL, NULL),
(103, 'Mrs. Zena Batz II', 'janice.daugherty@example.org', NULL, '$2y$12$DgU9usnw.0Te.n/JlsquIOunPRvMpuT5ObRTpwxzBT1S2P7DVR7sW', NULL, NULL, NULL, NULL, NULL),
(104, 'Mrs. Maureen Murazik PhD', 'murray.rico@example.net', NULL, '$2y$12$s7Kp3d4Aiwemhao6Anl84eGYVi26rF8Q44YTtw9ar.uxKMFGY4tlq', NULL, NULL, NULL, NULL, NULL),
(105, 'Nolan Wyman', 'treutel.lora@example.net', NULL, '$2y$12$zedwFDruhThVy1cW8pzoee69sRKWGQFPHgIlgsEXNyvfxcOODCo/e', NULL, NULL, NULL, NULL, NULL),
(106, 'Rupert Emard', 'cydney.koch@example.net', NULL, '$2y$12$axhxL/6aYweKRDcSThacfOJ5XU8hH9cOsL6dc/xGbHSYqJtsIyn0i', NULL, NULL, NULL, NULL, NULL),
(107, 'Kyle Rohan', 'jmoore@example.net', NULL, '$2y$12$koPcWpi1NH4qnFObJOgl6.qbdHyk1KyAiDtk3IsReYtR0rZps9hn.', NULL, NULL, NULL, NULL, NULL),
(108, 'Mr. Arthur Dooley II', 'yhudson@example.net', NULL, '$2y$12$yLAeqtXhGSPasukZFZ0oteG19RkHegeKgBZ1AC50CT7b.c8GDBryS', NULL, NULL, NULL, NULL, NULL),
(109, 'Kristian Daniel', 'lrice@example.com', NULL, '$2y$12$o7ocyaE6um03fTms7NkD9.IXD0oqbj7Jqvglu64tNjYBpoPHwlc/S', NULL, NULL, NULL, NULL, NULL),
(110, 'Kyle Kulas', 'madonna76@example.net', NULL, '$2y$12$yyT3abXExxnN56aBZTKGNu0E7EsAgGC221sDMU/c9Ky1zst3M/PS.', NULL, NULL, NULL, NULL, NULL),
(111, 'Dedrick Nolan', 'dlynch@example.org', NULL, '$2y$12$ormuFjOosJW1TzZKeVc/8e6sinXNboxTgoklMkLdh.hCdGGALGeli', NULL, NULL, NULL, NULL, NULL),
(112, 'Alexanne Feest', 'corn@example.net', NULL, '$2y$12$/OVQuiwbaqivRA6y3EcckOhHxzI4/nascY5DLzpgYIn.QWWkMuCoO', NULL, NULL, NULL, NULL, NULL),
(113, 'Dr. Carol Gutmann', 'constantin.daugherty@example.com', NULL, '$2y$12$Qlm9Gtw0I.QJiJF2J5yjxez7ZaILNwyRtYDJdZRbbZcVAbDIIU0sm', NULL, NULL, NULL, NULL, NULL),
(114, 'Jaylan Jones', 'kautzer.zachary@example.net', NULL, '$2y$12$fRGU/lAHG1ViqybBOeRJxOM0tn2ALATNmH4QdkyeZHdYWPJlwd3fi', NULL, NULL, NULL, NULL, NULL),
(115, 'Mattie Zieme', 'tatum.schultz@example.net', NULL, '$2y$12$kt2l6fCK7HwjNvq4NPGu1eB.AzS.R/8pApWfkzge8vBC8lSwCduBq', NULL, NULL, NULL, NULL, NULL),
(116, 'Georgianna Morar', 'fmayert@example.org', NULL, '$2y$12$TuHMlwGujrO8P9cyWJaRbeDIlqAqeE8FPosjByYprLGNz9lOcinu.', NULL, NULL, NULL, NULL, NULL),
(117, 'Mrs. Macie Luettgen', 'alexandria.christiansen@example.org', NULL, '$2y$12$oj45GJXCj4DSTQK9WgUTgeVlhD3F2XMT/FCVVhkmPyuS/nfMYbwiW', NULL, NULL, NULL, NULL, NULL),
(118, 'Miss Tabitha Goyette DDS', 'zkiehn@example.net', NULL, '$2y$12$vDe9ldtagLNn.bqC5QnLw.sXHw1hycWaMq1/ionlfN8xywebMOm4K', NULL, NULL, NULL, NULL, NULL),
(119, 'Ryann Larkin III', 'stephen.goldner@example.net', NULL, '$2y$12$6oL4axvGydj/xu5UOoqA0eC4gFlbSvFsdv3uAvUxzaimiIV2cr4pa', NULL, NULL, NULL, NULL, NULL),
(120, 'Dr. Joseph Gaylord', 'misty.jerde@example.org', NULL, '$2y$12$goQTb8y5uMACxSW3CKd5z.z6HiL6x3RTTMbBVy4yL.aIxDU4PBn5C', NULL, NULL, NULL, NULL, NULL),
(121, 'Alverta Beatty', 'swaniawski.april@example.org', NULL, '$2y$12$KA0ic9Pt3WuNu.3yG5PoUuUpwfMtXxWuH1ZhrHX8IcfSF5QVO44ni', NULL, NULL, NULL, NULL, NULL),
(122, 'Josephine Gutkowski', 'aufderhar.deron@example.net', NULL, '$2y$12$Bz9o8jrHMDgvedypmoIbmOhtyCv5mxQlRerr1nnliGgnMjl6lzgU2', NULL, NULL, NULL, NULL, NULL),
(123, 'Lynn Hegmann', 'alessandro55@example.net', NULL, '$2y$12$7z2BpEQwEVnwLU842.D6q.XG4zp2W.UjtCvEyP4eFgyaxfL5xIQ/m', NULL, NULL, NULL, NULL, NULL),
(124, 'Ella Hoppe II', 'dino.hilpert@example.net', NULL, '$2y$12$D2aTXC8Lw96VL2bG69XaM.IKx/bops9j.RvK9.kIVFpY.MatA2WKy', NULL, NULL, NULL, NULL, NULL),
(125, 'Alvah Hill DVM', 'violet.block@example.org', NULL, '$2y$12$kC13y26yqGbyRYSS9ELb6eDsC4bY.ItpY13y04ocC/Mzg8YwvcXWG', NULL, NULL, NULL, NULL, NULL),
(126, 'Roberta Blanda Sr.', 'oprice@example.org', NULL, '$2y$12$iTIxc7JhQICKcb8Qy7HjhOfQupLn6fM817xWgx/Y4hxobyk8U5Kuy', NULL, NULL, NULL, NULL, NULL),
(127, 'Mr. Pete Nicolas', 'makenzie53@example.com', NULL, '$2y$12$M07Upll6nu0/BBrDTQ196uIpBolx7wpA9w8ncEtVG2V3YNTv.hXRS', NULL, NULL, NULL, NULL, NULL),
(145, 'Minh Hiếu', '23211tt0325@mail.tdc.edu.vn', NULL, 'eyJpdiI6InlxY0dJdEtsRzJxU2ZQSm1mNUpkRHc9PSIsInZhbHVlIjoidzV5Q2plTW5EY0N0T3MyTStLWklBMENyMlFXZmdNd2psMzNhOWt6VTl1dz0iLCJtYWMiOiIwZWYxZmNmMTg5YzI1NmM3ZGIzMzYwZWRiNDMyYWFiYzYyY2Q3YjA0ZTFhNjJhYTY0NGUxMzg0ZDc2MDA2ZmVjIiwidGFnIjoiIn0=', NULL, '2025-05-18 00:25:16', '2025-05-18 00:25:16', '670499268933052', NULL),
(146, 'Hiếu Phạm', 'hp110333@gmail.com', NULL, 'eyJpdiI6ImVWNWFwUWRhUFRoWkl2T0xMZEdjNGc9PSIsInZhbHVlIjoiYkhXQlNoZ0ZIVXRZR2pqZkNMNmxyNGNBWjVOakJVTGlvY2dhT1VvK2x4Yz0iLCJtYWMiOiJjOGE5MDdmMTRmNjY0OGEzM2U1YWVmOTM0Yjk1ZmZhZDI0NWU4MmZmYWUyZDNlMmVlZDFmNjdmNDg0NTkyYTQ2IiwidGFnIjoiIn0=', NULL, '2025-05-18 05:33:21', '2025-05-18 05:33:21', NULL, '105995226228046139119');

-- --------------------------------------------------------

--
-- Table structure for table `jobs`
--

CREATE TABLE `jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `queue` varchar(255) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` tinyint(3) UNSIGNED NOT NULL,
  `reserved_at` int(10) UNSIGNED DEFAULT NULL,
  `available_at` int(10) UNSIGNED NOT NULL,
  `created_at` int(10) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `job_batches`
--

CREATE TABLE `job_batches` (
  `id` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `total_jobs` int(11) NOT NULL,
  `pending_jobs` int(11) NOT NULL,
  `failed_jobs` int(11) NOT NULL,
  `failed_job_ids` longtext NOT NULL,
  `options` mediumtext DEFAULT NULL,
  `cancelled_at` int(11) DEFAULT NULL,
  `created_at` int(11) NOT NULL,
  `finished_at` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(255) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '0001_01_01_000000_create_users_table', 1),
(2, '0001_01_01_000001_create_cache_table', 1),
(3, '0001_01_01_000002_create_jobs_table', 1),
(4, '2025_05_13_071324_create_guests_table', 1),
(5, '2025_05_13_071450_create_payment_status_table', 1),
(6, '2025_05_13_071557_create_bookings_table', 1),
(7, '2025_05_13_073121_create_addons_table', 1),
(8, '2025_05_13_073250_create_floors_table', 1),
(9, '2025_05_13_073458_create_room_status_table', 1),
(10, '2025_05_13_073606_create_features_table', 1),
(11, '2025_05_13_073810_create_booking_addon_table', 1),
(12, '2025_05_13_073949_create_room_class_table', 1),
(13, '2025_05_13_074143_create_bed_type_table', 1),
(14, '2025_05_13_074257_create_room_class_bed_type_table', 1),
(15, '2025_05_13_074601_create_rooms_table', 1),
(16, '2025_05_13_074845_create_booking_room_table', 1),
(17, '2025_05_13_075046_create_room_class_feature_table', 1),
(18, '2025_05_13_090551_create_personal_access_tokens_table', 1),
(19, '2025_05_17_060356_create_reset_code_passwords_table', 2),
(20, '2025_05_17_072513_create_reset_code_passwords_table', 3),
(21, '2025_05_17_090749_create_reset_code_passwords_table', 4),
(22, '2025_05_18_031932_add_facebook_id_column', 5),
(23, '2025_05_18_115333_add_google_id_to_users_table', 6);

-- --------------------------------------------------------

--
-- Table structure for table `password_reset_tokens`
--

CREATE TABLE `password_reset_tokens` (
  `email` varchar(255) NOT NULL,
  `token` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `payment_status`
--

CREATE TABLE `payment_status` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `payment_status_name` varchar(50) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(255) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `expires_at`, `created_at`, `updated_at`) VALUES
(1, 'App\\Models\\Guest', 2, 'auth_token', '935e3b5cdce6fb898efe24f3bb6b023411f9b62d081c2a17ca6cdd9e79ef111e', '[\"*\"]', NULL, NULL, '2025-05-13 03:00:00', '2025-05-13 03:00:00'),
(2, 'App\\Models\\Guest', 2, 'auth_token', '60243abb324a9b45f271c7550661bd12aaf9e74d5eb8aab7d18c3c0ec4910205', '[\"*\"]', NULL, NULL, '2025-05-13 03:02:39', '2025-05-13 03:02:39'),
(3, 'App\\Models\\Guest', 2, 'auth_token', '5ffd486a2d89d584ff9328031db8362f84334c875ab21c43a95bb15e31e88bcb', '[\"*\"]', NULL, NULL, '2025-05-14 01:05:32', '2025-05-14 01:05:32'),
(4, 'App\\Models\\Guest', 3, 'auth_token', 'ecbebb6d2a50ae52a10a6ab918063cb238df9b470212cfa87aab70856c4db592', '[\"*\"]', NULL, NULL, '2025-05-14 01:07:39', '2025-05-14 01:07:39'),
(5, 'App\\Models\\Guest', 4, 'auth_token', '5cf0b770b501792214b885f6f0c7ad135c13197de248504ea2972fc1ba512271', '[\"*\"]', NULL, NULL, '2025-05-14 02:24:55', '2025-05-14 02:24:55'),
(6, 'App\\Models\\Guest', 5, 'auth_token', '5d3f74b235c8d37d65f375b8f88a5c70f31ec76861371f5eab72351a71797f60', '[\"*\"]', NULL, NULL, '2025-05-14 02:28:24', '2025-05-14 02:28:24'),
(7, 'App\\Models\\Guest', 6, 'auth_token', 'c98c9efec8862ada61a404627be8525baa7a9f0f3ed16b6563c356bb5d63bf05', '[\"*\"]', NULL, NULL, '2025-05-14 02:32:18', '2025-05-14 02:32:18'),
(8, 'App\\Models\\Guest', 7, 'auth_token', '8cbc064c5152b2445c4c3c500f2c9979cbcde3a8dc6309befaeb4b84b8dce9ba', '[\"*\"]', NULL, NULL, '2025-05-14 02:39:51', '2025-05-14 02:39:51'),
(9, 'App\\Models\\Guest', 8, 'auth_token', 'c30272e067313063302c169e64d2d3bcf439166b39a16024c2f24f3a7a7f6375', '[\"*\"]', NULL, NULL, '2025-05-14 04:43:19', '2025-05-14 04:43:19'),
(10, 'App\\Models\\Guest', 9, 'auth_token', '7109c312434bb1f7613032c3ee163486951b433507bfc94cc111266f57ba2a30', '[\"*\"]', NULL, NULL, '2025-05-14 04:44:57', '2025-05-14 04:44:57'),
(11, 'App\\Models\\Guest', 10, 'auth_token', '07d56d7443895d9427c8d6966c08387bc441a34b123006bcc7271097af09a10a', '[\"*\"]', NULL, NULL, '2025-05-14 20:05:43', '2025-05-14 20:05:43'),
(12, 'App\\Models\\Guest', 11, 'auth_token', '1b266aec5c3776692bc03bf67a229d98e0ad98c662327c8c7814b4c146effbf7', '[\"*\"]', NULL, NULL, '2025-05-14 20:39:45', '2025-05-14 20:39:45'),
(13, 'App\\Models\\Guest', 12, 'auth_token', '1a0f6e9ff5be92d82e49e8f8d5a8ac08438d6317f279a067d84e4663aac82d9f', '[\"*\"]', NULL, NULL, '2025-05-14 20:45:51', '2025-05-14 20:45:51'),
(14, 'App\\Models\\Guest', 13, 'auth_token', 'df9b88cf364999cb648fb2496ee4c8a08abb74dee2efc86addd5d7761acca34a', '[\"*\"]', NULL, NULL, '2025-05-14 21:02:44', '2025-05-14 21:02:44'),
(15, 'App\\Models\\Guest', 14, 'auth_token', 'd95e867e4b642bcb0333b132e0bd1391acc9cd569922e5da1e88870e7d52147e', '[\"*\"]', NULL, NULL, '2025-05-14 21:05:39', '2025-05-14 21:05:39'),
(16, 'App\\Models\\Guest', 15, 'auth_token', 'e9c3353b6498e8b8eb958b276f80a13b166692c7027365a28a2e6b9d5d135e0c', '[\"*\"]', NULL, NULL, '2025-05-14 21:06:32', '2025-05-14 21:06:32'),
(17, 'App\\Models\\Guest', 16, 'auth_token', '41da2cffb0c1b016f1d4eff4e7412c7815edac1fdced6c819544283caad17d2e', '[\"*\"]', NULL, NULL, '2025-05-14 21:09:33', '2025-05-14 21:09:33'),
(18, 'App\\Models\\Guest', 17, 'auth_token', '369ae5638e16774aedc0c9b8bd82b4ffb1169f737f4c8235ee37293da22f7108', '[\"*\"]', NULL, NULL, '2025-05-14 21:10:56', '2025-05-14 21:10:56'),
(19, 'App\\Models\\Guest', 129, 'auth_token', '8e5ae230679f46e105d3958eebf83dc99d9470a182c5712a4b62d437320da648', '[\"*\"]', NULL, NULL, '2025-05-15 05:19:04', '2025-05-15 05:19:04'),
(20, 'App\\Models\\Guest', 130, 'auth_token', '3f6a07fff8597770df8dd3d84306f38b8c56a5702142b830a3a3b70750d56c01', '[\"*\"]', NULL, NULL, '2025-05-15 05:29:30', '2025-05-15 05:29:30'),
(21, 'App\\Models\\Guest', 131, 'auth_token', 'c1c4aa7b7ba02d24825e7f0dba3a4b0accece4246e73a8d734627c2abc7e53d9', '[\"*\"]', NULL, NULL, '2025-05-15 05:36:48', '2025-05-15 05:36:48'),
(22, 'App\\Models\\Guest', 132, 'auth_token', '6885332b22867aa09d183382ba4bee30e063cb2b8cfd8554f00eceb3494e84e3', '[\"*\"]', NULL, NULL, '2025-05-15 05:37:55', '2025-05-15 05:37:55'),
(23, 'App\\Models\\Guest', 133, 'auth_token', 'eb04353211a8b6517bca72995920982d10f9c4d52eeaa9e21fbc9fc4c9449ff6', '[\"*\"]', NULL, NULL, '2025-05-15 05:39:21', '2025-05-15 05:39:21'),
(24, 'App\\Models\\Guest', 134, 'auth_token', '5c60f7bdc70dee0d365a80804f1b63afe02a1f406b5577ddcc67e74498c16e5c', '[\"*\"]', NULL, NULL, '2025-05-15 05:43:18', '2025-05-15 05:43:18'),
(25, 'App\\Models\\Guest', 135, 'auth_token', 'dd347cabf58551fdf06a5f1a4f793377a8bb2bbe7b53861dbc21797b4f787aeb', '[\"*\"]', NULL, NULL, '2025-05-15 05:44:11', '2025-05-15 05:44:11'),
(26, 'App\\Models\\Guest', 136, 'auth_token', '7f5068bdabe6ee8b8aec6f1a4bafae9cca4e6e9020164a75e8c7bcfd7a4e4424', '[\"*\"]', NULL, NULL, '2025-05-15 05:44:56', '2025-05-15 05:44:56'),
(27, 'App\\Models\\Guest', 137, 'auth_token', 'facf01effb332fb4fe3eed8587b9ecddf24a8c486e9720662dda9565fa5b5ce5', '[\"*\"]', NULL, NULL, '2025-05-15 06:32:42', '2025-05-15 06:32:42'),
(28, 'App\\Models\\Guest', 138, 'auth_token', 'aa92eac8c5acdc69878e8c4e33557e116af320d02936370468050f26021845e7', '[\"*\"]', NULL, NULL, '2025-05-15 06:44:59', '2025-05-15 06:44:59'),
(29, 'App\\Models\\Guest', 139, 'auth_token', 'd3968a411fd1bc1b1b96c643a72ddea7e0187657c93486cd664b3721c96d38d8', '[\"*\"]', NULL, NULL, '2025-05-15 06:45:07', '2025-05-15 06:45:07'),
(30, 'App\\Models\\Guest', 140, 'auth_token', '4d0e9dd0f7f2036f9cc9fd84c4090c14aa22a0f29714017a810969215d88bfbe', '[\"*\"]', NULL, NULL, '2025-05-15 06:48:32', '2025-05-15 06:48:32'),
(31, 'App\\Models\\Guest', 141, 'auth_token', '2c8d908c1972b28e7a3be109e1a7469fe2f3335336cf0985617737bfbdb529b1', '[\"*\"]', NULL, NULL, '2025-05-15 06:51:37', '2025-05-15 06:51:37'),
(32, 'App\\Models\\Guest', 142, 'auth_token', '468ca08d94dc7b9f9c46a6d656b8728205c3829d7a04b099047e4b72d3057773', '[\"*\"]', NULL, NULL, '2025-05-15 09:07:29', '2025-05-15 09:07:29'),
(33, 'App\\Models\\Guest', 143, 'auth_token', '046d84a0cc369569386bbade85474ae0f4d7cdcb65a55d3cf2a60d6781d6e153', '[\"*\"]', NULL, NULL, '2025-05-15 09:59:36', '2025-05-15 09:59:36'),
(34, 'App\\Models\\Guest', 144, 'auth_token', '508405fa0c34d85aa5e736de8dfa23636c4ac5ea99cb7db0e7360ce93263e1ae', '[\"*\"]', NULL, NULL, '2025-05-15 18:11:31', '2025-05-15 18:11:31'),
(35, 'App\\Models\\Guest', 145, 'facebook', '65489c6131d72f2772975c25ca3cc8c5508b2c5abf4152a0ca62ad404d264125', '[\"*\"]', NULL, NULL, '2025-05-18 01:03:21', '2025-05-18 01:03:21'),
(36, 'App\\Models\\Guest', 145, 'facebook', '049a3af6af0950be030a3e03ddd4cf1af2e7b878fcc9d2f52826e7010d44596b', '[\"*\"]', NULL, NULL, '2025-05-18 01:04:02', '2025-05-18 01:04:02'),
(37, 'App\\Models\\Guest', 145, 'facebook', '39f3a8500c3253f9635edd3e41991094b68ac787ddf9a16b71ae6867def8c2bd', '[\"*\"]', NULL, NULL, '2025-05-18 01:09:55', '2025-05-18 01:09:55'),
(38, 'App\\Models\\Guest', 145, 'facebook', 'cf77c078538786d62fd349df0900ab66d695c9d7310e9ad1dcc62fc5f9ee7d3a', '[\"*\"]', NULL, NULL, '2025-05-18 01:10:20', '2025-05-18 01:10:20'),
(39, 'App\\Models\\Guest', 145, 'facebook', 'd1000247a215bfb68b98e0c4fe507e1d3f29f847732461b53cd8be4e13ccc84b', '[\"*\"]', NULL, NULL, '2025-05-18 01:12:56', '2025-05-18 01:12:56'),
(40, 'App\\Models\\Guest', 145, 'facebook', 'da8382dd07726933c6ec9a70b12607fa7a8fc6b0b5f4c6ff2aa0fb4c6b1b78d1', '[\"*\"]', NULL, NULL, '2025-05-18 05:53:13', '2025-05-18 05:53:13'),
(41, 'App\\Models\\Guest', 145, 'facebook', '2ee453881fe683838e09b4aac666996457eebf7ebe8c29049fc2c71defdc12b9', '[\"*\"]', NULL, NULL, '2025-05-18 06:00:46', '2025-05-18 06:00:46'),
(42, 'App\\Models\\Guest', 146, 'google', 'c0e24e6960be80230ef830da223ad282520637abd1aa74146e24247a6d5ff448', '[\"*\"]', NULL, NULL, '2025-05-18 06:02:37', '2025-05-18 06:02:37'),
(43, 'App\\Models\\Guest', 146, 'google', '4c86aaa633661ba0a8faf39f71de5b4b68f688262fb6c85f03595ed3e4b9beb8', '[\"*\"]', NULL, NULL, '2025-05-18 06:03:11', '2025-05-18 06:03:11'),
(44, 'App\\Models\\Guest', 145, 'facebook', 'f320eced001e91537fbeb552b046287f62ada71d3d52d5f0ee483efee7bb2ab1', '[\"*\"]', NULL, NULL, '2025-05-18 06:03:23', '2025-05-18 06:03:23'),
(45, 'App\\Models\\Guest', 146, 'google', '1f5f4fd126a8a55d318bc7ee53fb0f012156634ed1f093dedcf410cfb4114a2a', '[\"*\"]', NULL, NULL, '2025-05-18 06:04:36', '2025-05-18 06:04:36'),
(46, 'App\\Models\\Guest', 146, 'google', 'ad199f23446d53e079e3fce7c347dc1532e198ac3b652049737c9fbf7a565c12', '[\"*\"]', NULL, NULL, '2025-05-18 06:04:55', '2025-05-18 06:04:55'),
(47, 'App\\Models\\Guest', 145, 'facebook', '01a029fd3f1682865f5d7ed049fe2e2087bc6fe2ae36941b059e60a9a0c5d65e', '[\"*\"]', NULL, NULL, '2025-05-18 06:05:08', '2025-05-18 06:05:08'),
(48, 'App\\Models\\Guest', 145, 'facebook', '5f561bcfe4a8203ded27392abfb9b565370ac8e04e59fdceddf0e69e4af19129', '[\"*\"]', NULL, NULL, '2025-05-18 19:35:27', '2025-05-18 19:35:27'),
(49, 'App\\Models\\Guest', 146, 'google', 'cd5c36864cf25b7bb5b526259806f3493e9c917aff98818cf4e2ba57f6629b01', '[\"*\"]', NULL, NULL, '2025-05-18 19:36:01', '2025-05-18 19:36:01');

-- --------------------------------------------------------

--
-- Table structure for table `reset_code_passwords`
--

CREATE TABLE `reset_code_passwords` (
  `email_address` varchar(255) NOT NULL,
  `code` varchar(255) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `reset_code_passwords`
--

INSERT INTO `reset_code_passwords` (`email_address`, `code`, `created_at`, `updated_at`) VALUES
('hp110333@gmail.com', '142915', '2025-05-18 01:12:37', '2025-05-18 01:12:37');

-- --------------------------------------------------------

--
-- Table structure for table `rooms`
--

CREATE TABLE `rooms` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `floor_id` bigint(20) UNSIGNED NOT NULL,
  `room_class_id` bigint(20) UNSIGNED NOT NULL,
  `room_status_id` bigint(20) UNSIGNED NOT NULL,
  `room_number` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `room_class`
--

CREATE TABLE `room_class` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `class_name` varchar(80) NOT NULL,
  `base_price` decimal(8,2) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `room_class_bed_type`
--

CREATE TABLE `room_class_bed_type` (
  `room_class_id` bigint(20) UNSIGNED NOT NULL,
  `bed_type_id` bigint(20) UNSIGNED NOT NULL,
  `numbeds` int(11) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `room_class_feature`
--

CREATE TABLE `room_class_feature` (
  `room_class_id` bigint(20) UNSIGNED NOT NULL,
  `feature_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `room_status`
--

CREATE TABLE `room_status` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `status_name` varchar(80) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `id` varchar(255) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `ip_address` varchar(45) DEFAULT NULL,
  `user_agent` text DEFAULT NULL,
  `payload` longtext NOT NULL,
  `last_activity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`id`, `user_id`, `ip_address`, `user_agent`, `payload`, `last_activity`) VALUES
('7GlRqSmvzkedbVUYyXH946ohS0ZR2nV69Didam63', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36 Edg/136.0.0.0', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiY3c4TDlERkhsM1JpR3hTalVTNHJHU254dU5PQ0lQRVVlcmFGZnBqSiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzU6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hdXRoL2ZhY2Vib29rIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo1OiJzdGF0ZSI7czo0MDoicTE5VXBPaEVocXl4bDQ5N1h0cUhUVlV0STZJMGJOOEllRkpkQUNMUSI7fQ==', 1747548765),
('AMkDQe1gxko9cqC5e1YhmjpmZPNwfKIXo024hlHw', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoiVzY1TVQwY1l6ak9uWVFiYWhTWEoxY1FZcTN5VGhRcWNwUkxneFc2eSI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzU6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hdXRoL2ZhY2Vib29rIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo1OiJzdGF0ZSI7czo0MDoia3NNb0RBdjl4eDRoSnhMbkRGV3FWSllIVlkxUDM4TmY2UXAxUkVkdCI7fQ==', 1747545250),
('CtSEEMxkwvplHxU6gVzdupyF0kwhND7KQdFQ8rqv', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36', 'YTo0OntzOjY6Il90b2tlbiI7czo0MDoidmNnbmhpd21zSmtya1dSV2JST3BneGJCS0R5T1ZjVVB6dkxnajZNMyI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6MzU6Imh0dHA6Ly8xMjcuMC4wLjE6ODAwMC9hdXRoL2ZhY2Vib29rIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319czo1OiJzdGF0ZSI7czo0MDoiVVRzQ3hodGJLUVFaY05HcjBkVEJ1QlRQNGRrVUE3eGZkQjFZWnJ5MCI7fQ==', 1747545099),
('JzdfNe01cSyJtqiOOcSSfh89fCKsr5xjIhbDoBWr', NULL, '127.0.0.1', 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36 Edg/136.0.0.0', 'YTozOntzOjY6Il90b2tlbiI7czo0MDoiaXdTTVhRcVRITTJEMGx1dVBTcEdmM0QyRHpPMUkwY2w5MWVYZXg3ZiI7czo5OiJfcHJldmlvdXMiO2E6MTp7czozOiJ1cmwiO3M6NDg0OiJodHRwOi8vbG9jYWxob3N0OjgwMDAvYXV0aC9mYWNlYm9vay9jYWxsYmFjaz9jb2RlPUFRQngwaHFvY3lUX2ZlQW9FMEhkUFlnWG16MVU5ZlRlTVp3NkdKTUUxZm1lRTE2dzM0TTlGVDljNWRyTHhmZFN4Q1R0Q1lqZV8ySFBBbHFVN2NWM1NSY0xGb21wUTFJSUdtaWVMeld1Y2U1UmdYbHNXSk9zdTBNLWNSckVCc0pJbDZrSGpNbWM3WUxZOE5PZVRoN0R3ZHI2R2xYb2RpNGRXT1g3Zzh5dU5qMTlkVERIUjN1YUQtYTAxRjZBYS1Id0RKY0tSMzRybVpzTzZZMllKQ0JEcmZmM2I1aGNWWU1NZnBERlNGNGtPMVVoY0pBbUhvMnZ4QnVZRThDREFRT1FXQlBCb25DR2NrV3JUcEhJdXdXMU9iS3hHakVnTnRTRk92LXJfRlgzZXVtelBwVFBoZ0dWSXgyVllKb0dYNFQ0allWZjUzLXIxS1ZGQ3hWVGRZNElBbHJaNTU2cHFTcVdkOGhEX2hhT3BMRFctd1VMSWkyMmRpS1RjaWRYbExOQ1RtWSZzdGF0ZT1xMTlVcE9oRWhxeXhsNDk3WHRxSFRWVXRJNkkwYk44SWVGSmRBQ0xRIjt9czo2OiJfZmxhc2giO2E6Mjp7czozOiJvbGQiO2E6MDp7fXM6MzoibmV3IjthOjA6e319fQ==', 1747549000);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(255) NOT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `addons`
--
ALTER TABLE `addons`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bed_type`
--
ALTER TABLE `bed_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `bookings_guest_id_foreign` (`guest_id`),
  ADD KEY `bookings_payment_status_id_foreign` (`payment_status_id`);

--
-- Indexes for table `booking_addon`
--
ALTER TABLE `booking_addon`
  ADD KEY `booking_addon_booking_id_foreign` (`booking_id`),
  ADD KEY `booking_addon_addon_id_foreign` (`addon_id`);

--
-- Indexes for table `booking_room`
--
ALTER TABLE `booking_room`
  ADD KEY `booking_room_booking_id_foreign` (`booking_id`),
  ADD KEY `booking_room_room_id_foreign` (`room_id`);

--
-- Indexes for table `cache`
--
ALTER TABLE `cache`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `cache_locks`
--
ALTER TABLE `cache_locks`
  ADD PRIMARY KEY (`key`);

--
-- Indexes for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indexes for table `features`
--
ALTER TABLE `features`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `floors`
--
ALTER TABLE `floors`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `guests`
--
ALTER TABLE `guests`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `jobs`
--
ALTER TABLE `jobs`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jobs_queue_index` (`queue`);

--
-- Indexes for table `job_batches`
--
ALTER TABLE `job_batches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `password_reset_tokens`
--
ALTER TABLE `password_reset_tokens`
  ADD PRIMARY KEY (`email`);

--
-- Indexes for table `payment_status`
--
ALTER TABLE `payment_status`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indexes for table `reset_code_passwords`
--
ALTER TABLE `reset_code_passwords`
  ADD KEY `reset_code_passwords_email_address_index` (`email_address`);

--
-- Indexes for table `rooms`
--
ALTER TABLE `rooms`
  ADD PRIMARY KEY (`id`),
  ADD KEY `rooms_floor_id_foreign` (`floor_id`),
  ADD KEY `rooms_room_class_id_foreign` (`room_class_id`),
  ADD KEY `rooms_room_status_id_foreign` (`room_status_id`);

--
-- Indexes for table `room_class`
--
ALTER TABLE `room_class`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `room_class_bed_type`
--
ALTER TABLE `room_class_bed_type`
  ADD KEY `room_class_bed_type_room_class_id_foreign` (`room_class_id`),
  ADD KEY `room_class_bed_type_bed_type_id_foreign` (`bed_type_id`);

--
-- Indexes for table `room_class_feature`
--
ALTER TABLE `room_class_feature`
  ADD KEY `room_class_feature_room_class_id_foreign` (`room_class_id`),
  ADD KEY `room_class_feature_feature_id_foreign` (`feature_id`);

--
-- Indexes for table `room_status`
--
ALTER TABLE `room_status`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sessions_user_id_index` (`user_id`),
  ADD KEY `sessions_last_activity_index` (`last_activity`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `addons`
--
ALTER TABLE `addons`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `bed_type`
--
ALTER TABLE `bed_type`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `bookings`
--
ALTER TABLE `bookings`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `features`
--
ALTER TABLE `features`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `floors`
--
ALTER TABLE `floors`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `guests`
--
ALTER TABLE `guests`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=147;

--
-- AUTO_INCREMENT for table `jobs`
--
ALTER TABLE `jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `payment_status`
--
ALTER TABLE `payment_status`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- AUTO_INCREMENT for table `rooms`
--
ALTER TABLE `rooms`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `room_class`
--
ALTER TABLE `room_class`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `room_status`
--
ALTER TABLE `room_status`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `bookings`
--
ALTER TABLE `bookings`
  ADD CONSTRAINT `bookings_guest_id_foreign` FOREIGN KEY (`guest_id`) REFERENCES `guests` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `bookings_payment_status_id_foreign` FOREIGN KEY (`payment_status_id`) REFERENCES `payment_status` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `booking_addon`
--
ALTER TABLE `booking_addon`
  ADD CONSTRAINT `booking_addon_addon_id_foreign` FOREIGN KEY (`addon_id`) REFERENCES `addons` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `booking_addon_booking_id_foreign` FOREIGN KEY (`booking_id`) REFERENCES `bookings` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `booking_room`
--
ALTER TABLE `booking_room`
  ADD CONSTRAINT `booking_room_booking_id_foreign` FOREIGN KEY (`booking_id`) REFERENCES `bookings` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `booking_room_room_id_foreign` FOREIGN KEY (`room_id`) REFERENCES `rooms` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `rooms`
--
ALTER TABLE `rooms`
  ADD CONSTRAINT `rooms_floor_id_foreign` FOREIGN KEY (`floor_id`) REFERENCES `floors` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `rooms_room_class_id_foreign` FOREIGN KEY (`room_class_id`) REFERENCES `room_class` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `rooms_room_status_id_foreign` FOREIGN KEY (`room_status_id`) REFERENCES `room_status` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `room_class_bed_type`
--
ALTER TABLE `room_class_bed_type`
  ADD CONSTRAINT `room_class_bed_type_bed_type_id_foreign` FOREIGN KEY (`bed_type_id`) REFERENCES `bed_type` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `room_class_bed_type_room_class_id_foreign` FOREIGN KEY (`room_class_id`) REFERENCES `room_class` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `room_class_feature`
--
ALTER TABLE `room_class_feature`
  ADD CONSTRAINT `room_class_feature_feature_id_foreign` FOREIGN KEY (`feature_id`) REFERENCES `features` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `room_class_feature_room_class_id_foreign` FOREIGN KEY (`room_class_id`) REFERENCES `room_class` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
