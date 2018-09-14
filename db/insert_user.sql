insert into users (username, password, profile_pic)
values ($1,$2,'https://robohash.org/random.png' )
returning *;