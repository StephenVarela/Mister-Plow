# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# To Test Associations random seeds

# user1 is a shoveler
my_user = User.new()
my_user.first_name = 'Stephen'
my_user.last_name = 'Varela'
my_user.street_name = 'ABC123Ave'
my_user.password = 'ABCDEF'
my_user.e_wallet = 100
my_shoveler = Shoveler.new()
my_shoveler.user = my_user
my_user.save
my_shoveler.save

#user2 is a home owner
my_user2 = User.new()
my_user2.first_name = 'Daniel'
my_user2.last_name = 'Ang'
my_user2.street_name = 'MyStreetIzCool'
my_user2.e_wallet = 100
my_homeOwner = HomeOwner.new()
my_homeOwner.user = my_user2

user_2_residence = Residence.new()
user_2_residence.home_owner = my_homeOwner
user_2_residence.is_home_address = true

my_user2.save


my_homeOwner.save
user_2_residence.save

my_job = Job.new
my_job.shoveler = my_shoveler
my_job.residence =  user_2_residence
my_job.job_price = 30

my_job.save
