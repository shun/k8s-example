import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateRelationFacilityAndBookinginfo1586699977985 implements MigrationInterface {
    name = 'CreateRelationFacilityAndBookinginfo1586699977985'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `bookinginfo` ADD `facilityId` int NULL", undefined);
        await queryRunner.query("ALTER TABLE `bookinginfo` ADD UNIQUE INDEX `IDX_53c37e942b02f24da4b194e3ac` (`facilityId`)", undefined);
        await queryRunner.query("CREATE UNIQUE INDEX `REL_53c37e942b02f24da4b194e3ac` ON `bookinginfo` (`facilityId`)", undefined);
        await queryRunner.query("ALTER TABLE `bookinginfo` ADD CONSTRAINT `FK_53c37e942b02f24da4b194e3aca` FOREIGN KEY (`facilityId`) REFERENCES `facility`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION", undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `bookinginfo` DROP FOREIGN KEY `FK_53c37e942b02f24da4b194e3aca`", undefined);
        await queryRunner.query("DROP INDEX `REL_53c37e942b02f24da4b194e3ac` ON `bookinginfo`", undefined);
        await queryRunner.query("ALTER TABLE `bookinginfo` DROP INDEX `IDX_53c37e942b02f24da4b194e3ac`", undefined);
        await queryRunner.query("ALTER TABLE `bookinginfo` DROP COLUMN `facilityId`", undefined);
    }

}
