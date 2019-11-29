import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateMovementsTable1574883014664 implements MigrationInterface {
  name = 'CreateMovementsTable1574883014664';

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `CREATE TABLE "movement" (
            "id" SERIAL NOT NULL, 
            "description" character varying(500) NOT NULL, 
            "movementType" character varying NOT NULL, 
            "value" numeric(15,2) NOT NULL DEFAULT 0, 
            "employeeId" integer NOT NULL, 
            CONSTRAINT "PK_079f005d01ebda984e75c2d67ee" 
            PRIMARY KEY ("id")
      )`,
    );
    await queryRunner.query(
      `ALTER TABLE "movement" ADD CONSTRAINT "FK_be377b8bc6b10d61ffbfdf761d5" 
        FOREIGN KEY ("employeeId") REFERENCES "employee"("id") 
        ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `ALTER TABLE "movement" DROP CONSTRAINT "FK_be377b8bc6b10d61ffbfdf761d5"`,
    );
    await queryRunner.query(`DROP TABLE "movement"`);
  }
}
