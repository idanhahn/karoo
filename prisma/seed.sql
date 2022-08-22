-- delete all previous records
TRUNCATE "_BookToManuscript", "User", "Manuscript", "ManuscriptAnalysis", "Book", "BookAnalysis", "BestSellerListAnalysis", "ArchtypeAnalysis" RESTART IDENTITY;

-- User Table
insert into "User" ("email") values ('idan.hahn@karoo.ai');
insert into "User" ("email") values ('jeremy.esekow@karoo.ai');
insert into "User" ("email") values ('gavin.marcus@karoo.ai');


-- Manuscript Table

-- User 1
insert into "Manuscript" ("title", "genre", "logline", "keyWords", "subjects", "active", "internalTextId", "createdAt", "updatedAt", "userId") values ('Deception Point', 'Thriller', 'On the eve of a presidential election, NASA discovers an extraterrestrial meteorite in the Arctic. The discovery could potentially be a deciding factor in the presidential election. One of the key issues is whether to continue funding NASA; incumbent President Zachary Herney favors supporting space research. Ashe discovers that Tench''s claims are true, but also finds out that NASA lied about the origin of the meteorite. Rachel and Gabrielle swap photo evidence of Sexton''s affair with Gabrielle to humiliate him and ruin his chances of winning the election.', '{keyword1, keyword2}', '{subject1, subject2}', true, 1, NOW(), NOW(), 1);
insert into "Manuscript" ("title", "genre", "logline", "keyWords", "subjects", "active", "internalTextId", "createdAt", "updatedAt", "userId") values ('Ender''s Game', 'Sci-fi', 'In the future, humanity has mastered interplanetary spaceflight. They encounter an insect-like alien race called the Formics, derogatorily named "buggers" Andrew "Ender" Wiggin is born a "Third": a rare exception to Earth''s two-child policy. Ender, now ten years old, is promoted to Command School on Eros. On Earth, Peter Wiggin uses a global communication system to post political essays under the pseudonym "Locke" Ender is prevented from returning home as he would be exploited by Peter and others. Ender is sent to a planet where he discovers the dormant egg of a Formic queen. Ender takes the egg and writes The Hive Queen under the alias "Speaker for the Dead". Peter, now the leader of Earth, recognizes Ender as the author and asks him to write a book about him.', '{keyword1, keyword2}', '{subject1, subject2}', false, 2, NOW(), NOW(), 1);
-- User 2
insert into "Manuscript" ("title", "genre", "logline", "keyWords", "subjects", "active", "internalTextId", "createdAt", "updatedAt", "userId") values ('Deception Point', 'Thriller', 'On the eve of a presidential election, NASA discovers an extraterrestrial meteorite in the Arctic. The discovery could potentially be a deciding factor in the presidential election. One of the key issues is whether to continue funding NASA; incumbent President Zachary Herney favors supporting space research. Ashe discovers that Tench''s claims are true, but also finds out that NASA lied about the origin of the meteorite. Rachel and Gabrielle swap photo evidence of Sexton''s affair with Gabrielle to humiliate him and ruin his chances of winning the election.', '{keyword1, keyword2}', '{subject1, subject2}', true, 1, NOW(), NOW(), 2);
insert into "Manuscript" ("title", "genre", "logline", "keyWords", "subjects", "active", "internalTextId", "createdAt", "updatedAt", "userId") values ('Ender''s Game', 'Sci-fi', 'In the future, humanity has mastered interplanetary spaceflight. They encounter an insect-like alien race called the Formics, derogatorily named "buggers" Andrew "Ender" Wiggin is born a "Third": a rare exception to Earth''s two-child policy. Ender, now ten years old, is promoted to Command School on Eros. On Earth, Peter Wiggin uses a global communication system to post political essays under the pseudonym "Locke" Ender is prevented from returning home as he would be exploited by Peter and others. Ender is sent to a planet where he discovers the dormant egg of a Formic queen. Ender takes the egg and writes The Hive Queen under the alias "Speaker for the Dead". Peter, now the leader of Earth, recognizes Ender as the author and asks him to write a book about him.', '{keyword1, keyword2}', '{subject1, subject2}', false, 2, NOW(), NOW(), 2);
-- User 3
insert into "Manuscript" ("title", "genre", "logline", "keyWords", "subjects", "active", "internalTextId", "createdAt", "updatedAt", "userId") values ('Deception Point', 'Thriller', 'On the eve of a presidential election, NASA discovers an extraterrestrial meteorite in the Arctic. The discovery could potentially be a deciding factor in the presidential election. One of the key issues is whether to continue funding NASA; incumbent President Zachary Herney favors supporting space research. Ashe discovers that Tench''s claims are true, but also finds out that NASA lied about the origin of the meteorite. Rachel and Gabrielle swap photo evidence of Sexton''s affair with Gabrielle to humiliate him and ruin his chances of winning the election.', '{keyword1, keyword2}', '{subject1, subject2}', true, 1, NOW(), NOW(), 3);
insert into "Manuscript" ("title", "genre", "logline", "keyWords", "subjects", "active", "internalTextId", "createdAt", "updatedAt", "userId") values ('Ender''s Game', 'Sci-fi', 'In the future, humanity has mastered interplanetary spaceflight. They encounter an insect-like alien race called the Formics, derogatorily named "buggers" Andrew "Ender" Wiggin is born a "Third": a rare exception to Earth''s two-child policy. Ender, now ten years old, is promoted to Command School on Eros. On Earth, Peter Wiggin uses a global communication system to post political essays under the pseudonym "Locke" Ender is prevented from returning home as he would be exploited by Peter and others. Ender is sent to a planet where he discovers the dormant egg of a Formic queen. Ender takes the egg and writes The Hive Queen under the alias "Speaker for the Dead". Peter, now the leader of Earth, recognizes Ender as the author and asks him to write a book about him.', '{keyword1, keyword2}', '{subject1, subject2}', false, 2, NOW(), NOW(), 3);


