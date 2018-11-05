require 'test_helper'

class ResidenceTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end

  def test_residence_factory_is_valid

    my_user = create(:user)
    my_home_owner = build(:home_owner)
    my_home_owner.user = my_user
    my_home_owner.save

    my_residence = build(:residence)
    my_residence.home_owner = my_home_owner
    assert(my_residence.valid?)
  end

end
