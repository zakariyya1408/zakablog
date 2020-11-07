CREATE TABLE "public"."tbl_kategori" (
    "kode" varchar NOT NULL,
    "nama" varchar,
    PRIMARY KEY ("kode")
);

CREATE SEQUENCE IF NOT EXISTS tbl_bloginfo_id_seq

;
CREATE TABLE "public"."tbl_bloginfo" (
    "id" int4 NOT NULL DEFAULT nextval('tbl_bloginfo_id_seq'::regclass),
    "namablog" varchar,
    "about" varchar
);


INSERT INTO "public"."tbl_kategori" ("kode", "nama") VALUES
('ts', 'typescript');
INSERT INTO "public"."tbl_kategori" ("kode", "nama") VALUES
('node', 'nodejs');
INSERT INTO "public"."tbl_kategori" ("kode", "nama") VALUES
('deno', 'deno');

INSERT INTO "public"."tbl_bloginfo" ("id", "namablog", "about") VALUES
(1, 'zakablog', 'STIKOM BANYUWANGI merupakan kampus TI yang terlengkap di Banyuwangi. STIKOM BANYUWANGI memiliki Gedung Berlantai 3 dengan fasilitas - fasilitas yang sangat memadai untuk dunia IT. Dan sampai saat ini STIKOM terus menerus melakukan perubahan yang lebih baik dan mencetak lulusan - lulusan terbaik agar sesuai semboyan STIKOM BANYUWANGI');

