puts "seeding users"
p1 = User.create!(username:"GGClarence",password:"abc123",profilePicUrl:"https://nypost.com/wp-content/uploads/sites/2/2021/06/doge-2.jpg?quality=75&strip=all&w=744", email:"ggclarence@yahoo.com",bio:"")
u1 = User.create!(username:"bo",password:"abc123",profilePicUrl:"https://static01.nyt.com/images/2021/05/09/lens/08xp-bo-print/08xp-bo-03-superJumbo.jpg?quality=75&auto=webp", email:"bo@yahoo.com",bio:"Hi, I'm Bo! I belong to the 44th president")
u2 = User.create!(username:"thatjellyfish",password:"abc123",profilePicUrl:"https://images.theconversation.com/files/428539/original/file-20211026-21-1vusf9h.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip", email:"jellyfish@yahoo.com",bio:"")
u3 = User.create!(username:"Maru",password:"abc123",profilePicUrl:"https://assets.rebelmouse.io/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpbWFnZSI6Imh0dHBzOi8vYXNzZXRzLnJibC5tcy80MTQzMzA4L29yaWdpbi5qcGciLCJleHBpcmVzX2F0IjoxNjY4OTM2NzY3fQ.2mG2ObhxGi7RdzPkdzARfIT5r_3gYPF4j2B1gE3eRys/img.jpg?width=980", email:"maru@yahoo.com",bio:"I love boxes")
u4 = User.create!(username:"TheGrumpyCat",password:"abc123",profilePicUrl:"https://media.wired.com/photos/5cdefb92b86e041493d389df/1:1/w_988,h_988,c_limit/Culture-Grumpy-Cat-487386121.jpg", email:"grumpycat@yahoo.com",bio:"<3")
# u1 = User.create!(username:"",profilePicUrl:"", email:"",bio:"")
# u1 = User.create!(username:"",profilePicUrl:"", email:"",bio:"")
# u1 = User.create!(username:"",profilePicUrl:"", email:"",bio:"")
# u1 = User.create!(username:"",profilePicUrl:"", email:"",bio:"")
# u1 = User.create!(username:"",profilePicUrl:"", email:"",bio:"")
# u1 = User.create!(username:"",profilePicUrl:"", email:"",bio:"")

puts "seeding done seeding users"

puts "seeding post"
p1 = Post.create!(image_url:"https://s.abcnews.com/images/General/bo-obama-dog-dies-02-gty-llr-210508_1620502675142_hpMain_16x9_992.jpg", description:"I'm muy fluff!", user_id:1)
puts "done"