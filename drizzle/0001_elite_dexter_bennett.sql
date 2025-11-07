CREATE TABLE `content_submissions` (
	`id` int AUTO_INCREMENT NOT NULL,
	`contactName` varchar(255) NOT NULL,
	`email` varchar(320) NOT NULL,
	`phone` varchar(50),
	`company` varchar(255),
	`contentGenres` text NOT NULL,
	`totalHours` int NOT NULL,
	`contentDescription` text NOT NULL,
	`hasHD1080p` enum('yes','no','partial') NOT NULL,
	`hasMP4Format` enum('yes','no','partial') NOT NULL,
	`hasWatermarks` enum('yes','no','some') NOT NULL,
	`rightsConfirmation` enum('yes','no') NOT NULL,
	`additionalNotes` text,
	`status` enum('new','reviewing','contacted','accepted','rejected') NOT NULL DEFAULT 'new',
	`createdAt` timestamp NOT NULL DEFAULT (now()),
	`updatedAt` timestamp NOT NULL DEFAULT (now()) ON UPDATE CURRENT_TIMESTAMP,
	CONSTRAINT `content_submissions_id` PRIMARY KEY(`id`)
);
