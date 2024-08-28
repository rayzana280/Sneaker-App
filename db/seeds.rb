# we need to make the table of the shoes and what it need for each row 
#each shoe will have a id: number, name: string , shoeSize: integer, color:string, price: integer, seller: string, image: string, inCart: boolean
#We are going to add a table for owner for shoes
#table should contain 
puts "seeding"
Shoe.create(name: "Black Cats", size: 6, color: "Black", price: 300, image: "https://www.nicekicks.com/files/2019/11/leadOliviaKimxAirJordan4-11-6-robmata-1-1200x640.jpg", inCart: false)
Shoe.create(name: "Bred Toe", size: 9, color: "Red, Black, White", price: 500, image: "https://m.media-amazon.com/images/I/71Lvsa8HHrL._AC_UY1000_.jpg", inCart: false)
User.create(email: "ray42@gmail.com")
User.create(email: "josecoder@gmail.com")
puts "done seeding"

#see how to add boolean to the object