-- Manuscript Analysis Table

-- User 1
insert into "ManuscriptAnalysis" ("plotStructure", "beats", "pace", "dialogues", "narratives", "dialogue_per", "anger", "fear", "joy", "love", "sadness", "surprise", "emotions", "createdAt", "updatedAt", "manuscriptId") values (
  '{25,32,26,24,24,22,25,26,25,30,31,31,34,41,46,48,48,49,44,43,42,38,36,30,25,23,18,16,18,13,10,1,-7,-5,-7,-12,-17,-16,-21,-19,-17,-13,-4,-6,-5,-3,5,5,6,4,3,4,5,1,-4,-3,-4,-5,-5,-6,-6,-11,-12,-9,-4,0,-1,2,4,5,10,12,13,15,14,16,17,15,12,10,-2,-7,-12,-19,-26,-35,-43,-49,-47,-46,-45,-48,-46,-43,-38,-32,-26,-22,-20,-14}', 
  '{0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,0,0,0,0,0}',
  '{24,19,15,12,9,8,6,6,5,6,6,7,8,9,11,12,13,15,16,18,19,20,21,22,23,23,24,24,24,25,24,24,23,21,20,18,16,14,13,11,9,8,6,5,3,2,1,1,1,2,3,4,5,5,6,6,6,6,6,6,6,6,6,6,7,7,8,10,11,14,16,18,19,21,22,23,23,24,24,25,25,25,25,25,25,26,26,26,26,26,26,27,28,28,29,31,33,35,37,40}',
  '{39, 44, 19, 33, 30, 34, 36, 39, 38, 36, 22, 12, 42, 43, 37, 45, 49, 35, 60, 47, 48, 12, 36, 41, 20, 9, 18, 39, 35, 54, 50, 42, 40, 28, 36, 29, 18, 2, 8, 14, 14, 5, 40, 18, 24, 14, 22, 28, 27, 34, 21, 37, 34, 34, 18, 31, 23, 22, 29, 42, 52, 34, 25, 31, 35, 53, 32, 17, 31, 34, 19, 25, 42, 30, 30, 48, 40, 19, 42, 23, 25, 12, 8, 6, 10, 18, 29, 11, 27, 17, 19, 7, 14, 11, 1, 5, 9, 44, 20, 47}',
  '{66, 62, 87, 73, 76, 71, 70, 67, 68, 70, 83, 94, 64, 63, 69, 60, 57, 71, 46, 59, 58, 93, 70, 65, 86, 97, 87, 67, 71, 52, 56, 63, 66, 78, 70, 77, 87, 104, 98, 92, 92, 101, 65, 88, 82, 92, 84, 77, 79, 72, 85, 69, 71, 72, 88, 75, 83, 83, 77, 64, 54, 72, 81, 74, 71, 53, 74, 89, 74, 72, 87, 81, 64, 75, 76, 58, 66, 87, 63, 83, 81, 94, 98, 100, 95, 88, 77, 95, 79, 88, 87, 99, 92, 95, 104, 101, 97, 62, 86, 59}',
  28,
  '{85.5, 93.0, 76.5, 73.0, 81.0, 71.0, 92.0, 73.5, 76.5, 80.5, 80.0, 81.5, 78.0, 78.0, 79.0, 72.5, 76.0, 94.0, 73.0, 75.0}',
  '{69.5, 69.5, 98.0, 78.5, 77.0, 100.0, 81.0, 124.5, 111.0, 95.5, 93.0, 82.5, 102.5, 82.0, 93.0, 110.0, 122.0, 87.5, 118.0, 92.5}',
  '{158, 153, 121, 167, 170, 128, 130, 89, 103, 120, 133, 133, 108, 127, 138, 121, 85, 99, 83, 120}',
  '{96, 120, 12, 48, 24, 60, 12, 24, 24, 48, 12, 0, 0, 36, 48, 48, 12, 12, 60, 72}',
  '{44, 31, 47, 36, 28, 46, 40, 34, 42, 42, 44, 48, 46, 59, 33, 30, 43, 57, 51, 59}',
  '{81, 90, 99, 171, 117, 72, 99, 72, 63, 99, 45, 180, 126, 180, 90, 81, 36, 81, 72, 90}',
  '{16.7,19.8,26.1,8.1,9.0,20.4}',
  NOW(), NOW(), 1);

