FactoryBot.define do
  factory :residence do
    street_name {'King Street West'}
    city_name {'Toronto'}
    postal_code {'LALA LA'}
    country {'Canada'}
    is_home_address {true}
  end
end
