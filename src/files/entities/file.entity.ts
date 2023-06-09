import { FileType } from 'src/file-type/entities/file-type.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class File {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  key: string;

  @Column({ length: 300 })
  location: string;

  @Column({ length: 50 })
  localLocation: string;

  @Column()
  fileTypeId: number;

  @ManyToOne(() => FileType, (fileType: FileType) => fileType.files, {
    eager: true,
  })
  fileType: FileType;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
