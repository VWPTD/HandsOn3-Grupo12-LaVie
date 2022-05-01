create database lavie;

use lavie;

create table psicologo
(
id integer  primary key auto_increment,
nome varchar(100),
email varchar(100),
senha varchar(100),
apresentacao varchar(200)
);

create table paciente
(
id integer  primary key auto_increment,
nome varchar(100),
email varchar(100),
data_nasc date
);

create table atendimento
(
id integer  primary key auto_increment,
psicologo_id integer,
paciente_id integer,
data_atendimento date,
observacao varchar(200),
constraint foreign key (psicologo_id) references psicologo(id),
constraint foreign key (paciente_id) references paciente(id)
);