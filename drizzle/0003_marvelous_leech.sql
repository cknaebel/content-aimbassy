ALTER TABLE `content_submissions` MODIFY COLUMN `hasHD1080p` enum('yes','no','partial');--> statement-breakpoint
ALTER TABLE `content_submissions` MODIFY COLUMN `hasMP4Format` enum('yes','no','partial');--> statement-breakpoint
ALTER TABLE `content_submissions` MODIFY COLUMN `hasWatermarks` enum('yes','no','some');--> statement-breakpoint
ALTER TABLE `content_submissions` ADD `contentType` enum('video','audio') NOT NULL;--> statement-breakpoint
ALTER TABLE `content_submissions` ADD `audioFormat` varchar(50);--> statement-breakpoint
ALTER TABLE `content_submissions` ADD `hasTranscript` enum('yes','no');