insert into "ManuscriptAnalysis" ("plotStructure", "beats", "pace", "dialogues", "narratives", "dialogue_per", "anger", "fear", "joy", "love", "sadness", "surprise", "emotions", "createdAt", "updatedAt", "manuscriptId") values (
  '{22,23,24,19,21,29,35,34,39,40,45,40,42,50,34,29,28,32,26,21,20,14,22,12,8,-1,3,0,-18,-18,-20,-26,-34,-41,-45,-41,-40,-42,-25,-21,-9,-19,-19,-5,-4,2,4,12,16,21,19,24,31,26,34,25,30,32,27,24,17,14,11,0,-11,-22,-27,-37,-44,-49,-38,-29,-28,-29, -25, -22,-16,-13,-8,5,2,3,5,1,9,3,-11,-30,-31,-19,-26,-37,-37,-37, -38, -28, -28, -20, -15, -24}', 
  '{0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0}',
  '{31,43,47,45,39,31,24,17,10,6,8,14,21,28,35,40,43,46,50,51,52,52,55,58,61,63,63,60,56,48,37,26,18,12,8,8,12,20,29,38,48,57,66,74,78,78,77,72,61,45,30,20,15,15,20,31,46,58,65,66,64,62,59,54,47,39,31,23,15,8,4,4,4,4,4,4,3,4,6,8,10,12,12,12,10,8,5,3,3,6,10,15,27,39,52,64,71,71,60,34}',
  '{}',
  '{}',
  0,
  '{}',
  '{}',
  '{}',
  '{}',
  '{}',
  '{}',
  '{}',
  NOW(), NOW(), 2);

-- User 2
insert into "ManuscriptAnalysis" ("plotStructure", "beats", "pace", "dialogues", "narratives", "dialogue_per", "createdAt", "updatedAt", "manuscriptId") values (
  '{25,32,26,24,24,22,25,26,25,30,31,31,34,41,46,48,48,49,44,43,42,38,36,30,25,23,18,16,18,13,10,1,-7,-5,-7,-12,-17,-16,-21,-19,-17,-13,-4,-6,-5,-3,5,5,6,4,3,4,5,1,-4,-3,-4,-5,-5,-6,-6,-11,-12,-9,-4,0,-1,2,4,5,10,12,13,15,14,16,17,15,12,10,-2,-7,-12,-19,-26,-35,-43,-49,-47,-46,-45,-48,-46,-43,-38,-32,-26,-22,-20,-14}', 
  '{0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,0,0,0,0,0}',
  '{24,19,15,12,9,8,6,6,5,6,6,7,8,9,11,12,13,15,16,18,19,20,21,22,23,23,24,24,24,25,24,24,23,21,20,18,16,14,13,11,9,8,6,5,3,2,1,1,1,2,3,4,5,5,6,6,6,6,6,6,6,6,6,6,7,7,8,10,11,14,16,18,19,21,22,23,23,24,24,25,25,25,25,25,25,26,26,26,26,26,26,27,28,28,29,31,33,35,37,40}',
  '{39, 44, 19, 33, 30, 34, 36, 39, 38, 36, 22, 12, 42, 43, 37, 45, 49, 35, 60, 47, 48, 12, 36, 41, 20, 9, 18, 39, 35, 54, 50, 42, 40, 28, 36, 29, 18, 2, 8, 14, 14, 5, 40, 18, 24, 14, 22, 28, 27, 34, 21, 37, 34, 34, 18, 31, 23, 22, 29, 42, 52, 34, 25, 31, 35, 53, 32, 17, 31, 34, 19, 25, 42, 30, 30, 48, 40, 19, 42, 23, 25, 12, 8, 6, 10, 18, 29, 11, 27, 17, 19, 7, 14, 11, 1, 5, 9, 44, 20, 47}',
  '{66, 62, 87, 73, 76, 71, 70, 67, 68, 70, 83, 94, 64, 63, 69, 60, 57, 71, 46, 59, 58, 93, 70, 65, 86, 97, 87, 67, 71, 52, 56, 63, 66, 78, 70, 77, 87, 104, 98, 92, 92, 101, 65, 88, 82, 92, 84, 77, 79, 72, 85, 69, 71, 72, 88, 75, 83, 83, 77, 64, 54, 72, 81, 74, 71, 53, 74, 89, 74, 72, 87, 81, 64, 75, 76, 58, 66, 87, 63, 83, 81, 94, 98, 100, 95, 88, 77, 95, 79, 88, 87, 99, 92, 95, 104, 101, 97, 62, 86, 59}',
  28,
  NOW(), NOW(), 3);
insert into "ManuscriptAnalysis" ("plotStructure", "beats", "pace", "dialogues", "narratives", "dialogue_per", "createdAt", "updatedAt", "manuscriptId") values (
  '{22,23,24,19,21,29,35,34,39,40,45,40,42,50,34,29,28,32,26,21,20,14,22,12,8,-1,3,0,-18,-18,-20,-26,-34,-41,-45,-41,-40,-42,-25,-21,-9,-19,-19,-5,-4,2,4,12,16,21,19,24,31,26,34,25,30,32,27,24,17,14,11,0,-11,-22,-27,-37,-44,-49,-38,-29,-28,-29, -25, -22,-16,-13,-8,5,2,3,5,1,9,3,-11,-30,-31,-19,-26,-37,-37,-37, -38, -28, -28, -20, -15, -24}', 
  '{0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0}',
  '{39,36,33,31,29,28,28,27,28,28,29,30,31,33,34,35,37,38,39,40,41,42,43,44,44,44,43,41,41,40,40,40,40,39,39,40,40,39,39,40,40,40,41,42,43,45,47,49,51,53,55,56,56,56,55,53,51,48,46,43,40,38,36,34,33,32,31,29,28,27,24,21,18,12,6,4,3,2,2,2,2,3,4,6,8,10,13,15,18,21,24,27,30,33,35,37,39,40,40,40}',
  '{}',
  '{}',
  0,
  NOW(), NOW(), 4);

