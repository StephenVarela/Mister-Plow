require 'test_helper'

class HomeOwnerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
  def test_homeOwner_factory_is_valid
    my_user = create(:user) #must sucessfully save to database and have a valid id
    my_home_owner = build(:home_owner)
    my_home_owner.user = my_user
    assert(my_home_owner.valid?)
  end

  def test_homeOwner_user_association
    my_user = create(:user)
    my_home_owner = build(:home_owner)
    my_home_owner.user = my_user

    expected = my_user
    actual = my_home_owner.user
    assert_equal(expected, actual)
  end

  def test_homeOwner_residences_association
    my_user = create(:user)
    my_home_owner = build(:home_owner)
    my_home_owner.user = my_user
    my_home_owner.save

    my_residence1 = build(:residence)
    my_residence1.home_owner = my_home_owner
    my_residence1.save

    my_residence2 = build(:residence)
    my_residence2.home_owner = my_home_owner
    my_residence2.save


    expected = 2
    actual = my_home_owner.residences.count

    assert_equal(expected, actual)
  end

  def test_homeOwner_will_not_save_without_valid_user_profile
    skip
    my_home_owner = build(:home_owner)
    assert(my_home_owner.valid?)
  end

end
