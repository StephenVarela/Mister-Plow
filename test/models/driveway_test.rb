require 'test_helper'

class DrivewayTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  def test_driveway_factory_is_valid


    my_user = create(:user)
    my_home_owner = build(:home_owner)
    my_home_owner.user = my_user
    my_home_owner.save

    my_residence = build(:residence)
    my_residence.home_owner = my_home_owner


    my_driveway = build(:driveway)
    my_driveway.residence = my_residence

    assert(my_driveway.valid?)
  end

  def test_driveway_residence_association
    my_user = create(:user)
    my_home_owner = build(:home_owner)
    my_home_owner.user = my_user
    my_home_owner.save

    my_residence = build(:residence)
    my_residence.home_owner = my_home_owner


    my_driveway = build(:driveway)
    my_driveway.residence = my_residence

    expected = my_residence
    actual = my_driveway.residence

    assert_equal(expected,actual)
  end
end