-- User 3
insert into "ManuscriptAnalysis" ("plotStructure", "beats", "pace", "dialogues", "narratives", "dialogue_per", "createdAt", "updatedAt", "manuscriptId") values (
  '{25,32,26,24,24,22,25,26,25,30,31,31,34,41,46,48,48,49,44,43,42,38,36,30,25,23,18,16,18,13,10,1,-7,-5,-7,-12,-17,-16,-21,-19,-17,-13,-4,-6,-5,-3,5,5,6,4,3,4,5,1,-4,-3,-4,-5,-5,-6,-6,-11,-12,-9,-4,0,-1,2,4,5,10,12,13,15,14,16,17,15,12,10,-2,-7,-12,-19,-26,-35,-43,-49,-47,-46,-45,-48,-46,-43,-38,-32,-26,-22,-20,-14}', 
  '{0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,0,0,0,0,0}',
  '{24,19,15,12,9,8,6,6,5,6,6,7,8,9,11,12,13,15,16,18,19,20,21,22,23,23,24,24,24,25,24,24,23,21,20,18,16,14,13,11,9,8,6,5,3,2,1,1,1,2,3,4,5,5,6,6,6,6,6,6,6,6,6,6,7,7,8,10,11,14,16,18,19,21,22,23,23,24,24,25,25,25,25,25,25,26,26,26,26,26,26,27,28,28,29,31,33,35,37,40}',
  '{39, 44, 19, 33, 30, 34, 36, 39, 38, 36, 22, 12, 42, 43, 37, 45, 49, 35, 60, 47, 48, 12, 36, 41, 20, 9, 18, 39, 35, 54, 50, 42, 40, 28, 36, 29, 18, 2, 8, 14, 14, 5, 40, 18, 24, 14, 22, 28, 27, 34, 21, 37, 34, 34, 18, 31, 23, 22, 29, 42, 52, 34, 25, 31, 35, 53, 32, 17, 31, 34, 19, 25, 42, 30, 30, 48, 40, 19, 42, 23, 25, 12, 8, 6, 10, 18, 29, 11, 27, 17, 19, 7, 14, 11, 1, 5, 9, 44, 20, 47}',
  '{66, 62, 87, 73, 76, 71, 70, 67, 68, 70, 83, 94, 64, 63, 69, 60, 57, 71, 46, 59, 58, 93, 70, 65, 86, 97, 87, 67, 71, 52, 56, 63, 66, 78, 70, 77, 87, 104, 98, 92, 92, 101, 65, 88, 82, 92, 84, 77, 79, 72, 85, 69, 71, 72, 88, 75, 83, 83, 77, 64, 54, 72, 81, 74, 71, 53, 74, 89, 74, 72, 87, 81, 64, 75, 76, 58, 66, 87, 63, 83, 81, 94, 98, 100, 95, 88, 77, 95, 79, 88, 87, 99, 92, 95, 104, 101, 97, 62, 86, 59}',
  28,
  NOW(), NOW(), 5);
insert into "ManuscriptAnalysis" ("plotStructure", "beats", "pace", "dialogues", "narratives", "dialogue_per", "createdAt", "updatedAt", "manuscriptId") values (
  '{22,23,24,19,21,29,35,34,39,40,45,40,42,50,34,29,28,32,26,21,20,14,22,12,8,-1,3,0,-18,-18,-20,-26,-34,-41,-45,-41,-40,-42,-25,-21,-9,-19,-19,-5,-4,2,4,12,16,21,19,24,31,26,34,25,30,32,27,24,17,14,11,0,-11,-22,-27,-37,-44,-49,-38,-29,-28,-29, -25, -22,-16,-13,-8,5,2,3,5,1,9,3,-11,-30,-31,-19,-26,-37,-37,-37, -38, -28, -28, -20, -15, -24}', 
  '{0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0}',
  '{39,36,33,31,29,28,28,27,28,28,29,30,31,33,34,35,37,38,39,40,41,42,43,44,44,44,43,41,41,40,40,40,40,39,39,40,40,39,39,40,40,40,41,42,43,45,47,49,51,53,55,56,56,56,55,53,51,48,46,43,40,38,36,34,33,32,31,29,28,27,24,21,18,12,6,4,3,2,2,2,2,3,4,6,8,10,13,15,18,21,24,27,30,33,35,37,39,40,40,40}',
  '{}',
  '{}',
  0,
  NOW(), NOW(), 6);


