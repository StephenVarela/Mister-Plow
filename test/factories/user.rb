FactoryBot.define do
  factory :user do
    first_name {'Stephen'}
    last_name {'Varela'}
    street_name {'Bitmaker Avenue'}
    city_name {'Toronto'}
    postal_code {'BLA AHA'}
    country {'Canada'}
    password {'abc123'}
    password_confirmation {'abc123'}
    email {'snowmanz@gmail.com'}
    primary_contact_number {'123 456 789'}
  end
end
