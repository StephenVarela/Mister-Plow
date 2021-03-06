# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# To Test Associations random seeds


Shoveler.destroy_all
User.destroy_all
HomeOwner.destroy_all
Residence.destroy_all
Job.destroy_all

# user1 is a shoveler

#creating 10 users with 10 jobs for shoveling driveway
first_names = ['Stephen', 'John', 'O', 'Thomas', 'James', 'L W', 'M', 'Donald' ,'J']
phone_nums = ['4166948464', '4163227518', '4166998444', '4166998071', '4163040129', '4166994610', '4166989608', '4166993028', '4166989098']
street_names = ['500 Kingston Rd', '315 St Germain Ave', '234 Willow Ave', '26 Goodwood Park Cres', '48 St Clair Ave W', '1974 Queen St E', '42 Balsam Ave', '258 Waverley Rd', '101 Hillingdon Ave']

def create_jobs(fname, street_name,  phone_number)
  my_user = User.new()
  my_user.first_name = fname
  my_user.last_name = 'Smith'
  my_user.street_name = street_name
  my_user.city_name = 'Toronto'
  my_user.postal_code = 'M1M 3F8'
  my_user.country = 'Canada'
  my_user.email = "#{fname}smith@gmail.com"
  my_user.primary_contact_number = '123456789'
  my_user.password = 'ABC123'
  my_user.password_confirmation = 'ABC123'
  my_homeOwner = HomeOwner.new()
  my_homeOwner.user = my_user
  my_residence = Residence.new()
  my_residence.home_owner = my_homeOwner
  my_residence.street_name = street_name
  my_residence.city_name = 'Toronto'
  my_residence.postal_code = 'M1M 3F8'
  my_residence.country = 'Canada'
  my_residence.is_home_address = true

  residence_query = street_name.split

  residence_query.each_with_index do |street, i|
    if i < residence_query.length - 1
      residence_query[i] = residence_query[i] + "+"
    end
  end

  geo_residence = residence_query.join("")

  response = HTTParty.get("https://www.mapquestapi.com/geocoding/v1/address?key=#{ENV['GEOLOC_MQ_KEY']}&inFormat=kvp&outFormat=json&location=#{geo_residence}&thumbMaps=false")

  my_residence.lat = response["results"][0]["locations"][0]["latLng"]["lat"]
  my_residence.lon = response["results"][0]["locations"][0]["latLng"]["lng"]

  my_user.save
  my_homeOwner.save
  my_residence.save

  my_job = Job.new
  my_job.residence =  my_residence
  my_job.price = 30
  my_job.instructions = "shovel the driveway"
  my_job.comments = "This is Mr. Plows first job!"
  my_job.scheduled_time = DateTime.now
  my_job.save

  p my_job.errors.full_messages

  return my_job
end


first_names.each_with_index do |item, index|
  p create_jobs(item, street_names[index], phone_nums[index])
end

# Creating guest accounts with addresses of old and new city hall
guest_user_client = User.new()
guest_user_client.first_name = 'Guest'
guest_user_client.last_name = 'Homeowner'
guest_user_client.street_name = '60 Queen St W'
guest_user_client.city_name = 'Toronto'
guest_user_client.postal_code = 'M5H 2M3'
guest_user_client.country = 'Canada'
guest_user_client.email = 'guest@mrplow.com'
guest_user_client.primary_contact_number = '123-456-7890'
guest_user_client.password = '123456'
guest_user_client.password_confirmation = '123456'
guest_user_client.save

guest_homeowner = HomeOwner.new()
guest_homeowner.user = guest_user_client
guest_homeowner.save

guest_residence = Residence.new()
guest_residence.home_owner = guest_homeowner
guest_residence.street_name = guest_user_client.street_name
guest_residence.city_name = guest_user_client.city_name
guest_residence.postal_code = guest_user_client.postal_code
guest_residence.country = guest_user_client.country
guest_residence.is_home_address = true

guest_residence_query = guest_user_client.street_name.split

guest_residence_query.each_with_index do |street, i|
  if i < guest_residence_query.length - 1
    guest_residence_query[i] = guest_residence_query[i] + "+"
  end
end

guest_geo_residence = guest_residence_query.join("")

response = HTTParty.get("https://www.mapquestapi.com/geocoding/v1/address?key=#{ENV['GEOLOC_MQ_KEY']}&inFormat=kvp&outFormat=json&location=#{guest_geo_residence}&thumbMaps=false")

guest_residence.lat = response["results"][0]["locations"][0]["latLng"]["lat"]
guest_residence.lon = response["results"][0]["locations"][0]["latLng"]["lng"]
p guest_residence
guest_residence.save


guest_user_shoveler = User.new()
guest_user_shoveler.first_name = 'Guest'
guest_user_shoveler.last_name = 'Shoveler'
guest_user_shoveler.street_name = '100 Queen St W'
guest_user_shoveler.city_name = 'Toronto'
guest_user_shoveler.postal_code = 'M5H 2N2'
guest_user_shoveler.country = 'Canada'
guest_user_shoveler.email = 'guestshoveler@mrplow.com'
guest_user_shoveler.primary_contact_number = '123-456-7890'
guest_user_shoveler.is_shoveler = true
guest_user_shoveler.password = '123456'
guest_user_shoveler.password_confirmation = '123456'
guest_user_shoveler.save

guest_shoveler = Shoveler.new()
guest_shoveler.user = guest_user_shoveler
guest_shoveler.save
