import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateDepartmentsTable1574824598631 implements MigrationInterface {
  name = 'CreateDepartmentsTable1574824598631';

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `CREATE TABLE "department" (
          "id" SERIAL NOT NULL, 
          "name" character varying(100) NOT NULL, 
          CONSTRAINT "PK_9a2213262c1593bffb581e382f5" 
          PRIMARY KEY ("id")
        )`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE "department"`, undefined);
  }
}
