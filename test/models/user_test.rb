require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  def test_user_factory_is_valid
    user = build(:user)
    assert(user.valid?)
  end

  def test_get_weather_forecast
    weather_event = build(:weather)
    weather_event.save

    my_user = build(:user)
    my_user.save

    expected = weather_event
    actual =  my_user.get_weather_forecast[0]

    assert_equal(expected, actual)
  end

end
