import {MigrationInterface, QueryRunner} from "typeorm";

export class Initial1587132270920 implements MigrationInterface {
    name = 'Initial1587132270920'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `user` (`id` int NOT NULL AUTO_INCREMENT, `firstname` varchar(20) NOT NULL, `lastname` varchar(20) NOT NULL, `delflg` tinyint NOT NULL DEFAULT '0', `created_at` date NOT NULL DEFAULT CURDATE(), `updated_at` date NOT NULL DEFAULT CURDATE(), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `facility` (`id` int NOT NULL AUTO_INCREMENT, `label` varchar(20) NOT NULL, `start_datetime` datetime NOT NULL, `end_datetime` datetime NULL, `delflg` tinyint NOT NULL DEFAULT '0', `created_at` datetime NOT NULL DEFAULT CURDATE(), `updated_at` datetime NOT NULL DEFAULT CURDATE(), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("CREATE TABLE `bookinginfo` (`id` int NOT NULL AUTO_INCREMENT, `title` varchar(20) NOT NULL, `start_datetime` datetime NOT NULL, `end_datetime` datetime NOT NULL, `delflg` tinyint NOT NULL DEFAULT '0', `created_at` datetime NOT NULL DEFAULT CURDATE(), `updated_at` datetime NOT NULL DEFAULT CURDATE(), `userId` int NULL, `facilityId` int NULL, UNIQUE INDEX `REL_585ecca5a669b301c29134db12` (`userId`), UNIQUE INDEX `REL_53c37e942b02f24da4b194e3ac` (`facilityId`), PRIMARY KEY (`id`)) ENGINE=InnoDB", undefined);
        await queryRunner.query("ALTER TABLE `bookinginfo` ADD CONSTRAINT `FK_585ecca5a669b301c29134db122` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
        await queryRunner.query("ALTER TABLE `bookinginfo` ADD CONSTRAINT `FK_53c37e942b02f24da4b194e3aca` FOREIGN KEY (`facilityId`) REFERENCES `facility`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `bookinginfo` DROP FOREIGN KEY `FK_53c37e942b02f24da4b194e3aca`", undefined);
        await queryRunner.query("ALTER TABLE `bookinginfo` DROP FOREIGN KEY `FK_585ecca5a669b301c29134db122`", undefined);
        await queryRunner.query("DROP INDEX `REL_53c37e942b02f24da4b194e3ac` ON `bookinginfo`", undefined);
        await queryRunner.query("DROP INDEX `REL_585ecca5a669b301c29134db12` ON `bookinginfo`", undefined);
        await queryRunner.query("DROP TABLE `bookinginfo`", undefined);
        await queryRunner.query("DROP TABLE `facility`", undefined);
        await queryRunner.query("DROP TABLE `user`", undefined);
    }

}