-- Book Table
INSERT INTO "Book" ("title", "author", "genre", "publicationDate", "description",  "subjects", "keywords",  "isbn13", "isbn10", "amazonProductUrl", "createdAt", "updatedAt") VALUES ('Ready Player One', 'Ernest Cline', 'Sci fi', '2011-08-01', 'In the year 2045, reality is an ugly place. The only time Wade Watts really feels alive is when he’s jacked into the OASIS, a vast virtual world where most of humanity spends their days.', '{subjects}', '{keywords}', '9780307887443', '307887448', 'https://www.amazon.com/Ready-Player-One-Ernest-Cline/dp/030788743X?tag=NYTBS-20', NOW(), NOW());
INSERT INTO "Book" ("title", "author", "genre", "publicationDate", "description",  "subjects", "keywords",  "isbn13", "isbn10", "amazonProductUrl", "createdAt", "updatedAt") VALUES ('The Singularity Trap', 'Dennis E. Taylor', 'Sci fi', '2018-07-01', 'Determined to give his wife and children a better life back home, Ivan Pritchard ventures to the edge of known space to join the crew of the Mad Astra as an asteroid miner. He''s prepared for hard work and loneliness—but not the unthinkable. After coming into contact with a mysterious alien substance, Pritchard finds an unwelcome entity sharing his mind, and a disturbing physical transformation taking place. With his very humanity at stake, Pritchard must save mankind from a full-scale interstellar war.', '{subjects}', '{keywords}', '9781603934190', '', 'https://www.amazon.com/The-Singularity-Trap/dp/B07BHVR59C?tag=NYTBS-20', NOW(), NOW());
INSERT INTO "Book" ("title", "author", "genre", "publicationDate", "description",  "subjects", "keywords",  "isbn13", "isbn10", "amazonProductUrl", "createdAt", "updatedAt") VALUES ('State of Fear', 'Michael Crichton', 'Thriller', '2015-08-01', 'When a group of eco-terrorists engage in a global conspiracy to generate weather-related natural disasters, its up to environmental lawyer Peter Evans and his team to uncover the subterfuge.', '{subjects}', '{keywords}', '9780061752728', '006175272X', 'https://www.amazon.com/State-Fear-Michael-Crichton-ebook/dp/B000FC2NQW?tag=NYTBS-20', NOW(), NOW());
INSERT INTO "Book" ("title", "author", "genre", "publicationDate", "description",  "subjects", "keywords",  "isbn13", "isbn10", "amazonProductUrl", "createdAt", "updatedAt") VALUES ('Pirate Latitudes', 'Michael Crichton', 'Adventure', '2009-11-01', 'In the 17th-century Caribbean, a British pirate attacks a Spanish galleon', '{subjects}', '{keywords}', '9780061929373', '61929379', 'https://www.amazon.com/Pirate-Latitudes-Novel-Michael-Crichton/dp/0061929379?tag=NYTBS-20', NOW(), NOW());
INSERT INTO "Book" ("title", "author", "genre", "publicationDate", "description",  "subjects", "keywords",  "isbn13", "isbn10", "amazonProductUrl", "createdAt", "updatedAt") VALUES ('Eragon', 'Christopher Paolini', 'Fantasy', '2002-08-01', 'When fifteen-year-old Eragon finds a polished blue stone in the forest, he thinks it is the lucky discovery of a poor farm boy. But when the stone brings a dragon hatchling, Eragon soon realizes he has stumbled upon a legacy nearly as old as the Empire itself.', '{subjects}', '{keywords}', '', '', 'https://www.amazon.com/Eragon-Inheritance-Book-Christopher-Paolini/dp/0375826696', NOW(), NOW());
INSERT INTO "Book" ("title", "author", "genre", "publicationDate", "description",  "subjects", "keywords",  "isbn13", "isbn10", "amazonProductUrl", "createdAt", "updatedAt") VALUES ('The Jefferson Key', 'Steve Berry', 'Thriller', '2011-06-01', 'The former government operative Cotton Malone foils an assassination attempt on the president and finds himself at dangerous odds with a secret society.', '{subjects}', '{keywords}', '9780345530165', '345530160', 'https://www.amazon.com/The-Jefferson-Key-A-Novel/dp/0345505514?tag=NYTBS-20', NOW(), NOW());
INSERT INTO "Book" ("title", "author", "genre", "publicationDate", "description",  "subjects", "keywords",  "isbn13", "isbn10", "amazonProductUrl", "createdAt", "updatedAt") VALUES ('The Bishop''s Pawn', 'Steve Berry', 'Thriller', '2018-04-01', 'Cotton Malone discovers revelations about the day the Rev. Dr. Martin Luther King Jr. was assassinated.', '{subjects}', '{keywords}', '9781250140234', '1250140234', 'https://www.amazon.com/Bishops-Pawn-Novel-Cotton-Malone-ebook/dp/B074ZRSMQK?tag=NYTBS-20', NOW(), NOW());
INSERT INTO "Book" ("title", "author", "genre", "publicationDate", "description",  "subjects", "keywords",  "isbn13", "isbn10", "amazonProductUrl", "createdAt", "updatedAt") VALUES ('The Lincoln Myth', 'Steve Berry', 'Thriller', '2014-06-01', 'The ex-government operative Cotton Malone becomes involved in a dangerous conflict set in motion by the founding fathers.', '{subjects}', '{keywords}', '9780345526595', '', 'https://www.amazon.com/The-Lincoln-Myth-Cotton-Malone-ebook/dp/B00F1W0DBI?tag=NYTBS-20', NOW(), NOW());
INSERT INTO "Book" ("title", "author", "genre", "publicationDate", "description",  "subjects", "keywords",  "isbn13", "isbn10", "amazonProductUrl", "createdAt", "updatedAt") VALUES ('The Malta Exchange', 'Steve Berry', 'Thriller', '2019-03-01', 'The pope is dead. A conclave to select his replacement is about to begin. Cardinals are beginning to arrive at the Vatican, but one has fled Rome for Malta in search of a document that dates back to the 4th century and Constantine the Great.', '{subjects}', '{keywords}', '9781250140272', '1250140277', 'https://www.amazon.com/Malta-Exchange-Novel-Cotton-Malone-ebook/dp/B07D2BV7LW?tag=NYTBS-20', NOW(), NOW());



