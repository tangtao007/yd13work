ALTER TABLE `book`.`user` 
CHANGE COLUMN `user` `id` int(10) NOT NULL AUTO_INCREMENT FIRST,
ADD COLUMN `username` varchar(50) NOT NULL AFTER `id`,
ADD COLUMN `password` varchar(32) NOT NULL AFTER `username`,
ADD COLUMN `authKey` varchar(100) NOT NULL AFTER `password`,
ADD COLUMN `accessToken` varchar(100) NULL AFTER `authKey`,
ADD COLUMN `isAdmin` tinyint(1) ZEROFILL NULL DEFAULT 0 AFTER `accessToken`,
ADD PRIMARY KEY (`id`);

ALTER TABLE `book`.`user` 
ADD COLUMN `emial` varchar(50) NULL AFTER `isAdmin`;