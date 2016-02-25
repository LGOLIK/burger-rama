-- 1. Get the number of burgers per meat type.
SELECT
  meats.name, COUNT(meats.name)
FROM
  orders
LEFT JOIN
  meats
ON
  orders.meat_id = meats.meat_id
GROUP BY
  meats.name;


-- 2. Get the number of different buns per type currently in the works.
SELECT
  buns.name, COUNT(buns.name)
FROM
  orders
LEFT JOIN
  buns
ON
  orders.bun_id = buns.bun_id
GROUP BY
  buns.name;
