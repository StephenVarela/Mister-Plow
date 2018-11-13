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
phone_nums = ['4166948464', '4163227518', '4166998444', '4166998071', '4163040129',
              '4166994610', '4166989608', '4166993028', '4166989098']
street_names = ['500 Kingston Rd',
              '315 St Germain Ave',
              '234 Willow Ave',
              '26 Goodwood Park Cres',
              '48 St Clair Ave W',
              '1974 Queen St E',
              '42 Balsam Ave',
              '258 Waverley Rd',
              '101 Hillingdon Ave']



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
