FactoryBot.define do
  factory :user do
    first_name {'Stephen'}
    last_name {'Varela'}
    # street_name {'Bitmaker Avenue'}
    # city_name {'Toronto'}
    # postal_code {'BLA AHA'}
    # country {'Canada'}
    email {'snowmanz@gmail.com'}
    # primary_contact_number {'123 456 789'}
    e_wallet {500}
  end
end
