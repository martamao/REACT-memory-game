CREATE TABLE `memory_game`.`game_ranking` (
  `id_game` INT NOT NULL AUTO_INCREMENT,
  `player_name` VARCHAR(45) NOT NULL,game_ranking,
  `game_moves` INT NOT NULL,
  `game_time` TIME NOT NULL,
  `game_date` TIMESTAMP NOT NULL,
  `game_pairs` INT NOT NULL,
  PRIMARY KEY (`id_game`, `player_name`));