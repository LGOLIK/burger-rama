-- order 1
-- A medium-rare bison burger on a brioche bun, with muenster cheese, tomatoes, caramelized onions, Dijon mustard.
INSERT INTO orders (meat_id, bun_id, doneness) VALUES (1, 1, 'medium-rare');
INSERT INTO cheeses_orders_join (order_id, cheese_id) VALUES (1, 1);
INSERT INTO toppings_orders_join (order_id, topping_id) VALUES (1, 1);
INSERT INTO toppings_orders_join (order_id, topping_id) VALUES (1, 2);
INSERT INTO toppings_orders_join (order_id, topping_id) VALUES (1, 11);

-- order 2
-- A well-done 28-day dry-aged ground brisket burger on a whole-wheat bun, with swiss and blue cheese, lettuce, tomato, pickles.
INSERT INTO orders (meat_id, bun_id, doneness) VALUES (2, 2, 'well-done');
INSERT INTO cheeses_orders_join (order_id, cheese_id) VALUES (2, 2);
INSERT INTO cheeses_orders_join (order_id, cheese_id) VALUES (2, 3);
INSERT INTO toppings_orders_join (order_id, topping_id) VALUES (2, 1);
INSERT INTO toppings_orders_join (order_id, topping_id) VALUES (2, 6);
INSERT INTO toppings_orders_join (order_id, topping_id) VALUES (2, 7);

-- order 3
-- An medium angus burger on a white sesame bun, with american cheese, bacon, maple syrup, fried egg, grilled onions, ketchup.
INSERT INTO orders (meat_id, bun_id, doneness) VALUES (3, 3, 'medium');
INSERT INTO cheeses_orders_join (order_id, cheese_id) VALUES (3, 4);
INSERT INTO toppings_orders_join (order_id, topping_id) VALUES (3, 4);
INSERT INTO toppings_orders_join (order_id, topping_id) VALUES (3, 5);
INSERT INTO toppings_orders_join (order_id, topping_id) VALUES (3, 3);
INSERT INTO toppings_orders_join (order_id, topping_id) VALUES (3, 12);

-- order 4
-- A rare elk burger on a brioche bun, with swiss and cheddar cheese, tomatoes, red onions, Dijon mustard.
INSERT INTO orders (meat_id, bun_id, doneness) VALUES (4, 1, 'rare');
INSERT INTO cheeses_orders_join (order_id, cheese_id) VALUES (4, 2);
INSERT INTO cheeses_orders_join (order_id, cheese_id) VALUES (4, 5);
INSERT INTO toppings_orders_join (order_id, topping_id) VALUES (4, 1);
INSERT INTO toppings_orders_join (order_id, topping_id) VALUES (4, 3);
INSERT INTO toppings_orders_join (order_id, topping_id) VALUES (4, 11);

-- order 5
-- A well-done 28-day dry-aged ground brisket burger on a plain white bun, with cheddar cheese, lettuce, pickles.
INSERT INTO orders (meat_id, bun_id, doneness) VALUES (2, 3, 'well-done');
INSERT INTO cheeses_orders_join (order_id, cheese_id) VALUES (5, 5);
INSERT INTO toppings_orders_join (order_id, topping_id) VALUES (5, 6);
INSERT INTO toppings_orders_join (order_id, topping_id) VALUES (5, 7);

-- order 6
-- An rare angus burger on a white sesame bun, with american cheese, bacon, hash browns, fried egg, grilled onions, ketchup.
INSERT INTO orders (meat_id, bun_id, doneness) VALUES (3, 4, 'rare');
INSERT INTO cheeses_orders_join (order_id, cheese_id) VALUES (6, 4);
INSERT INTO toppings_orders_join (order_id, topping_id) VALUES (6, 4);
INSERT INTO toppings_orders_join (order_id, topping_id) VALUES (6, 5);
INSERT INTO toppings_orders_join (order_id, topping_id) VALUES (6, 3);
INSERT INTO toppings_orders_join (order_id, topping_id) VALUES (6, 12);