-- BookAnalysis Table
insert into "BookAnalysis" ("plotStructure", "beats", "createdAt", "updatedAt", "bookId") values (
  '{5,22,15,18,32,43,40,28,31,14,-5,-4,-8,-20,-12,-15,-32,-24,-22,-17,-17,-11,0,6,3,17,29,25,38,36,33,29,8,12,-6,-6,0,-14,-21,-25,-30,-33,-33,-30,-4,4,-1,-5,-4,6,2,6,-6,-16,-16,-6,-5,-12,0,3,-10,-21,-23,-29,-13,-2,3,7,8,0,-3,-2,9,19,19,15,9,10,-2,-6,-11,-1,0,7,21,20,28,30,12,-3,-9,-24,-19,-30,-30,-32,-43,-40,-40,-39}',
  '{0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0}',
  NOW(), NOW(), 1);
INSERT INTO "BookAnalysis" ("plotStructure", "beats", "createdAt", "updatedAt", "bookId") VALUES (
  '{45,40,31,20,8,-2,-15,-28,-35,-44,-33,-31,-37,-40,-36,-37,-36,-26,-24,-23,-30,-35,-27,-28,-15,-22,-27,-12,-17,-28,-43,-50,-38,-46,-40,-39,-28,-29,-21,-32,-23,-23,-25,-20,-21,-17,-15,-28,-32,-18,-25,-28,-24,-30,-26,-24,-23,-27,-33,-35,-28,-28,-21,-18,-34,-26,-14,-10,-21,-18,-24,-32,-32,-32,-25,-25,-35,-26,-26,-21,-20,-27,-38,-37,-48,-43,-36,-39,-45,-47,-38,-46,-41,-40,-37,-46,-45,-26,-20,-2}', 
  '{0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,1,0,0,0,0,0,0,-1,0,0,0,0,0,1,0,0,0,0,0,-1,0,0,0,0,0,1,0,0,0,0,0,0,0,-1,0,0,0,0,0,1,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0}',
  NOW(), NOW(), 2);
INSERT INTO "BookAnalysis" ("plotStructure", "beats", "createdAt", "updatedAt", "bookId") VALUES (
  '{22,27,31,45,43,42,46,48,46,37,24,14,12,16,6,-8,-13,-9,-4,2,-6,-9,-9,2,6,11,9,4,8,8,5,-4,-2,-7,-17,-19,-20,-19,-11,-8,-15,-16,-2,-2,-5,-6,-13,-27,-29,-37,-40,-42,-46,-42,-19,-5,2,17,23,24,29,20,3,3,1,-13,-26,-24,-16,-5,-2,-7,-12,10,16,13,9,8,10,9,2,-14,-23,-26,-42,-48,-46,-38,-37,-24,-14,-9,10,17,8,9,3,0,-11,-18}', 
  '{0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,1,0,0,0,0,0,-1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,1,0,0,0,0,0,0}',
  NOW(), NOW(), 3);
INSERT INTO "BookAnalysis" ("plotStructure", "beats", "createdAt", "updatedAt", "bookId") VALUES (
  '{31,33,35,37,37,39,40,40,48,47,44,49,44,44,46,41,38,36,35,31,25,23,16,13,12,10,13,8,4,-1,-4,0,-5,-5,-8,-11,-12,-10,-10,-10,-13,-13,-12,-8,-6,-4,-3,-4,2,1,3,5,5,5,6,1,1,2,2,1,-4,-1,-3,-1,-1,-4,-11,-22,-23,-26,-32,-36,-38,-42,-42,-40,-39,-42,-49,-44,-43,-40,-41,-36,-38,-36,-31,-19,-14,-13,-13,-12,-11,-14,-15,-14,-10,-4,0,4}', 
  '{0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0}',
  NOW(), NOW(), 4);
INSERT INTO "BookAnalysis" ("plotStructure", "beats", "createdAt", "updatedAt", "bookId") VALUES (
  '{-2,4,5,8,13,19,31,42,41,25,14,15,11,1,-11,-18,-23,-15,-12,3,-5,-8,-16,-14,-16,-15,-16,-12,-14,-6,0,7,11,9,19,21,18,15,15,17,19,25,19,8,4,4,1,1,3,-7,-20,-25,-22,-22,-19,-10,-16,-18,-16,-3,0,-4,3,-5,-6,0,2,2,-4,-9,-6,-10,-18,-33,-43,-48,-44,-40,-26,-19,-19,-16,-1,4,13,21,21,21,23,24,28,23,30,27,25,9,-6,-24,-38,-35}', 
  '{0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0}',
  NOW(), NOW(), 5);
INSERT INTO "BookAnalysis" ("plotStructure", "beats", "createdAt", "updatedAt", "bookId") VALUES (
  '{15,23,20,27,36,44,44,41,36,28,16,13,3,3,-6,-11,-3,7,0,-3,-4,-7,-5,-7,-15,-14,-23,-28,-22,-15,-18,-7,-9,-16,-5,-13,-10,-4,-8,-11,2,-8,-7,-4,-3,5,-3,0,3,5,-5,-1,-4,-6,-8,0,10,-1,-8,-17,-11,-11,-10,-1,-9,-20,-35,-32,-31,-27,-31,-37,-40,-49,-44,-41,-35,-30,-29,-27,-22,-17,-18,-17,-12,-2,-2,-3,0,3,4,13,13,22,19,4,4,5,-4,-10}', 
  '{0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0}',
  NOW(), NOW(), 6);
