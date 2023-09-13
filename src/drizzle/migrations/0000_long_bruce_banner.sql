CREATE TABLE `pets` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`species` text NOT NULL
);
--> statement-breakpoint
CREATE UNIQUE INDEX `pets_id_unique` ON `pets` (`id`);--> statement-breakpoint
CREATE INDEX `name_index` ON `pets` (`name`);