-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 13, 2023 at 11:53 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cars`
--

-- --------------------------------------------------------

--
-- Table structure for table `hertz_cars`
--

CREATE TABLE `hertz_cars` (
  `ID` int(4) NOT NULL,
  `Name` varchar(30) NOT NULL,
  `Description` varchar(250) NOT NULL,
  `Fuel` varchar(15) NOT NULL,
  `Price` double(10,2) NOT NULL,
  `Image` varchar(100) NOT NULL,
  `Rental_Days` int(2) NOT NULL,
  `Rented` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `hertz_cars`
--

INSERT INTO `hertz_cars` (`ID`, `Name`, `Description`, `Fuel`, `Price`, `Image`, `Rental_Days`, `Rented`) VALUES
(1001, 'Mitsubishi Pigeonero', 'The Mitsubishi Pigeonero is at the apex of what it feels like to drive a modern car. Equipped with custom headlights and a beautiful aerodynamic design, the Pigeonero is built to travel long distances with economically viable prices.', 'Seeds', 49.99, 'Placeholder', 0, 0),
(1002, 'Toyota Camry', 'Originally compact in size, the Camry has grown since the 1990s to fit the mid-size classification — although the two widths co-existed in that decade. Since the release of the wide-bodied versions, Camry has been extolled by Toyota as the firms seco', 'Petrol', 199.99, 'Placeholder', 0, 0),
(1003, 'Volkswagen Golf VII', 'Marketed in three-door and five-door hatchback, van, and estate forms, the Golf Mk7 shares the MQB platform with the third-generation Audi A3, SEAT León and Škoda Octavia.', 'Diesel', 299.99, 'Placeholder', 0, 0),
(1004, 'Mazda MPV', 'The MPV was designed from the ground-up as a minivan specifically for the American market, and was introduced in 1988 for the 1989 model year. It was based on the large rear-wheel-drive Mazda Luces platform. The platform allowed such options as a V6 ', 'Petrol', 109.99, 'Placeholder', 0, 0),
(1005, 'Nissan Leaf', 'The Nissan Leaf, stylized as LEAF, is a battery-electric powered compact car manufactured by Nissan. The Leafs range on a full charge has been increased gradually from 117 km (73 miles) to 364 km (226 miles), due to the use of a larger battery pack a', 'Electricity', 399.99, 'Placeholder', 0, 0),
(1006, 'Ford Mustang', 'The Ford Mustang is a sporty and iconic American muscle car thats often associated with fun and adventure. Its a popular choice for travelers who want to experience the thrill of driving a high-performance vehicle.', 'Petrol', 199.99, 'Placeholder', 0, 0),
(1007, '52kg Pure Himalayan Moose', 'The Himalayan Moose has been a classic vehicle used by those that live near the mountainous regions to the north. For a limited time, Hertz UTS is offering this once in a lifetime experience to adventurous travelers.', 'Leaves', 599.99, 'Placeholder', 0, 0),
(1008, 'Jeep Wrangler', 'The Jeep Wrangler is a rugged and capable SUV thats perfect for adventure seekers who want to explore off-road trails and remote destinations. Its also a popular choice for travelers who want to experience the thrill of open-air driving.', 'Petrol', 99.99, 'Placeholder', 0, 0),
(1009, 'Audi Q7 TDI', 'The Audi Q7 TDI is a large and luxurious SUV that is powered by a diesel engine that delivers impressive torque and fuel efficiency. Its a popular choice for families or groups of travelers who need plenty of space for passengers and luggage while al', 'Diesel', 249.99, 'Placeholder', 0, 0),
(1010, 'Nissan Fairlady Z33', 'The Fairlady Z33 is a sporty and stylish two-door coupe that offers impressive performance and a thrilling driving experience. With its sleek and aerodynamic design, powerful engine, and responsive handling, the Fairlady Z33 is the perfect car for an', 'Petrol', 999.99, 'Placeholder', 0, 0);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