INSERT INTO "BookAnalysis" ("plotStructure", "beats", "createdAt", "updatedAt", "bookId") VALUES (
  '{35,33,33,47,38,29,24,10,15,14,14,13,4,5,-4,-5,-12,-14,-14,-11,-1,0,-2,1,3,7,3,3,7,17,20,10,-3,-7,-20,-19,-15,-8,-8,-15,-20,-15,-20,-33,-37,-33,-18,-26,-23,-21,-25,-26,-20,-23,-23,-27,-25,-20,-11,-11,-14,-13,-11,-10,-10,-10,-15,-5,5,-2,2,-6,-1,-4,-6,-13,-20,-29,-32,-26,-29,-38,-37,-33,-29,-34,-32,-33,-40,-35,-32,-14,-22,-27,-28,-32,-29,-36,-47,-40}', 
  '{0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,0,0,0,0}',
  NOW(), NOW(), 7);
INSERT INTO "BookAnalysis" ("plotStructure", "beats", "createdAt", "updatedAt", "bookId") VALUES (
  '{-13,-13,-23,-23,-17,-13,-23,-21,-9,-7,-16,-18,-13,0,9,20,30,31,37,48,40,25,28,22,22,17,15,12,1,3,1,3,9,11,13,16,16,18,21,20,19,6,7,-1,-6,-10,-4,3,5,0,-2,0,1,6,5,5,11,16,10,-5,-13,-6,0,9,5,3,15,27,26,21,17,27,31,30,17,10,9,10,3,-6,-15,-4,-6,-12,-13,-11,-8,-9,-13,-19,-29,-33,-36,-47,-46,-42,-45,-44,-44,-36}', 
  '{0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,1,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,-1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0}',
  NOW(), NOW(), 8);
INSERT INTO "BookAnalysis" ("plotStructure", "beats", "createdAt", "updatedAt", "bookId") VALUES (
  '{-41,-41,-42,-33,-35,-33,-23,-11,1,7,12,16,19,30,31,32,45,49,42,36,24,12,5,6,-1,0,-7,-17,-18,-22,-21,-21,-16,-12,-17,-10,-9,-1,8,-1,-9,-14,-17,-16,-20,-22,-24,-35,-35,-43,-48,-36,-33,-23,-19,-14,-13,-7,0,-4,0,0,-9,-15,-25,-27,-28,-31,-32,-32,-27,-28,-23,-21,-15,-8,-8,-3,-2,2,3,17,15,10,14,16,14,11,17,16,19,17,10,-5,2,0,-7,-9,4,2}', 
  '{0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0}',
  NOW(), NOW() ,9);


-- Similar Books

-- User 1 (Book Similar to Manuscript)
-- Deception Point Similar to State of Fear, The Lincoln Myth The Malta Exchange
insert into "_BookToManuscript" values (3, 1);
insert into "_BookToManuscript" values (8, 1);
insert into "_BookToManuscript" values (9, 1);
-- Ender's Game Similar to Ready Player One, THe Singularity Trap
insert into "_BookToManuscript" values (1, 2);
insert into "_BookToManuscript" values (2, 2);

-- User 2
insert into "_BookToManuscript" values (1, 3);
insert into "_BookToManuscript" values (2, 3);

-- User 3
insert into "_BookToManuscript" values (1, 5);
insert into "_BookToManuscript" values (2, 5);


-- BestSellerListAnalysis

insert into "BestSellerListAnalysis" ("name", "genre", "from", "to", "plotStructure", "beats", "createdAt", "updatedAt") values ('New York Bestsellers', 'Sci-fi', NOW(), NOW(), 
'{6,5,-2,-2,-28,-25,-34,-38,-41,-42,-39,-49,-29,-10,-2,1,10,17,27,37,40,25,11,8,9,6,1,2,-6,7,10,21,21,23,21,19,27,19,31,22,22,12,22,31,24,34,38,35,32,40,47,39,42,43,36,24,19,19,12,4,3,3,-1,7,5,18,20,32,31,36,34,30,27,35,33,25,16,6,-3,-5,0,1,1,7,7,4,20,26,18,11,5,0,-10,-14,0,2,1,5,19,25}', 
'{0,0,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,1,0,0,0,0,0,-1,0,0,0,0,0,0}',
NOW(), NOW());
insert into "BestSellerListAnalysis" ("name", "genre", "from", "to", "plotStructure", "beats", "createdAt", "updatedAt") values ('New York Bestsellers', 'Thriller', NOW(), NOW(), 
'{8,4,-2,-8,-16,-23,-30,-35,-40,-42,-43,-41,-38,-33,-26,-19,-12,-5,2,8,11,15,16,15,13,10,6,2,-2,-5,-7,-9,-9,-8,-5,-1,3,7,12,17,23,27,31,34,35,35,34,32,30,27,25,22,20,18,16,15,14,14,14,15,16,16,17,17,18,18,19,18,18,18,17,16,14,13,12,10,8,6,4,2,0,-1,-3,-5,-5,-5,-4,-2,0,2,6,10,14,18,22,26,29,32,34,35}', 
'{0,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,-1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0}',
NOW(), NOW());


