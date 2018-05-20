DROP DATABASE chat;

CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  ID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username varchar(255),
  password varchar(255)
);

CREATE TABLE rooms (
  ID INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  userID int,
  messageID int,
  FOREIGN KEY (userID) REFERENCES users(ID)
);

CREATE TABLE messages (
  ID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  userID int,
  message varchar (255),
  roomID int,
  FOREIGN KEY (roomID) REFERENCES rooms(ID),
  FOREIGN KEY (userID) REFERENCES users(ID)
);

CREATE TABLE friendslist (
  userID int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  friendsID int,
  FOREIGN KEY (userID) REFERENCES users(ID),
  FOREIGN KEY (friendsID) REFERENCES users(ID)
);