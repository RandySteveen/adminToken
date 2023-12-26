// src/models/AdminPanel.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('adminpanel')
export class AdminPanel {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  nom_page?: string ;

  @Column()
  stat_admi!: number;

  @Column()
  role_pag?: string ;
}