-- ArchtypesAnalysis
insert into "ArchtypeAnalysis" ("class", "plotStructure", "createdAt", "updatedAt") values ('Man In the Hole', '{40,39,39,39,38,37,36,35,34,33,32,31,29,27,25,23,20,18,16,13,11,9,7,5,2,0,-2,-4,-7,-9,-12,-14,-16,-18,-20,-22,-24,-27,-29,-31,-32,-34,-35,-36,-36,-37,-37,-38,-38,-38,-39,-39,-40,-39,-38,-37,-37,-36,-35,-34,-32,-30,-29,-27,-25,-23,-22,-20,-18,-15,-13,-11,-9,-6,-4,-1,1,4,7,10,12,14,17,19,21,23,25,27,28,30,32,33,34,35,36,37,37,38,38,39}', NOW(), NOW());
insert into "ArchtypeAnalysis" ("class", "plotStructure", "createdAt", "updatedAt") values ('Emergence', '{-44,-43,-42,-41,-40,-38,-37,-35,-34,-32,-30,-27,-25,-23,-20,-18,-16,-14,-12,-10,-8,-6,-4,-2,0,1,3,4,4,5,6,6,6,6,6,6,5,5,4,3,2,1,0,-1,-3,-4,-5,-6,-7,-8,-10,-11,-12,-13,-14,-14,-15,-15,-15,-15,-15,-15,-15,-15,-14,-12,-11,-10,-8,-7,-5,-4,-2,-1,1,3,5,7,10,13,15,17,18,20,22,24,26,28,30,31,33,34,35,36,37,38,38,39,39,40}', NOW(), NOW());
insert into "ArchtypeAnalysis" ("class", "plotStructure", "createdAt", "updatedAt") values ('The Quest', '{-7,-7,-6,-5,-4,-2,0,2,4,7,9,12,14,17,20,22,25,27,30,32,34,35,37,39,39,40,41,41,41,40,39,39,37,36,34,33,31,29,27,25,23,21,20,18,17,15,14,13,13,12,11,11,12,12,12,13,13,15,16,17,18,19,21,22,23,23,24,25,25,26,26,26,25,25,23,22,21,19,16,14,11,9,6,2,-1,-5,-8,-12,-15,-18,-21,-25,-27,-30,-32,-34,-36,-38,-39,-40}', NOW(), NOW());
insert into "ArchtypeAnalysis" ("class", "plotStructure", "createdAt", "updatedAt") values ('Rags to Riches', '{-13,-14,-14,-13,-12,-11,-9,-8,-6,-4,-2,1,3,5,8,11,14,16,19,21,24,26,29,31,33,35,36,37,38,40,40,40,40,40,40,39,38,36,35,33,31,28,26,23,20,17,14,10,7,4,0,-3,-7,-10,-13,-16,-19,-23,-25,-28,-30,-32,-34,-36,-38,-39,-40,-41,-41,-41,-40,-40,-39,-38,-36,-35,-34,-32,-30,-27,-25,-23,-20,-18,-15,-13,-10,-7,-4,-2,1,3,5,7,8,10,11,12,13,14}', NOW(), NOW());
insert into "ArchtypeAnalysis" ("class", "plotStructure", "createdAt", "updatedAt") values ('Voyage and Return', '{21,20,20,18,16,14,11,8,5,2,-2,-6,-9,-13,-17,-20,-23,-26,-29,-31,-33,-35,-36,-37,-37,-36,-36,-35,-33,-32,-30,-27,-24,-21,-17,-14,-10,-6,-3,1,4,8,11,14,16,18,20,21,22,23,22,22,21,19,17,15,12,9,6,2,-2,-6,-10,-14,-19,-23,-26,-29,-32,-34,-37,-39,-39,-40,-41,-40,-40,-38,-37,-35,-32,-29,-25,-21,-17,-13,-8,-3,2,7,12,17,21,25,29,32,35,37,39,41}', NOW(), NOW());
insert into "ArchtypeAnalysis" ("class", "plotStructure", "createdAt", "updatedAt") values ('Rise and Fall', '{13,13,12,10,9,7,5,2,0,-3,-5,-8,-11,-14,-16,-19,-21,-23,-26,-28,-29,-31,-32,-32,-33,-33,-33,-32,-32,-30,-29,-27,-25,-22,-20,-17,-14,-11,-7,-4,0,4,7,11,14,18,21,24,27,30,31,33,35,37,38,39,40,40,40,39,39,37,36,34,32,30,28,26,23,20,17,14,11,8,5,2,-1,-4,-7,-10,-13,-16,-19,-21,-24,-25,-27,-29,-31,-33,-34,-36,-37,-38,-39,-39,-40,-40,-41,-41}', NOW(), NOW());
insert into "ArchtypeAnalysis" ("class", "plotStructure", "createdAt", "updatedAt") values ('Descent', '{41,41,41,41,40,40,39,39,38,38,37,35,34,33,32,30,29,28,27,25,24,22,21,19,18,16,15,13,11,10,8,6,5,3,2,1,0,-2,-3,-3,-4,-5,-6,-6,-7,-7,-8,-8,-8,-8,-8,-8,-8,-8,-7,-7,-7,-7,-6,-6,-6,-6,-6,-6,-5,-5,-6,-6,-7,-7,-7,-8,-9,-10,-10,-11,-12,-14,-15,-17,-18,-20,-21,-23,-24,-26,-27,-29,-30,-32,-33,-34,-35,-36,-37,-38,-39,-40,-40,-40}', NOW(), NOW());
